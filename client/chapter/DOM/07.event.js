/* --------------------- */
/* Event Handling        */
/* --------------------- */

// window.addEventListener('DOMContentLoaded', function () {
//     const first = document.querySelector('.first');
//     console.log(first);
//   });
//  defer 를 안줬을때 사용 하는 법

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 선호하는 방식은 아니다! onclick 를 넣게되면 하나만 들어간다. () 실행을 해줘야한다

// function handler(){
//     console.log('HTML 속성에서 이벤트를 실행합니다');
// }

// 2. DOM 프로퍼티 : element.onclick = handler
//  HTML 속성 처럼 단일대상을 하기때문에 많이 쓰이지 않는다. 자동으로 실행시키기 때문에 () 안써도 된다.

function handler() {
  console.log('DOM 속성에서 이벤트를 실행합니다');
}
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])   가장 좋은방법

/* 이벤트 추가/제거 --------------------------------------------------------- */
//  eventlistener 을 많이 넣으면 성능 issue 가 있다.

// - addEventListener  이벤트를 건다
// - removeEventListener  이벤트를 제거 , 제거가 안되는 순간이 온다 그때가 언제냐면

// const first = getNode('.first');

// click, mouseover, mousemove , mouseout , mousedown , mouseup

// first.addEventListener('click', handleClick)

// const remove = bindEvent('.first', 'click', handleClick);

// setTimeout(() => {
//   remove();
// }, 3000);

// 이벤트 객체(event object)
// 이벤트를 실행하면 브라우저는 이벤트 객체라는걸 만들어낸다. 여기서 이벤트 객체는 handleclick 옆 ()
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수(argument)로 형태를 전달한다.
const ground = getNode('.ground')
const ball = getNode('#ball')




function handleClick(e) {

let x = e.offsetX;
let y = e.offsetY;

 ball.style.transform = `translate(${x}px,${y}px)`
}



ground.addEventListener('click', handleClick);



// throttle debounce
// throttle = 특정 시간마다 함수를 실행하는 메서드
// debounce = 사용자가 뭔가를 하고 있으면 실행하지 않는다.


function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));