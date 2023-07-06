/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2023;
String(YEAR);
console.log(typeof String(YEAR));  //명시적 형변환
console.log( YEAR + '');  // 암시적 형변환

// undefined, null

let days = null;
console.log(typeof String(days));  // 명시적 형변환
console.log( null + '');    // 암시적 형변환

let undef = undefined;
console.log(typeof String(undefined));
console.log( undefined + '');

// boolean

let isClicked = true;
console.log(typeof String(isClicked));
console.log( true + '');


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));


// null

let bankBook = null;
console.log(Number(bankBook));


// boolean
let cutie = true;
console.log(Number(cutie));

// string

let num = '250';
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string

let width = '105.3px';
console.log( Number(width));

let w = window.parseFloat(width);
let e = window.parseInt(width);

console.log(e);
console.log(w);


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log( Boolean(friend));
console.log( Boolean(bankBook));
console.log( Boolean(0));
console.log( Boolean(NaN));
console.log( Boolean(''));
console.log( Boolean(1) );
console.log( Boolean(0) );
console.log( !false );

console.log('암시적 형 변환 : ' + !false );

