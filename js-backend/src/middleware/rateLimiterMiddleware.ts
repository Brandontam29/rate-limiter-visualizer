import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";

import generateSessionCookie from "../utils/generateCookie/generateSessionCookie";

const MAX_REQUESTS_PER_MINUTE = 1;
const MAX_REQUESTS_DENOMINATOR = 5 * 1000;

const rateLimiterMiddleware = async () => {
  const redisClient = createClient();
  redisClient.on("error", (err) => console.log("Redis Client Error", err));
  await redisClient.connect();

  const isRateLimited = async (sessionCookie: string, requestTime: number) => {
    const redisRequestTime = await redisClient.lIndex(
      sessionCookie,
      -MAX_REQUESTS_PER_MINUTE
    );
    const arr = await redisClient.lRange(sessionCookie, -5, -1);
    console.log("arr", arr);

    if (!redisRequestTime) return false;

    console.log("requestTime", requestTime);
    console.log("redisRequestTime", parseInt(redisRequestTime));
    console.log("different", requestTime - parseInt(redisRequestTime));
    return MAX_REQUESTS_DENOMINATOR > requestTime - parseInt(redisRequestTime);
  };

  // START OF A REQUEST LIFE CYCLE
  return async (req: Request, res: Response, next: NextFunction) => {
    const dateNow = Date.now();

    const goNext = (sessionCookie: string) => {
      redisClient.rPush(sessionCookie, `${dateNow}`);
      next();
    };

    const {
      cookies: { sessionCookie },
    } = req as {
      cookies: { sessionCookie?: string };
    };
    console.log("sessionCookie", sessionCookie);

    if (!sessionCookie) {
      const cookie = generateSessionCookie();
      setResponseCookie(res, cookie);
      return goNext(cookie);
    }

    const rateLimited = await isRateLimited(sessionCookie, dateNow);
    console.log("rateLimited", rateLimited);
    if (rateLimited) return res.status(429).send("Too Many Requests");

    goNext(sessionCookie);
  };
};

const setResponseCookie = (res: Response, sessionCookie: string) => {
  res.cookie("sessionCookie", sessionCookie, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
};

export default rateLimiterMiddleware;
