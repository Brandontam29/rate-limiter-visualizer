import express from "express";

import { UserSchema } from "../schema/User";
import generateFortune from "../utils/generateFortune";

const fortuneRouter = express.Router();

fortuneRouter.use((req, res, next) => {
  console.log("fortuneRouter");
  const { body } = req;

  try {
    UserSchema.parse(body);
  } catch (err) {
    console.error(err);

    res.jsonError("BAD_REQUEST");
  }
  next();
});

fortuneRouter.post("/quote", (req, res) => {
  console.log("fortuneRouter quote");
  const { body } = req;

  const fortune = generateFortune(body);

  res.jsonWithRateLimiterState({
    fortune: fortune,
  });
});

fortuneRouter.post("/predict", (req, res) => {
  console.log("fortuneRouter predict");

  const { body } = req;

  const fortune = generateFortune(body);
  res.jsonWithRateLimiterState({
    fortune: fortune,
  });
});

export default fortuneRouter;
