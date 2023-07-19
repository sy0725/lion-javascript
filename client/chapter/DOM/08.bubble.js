/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */
// 아래서 위로 보글보글 올라가는 걸 의미

const section = getNode('section')
const article = getNode('article')
const p = getNode('p')


section.addEventListener('click',()=>{
    console.log('%c section','color:orange');
  })
  
  article.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('%c article','color:dodgerblue');
  })
  
  p.addEventListener('click',(e)=>{
    e.stopPropagation()   // 아래까지 가는걸 방지하는 메서드 원하는 항목들만 체크 가능하다. 제일많이사용
    console.log('%c p','color:hotpink');
  })


/* 캡처링 ----------------------------------------------------------------- */


// section.addEventListener('click',()=>{
//     console.log('%c section','color:orange');
//   },true)
  
//   article.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     console.log('%c article','color:dodgerblue');
//   },true)
  
//   p.addEventListener('click',(e)=>{
//     // e.stopPropagation()   // 아래까지 가는걸 방지하는 메서드 원하는 항목들만 체크 가능하다. 제일많이사용
//     console.log('%c p','color:hotpink');
//   },true)


// //  캡처링을 하게되면 기존 p , article , section 이 아닌 반대로 나온다. 식의 끝에  true를 붙혀진다.
