/*
問題1: 変数の宣言と使用

実装したいこと:
数字を代表する変数numを宣言し、それを2倍した結果を表示する。
最終的な出力結果: 10
 */

const num: number = 5
console.log(num * 2);

/*
問題2: 文字列の結合

実装したいこと:
変数firstNameとlastNameを宣言し、それらを結合してフルネームを表示する。
最終的な出力結果: John Doe
*/

const firstName: string = "John"
const lastName: string = "Doe"
console.log(`${firstName} ${lastName}`);

/*
問題3: 比較演算子と条件分岐

実装したいこと:
変数ageが18以上なら"成人"、そうでなければ"未成年"と表示する。
最終的な出力結果: 成人 */

const age: number = 18
if(age >= 18){
  console.log("成人");
} else {
  console.log("未成年");
}

/*問題4: FizzBuzz

実装したいこと:
1から30までの数字を出力する。ただし、3の倍数の時は"Fizz", 5の倍数の時は"Buzz", 3と5の公倍数の時は"FizzBuzz"と表示する。
 */

let nowNum: number = 1
let nowFizz: string = "Fizz"
let nowBuzz: string = "Buzz"

while(nowNum <= 30){
  if(nowNum % 15 === 0){
    console.log(nowFizz + nowBuzz);
  } else if(nowNum % 5 === 0){
    console.log(nowBuzz);
  } else if(nowNum % 3 === 0){
    console.log(nowFizz);
  } else {
    console.log(nowNum);
  }
  nowNum++
}

/*
問題5: 真偽値と論理演算子

実装したいこと:
変数isRainyとhasUmbrellaを使い、雨が降っている場合は傘を持っていれば"外出OK", 持っていなければ"家にいよう"と表示する。雨が降っていなければ、"外出OK"と表示する。
最終的な出力結果: 外出OK */

/*
const isRainy: boolean = true
const hasUmbrella: boolean= true
if(isRainy === true || hasUmbrella === true){
  console.log("外出OK");
} else if(isRainy === true || hasUmbrella === false){
  console.log("家にいよう");
} else if(isRainy === false){
  console.log("外出OK");
} */

const isRainy: boolean = true;
const hasUmbrella: boolean = true;

if (isRainy && hasUmbrella) {
  console.log("外出OK");
} else if (isRainy && !hasUmbrella) {
  console.log("家にいよう");
} else {
  console.log("外出OK");
}
