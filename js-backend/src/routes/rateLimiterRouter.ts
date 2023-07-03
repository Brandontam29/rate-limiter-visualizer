import express from "express";

import bucketRateLimiterMiddleware from "../middleware/bucketRateLimiterMiddleware";
import tokenRateLimiterMiddleware from "../middleware/tokenRateLimiterMiddleware";

const rateLimiterRouter = express.Router();

const customFunction = async () => {
  return (
    rateLimiterRouter.use("/api/token", await tokenRateLimiterMiddleware()),
    rateLimiterRouter.use("/api/bucket", await bucketRateLimiterMiddleware())
  );
};

export default customFunction;
