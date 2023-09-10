const increments = (n: number) => {
  return n + 1;
};

console.log(increments(10));

const increment = (num: number) => num + 1;
//                    ^^^^^^^^引数の型注釈
console.log(increment(100));

type Human = {
  height: number;
  weight: number;
}

const calcBMI = ({ height, weight }: Human): number => {
  return weight / (height * height);
}
console.log(calcBMI({height:1.74, weight:68}));

// TypeScriptで残余引数に型注釈するには、配列の型を書きます。たとえば、残余引数がnumber型なら、number[]のように書きます。
function func(...params: number[]) {
  console.log(params);
}
func(1, 2, 3);

const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const highest = Math.max(...scores);
console.log(highest);

const callBackFunc = () => {
    // コールバック関数
  type FirstUser = {name: string, age: number}
  const getName = (u: FirstUser) => {
    return u.name
  }
  const firstUsers: FirstUser[] = [
    {name: "tarou", age: 26},
    {name: "Smith", age: 19},
  ]

  const names = firstUsers.map(getName);
  console.log(names);
}

callBackFunc()

// わざわざgetNameで別にメソッドを用意する必要がない
const callBackFuncSample = () => {
  // コールバック関数
  type FirstUser = {name: string, age: number}
  const firstUsers: FirstUser[] = [
    {name: "tarou", age: 26},
    {name: "Smith", age: 19},
  ]

  const names = firstUsers.map((u: FirstUser): string => u.name);
  console.log(names);
}

callBackFuncSample()