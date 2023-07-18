/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log(first.className); // getter 
// console.log(first.className = 'box'); // setter 
// console.log(first.className = 'second'); // setter 

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

// first.classList.add('hello')  // 클래스 뒤에 hello가 추가
// first.classList.removd('hello') // 해당 클래스를 제거 , 정확하게 제거할 대상을 적어줘야한다.
// first.className = ''; // class 이름들이 전부 날라간다.
// first.classList.toggle('is-active') // 클래스가 있으면 넣어주고 없으면 빼준다. / boolean 값으로 반환한다. 추가되면 true 지워지면 false
// first.classList.contains('hello')  // 해당 값이 있는지 확인 값은 boolean 으로 나온다

// attr(first,'class' , ' ')


/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


first.style.backgroundColor = 'orange' // setter
console.log(first.style.backgroundColor); // getter













/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`