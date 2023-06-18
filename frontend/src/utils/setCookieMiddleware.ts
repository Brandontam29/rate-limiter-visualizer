import { setCookieString } from "@/utils/cookieUtils";

const setCookieMiddleware = (response: Response) => {
  console.log("Response headers:", response.headers);
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (!setCookieHeader) return;

  setCookieString(setCookieHeader);
};

// const extractCookiesFromString = (cookieString: string) => {
//   const cookieData = {};

//   const cookies = cookieString.split(";");

//   cookies.forEach((cookie) => {
//     const trimmedCookie = cookie.trim();
//     const [name, value] = trimmedCookie.split("=");
//     cookieData[name] = value;
//   });

//   return cookieData;
// };

export default setCookieMiddleware;
