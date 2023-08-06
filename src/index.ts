interface Person {
  firstName: string;
  lastName: string;
}

class Student implements Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}

const student = new Student("太郎", "田中");
console.log(student.getFullName());