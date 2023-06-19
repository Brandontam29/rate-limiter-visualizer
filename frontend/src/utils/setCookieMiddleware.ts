import { setCookieString } from "@/utils/cookieUtils";

const setCookieMiddleware = async (response: Response) => {
  if (navigator.cookieEnabled) {
    // Cookies are enabled
    console.log("Cookies are enabled in this browser");
    // You can proceed with setting cookies here
  } else {
    // Cookies are disabled
    console.log("Cookies are disabled in this browser");
    // You can provide a message or take alternative actions for users with disabled cookies
  }

  console.log(response.headers.keys());

  const hasSetCookieHeader = response.headers.has("Set-Cookie");
  if (!hasSetCookieHeader) return;

  const setCookieHeader = response.headers.get("Set-Cookie");
  if (!setCookieHeader) return;

  setCookieString(setCookieHeader);
};

export default setCookieMiddleware;
