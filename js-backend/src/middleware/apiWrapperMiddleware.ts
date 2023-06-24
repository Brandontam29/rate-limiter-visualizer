import { NextFunction, Request, Response } from "express";

import { getErrorInfo } from "../errors";

const apiWrapperMiddleware = () => {
  return async (_: Request, res: Response, next: NextFunction) => {
    res.jsonWithRateLimiterState = (json) => {
      res.json({ ...json, rateLimiterState: res.rateLimiterState });
    };

    res.jsonError = (errorType) => {
      const { status, message } = getErrorInfo(errorType);

      res.status(status).jsonWithRateLimiterState({ message });
    };

    next();
  };
};

export default apiWrapperMiddleware;
