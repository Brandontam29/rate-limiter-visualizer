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
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
      credentials: "include",
    });

    console.log("response", response);
    // setCookieMiddleware(response);
    const setCookieHeader = response.headers.get("Set-Cookie");
    if (setCookieHeader) {
      // Parse the 'Set-Cookie' header to extract the cookie value
      const cookieValue = setCookieHeader.split(";")[0];

      // Set the extracted cookie value in your frontend
      document.cookie = cookieValue;
    }

    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err);
  }
};

export default postEcho;
