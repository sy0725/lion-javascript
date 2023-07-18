/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

// 과거의 유물

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

// 과거의 유물


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

// 과거의 유물



// 현재 배워야하는 부분
/* 특정 위치에 삽입 --------------------------------------------------------- */

// - elementNode.insertAdjacentHTML(position(어디에 넣은건지), 값)
//  insertAdjacentHTML(beforeend, beforebegin / afterbegin, afterend , 태그)


// h1.insertAdjacentHTML('beforeend', '<div>할 수 있 다 포 기 하 지 말 자</div>') // body 끝 즉 끝나기 전에

// h1.insertAdjacentHTML('beforebegin', '<div>나는 가능하다</div>') // body body태그가 시작하기 전에

// h1.insertAdjacentHTML('afterbegin' , '<div>변할거야</div>') // body 태그가 시작한 후

// h1.insertAdjacentHTML('afterend' , '<div> 보여 줄게 </div>') // body 태그가 끝 난 후

// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

const h1 = getNode('h1');

const template =` 
<div class="box>${ 10 + 20 }</div>
`

h1.insertAdjacentHTML('beforeend' , template)


const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];


// forEach => 반환 X
// reduce => 아무거나
// fliter => 배열을 반환
// map => 배열을 반환 return 해야한다



const todo = getNode('.todo')

//  1. 태그를 생성하기
// `<li>${data[0]}</li>`
//  2. 태그 안에 item 값 넣기

//  3. 생성된 태그를 내보내기(배열)

const todoList = data.map((item) => {
    return `<li>${item}</li>`
   })


   
// console.log(todoList);
//  4. 내보낸 배열을 순환하기

todoList.forEach((item) => {


    //  5. 반복문 안에서 랜더링하기
    // todo.insertAdjacentHTML('beforeend',item)
    insertLast(todo,item)
})




//  6. 렌더링

// document.body.insertAdjacentHTML('beforeend' ,todoList);

// document.querySelector('.todo').insertAdjacentHTML('beforeend', todoList)






insertLast('.todo' , '<li>문자하기</li>')



