import { Express } from "express";

import { getErrorInfo } from "../errors";
import { ErrorTypes } from "../errors";
import client from "../singleton/redisClient";

type JsonObject = {
  [key: string]: string | number | (string | number)[] | JsonObject;
};

declare global {
  namespace Express {
    interface Request {
      sessionCookie: string;
    }

    interface Response {
      isBucketRateLimiter: boolean;
      rateLimiterState?: string[];
      jsonWithRateLimiterState: (json: JsonObject) => void;
      jsonError: (errorType: ErrorTypes) => void;
    }
  }
}

const responseWrapper = async (app: Express) => {
  const redisClient = await client;
  app.response.isBucketRateLimiter = false;

  app.response.jsonWithRateLimiterState = function (json) {
    if (this.isBucketRateLimiter) {
      redisClient.rPop(app.request.sessionCookie);
    }

    return this.json({
      ...json,
      rateLimiterState: this?.rateLimiterState || null,
    });
  };

  app.response.jsonError = function (errorType) {
    const { status, message } = getErrorInfo(errorType);

    return app.response.status(status).jsonWithRateLimiterState({ message });
  };
};

export default responseWrapper;
