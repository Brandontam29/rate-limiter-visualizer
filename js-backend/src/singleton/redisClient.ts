import { createClient } from "redis";

const connectRedisClient = async () => {
  try {
    const client = createClient();

    await client.connect();

    client.on("error", (err) => console.error("Redis Client Error", err));

    return client;
  } catch (e) {
    throw new Error(e);
  }
};

const client = connectRedisClient();

export default client;
