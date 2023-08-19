// 変更する予定がないプロパティであれば型定義時点でreadonlyをつける
interface Vehicle {
  readonly brand: string;
  model: string;
}

const cars: Vehicle = {
  brand: "Toyota",
  model: "Camry"
};

// エラー：読み取り専用プロパティであるため変更不可
// cars.brand = "Honda";

cars.model = "Corolla";
console.log(cars.model);

const person = {
  name: "田中",
  age: 30,
};

// constで定義したオブジェクトを型
// personの型を取得して新しい変数に適用
type PersonsType = typeof person;

// この例では、typeof演算子を使用してperson変数の型を取得し、新しいPersonsType型を定義しています。この型はanotherPerson変数に適用されています。
const anotherPerson: PersonsType = {
  name: "山田",
  age: 25
};

interface Animal {
  name: string;
  sound(): void;
}

interface Bird extends Animal { // Animalの部分型
  fly(): void;
}

const makeSound = (animal: Animal) => {
  animal.sound();
};

const bird: Bird = {
  name: "Sparrow",
  sound: () => { console.log("Chirp!"); },
  fly: () => { console.log("Flying!"); }
};

makeSound(bird); // 有効：BirdはAnimalの部分型
