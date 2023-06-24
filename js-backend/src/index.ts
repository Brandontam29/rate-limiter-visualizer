import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import apiWrapperMiddleware from "./middleware/apiWrapperMiddleware";
import rateLimiterMiddleware from "./middleware/rateLimiterMiddleware";
import echoRouter from "./routes/echoRouter";
import fortuneRouter from "./routes/fortuneRouter";

const main = async () => {
  const app = express();

  // Library Middlewares
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(cookieParser());

  // Custom Middlewares
  app.use(apiWrapperMiddleware());
  app.use(await rateLimiterMiddleware());

  // Routes
  app.use("/api/fortune", fortuneRouter);
  app.use("/api/echo", echoRouter);

  // Start Server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
};

main();
