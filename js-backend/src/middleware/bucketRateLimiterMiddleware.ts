import { NextFunction, Request, Response } from "express";

import client from "../singleton/redisClient";

const MAX_REQUESTS_BUCKET = 5;

const bucketRateLimiterMiddleware = async () => {
  const redisClient = await client;

  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log("bucketRateLimiterMiddleware");
    // const { sessionCookie } = req;

    // const rateLimiterState = await redisClient.lRange(sessionCookie, 0, -1);
    // res.rateLimiterState = rateLimiterState;
    // if (rateLimiterState.length >= MAX_REQUESTS_BUCKET) {
    //   return res.jsonError("RATE_LIMIT_EXCEEDED");
    // }

    // await redisClient.lPush(sessionCookie, JSON.stringify(req.body));

    // if (rateLimiterState.length > 0) {
    //   redisClient.subscribe(sessionCookie, (e) => {
    //     console.log(e);
    //   });

    //   return next();
    // }

    next();
  };
};

export default bucketRateLimiterMiddleware;
