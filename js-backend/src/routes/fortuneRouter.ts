import express from "express";

import { UserSchema } from "../schema/User";
import generateFortune from "../utils/generateFortune";

const fortuneRouter = express.Router();

fortuneRouter.use((req, res, next) => {
  const { body } = req;

  try {
    UserSchema.parse(body);
  } catch (err) {
    console.error(err);

    res.jsonError("BAD_REQUEST");
  }
  next();
});

fortuneRouter.get("/quote", (req, res) => {
  const { body } = req;

  const fortune = generateFortune(body);
  res.jsonWithRateLimiterState({
    fortune: fortune,
  });
});

fortuneRouter.get("/predict", (req, res) => {
  const { body } = req;

  const fortune = generateFortune(body);
  res.jsonWithRateLimiterState({
    fortune: fortune,
  });
});

export default fortuneRouter;
