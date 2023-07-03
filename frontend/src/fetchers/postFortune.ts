import ENDPOINT from "@/fetchers/endpoint";
import { UserType } from "@/sections/UploadUser";

type FortuneProps = {
  rateLimiter: RateLimiterType;
  data: UserType;
};

const postFortune = async ({ rateLimiter, data }: FortuneProps) => {
  try {
    const response = await fetch(`${ENDPOINT}/${rateLimiter}/fortune/quote`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err);
  }
};

export default postFortune;
