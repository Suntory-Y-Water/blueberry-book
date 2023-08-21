/*
問題1: アロー関数と可変長引数

以下の要件を満たすアロー関数を宣言してください。

関数名はsumとします。
可変長引数として数値を受け取ります。
与えられた全ての数値の合計を返します。
*/

const allAddSum = (...inputNum: number[]) => {
  let result: number = 0
  for(const num of inputNum){
    result += num
  }
  return result
}

/*
問題2: コールバック関数とオプショナル引数
次の要件を満たす関数を宣言してください。
関数名はprocessArrayとします。
第1引数として数値の配列を受け取ります。
第2引数としてコールバック関数を受け取ります。この関数は数値を引数として受け取り、数値を返すものとします。
第3引数として数値（デフォルト値10）をオプショナルで受け取ります。
処理内容は、配列の各要素にコールバック関数を適用し、その結果に第3引数の数値を加算します。加算後の配列を返します。
*/

const processArray = (numArr: number[], callback:(num: number) => number, optionalNum: number = 10) => {
  return numArr.map(num => callback(num) + optionalNum)
}
const result = processArray([10,20,30], x => x / 2, 5)
console.log(result);

/*
問題3: 関数型と部分型関係
以下の関数型FuncAとFuncBが与えられています。
type FuncA = (x: number, y: number) => void;
type FuncB = (x: number) => void;
次の文を考えたとき、FuncA型の変数をFuncB型の変数に代入することができるか、そしてその理由を説明してください。

Q1: exampleFuncAをFuncBの型で再割り当てすることはできますか？理由とともに説明してください。
Q2: exampleFuncBをFuncAの型で再割り当てすることはできますか？理由とともに説明してください。

*/
type FuncA = (x: number, y: number) => void;
type FuncB = (x: number) => void;

const exampleFuncA: FuncA = (x, y) => {
  console.log(`Number: ${x}, String: ${y}`);
}

const exampleFuncB: FuncB = x => {
  return x.toString();
}
// Q1:できない。引数の数とFuncBがstring型を返すため
// Q2:できる。理由はよくわかっていません。