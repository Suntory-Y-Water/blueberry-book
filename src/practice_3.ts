// 問題11: 関数宣言を使用して、2つの数値を引数として受け取り、その和を返す関数sumを宣言してください。
const sum = (a: number, b:number) => {
  return a + b
}

// 問題12: 返り値がない関数を作成してください。この関数は、受け取った文字列をコンソールに出力する関数logMessageとして宣言してください。
const logMessage = (message: string) => {
  console.log(message);
}
logMessage("tintin")

// 問題13: 関数式を使用して、2つの数値の差を返す関数differenceを宣言してください。
const diffrence = (a: number, b: number) => {
  return Math.abs(a - b)
}
console.log(diffrence(1, 5));

// 問題14: アロー関数式を使用して、2つの数値の積を返す関数multiplyを宣言してください。
const multiply = (a: number, b: number) => {
  return a * b
}

// 問題15: 省略形のアロー関数を使用して、与えられた数値を2で割った結果を返す関数halfを宣言してください。
const half = (num: number) => {
  return num / 2
}

// 問題16: 以下のオブジェクト内に、メソッド記法を使用して、自身の名前をコンソールに出力するintroduceメソッドを追加してください。
const johnHouse = {
  name: "John"
}