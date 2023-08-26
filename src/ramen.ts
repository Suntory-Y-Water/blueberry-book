type ToppingLevel = "少なめ" | "通常" | "マシ";
type StandardTopping = "ヤサイ" | "ニンニク" | "アブラ" | "カラメ";

interface Order {
  [key: string]: ToppingLevel;
}

const isAllSameLevel = (order: Order, standardToppings: StandardTopping[], level: ToppingLevel): boolean => {
  return standardToppings.every(topping => order[topping] === level);
};

const generateResponse = (order: Order, topping: string): string => {
  return order[topping] === "通常" ? topping : `${topping}${order[topping]}`;
};

const generateToppingString: (order: Order, extraToppings?: string[]) => string = (order, extraToppings) => {
  const standardToppings: StandardTopping[] = ["ヤサイ", "ニンニク", "アブラ", "カラメ"];

  // 早期リターン：全マシのケース
  if (isAllSameLevel(order, standardToppings, "マシ")) return "全マシ";
  
  // 早期リターン：全部のケース
  if (isAllSameLevel(order, standardToppings, "通常")) return "全部";

  let response: string[] = [];

  standardToppings.forEach(topping => {
    if (order[topping]) {
      response.push(generateResponse(order, topping));
    }
  });

  extraToppings?.forEach(extra => {
    if (order[extra]) {
      response.push(generateResponse(order, extra));
    }
  });

  return response.join("、");
};

const orderA: Order = { "ヤサイ": "通常", "ニンニク": "通常", "アブラ": "マシ" };
console.log(generateToppingString(orderA));  // "ヤサイ、ニンニク、アブラマシ"

const orderB: Order = { "ニンニク": "マシ", "アブラ": "少なめ", "カラメ": "通常" };
console.log(generateToppingString(orderB));  // "ニンニクマシ、アブラ少なめ、カラメ"

const orderC: Order = { "ヤサイ": "通常", "ニンニク": "通常", "アブラ": "通常", "カラメ": "通常" };
console.log(generateToppingString(orderC));  // "全部"

const orderD: Order = { "ヤサイ": "マシ", "ニンニク": "マシ", "アブラ": "マシ", "カラメ": "マシ" };
console.log(generateToppingString(orderD));  // "全マシ"

const orderE: Order = { "ヤサイ": "通常", "ガリマヨ": "マシ" };
console.log(generateToppingString(orderE, ["ガリマヨ"]));  // "ヤサイ、ガリマヨマシ"
