import { nanoid } from "nanoid";

const generateSessionCookie = () => nanoid(32);

export default generateSessionCookie;
