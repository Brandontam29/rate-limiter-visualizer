import cors from "cors";
import express from "express";

import rateLimiterMiddleware from "./middleware/rateLimiterMiddleware";

var cookieParser = require("cookie-parser");

const main = async () => {
  // Create Express app
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(rateLimiterMiddleware);

  app.post("/echo", (req, res) => {
    const { body } = req;
    res.json(body);
  });

  const port = 3000; // Specify the port number you want to use
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
};

main();
