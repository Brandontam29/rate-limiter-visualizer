import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";

import generateSessionCookie from "../utils/generateCookie/generateSessionCookie";

const redisClient = createClient();

const rateLimiterMiddleware = () => {
  redisClient.on("connect", () => {
    console.log("Connected to Redis server");
  });

  redisClient.on("error", (err) => {
    console.error("Error connecting to Redis:", err);
  });

  return async (req: Request, res: Response, next: NextFunction) => {
    const { cookies } = req as { cookies: { sessionCookie?: string } };
    console.log("cookies", cookies);

    let sessionCookie = cookies?.sessionCookie || generateSessionCookie();

    const currentDate = Date.now();

    if (Object.keys(cookies).length === 0) {
      res.cookie("sessionCookie", sessionCookie, {
        expires: new Date(new Date().getTime() + 100 * 1000),
        httpOnly: true,
        sameSite: "strict",
        path: "/",
      });
    }

    redisClient.rPush(sessionCookie, currentDate.toString());

    const arr = await redisClient.lRange(sessionCookie, -5, 1);
    console.log(arr);
    next();
  };
};

export default rateLimiterMiddleware;
