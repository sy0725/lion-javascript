/* ---------------- */
/* Condition        */
/* ---------------- */



// if('0'){
//   console.log('항상 실행됩니다');
// } else {
//   console.log('조건에 부합하지 않습니다');
// }



// let result = prompt('자바스크립트의 공식 이름은 무엇일까요?', '');

// if(result === 'ECMAScript'){
//   console.log('정답입니다')
// } else {
//   console.log('모르셨나요 ? 정답은 ECMAScript입니다');
// }


// let value = prompt('숫자를 입력하세요.', 0);

// if(value > 0){
//   console.log(1);
// } else if( value < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// let a = 1;
// let b = 2;

// let result = (a + b < 4) ? '미만' : '이상';




// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');





// 영화 볼거니?
let goingToWatchMovie = 'yes';


// if 문(statement)
//볼거니 누구랑볼거니

if(!didWatchMovie) {

  let goingToWatchMovie = confirm('영화볼거니?')

  if(goingToWatchMovie) {
    let withWho = confirm('누구랑 볼거니?', '');

    if(withWho === '여자친구'){
      console.log('오호');
    } else if(withWho === '가족')
    console.log('와우');
    
  } else {
    console.log('잘봐');
  }


  } else {
  let alone = confirm('너 혼자 봤니?')

  if(alone) {
    let didCry = confirm('너 울었니?')

    if(didCry) {
      console.log('너.. 찌질이네');
    } else {
      console.log('너 T야 ?');
    }
  }

  console.log('봤어');
}




// if(didWatchMovie === 'yes'){
//  console.log('무슨 영화 봤어?');
// } else if(goingToWatchMovie === 'yes'){
//   console.log('나랑 보러 갈래 ?');
// } else {
//   console.log('그래...');
// }

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식