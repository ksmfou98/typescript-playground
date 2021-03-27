{
    // // Javascript 💩
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }


    // // Typescript ✨
    // function add(num1 : number, num2 : number) : number{
    //     return num1 + num2;
    // }


    // // Javascript 💩
    // function jsFetchNum(id){
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) =>{
    //         resolve(100);
    //     })
    // }


    // // Typescript ✨
    // function FetchNum(id : string): Promise<number> {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) =>{
    //         resolve(100);
    //     })
    // }


    // Javascript ✨ => TypeScript
    // Optional parameter :   물음표를 붙여서 들어와도 되고 안들어와도 되게끔 선택할 수 있는 파라미터
    function printName(firstName: string, lastName?: string){  // lastName 뒤에 붙은 ? 의 뜻은 lastName에 문자열 인자가 들어와도 되고 안들어 와도 된다는 뜻이다. -> Optional parameter
        console.log(firstName);
        console.log(lastName)
    }

    printName("dohyun", "Lee");
    printName("dodo");
    printName("lala", undefined);


    // Default parameter :  아무인자도 없을경우 기본값을 설정해주는 파라미터
    function printMessage(message: string = 'default message'){
        console.log(message);
    }

    printMessage();


    // Rest parameter :  인자 값을 정해지지 않는 수로 받을때 배열로 받을수가 있음 ...을 쓰고 배열 이름을씀 numbers 라는 배열에 number[] 타입을 받아옴
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a,b) => a + b);
    }

    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,6));




}