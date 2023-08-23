// ジェネリクスの練習問題

const callbackMap = (array: number[], callback:(value: number) => number) => {
  const result: number[] = []
  for(const element of array){
    // result.push(element)
    result.push(callback(element))
  }
  return result
}

const fibonacci = [1, 2, 3, 5, 8, 13]

const fibonacciResult = callbackMap(fibonacci, (x)=> x * 10)
console.log(fibonacciResult);
