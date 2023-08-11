// 型引数 現時点でいまなんの型が入るかわからない ジェネリック型とも呼ばれている
// <>をいれないと必ずコンパイルエラーになる
type Family<Parent, Child> = {
  mother: Parent
  father: Parent
  child: Child
}

const familyObj: Family<number, string> = {
  mother: 40,
  father: 42,
  child: "10"
}

const familyObjName: Family<string, string> = {
  mother: "ヨシコ",
  father: "たろう",
  child: "あああ"
}

// 型引数で値を決めるため、オブジェクト定義時に型を決めればそれが入る
console.log(familyObj.mother);
console.log(familyObjName.mother);