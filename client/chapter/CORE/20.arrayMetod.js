/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// const { doc } = require("prettier");

// Array.isArray : array 인지 아닌지 확인할 수 있는 방법
// Array.isArray([]) : true 다른건 다 false

// Object.prototype.toString.call() : 을 사용하면 정확히 어떤 건지 알려준다.
// Object.prototype.toString.call([]).slice(8, -1) : 을 사용해도 글자가 잘라져서 나온다 = Array

// const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';   = arrow function

// function nomalIsArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
// }  = 함수 선언문


// const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'; = arrow function

// function normalIsNull(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
// }  = 함수 선언문

// = typeof  보다 정확하게 체크 가능


/* 요소 순환 ---------------------------- */

// forEach

const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

// forEach : 값을 반환하지 않음. 중요

arr.forEach((item,index) => {
    // console.log(item, index);
})

people.forEach((item) => {     // 객체가 나온다. 배열안에 객체가 있기 때문에  .접근법으로 접근 가능
// console.log(item.name);
})

const span = document.querySelectorAll('span');

// 이벤트 처리할때 이 방식이 가장 좋은가요 ? no
// 이벤트 위임 event delegation
span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    // console.log(this,index);
  })

})  


/* 원형 파괴 ----------------------------- */
//  data 가 훼손되는 경우

// push
// pop
// unshift
// shift
// 저번주에 했던 내용 다시 한번 확인한다.


// reverse = 배열을 뒤집어버린다. [10000, 1000, 100, 10]
// arr.reverse()
// console.log(arr);


// splice = 맥가이버 칼이라고도 부른다.원하는곳에 넣고 빼고를 자유롭게 할수있다.
// arr.splice(1, 0,5,13)  
// console.log(arr);

// sort = arr 안에 있는 값들이 정렬이 된다.  유니코드 식으로 나오기때문에 [10, 100, 1000, 10000, 13, 5] 이런식으로 나온다. sort를 사용하면 원하는대로 안된다.
// arr.sort()

// compare function  = 사용해야 원하는대로 순서대로 나온다. 
// 반환 값 < 0 보다 작으면 a가 b보다 앞에 있어야한다. 라는 뜻이다. [5, 10, 13, 100, 1000, 10000]
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않는다 
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다. [10000, 1000, 100, 13, 10, 5]

// arr.sort((a,b) => {
//     return a - b;   // 결과를 꼭 return 해줘야 한다.
// })

// console.log(arr);


/* 새로운 배열 반환 ------------------------ */
// 기존의 값을 냅두고 사용


// concat  = 배열과 배열을 합친다.

const user = ['선범', '효윤', '준석'];

// const newArray = arr.concat(user);

const newArray = [...arr, ...user, 'js', 'css']

// console.log(newArray);

// slice = 몇번째부터 몇번째까지 잘라줘 라는게 슬라이스다. 그 잘라준 부분을 내보내준다.

const slice = arr.slice(2,5)
// console.log(slice);



// toSorted  = 원형을 파괴하지 않고 sort 가 됌
const toSorted = arr.toSorted((a, b) => {
    return b - a
})
// console.log(toSorted);

// toReversed = 원형을 파괴하지 않고 reverse 가 됌

const toReversed = arr.toReversed();

// console.log(toReversed);

// toSpliced = 원형을 파괴하지 않고 splice 가 됌   2에서 시작해서 제거될 갯수 : 0  사이에서 뒤에 item을 추가해줘 

const toSpliced = arr.toSpliced(2,0, 'javascript','css','react');
// console.log(toSpliced);

map : 진짜 중요 / 일단 배열을 받아서 새로운 배열을 반환하는데 focus 가 맞춰져있다. map이랑 filter 는 꼭 알아야한다. 원하는 항목을 내보낼때 map이라는걸 사용할 수 있다. map 함수는 return 이 있다.


const job = people.map((item,index)=>{
    return `<div>${item.profession}</div>`
  })
  
job.forEach((item) =>{
    document.body.insertAdjacentHTML('beforeend', item);
})
  

  console.log(job);

 정말중요 코드보고 한번 익혀보는 시간을 가지도록하자
  const job = people.map((item,index)=>{
    return /* html */`
      <div class="userCard">
        <div class="imageField">
          <img src="${item.imageSrc}" alt="" />
        </div>
        <span>이름:${item.name}</span>
        <span>직업:${item.profession}</span>
        <span>나이:${item.age}</span>
      </div>
    `
  })
  
피플 자료구조에서 나이만 모아놓은 배열ㅇ ㅣ필요하다 => 가공처리 나이 -1 내보내고 싶다.

const newAge = people.map((item) => {
 return item.age - 1;
})
  
console.log(newAge);


//   job.forEach((item)=>{
//     document.body.insertAdjacentHTML('beforeend',item);
//   })


/* 요소 포함 여부 확인 ---------------------- */

// indexOf  = 몇번째 인덱스에 있는지 알려준다.

// arr.indexOf(10);

// console.log(arr.indexOf(10));

// lastIndexOf = 뒤에서 몇번째 있는지 찾는다

// console.log(arr.lastIndexOf(10));

// includes = 배열안에 있는지 없는 확인해주고 boolean 값으로 나타내줌

// console.log(arr.includes(1000));

/* 요소 찾기 ------------------------------ */

// find = 해당하는 item 을 반환  돌다가 한번이라도ㅓ true 가 나오면 그만둔다. 그렇기에 한번만 나온다.

// const find = people.find((item) => {
//  return item.id > 1
// })

// const find = people.find((item) => {
//     return item.name === '이현주'
//    })

// console.log(find);

// findIndex  = index 에 맞게 반환해달라

const findIndex = people.findIndex((item) =>{
    return item.id === 3
})

// console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

// filter = array를 반환 / find 랑 다른점은 find는 하나만 찾지만 filter 는 반환된 모든 값을 보여준다.

const filter = people.filter((item) => {
return item.id > 2
})

// console.log(filter);


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce = 초기값이 없으면 people 의 첫번째 값을 acc 값에 지정한다. 이때 acc 값은 객체이다. 이때[objcet Object] + 40 / 그 후에 acc에 다시 [objcet Object] + 40 값이 할당하고 다음 cur 값은 30을 추가한다. 이때 30 / 40 등등의 숫자는 people 의 값인거다. 그렇기에 초기값은 0을 주어야 한다.

const totalAge = people.reduce((acc,cur)=> {
    return acc + cur.age
},0)

// console.log(totalAge);

// const totalAge = people.reduce((acc,cur)=>{
//     return acc + cur.age
//   },0)
  
  
//   // console.log(totalAge);
  
//   const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');
  
  
//   document.body.insertAdjacentHTML('beforeend',template);

// reduceRight

/* string ←→ array 변환 ------------------ */


const str = '봉석 윤진 예나 시연 진만 정아'

// split =  문자를 가져다가 배열로 만들어주는 역할

const stringToArray = str.split(' ')

// console.log(stringToArray);

// join = 배열을 가지고 문자로 만들어주는 역할

const arrayToString = stringToArray.join('/')

// console.log(arrayToString);



