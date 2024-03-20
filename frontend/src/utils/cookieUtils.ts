// const isBrowser = typeof window !== "undefined";

// export const setCookieString = (cookieString: string) => {
//   document.cookie = cookieString;
// };

// export const setCookie = ({
//   name,
//   value,
//   daysToLive,
// }: {
//   name: string;
//   value: string | null;
//   daysToLive: number | null;
// }) => {
//   const expires = daysToExpires(daysToLive);

//   document.cookie = `${name}=${value}; expires=${expires}; path=/`;
// };

// export const getCookie = (name: string) => {
//   if (!isBrowser) return null;

//   const cDecoded = decodeURIComponent(document.cookie);
//   const cArray = cDecoded.split("; ");

//   const result =
//     cArray.find((cookie) => cookie.split("=")[0] === name)?.split("=")[1] ||
//     null;

//   return result;
// };

// export const daysToExpires = (daysToLive: number | null) => {
//   if (daysToLive === null) return null;

//   const daysToMilliseconds = (days: number) => {
//     return days * 24 * 60 * 60 * 1000;
//   };

//   const date = new Date();
//   date.setTime(date.getTime() + daysToMilliseconds(daysToLive));

//   return date.toUTCString();
// };
