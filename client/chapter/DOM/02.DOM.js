/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document Object Model


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById

document.getElementById('message')
// console.log(message);
// - getElementsByTagName
// - getElementsByClassName       

 //getElement 는 옛날 문법으로 잘 사용은 하지않고 이제는 queryselector 을 사용하지만 사용성능은 위에게  더 좋다

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/



getNode('.first') // <span class='first'></span>

const first = getNode('.first')

const span = getNodes('span');

console.log(span);

 
 // - querySelector  / 선택자 안에는 css도 찾을 수 있다.  . 은 class #은 id
 
//  const first = document.querySelector('.first')
//  console.log(first);

// - querySelectorAll  / 전체를 다 불러온다.

// const list = document.querySelectorAll('span')
// console.log(list);

// - closest   처음 잡을땐 노드를 잡고 closest 를 해줘야한다.


// console.log(first.closest('h1')); // event delegation


/* 문서 대상 확인 */
// - matches

// 선택자 안에 class id 를 가지고 있는 대상ㅇ ㅣ있어 ?
// console.log(first.matches('#message'));

// - contains

// 선택자의 자식들 중에 해당 element 가 있어 ?
// console.log(first.contains(secondSpan));

// 클래스를 포함하고 있어 ?
// node.classList.contains();