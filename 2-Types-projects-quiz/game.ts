/**
 * Let's make a game πΉ
 */

interface position {
  x: number;
  y: number;
}

let position: position = {
  x: 0,
  y: 0,
};

type moved = "up" | "down" | "left" | "right";
const move = (Moved: moved) => {
  switch (Moved) {
    case "up":
      position.y++;
      break;
    case "down":
      position.y--;
      break;
    case "left":
      position.x--;
      break;
    case "right":
      position.x++;
      break;
    default:
      console.log("λ€μμλ ₯νμΈμ");
  }
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
