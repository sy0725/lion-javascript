/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;

// 2. 값이 할당되지 않은 상태

let unknown;
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const text1 = '단지';
const text2 = "단지";
const text3 = `단지`;

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 1;

const float = 10.45;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)

const apple = true;

const melon = false;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {};
const sy = new Object({})

// 8. 고유한 식별자(unique identifier)

const unique = Symbol('uid');




/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof 1 + 2);

console.log(typeof (1 + 2));



// 언어 상, 오류




// Object

const user = {
  name : 'poppy',
  age : 5,
  sayHi: function(){
    console.log('hello')
  }
}

console.log(user.sayHi());
console.log(user.age);


// Array

const arr = [10, 100, 1000, 1,2,3]

const count = 0;

`li:nth-child(${ count + 1})`

console.log(arr[3]);

// function

function 붕어빵틀(재료){
 return 재료 + `맛 붕어빵`;
}

const 붕어빵 = 붕어빵틀(`팥`)   //표현할때 이렇게한다.
console.log(붕어빵);

// alert1 : function(){    //normal function
  
// }

// alert2 : (){      //consise method

// }

// alert3 : () => {    // arrow function

// }

// this


