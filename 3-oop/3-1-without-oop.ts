{
  // 절차 지향 프로그래밍으로 커피머신 만들어 보기

  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  const makeCoffee = (shots: number): CoffeCup => {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!"); // throw new Error 가 되면 그 밑에 코드는 실행되지 않고 break 된다
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  };

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
