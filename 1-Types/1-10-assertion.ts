{
  /**
   * Type Assertions !이걸 쓰는건 별로 좋지 않다.
   * 불가피하게 써야할 때만 쓰면 된다.
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<String>result).length); // 위에 꺼랑 같은 표현임

  const wrong: any = 5;
  console.log((wrong as Array<Number>).push(1)); // 이런식으로 배열이 아닌걸보고 배열이라고 타입주면 안됌!!

  function findNumbers(): number[] | undefined {
      return undefined;
  }

  const numbers = findNumbers();
  //numbers.push(2); //이렇게하면 오류가 난다  이유 : 배열또는 undefined라고 했기 때문에 undefind 이면 push가 안되기 때문이다
  numbers!.push(2)  // 이렇게 느낌표를 붙여주면 난 배열인걸 확신할 수 있어! 라는 의미 이다.
}
