import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";

const rateLimiterMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  // Create Redis client
  const redisClient = createClient();

  redisClient.on("connect", () => {
    console.log("Connected to Redis server");
  });

  redisClient.on("error", (err) => {
    console.error("Error connecting to Redis:", err);
  });

  const { cookies } = req;

  console.log("Cookies:", cookies);

  next();
};

export default rateLimiterMiddleware;
