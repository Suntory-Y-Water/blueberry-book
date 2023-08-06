import { createInterface } from 'readline'

interface Person {
  firstName: string;
  lastName: string;
  age: number
}

class Student implements Person {
  firstName: string;
  lastName: string;
  age: number

  constructor(firstName: string, lastName: string, age:number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  getGreeting(): string{
    return `Hello! ${this.lastName}`;
  }

  getNameAndAge(): string{
    return `${this.firstName} さんの年齢は ${this.age}歳です`;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const student = new Student("太郎", "田中", 24);
console.log(student.getFullName());
console.log(student.getGreeting());
console.log(student.getNameAndAge());

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('文字列を入力して下さい', (line)=> {
  const num = Number(line)
// 型を指定してないのにnumberからstringに型変換が行われるため、暗黙の型変換なんて言われてる
  const result = line + 1000
  const addResult = num + 1000
  console.log(result);
  console.log(addResult);
  rl.close();
})