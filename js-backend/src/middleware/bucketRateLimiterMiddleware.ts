import { NextFunction, Request, Response } from "express";

import client from "../singleton/redisClient";

const MAX_REQUESTS_BUCKET = 5;

const isRateLimited = async (sessionCookie: string) => {
  const redisClient = await client;
  const requestStack = await redisClient.lRange(sessionCookie, 0, -1);

  if (!requestStack) return false;

  console.log(requestStack);
  // console.log(JSON.parse(requestStack));

  // return requestStack.length < MAX_REQUESTS_BUCKET;
};

const bucketRateLimiterMiddleware = async () => {
  const redisClient = await client;
  return async (req: Request, res: Response, next: NextFunction) => {
    const { sessionCookie } = req;

    await isRateLimited(sessionCookie);

    next();
  };
};

export default bucketRateLimiterMiddleware;

// todo without pub / sub

/**
 * Check if the last 5 seconds has 5 requests. Reject if needed.
 *
 * Calculate delay needed for a specific request.
 * Space requests with 1 second. If there are no other requests, process immediately.
 *
 * Store the request with a timestamp with Redis
 *
 * do setTimeout next() on the request
 *
 *
 */
