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
    return `${this.lastName}${this.firstName}`;
  }

  questionName(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout
      })

      rl.question('名前を入力して下さい : ', (name) => {
        const displayName = name || "名無し";
        rl.close();
        resolve(displayName);
      })
    })
  }

  questionNum(): Promise<number> {
    return new Promise(() => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout
      })

      rl.question('数値を入力して下さい : ', (line) => {
        const num = Number(line)
        const message = 0 < num && num < 100
          ?`${num}は0以上100未満です`
          :`${num}は0以上100未満ではありません`
        console.log(message);
        rl.close();
      })
    })
  }
}

const student = new Student("太郎", "田中", 24);
console.log(student.getFullName());
console.log(student.getGreeting());
console.log(student.getNameAndAge());
student.questionNum().then(line => {
});