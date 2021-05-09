{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 클래스 안에서 변수를 선언할때는 const, let을 사용하지 않음
    static BEANS_GRAMM_PER_SHOT: number = 7; // static을 붙이면 class level 이 됨   class level : class 와 연결이 되어 있기 때문에 object마다 생성되지않음
    coffeeBeans: number = 0; // instance (or object) level

    constructor(coffeeBeans: number) {
      // constructor 은 생성자로 클래스를 호출할때마다 실행되는 함수임
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee = (shots: number): CoffeCup => {
      // 함수 생성할 때도 마찬가지로 앞에 const나 function을 붙이지 않음
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // BEANS_GRAMM_PER_SHOT 은 클래스 레벨이기 때문에 this.가 아니라 클래스.이름으로 접근해야됨
        // 클래스 안에서 생성된 변수(맴버) 한테 접근을 하려면 이렇게 this를 붙여줘야 한다.
        throw new Error("Not enough coffee beans!"); // throw new Error 가 되면 그 밑에 코드는 실행되지 않고 break 된다
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    };
  }

  const maker = new CoffeeMaker(32); // 여기 괄호 안에는 생성자에 값을 넘겨주는 값을 적으면 됨

  
}
