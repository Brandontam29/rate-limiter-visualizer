import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";

import generateSessionCookie from "../utils/generateCookie/generateSessionCookie";

const rateLimiterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const redisClient = createClient();

  redisClient.on("connect", () => {
    console.log("Connected to Redis server");
  });

  redisClient.on("error", (err) => {
    console.error("Error connecting to Redis:", err);
  });

  const { cookies } = req;

  if (!cookies) {
    res.setHeader(
      "Set-Cookie",
      `sessionCookie=hella; Max-Age=10; Path=/; HttpOnly=true;`
    );

    res.cookie("sessionCookie", generateSessionCookie(), {
      maxAge: 900000,
      path: "/",
      httpOnly: true,
    });
  }

  next();
};

export default rateLimiterMiddleware;
