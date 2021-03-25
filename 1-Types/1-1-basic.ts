{
    // let es6
    let name = "hello";
    name = "hi";

    // const
    const age = 5;

    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array ..... 
     */

    
    // number
    const num:number = -1;

    // string
    const str:string = "dohyun";

    // boolean
    const boal: boolean = false;

    // undefined : 값이 있는지 없는지 아무 것도 결정 되지 않은 상태
    let lala: undefined; // 이렇게는 사용하지 않는다. 이유는 한번 undefined 라고 타입을 선언해 버리면 다른 값을 넣지 못하기 때문에.
    let lulu: number | undefined; // 이런식으로 number 또는 undefined 라고 또는을 붙여서 사용한다.
    lulu = undefined;
    lulu = 1;
    function find() : number | undefined{ 
        return undefined;
    }

    // null : 값이 없는 것
    let person: null; // undefined 과 마찬가지로 이렇게는 사용하지 않는다.
    let person2 : string | null; // 이부분도 undefined 와 마찬가지로 또는을 붙여서 사용한다.


    // unknown : 어떤 값이 담길지 모르는것 , !!가능하면 쓰지 않는 것이 중요!!
    let notSure : unknown;
    notSure = 0;
    notSure = "he";
    notSure = true;

    // any : 어떤 값이든 담아도 상관 없는것, !!가능하면 쓰지 않는 것이 중요!!
    let anything: any;
    anything = 0;
    anything = "hello";


    // void : 아무 값도 return(반환) 하지 않을 때 사용 (생략할 수도 있음)
    function print() : void{
        console.log("hello");
    }

    // never: return을 절때 하지않을 때 사용 , 주로 error핸들링 에서 사용됨.
    function throwError(message: string): never{
        // message-> server(log)
        throw new Error(message);
    }

    // object
    let obj: object;
    function acceptSomeObject(obj: object){}

    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog'});

} 