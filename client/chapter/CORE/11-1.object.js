/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let cssCode = /*css*/ ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authorization : 권한
// authentication : 인증

let authUser = null;

authUser = {
  uid: 'user-id-sunyong0725',
  name: 'jeon',
  email: 'sunyong0725@naver.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.permission);
console.log(authUser.name);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

//class 록 객체만들기  객체지향

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁');

//함수로 객체만들기


// shorthand property (단축 프로퍼티)
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name,
    email,
    [computedProp]: number,
  };
}

const user1 = createUser('진승', 'ㅇㅁㄴㅇㅁㄴ', 'tel', '010-1111-8888');
const user2 = createUser('희소', 'ㅇㅁㄴㅇㅁㄴㅇ');




// 프로퍼티 포함 여부 확인

// key in user1

Object.prototype.SIGN = true;

//자신의 속성을 가지고있는지 확인
for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1,key)){
  }
}



// 프로퍼티 나열

// key만 모아놓은 배열 (object.keys)


let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);


getProp(object)

function getProp(object){
    if(typeof object !== 'object'){
      throw new Error('getProp함수의 매개변수는 객체 타입 이어야 합니다')
    }
    return object.key(object)
}


function getP(object){
  let result = [];

  for(let key in object){
    if(({}).hasOwnProperty.call(object,key)){
      result.push(key)
    }
  }

  return result;
}

console.log(getProp(authUser));

console.log(keyArray);

           null            없앰.
프로퍼티 제거(remove) or 삭제(delete)


authUser.name = null;

delete authUser.uid

removeProperty(authUser,name);

object.removeProperty(authUser);

removeProperty

function removeProperty(object, key){

  if(typeof object !== 'object'){
    throw new Error('....')
  }

  if(typeof object !== 'string'){
    throw new Error('....')
  }

  if(key === 'all'){
    for(let key of getProp(object)){
      object[key] = null;
    }

    return object;
  }

object[key] = null;

return object;
}

 deleteProperty

function deleteProperty(object, key){

  delete object[key];

  return object;
}


//  함수를 만들때 가장 중요한건 함수의 실행부를 보면 된다.



// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin
}

// console.log(student);


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// function isEmptyObject(object) {

//   return getProp(object).length === 0 ? true : false;
//   // Object.keys(object).length === 0 ? true : false;

// }


// isEmptyObject(authUser)




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 구조분해 할당이란 ? 말 그대로 구조를 다 분해를 해서 내가 원하는곳에 할당시켜주는것 : 순서가 정해져있다. 변수이름을 바꿀 수 있다.


let color = ['#ff0000', '#2b00ff', '#00ff2f'];


// let [red,blue,green] = color;   //[] 괄호 한번 넣고 필요한 변수 이름을 쓰면 값이 나온다. 배열의 순서가 바뀔순 없다. 순서가 중요

// let red = color[0];
// let blue = color[1];   평범하게 배열에 있는걸 변수에 넣고 쓰는법
// let green = color[2];

let [,,green] = color;   // 하나의 색깔만 빼는거



for(let [key,value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];
  console.log(key);
}

console.log(green)

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
// 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있다.
// 이름바꾸는 예제
// const { width : w, height, overflow : of, color : c } = options


const { width, height, overflow, color} = options


const salaries = {
  권혜미 : 50,
  이수연 : 3000,
  강예나 : 500,
  김태일 : 700
}

// const 권혜미 = salaries.권혜미
// const 이수연 = salaries.이수연
// const 강예나 = salaries.강예나
// const 김태일 = salaries.김태일


const {권혜미,이수연,강예나,김태일} = salaries;


console.log(salaries.강예나);


function setElementCss(options){

  const {width, height, overflow, color} = options;

  console.log(width,color);
}



const defaults = {
  width : 100,
  height : 200,
  overflow : false,
  color : 'red'
}


setElementCss(defaults)