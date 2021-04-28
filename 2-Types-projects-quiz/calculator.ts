/**
 * Let's make a calculator 🧮
 */

// 내 답안
const calculate = (func: string, x: number, y: number): number => {
  switch (func) {
    case "add":
      return x + y;
    case "substract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    case "remainder":
      return x % y;
    default:
      console.log("삐빅 오류");
  }
};

// 모범 담안

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
const good_calculate = (command: Command, x: number, y: number): number => {
  switch (command) {
    case "add":
      return x + y;
    case "substract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    case "remainder":
      return x % y;
    default:
      throw new Error("unknown error");
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
