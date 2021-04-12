{
  /**
   * Enum : 상수를 묶어서 관리하는 타입   !! 하지만 타입스크립트에서는 되도록 사용 안하는 것이 좋음 ( 타입이 정확히 보장되지 않기 때문)
   */

  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const THUSDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ "monday": 0, "tuesday": 1 });



  //TypeScript
  enum Days { // 값을 설정하지 않으면 자동으로 인덱스로 계산이 되어서 출력됨
      Monday, // 0
      Tuesday, // 1
      Wednesday, // 2
      Thursday, // 3
      Friday, // 4
      Satarday, // 5
      Sunday, // 6
  }

//   console.log(Days.Thursday)
  const day = Days.Satarday
//   console.log(day)

  enum Days2 {
      Monday = 3,
      TUESDAY = "dohyun",
      Friday = 23,
  }

  console.log(Days2.Friday)

  // enum 대신 union 타입을 이용해서 하는게 더 좋음
  type Days3 = 'Monday' | 'Tuesday' | 'Wednesday';
  let Day3 : Days3 = "Monday"; 


}



