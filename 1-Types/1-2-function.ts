{
    // // Javascript π©
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }


    // // Typescript β¨
    // function add(num1 : number, num2 : number) : number{
    //     return num1 + num2;
    // }


    // // Javascript π©
    // function jsFetchNum(id){
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) =>{
    //         resolve(100);
    //     })
    // }


    // // Typescript β¨
    // function FetchNum(id : string): Promise<number> {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) =>{
    //         resolve(100);
    //     })
    // }


    // Javascript β¨ => TypeScript
    // Optional parameter :   λ¬Όμνλ₯Ό λΆμ¬μ λ€μ΄μλ λκ³  μλ€μ΄μλ λκ²λ μ νν  μ μλ νλΌλ―Έν°
    function printName(firstName: string, lastName?: string){  // lastName λ€μ λΆμ ? μ λ»μ lastNameμ λ¬Έμμ΄ μΈμκ° λ€μ΄μλ λκ³  μλ€μ΄ μλ λλ€λ λ»μ΄λ€. -> Optional parameter
        console.log(firstName);
        console.log(lastName)
    }

    printName("dohyun", "Lee");
    printName("dodo");
    printName("lala", undefined);


    // Default parameter :  μλ¬΄μΈμλ μμκ²½μ° κΈ°λ³Έκ°μ μ€μ ν΄μ£Όλ νλΌλ―Έν°
    function printMessage(message: string = 'default message'){
        console.log(message);
    }

    printMessage();


    // Rest parameter :  μΈμ κ°μ μ ν΄μ§μ§ μλ μλ‘ λ°μλ λ°°μ΄λ‘ λ°μμκ° μμ ...μ μ°κ³  λ°°μ΄ μ΄λ¦μμ numbers λΌλ λ°°μ΄μ number[] νμμ λ°μμ΄
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a,b) => a + b);
    }

    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,6));




}