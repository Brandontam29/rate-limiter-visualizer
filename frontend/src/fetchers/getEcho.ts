import ENDPOINT from "@/fetchers/endpoint";
import { UserType } from "@/sections/UploadUser";

const getEcho = async (data: UserType) => {
  const response = await fetch(`${ENDPOINT}/echo`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const json = await response.json();

  return json;
};

export default getEcho;
