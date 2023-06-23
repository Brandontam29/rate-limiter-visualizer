import { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Response {
      jsonWithRateLimiterState: (data: any) => void;
    }
  }
}

const apiWrapperMiddleware = () => {
  return async (_: Request, res: Response, next: NextFunction) => {
    res.jsonWithRateLimiterState = (json) => {
      res.json({ ...json, rateLimiterState: res.rateLimiterState });
    };

    next();
  };
};

export default apiWrapperMiddleware;
