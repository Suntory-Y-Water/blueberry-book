// 今はtemporalが主流？
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();
console.log(`${year}年${month}月${day}日`);

// 正規表現
const regex = /(.日).*(.日).*(.日).*(.日).*(.日)/;
const results = regex.exec("03月01日は日曜日で祝日、晴れの日でした。");
console.log(regex.test("日曜日"));
console.log(results);

const map = new Map<string, number>();
console.log(map.toString);
map.set("toString", 1);
console.log(map.toString);

const foo = { a: 1, b: 2, c: 3 };