const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

// Set a value in Redis
client.set('key', 'value', (err, reply) => {
  console.log(reply);
});

// Get a value from Redis
client.get('key', (err, reply) => {
  console.log(reply);
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// import express from "express";
// import jwt from "jsonwebtoken";
// import redis from "redis";

// const REDIS_URL = "localhost:6379";

// const SECRET_KEY = "your_secret_key";

// console.log(redis);

// const client = redis.createClient({ url: REDIS_URL }); // creates a Redis client instance

// const app = express();

// const PORT = 3000;

// const attachTokenMiddleware = (
//   req,
//   res: { locals: { token: string } },
//   next: () => void
// ) => {
//   // Create the JWT payload
//   const payload = {
//     userId: "user_id", // Replace with the actual user ID or relevant information
//   };

//   // Generate the JWT
//   const token = jwt.sign(payload, SECRET_KEY);

//   // Attach the token to the response
//   res.locals.token = token;

//   // Call the next middleware
//   next();
// };

// app.use(attachTokenMiddleware);

// app.get("/", (_req, res) => {
//   // Access the token from res.locals
//   const token = res.locals.token;

//   // Send the token as a JSON response
//   res.json({ token });
// });

// app.get("/api/postUser", (req, res) => {
//   // const { token } = req.query;
//   console.log("/api/postUser", req.body);
//   // Verify the token
//   // jwt.verify(token, SECRET_KEY, (err, decoded) => {
//   //   if (err) {
//   //     // If there's an error, send a 403 response
//   //     res.status(403).json({ error: "Invalid token" });
//   //   } else {
//   //     // Otherwise, send the decoded token
//   //     res.json({ decoded });
//   //   }
//   // });

//   // client.set(key, value, (err, reply) => {
//   //   if (err) {
//   //     console.error("Error storing data in Redis:", err);
//   //     next();
//   //   } else {
//   //     console.log("Data stored in Redis:", reply);
//   //     next();
//   //   }
//   // });
// });

// app.listen(PORT, () => {
//   console.log(`Restart express server`);
//   console.log(`http://localhost:${PORT}`);
// });
