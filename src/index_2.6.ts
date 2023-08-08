const getUserName = (userName: string) => {
  if (userName === "太郎"){
    console.log("your name is Taro!");
  } else {
    console.log("no Taro");
  }
}

getUserName("tarou")

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// 各ケースにはreturnをいれる
const getWeekdayName = (day: Weekday): string => {
  switch (day) {
    case Weekday.Monday:
      return "月曜日";
    case Weekday.Tuesday:
      return "火曜日";
    case Weekday.Wednesday:
      return "水曜日";
    case Weekday.Thursday:
      return "木曜日";
    case Weekday.Friday:
      return "金曜日";
    case Weekday.Saturday:
      return "土曜日";
    case Weekday.Sunday:
      return "日曜日";
    default:
      return "無効な値";
  }
}

const today = Weekday.Sunday;
console.log(`今日は${getWeekdayName(today)}です。`);
