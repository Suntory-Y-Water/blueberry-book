// コールシグネチャ 
// コールシグネチャは、関数の型を定義するための構文です。これを使用することで、関数が取るべき引数とその関数の返すべき値の型を指定することができます。
type AddFunction = (x: number, y: number) => number;
const add: AddFunction = (x, y) => {
  return x + y;
};

// 関数型の部分型関係
type WeHasName = {
  name: string
}

type WeHasNameAndAge = {
  name: string
  age: number
}

const fromAge = (age: number): WeHasNameAndAge => ({
  name: "John Smith",
  age,
})

const f:(age: number) => WeHasName = fromAge;
const obj: WeHasName = f(100);
console.log(obj);

const showName = (obj: HasName) => {
  console.log(obj.name);
}

const g:(obj: WeHasNameAndAge) => void = showName;

g({
  name: "atsumi",
  age: 32
})
