// /* ------------------------------------ *//
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

// HTML은 속성, HTML 속성을 JS 로 가져온다면 property / 항상 1:1 맵핑은 아니다.
// HTML 의 표준속성이 아닐경우 property로 사용할 수 없다.

const first = getNode('.first')

// console.dir(first.className);


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

// first.hasAttribute('') = 매개변수 안에 속성에 여부를 확인해주는데 표준/비표준을 신경쓰지 않고 여부만 판단해준다. 값은 boolean 
// console.log(first.hasAttribute('class')); = true

// first.getAttribute('') = 매개변수 안에 속성값을 가져와라 라는 의미. 표준/ 비표준을 신경쓰지 않고 가져온다.
// console.log(first.getAttribute('class')); = first

// first.setAttribute('title', '메세지') = first 라는 대상에 title이라는 속성에 메세지라는 값을 넣어주겠다 라는 의미이다.

// console.log(first.setAttribute('class', 'second')); = 기존에 있던 class 에 다시 설정을 해준다면 기존에 있던 값을 지워버린다.

// first.removeAttribute('title')  = first 에 title이라는 속성을 지운다


// console.log(first.attributes);   first 안에 있는 모든 attributes를 보여준다.

// for (let att of first.attributes) {
//     console.log(att);
// }
// literator 확인 후 for of 문 순회



console.log(first.getAttribute('id')); // message

function getAttr(node, prop){   // 선언부

// 0. 넘어온 대상이 문자인지를 쳌,
// 1. 체크 후 element node 로 변경해 줘야함.


    // const node = ',first'
    // const prop = 'id'


    if(typeof node === 'string'){
        node = getNode(node)
    }       // validation

   return node.getAttribute(prop)

}

getAttr('.second' , 'class')   // 실행부

// console.log(getAttr('.first', 'class')); // message


console.log(first.setAttribute('type' , '메세지'));

function setAttr(node, attr , value){

    return node.setAttribute('node','attr','value')
}


// first.setAttr('type' , '메세지');


function setAttr(node, prop,value){

    if(typeof node === 'string'){
    node = getNode(node)
    }
    
    if(typeof prop !== 'string'){
        throw new TypeError('setAttr 함수의 prop 값은 string 이여야만 합니다.')
    }

    if(!node[prop] && prop !== 'class' && prop !== 'title'){
        node.dataset[prop] = value
        return
    }

    node.setAttribute(prop,value);
}

setAttr('.first' , 'title' , 'playing')



// getAttr()
// setAttr()

// attr('.first', 'class') // getter
// attr('.first', 'class', 'second') // setter


// 작은 함수를 만들고 보다 큰 함수로 넘어가는 단계이다.


// 일반함수
// function attr(node,prop,value){

    // if(!value){
    //  return getAttr(node,prop)
    // }else {
    //     setAttr(node,prop,value)
    // }

//    return !value ? getAttr(node,prop) : setAttr(node,prop,valuse)
// }

// arrow function

// const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,valuse)


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset = 사용자 정의 속성을 사용할땐 비표준속성 앞에 data- 를 꼭 붙혀야한다.

// console.log(first.dataset.tabIndex);  = getter 받아오기도 가능하다.

// console.log(first.dataset.animation = 'pause'); = setter 도 가능하다.
