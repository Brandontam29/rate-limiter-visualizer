import { ErrorTypes } from "./errors";

type JsonObject = {
  [key: string]: string | number | (string | number)[] | JsonObject;
};

declare global {
  namespace Express {
    interface Response {
      rateLimiterState: string[];
      jsonWithRateLimiterState: (json: JsonObject) => void;
      jsonError: (errorType: ErrorTypes) => void;
    }
  }
}

export {};
