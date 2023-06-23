import cors from "cors";
import express from "express";

import rateLimiterMiddleware from "./middleware/rateLimiterMiddleware";
import { UserSchema } from "./schema/User";
import generateFortune from "./utils/generateFortune";

var cookieParser = require("cookie-parser");

const main = async () => {
  // Create Express app
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(cookieParser());

  // await redisClient.set("key", "value");
  // const value = await redisClient.get("key");

  // const loveValue = await redisClient.lRange("love", 0, 10);

  // console.log("value", value);
  // console.log("loveValue", loveValue);

  app.use(await rateLimiterMiddleware());

  app.post("/echo", (req, res) => {
    const { body } = req;
    res.json(body);
  });

  app.post("/fortune", (req, res) => {
    const { body } = req;

    try {
      UserSchema.parse(body);

      const fortune = generateFortune(body);
      res.json(fortune);
    } catch (err) {
      console.error(err);

      res.status(400).json({
        error: "Invalid request body",
      });
    }
  });

  const port = 3000; // Specify the port number you want to use
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
};

main();
