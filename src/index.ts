// 配列の分割代入　何回もarr[0]みたいに書く必要がなくなる
const arr = [2, 3, 5, 7, 11]
const [first, second, third] = arr
// console.log(first);

type Employee = {
  id: number;
  name: string;
  age: number;
  position: string;
};

const employee: Employee = {
  id: 1,
  name: 'John',
  age: 30,
  position: 'Engineer',
};

const { id, age, ...rest } = employee;

console.log(id); // 1
console.log(age);
console.log(rest); // { name: 'John', age: 30, position: 'Engineer' }
