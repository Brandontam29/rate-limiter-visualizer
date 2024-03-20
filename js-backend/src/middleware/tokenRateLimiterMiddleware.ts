import { NextFunction, Request, Response } from "express";

import client from "../singleton/redisClient";

const MAX_REQUESTS_PER_MINUTE = 5;
const MAX_REQUESTS_DENOMINATOR = 10 * 1000;

const isRateLimited = async (sessionCookie: string, requestTime: number) => {
  const redisClient = await client;
  const redisRequestTime = await redisClient.lIndex(
    sessionCookie,
    -MAX_REQUESTS_PER_MINUTE
  );

  if (!redisRequestTime) return false;

  return MAX_REQUESTS_DENOMINATOR > requestTime - parseInt(redisRequestTime);
};

const tokenRateLimiterMiddleware = async () => {
  const redisClient = await client;
  return async (req: Request, res: Response, next: NextFunction) => {
    const dateNow = Date.now();
    const { sessionCookie } = req;

    const rateLimited = await isRateLimited(sessionCookie, dateNow);

    if (rateLimited) {
      const rateLimiterState = await redisClient.lRange(
        sessionCookie,
        -MAX_REQUESTS_PER_MINUTE,
        -1
      );
      res.rateLimiterState = rateLimiterState;

      return res.jsonError("RATE_LIMIT_EXCEEDED");
    }

    redisClient.rPush(sessionCookie, `${dateNow}`);
    next();
  };
};

export default tokenRateLimiterMiddleware;
