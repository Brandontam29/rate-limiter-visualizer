import express from "express";

import { UserSchema } from "../schema/User";

const echoRouter = express.Router();

echoRouter.use((req, res, next) => {
  const { body } = req;

  try {
    UserSchema.parse(body);
  } catch (err) {
    console.error(err);

    res.jsonError("BAD_REQUEST");
  }
  next();
});

echoRouter.get("/", (req, res) => {
  const { body } = req;
  res.json({
    ...body,
    rateLimiterState: res.rateLimiterState,
  });
});

echoRouter.get("/ascii", (req, res) => {
  const { body } = req;
  res.json({
    ...body,
    rateLimiterState: res.rateLimiterState,
  });
});

export default echoRouter;
