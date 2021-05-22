{
  /**
   * encapsulation 으로 외부에서 보이면 안될 값들을 설정할 수 있다
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    // 클래스 안에서 변수를 선언할때는 const, let을 사용하지 않음
    private static BEANS_GRAMM_PER_SHOT: number = 7; // static을 붙이면 class level 이 됨   class level : class 와 연결이 되어 있기 때문에 object마다 생성되지않음
    private coffeeBeans: number = 0; // instance (or object) level

    constructor(coffeeBeans: number) {
      // constructor 은 생성자로 클래스를 호출할때마다 실행되는 함수임
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine ... 🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    private preheat(): void {
      console.log("heating up...🔥 ");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSuger() {
      console.log("Getting some sugar from candy 🍬 ");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const suger = this.getSuger();
      return {
        ...cup,
        hasMilk: suger,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer
    ) {
      // 자식 클래스에서 새로운 생성자를 만들땐 부모 클래스 생성자에서 필요한 요소를 불러와서 super에 넣어준 뒤에 사용해야함
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super을 이용하면 부모 클래스의 있는 메서드들을 사용할 수 있음
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }


}
