interface PersonInterface {
  name: string;
  age?: number;
}

interface PersonInterface {
  email: string;
}

const personWithInterface: PersonInterface = {
  name: "田中",
  email: "tanaka@example.com"
};

const personWithInterface1: PersonInterface = {
  name: "田中",
  age: 25,
  email: "tanaka@example.com"
};

console.log(`${personWithInterface.name}さんのメールアドレスは${personWithInterface.email}です`);
// // 'personWithInterface.age' は 'undefined' の可能性があります。
// console.log(personWithInterface.age * 1000);

if(personWithInterface.age !== undefined){
  console.log(personWithInterface.age * 1000);
} else {
  console.log("値がありません");
}

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type PersonType = Name & Age;

const personWithType: PersonType = {
  name: "山田",
  age: 30
};

console.log(`${personWithType.name}さんは${personWithType.age}歳です`);
