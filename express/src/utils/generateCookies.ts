import { nanoid } from "nanoid";

const generateSessionCookie = () => {
  const sessionCookie = nanoid(32);

  return sessionCookie;
};

const generateCookies = () => {
  return {
    sessionCookie: generateSessionCookie(),
  };
};

export default generateCookies;
