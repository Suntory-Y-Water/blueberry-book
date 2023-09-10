class RegistUser {
  // クラスからのアクセスはできるけど、インスタンス化したあとにアクセスできない
  // クラスに属するプロパティでインスタンスのプロパティではない　あまり使わないかも
  static adminName: string = "admin chan";
  static getAdminUser(){
    return new RegistUser(RegistUser.adminName, 15, "東京")
  }
  // コンストラクタで初期化する場合は型定義みたいなもの？
  name: string
  private age: number
  readonly locate: string

  constructor(name: string, age:number, locate: string){
    this.name = name
    this.age = age
    this.locate = locate
    console.log(`私の名前は${this.name}です`);
  }

  isAdult(): boolean {
    return this.age >= 20
  }

  setAge(newAge: number){
    return this.age = newAge
  }
}

console.log(RegistUser.adminName);
const admin = RegistUser.getAdminUser();
console.log(admin.locate);

const registUser = new RegistUser("Tarou", 24, "名古屋")
console.log(registUser.name);
// console.log(registUser.age); // privateなのでコンパイルエラーになる
console.log(registUser.locate);
console.log(registUser.name);

// isAdultを通じて間接的にしかageプロパティにアクセスできない例
console.log(registUser.isAdult());
