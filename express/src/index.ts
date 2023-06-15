import cors from "cors";
import express from "express";
import { createClient } from "redis";

const main = async () => {
  // Create Express app
  const app = express();
  app.use(express.json());

  // Create Redis client
  const redisClient = createClient();

  redisClient.on("connect", () => {
    console.log("Connected to Redis server");
  });

  redisClient.on("error", (err) => {
    console.error("Error connecting to Redis:", err);
  });

  await redisClient.connect();

  await redisClient.set("key", "value");

  const value = await redisClient.get("key");

  console.log(value);

  app.use(cors());

  app.use((req, res, next) => {
    console.log("Request received:", req.method, req.url, req.cookies);
    next();
  });

  app.get("/", async (req, res) => {
    res.json({ message: "Hello World" });
  });

  app.get("/hello-world", async (req, res) => {
    res.send("Hello World");
  });

  // Example route
  // app.get("/example", (req, res) => {
  //   // Perform Redis operations
  //   redisClient.set("exampleKey", "exampleValue", (err, reply) => {
  //     if (err) {
  //       console.error("Redis error:", err);
  //       res.status(500).json({ error: "Internal Server Error" });
  //       return;
  //     }
  //     console.log("Redis reply:", reply);
  //     res.json({ message: "Example route" });
  //   });
  // });

  // Start the server
  const port = 3000; // Specify the port number you want to use
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
};

main();
