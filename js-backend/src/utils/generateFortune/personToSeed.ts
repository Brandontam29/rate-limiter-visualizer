type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const personToSeed = (person: Person): number => {
  const { firstName, lastName, age } = person;
  const seed = stringToSeed(firstName) + stringToSeed(lastName) + age;
  return seed;
};

const stringToSeed = (str: string): number => {
  let numericValue = 0;
  for (let i = 0; i < str.length; i++) {
    numericValue += str.charCodeAt(i);
  }
  return numericValue;
};
