import ENDPOINT from "@/fetchers/endpoint";
import { UserType } from "@/sections/UploadUser";

const postUser = async (user: UserType) => {
  try {
    const response = await fetch(`${ENDPOINT}/echo`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default postUser;
