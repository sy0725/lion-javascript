/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[10];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(1,3);
let subString = message.substring(1,3);
let subStr = message.substr(1,3);   // 요즘 잘 안쓴다


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
let lastIndexOf = message.lastIndexOf('m');
let includes = message.includes('Less');
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('Less');


// 공백 잘라내기
let trimLeft = message.trimLeft();  // 레거시
let trimRight;



let str = '         abcdd          '

let str2 = '   a   n c  c   d     d k l      w';

str2.replace(/\s*/g,'');

function normalText(string){
    return string.replace(/\s*/g,'')
}

normalText(str2)

let trim = message.trim(str);




// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase ;
let toPascalCase;


function toCamelCase(string) {
    return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
  }
  
  function toPascalCase(string) {
    let name = toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1);
  }