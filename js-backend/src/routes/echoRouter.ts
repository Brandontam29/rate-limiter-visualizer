import express from "express";

import { UserSchema } from "../schema/User";
import textToGhostFont from "../utils/textToGhostFont";

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

echoRouter.post("/", (req, res) => {
  const { body } = req;
  res.json({
    ...body,
    rateLimiterState: res.rateLimiterState,
  });
});

echoRouter.post("/ascii", (req, res) => {
  const {
    body: { firstName, lastName },
  } = req;

  res.json({
    text: textToGhostFont(`${firstName} ${lastName}`),
    rateLimiterState: res.rateLimiterState,
  });
});

export default echoRouter;
