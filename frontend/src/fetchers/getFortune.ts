import ENDPOINT from "@/fetchers/endpoint";
import { UserType } from "@/sections/UploadUser";
import { RateLimiterType } from "@/state/controls";

export type FortuneProps = {
  rateLimiter: RateLimiterType;
  data: UserType;
};

const getFortune = async ({ rateLimiter, data }: FortuneProps) => {
  const response = await fetch(`${ENDPOINT}/${rateLimiter}/fortune/quote`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const json = await response.json();

  return json;
};

export default getFortune;
