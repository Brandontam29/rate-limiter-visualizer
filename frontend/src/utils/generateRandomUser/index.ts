import { UserType } from "@/sections/UploadUser";

import { FIRST_NAMES } from "./firstNames";
import { LAST_NAMES } from "./lastNames";

const generateRandomUser = (): UserType => {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  const age = Math.floor(Math.random() * 100 + 1);

  return {
    firstName,
    lastName,
    age,
  };
};

export default generateRandomUser;
