const typeLists = () => {
  // 関数型は引数リスト => 返り値の型という形をもつ
  const xRepeat = (num: number) => "x".repeat(num)
  console.log(xRepeat(10));

  // 引数名を意識するだけでも使う側にどんな引数を与えればよいかの判断材料になる
  // 上の例ではなんのnumか分かりづらい
  // 返り値の型注釈は型推論で判断してくれるので省略可能
  type F = (repeatNum: number) => string;
  const xRepeats:F = (num: number) => "x".repeat(num)
  console.log(xRepeats(15));

  const g = (num: number) => {
    for(let i = 0; i < num; i ++){
      console.log("Hello World");
    }
  }
  g(3)
}
typeLists()
