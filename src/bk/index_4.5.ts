interface Base {
  id: number;
}

const printInfo = <T extends Base>(data: T & { name?: string }): string => {
  if (data.name) {
    return `ID: ${data.id}, Name: ${data.name}`;
  }
  return `ID: ${data.id}`;
};

// 使用例
const item1: Base = { id: 1 };
const item2 = { id: 2, name: "Taro" };

console.log(printInfo(item1)); // "ID: 1"
console.log(printInfo(item2)); // "ID: 2, Name: Taro"

const ageOfLies = (age: number) => {
  if(age >= 30){
    const lie = age - 10
    return lie
  }

  if(age >= 25){
    const lie = age - 5
    return lie
  }
  return age
}

console.log(ageOfLies(30));

