import ENDPOINT from "@/fetchers/endpoint";
import { UserType } from "@/sections/UploadUser";
import setCookieMiddleware from "@/utils/setCookieMiddleware";

type PostEchoProps = {
  data: UserType;
  sessionCookie?: string | null;
};

const postEcho = async ({ data, sessionCookie }: PostEchoProps) => {
  const headers: Record<string, string> = sessionCookie
    ? { "Content-Type": "application/json", Cookie: sessionCookie }
    : { "Content-Type": "application/json" };

  try {
    const response = await fetch(`${ENDPOINT}/echo`, {
      method: "post",
      body: JSON.stringify(data),
      headers: headers,
    });

    console.log("response", response);
    setCookieMiddleware(response);
    const json = await response.json();

    console.log("json", json);
    return json;
  } catch (err) {
    console.error(err);
  }
};

export default postEcho;
