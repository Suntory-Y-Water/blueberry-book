function chooseRandomly<T>(v1: T, v2: T): T {
  return Math.random() <= 0.5 ? v1 : v2;
}
console.log(chooseRandomly<string>("勝ち", "負け"));
console.log(chooseRandomly<number>(1, 2));

type LoginUser<N> = {
  name: N
}

const repeat = <T>(element: T, length: number) => {
  const result: T[] = [];
  for(let i = 0; i < length; i++){
    result.push(element)
  }
  return result
}

console.log(repeat<string>("tintin", 5));
console.log(repeat<number>(10, 5));
