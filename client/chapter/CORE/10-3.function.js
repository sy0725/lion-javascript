/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

  console.log(resultX);
  console.log(resultY);
  console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식  , ...args : rest parameter   arrow
let calcAllMoney = (a, b, ...args) => {
     console.log(args);

     let total = 0;
     args.forEach((item) => {
     total += item
  })

  return args.reduce(function(acc, item){
   return acc + item;
  },0)

  return args.reduce((acc, item) => acc + item, 0);

     return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);

//   console.log(result);

// 화살표 함수와 this

// this를 왜쓰는지
// 이해하기 가장 쉬운 방법
// 일반함수인 선언문과 표현식에서는 나를 호출한 자신을 찾는거고 화살표함수는 window(부모) 를 불러온다
// 일반함수 : 나를 호출한 대상을 this 라고 한다.


// 함수 선언문

function normalFunctiom() {
  console.log(this);
}
// 함수 표현식

const expressionFunction = function () {
  console.log(this);
};
// 화살표함수식
const arrowFuction = () => {
  console.log(this);
};


// 객체 안에서 this
// 객체의 메서드를 정의할때는 화살표 함수보다 일반 함수가 더 좋은거 아닙니까 ? 맞다
//  매서드 안에서 함수를 호출할때는 화살표함수가 더 좋다? yes

const user = {
  total:0,
  name:'tiger',
  age:32,
  address:'경기도 수원시 세류동',
  grades:[80,90,100],
  totalGrades:function(){


    // function sayHi(){
    //   console.log(this);
    // }


    // sayHi()
    // console.log();

    // this.grades.forEach(function(item){

    //   console.log(this);
    //   // this.total += item;
    // })
    // console.log(this.total);


    
  }
}


























/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
