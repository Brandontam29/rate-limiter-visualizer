import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";

import generateSessionCookie from "../utils/generateCookie/generateSessionCookie";

const rateLimiterMiddleware = () => {
  const redisClient = createClient();

  redisClient.on("connect", () => {
    console.log("Connected to Redis server");
  });

  redisClient.on("error", (err) => {
    console.error("Error connecting to Redis:", err);
  });

  return (req: Request, res: Response, next: NextFunction) => {
    const { cookies, body } = req;
    console.log("cookies", cookies);
    console.log("body", body);

    if (!cookies) {
      res.cookie("sessionCookie", generateSessionCookie(), {
        expires: new Date(new Date().getTime() + 100 * 1000),
        httpOnly: true,
        sameSite: "strict",
        path: "/",
      });
    }
    next();
  };
};

export default rateLimiterMiddleware;
