function bindEvent(node,type,handler){
    if(typeof node === 'string'){
      node = getNode(node);
    }
  
    if(!(/mouseenter|click|mousemove|mouseout|mouseover\b/g).test(type)){
      throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
    }
  
    node.addEventListener(type,handler);


    return ()=> node.removeEventListener(type,handler);
    
  }

// 그건 문자열로 바뀌었을때 작동시키기게 위해 쓴다 위에 if
