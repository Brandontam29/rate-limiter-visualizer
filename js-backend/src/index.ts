import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import cookieWrapperMiddleware from "./middleware/cookieWrapperMiddleware";
import echoRouter from "./routes/echoRouter";
import fortuneRouter from "./routes/fortuneRouter";
import rateLimiterRouter from "./routes/rateLimiterRouter";
import responseWrapper from "./wrappers/responseWrapper";
import redisClient from "./singleton/redisClient";

const app = express();

// Library Middlewares
const main = async () => {
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(cookieParser());

  // Wrappers
  await responseWrapper(app);

  // Custom Middlewares
  app.use(cookieWrapperMiddleware());
  app.use((req: Request, res: Response, next: NextFunction) => {
    
    next();
  };);


  
  app.use(await rateLimiterRouter());

  // Routes
  app.use("/api/*/fortune", fortuneRouter);
  app.use("/api/*/echo", echoRouter);

  // Server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
};

main();
