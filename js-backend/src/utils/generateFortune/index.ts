import { UserType } from "../../schema/User";
import seedRandom from "./seedRandom";

const generateFortune = (person: UserType) => {
  const { firstName, lastName, age } = person;

  // Generate a random number based on the person's properties
  const seed = firstName.length + lastName.length + age;
  const randomNumber = seedRandom(seed);

  // Generate the index based on the random number
  const index = Math.floor(randomNumber * FORTUNES.length);

  // Generate the final fortune message
  const fortuneMessage = `Hello, ${firstName} ${lastName}! Your fortune for today is: ${FORTUNES[index]}`;

  return fortuneMessage;
};

export default generateFortune;

const FORTUNES = [
  "You will find great success in your endeavors.",
  "A new opportunity will arise soon.",
  "Be patient, good things are coming your way.",
  "Your creativity will lead to unexpected rewards.",
  "Take risks and you will be rewarded.",
  "Hard work will pay off in the long run.",
];
