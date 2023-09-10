/*問題1: オブジェクトリテラルを使用して、名前(name)が"John", 年齢(age)が30, 住所(address)が"Tokyo"のオブジェクトを宣言してください。 */
const personData = {
  name: "John",
  age: 30,
  address: "Tokyo"
}
console.log(personData.address);

/*問題2: 以下のオブジェクトからlastNameプロパティをアクセスして、出力してください。 */
const personPracticeData = {
  firstName: "John",
  lastName: "Doe"
};
console.log(personPracticeData.lastName);

/*問題3: スプレッド構文を使用して、以下の二つのオブジェクトをマージしてください。 */
const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const obj3 = {...obj1, ...obj2}
console.log(obj3);

/*問題4: オブジェクトの型を宣言するためのtype文を使用して、次のプロパティを持つ型Carを定義してください。
brand (文字列型)
year (数値型)*/

type CarType ={brand: string, year: number}
const myCar: CarType = {brand: "Honda", year: 2020}
console.log(myCar.brand);

/*問題5: 以下の型宣言に基づいて、該当するオブジェクトを宣言してください。
type Book = {
    title: string;
    author: string;
    pages?: number;
}; */

type Book = {
  title: string;
  author: string;
  pages?: number;
};
const myLikeBook: Book = {title: "デザイン", author: "だれだれさん", pages: 100}
const myLikeBook2: Book = {title: "asaa", author: "honayanana"}
console.log(myLikeBook, myLikeBook2);

/*問題6: 配列リテラルを使用して、文字列の配列を作成してください。内容は任意です。 */
const vendingArea: string[] = ["旭町", "Lawsonの前", "駅前"]
console.log(...vendingArea);

/*問題7: for-of文を使用して、以下の数字の配列の各要素を出力してください。 */
const numbers = [1, 2, 3, 4, 5];
for(const forNum of numbers){
  console.log(forNum)
}

/*問題8: オブジェクトの分割代入を使用して、以下のオブジェクトからnameとcityのプロパティを変数として取り出してください。 */
const student = {
  name: "Alice",
  age: 20,
  city: "Osaka"
};
const studentName = student.name
const studentCity = student.city

/*問題9: 以下の正規表現を使用して、与えられた文字列から数字だけを抜き出してください。 */
const nexRegex = /\d+/g;
const text = "I have 2 apples and 3 oranges.";
console.log(text.match(nexRegex));

/*問題10: Mapオブジェクトを使用して、キーとして文字列、値として数値を持つマップを作成し、その後、任意のキーに対応する値を取得してください。 */
const personDataMap: Map<string, string> = new Map()
personDataMap.set("locate", "tokyo")
console.log(personDataMap.get("locate"));