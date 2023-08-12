const arr: readonly number[] = [4 * 100, 5, 999]
const arr2 = [1, 2, 3, ...arr]
console.log(arr2);

// arr[0] = 100
arr2[0] = 100
console.log(arr2);

const numArr = [1, 10, 100, 1000]
numArr.push(10000)
console.log(numArr);

for(const num of numArr){
  console.log(`値は${num * 2}です`);
}