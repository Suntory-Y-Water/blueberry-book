class ForeignUser {
  // 修飾子をつけることでコンストラクタ兼プロパティの宣言になる
  // 修飾子をつけないとただの引数宣言になってしまう
  // TypeScript特有らしい
  // constructor(public name: string, private age:number, readonly locate: string){}

  name: string;
  private age: number

  constructor(name: string, age: number){
    this.name = name;
    this.age = age
  }

  isAdult(): boolean {
    return this.age >= 20
  }

  setAge(newAge: number){
    return this.age = newAge
  }
}

const foreignUser = new ForeignUser("john", 24)
console.log(foreignUser.setAge(18));
console.log(foreignUser.isAdult());

class Animal {
  public name: string;

  public constructor(theName: string) {
    this.name = theName;
  }

  protected move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Gorilla extends Animal {
  move(distanceInMeters: number) {
    super.move(distanceInMeters * 10);
  }
}

const gorilla = new Gorilla("速いゴリラ");
gorilla.move(10);