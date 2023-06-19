import daysToExpires from "./daysToExpires";
import generateSessionCookie from "./generateSessionCookie";

const generateCookie = (): string => {
  const sessionCookie = generateSessionCookie();
  const expires = daysToExpires(1);

  return `sessionCookie=${sessionCookie}; Path=/; expires=${expires}`;
};

export default generateCookie;
