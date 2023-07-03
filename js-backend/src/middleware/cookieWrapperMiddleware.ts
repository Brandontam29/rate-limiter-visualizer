import { NextFunction, Request, Response } from "express";

import generateSessionCookie from "../utils/generateCookie/generateSessionCookie";

const DAY_1 = 24 * 60 * 60 * 1000;

const cookieWrapperMiddleware = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const reqCookie = req.cookies?.sessionCookie as string | undefined;

    if (!reqCookie) {
      const sessionCookie = generateSessionCookie();
      res.cookie("sessionCookie", sessionCookie, {
        maxAge: DAY_1,
        httpOnly: true,
        sameSite: "strict",
        path: "/",
      });

      req.sessionCookie = sessionCookie;
      return next();
    }

    req.sessionCookie = reqCookie;
    next();
  };
};

export default cookieWrapperMiddleware;
