import { createClient } from "redis";

const connectRedisClient = async () => {
  const client = createClient();

  await client.connect();

  client.on("error", (err) => console.log("Redis Client Error", err));

  return client;
};

const client = connectRedisClient();

export default client;
