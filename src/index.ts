// https://typescriptbook.jp/reference/values-types-variables/discriminated-union#%E5%88%A4%E5%88%A5%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%A6%E3%83%8B%E3%82%AA%E3%83%B3%E5%9E%8B%E3%81%AE%E7%B5%9E%E3%82%8A%E8%BE%BC%E3%81%BF
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ('role' in person) {
    additionalInformation = person.role;
    console.log(person.role);
  } else {
    additionalInformation = person.occupation;
    console.log(person.occupation);
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);