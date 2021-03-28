{
    /**
     * Type Aliases  : 타입을 내가 만드는거임
     */

    type Text = string;
    const name: Text = "dohyeon";
    const address: Text = "korea";

    type Num = number;
    
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        name: "dohyeon",
        age: 12,
    }

    /**
     *  String Literal Types  : 문자열을 타입으로 지정
     */

    type Name = "name";
    let dodo: Name;
    dodo = "name";

    type JSON = "json"
    const json: JSON = "json";
}