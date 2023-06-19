import ENDPOINT from "@/fetchers/endpoint";
import { UserType } from "@/sections/UploadUser";

const postEcho = async (data: UserType) => {
  try {
    const response = await fetch(`${ENDPOINT}/echo`, {
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

export default postEcho;
