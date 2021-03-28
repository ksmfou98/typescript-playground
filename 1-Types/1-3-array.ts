{


    // Array
    const fruits: string[] = ["apple", "banana"]  // 문자열 배열로 선언하는 첫번째 방법
    const fruit : Array<string> = ["apple", "banana"] // 문자열 배열로 선언하는 두번째 방법

    function printArray(fruits: readonly string[]){  // readonly를 선언하면 데이터 수정은 불가능하고 읽을수만 있음 
                                                    // readonly를 사용하려면 string[] 이 문법만 가능하고 Array<string>은 안됌.
    }


    // Tuple  : 배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열
    let student: [string, number]
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;  // 이런식으로 비구조 할당을 하면 그나마 가독성이 좋아진다.
    // ! tuple 사용은 별로 권장하지 않는다
    
}