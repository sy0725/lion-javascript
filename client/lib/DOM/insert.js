function insertLast(node , text){
    if(typeof node === 'string') node = getNode(node);

    if(node.nodeType !== document.ELEMENT_NODE){
       throw new ReferenceError('insertLast 함수의 첫  번째 인수는 ELEMENT_NODE 이여야 합니다.') 
    }
    node.insertAdjacentHTML('beforeend' , text);
}

function insertBefore(node , text){
    if(typeof node === 'string') node = getNode(node);

    if(node.nodeType !== document.ELEMENT_NODE){
       throw new ReferenceError('insertBefore 함수의 첫  번째 인수는 ELEMENT_NODE 이여야 합니다.') 
    }
    node.insertAdjacentHTML('beforebegin' , text);
}

function insertFirst(node , text){
    if(typeof node === 'string') node = getNode(node);

    if(node.nodeType !== document.ELEMENT_NODE){
       throw new ReferenceError('insertFirst 함수의 첫  번째 인수는 ELEMENT_NODE 이여야 합니다.') 
    }
    node.insertAdjacentHTML('afterbegin' , text);
}

function insertAfter(node , text){
    if(typeof node === 'string') node = getNode(node);

    if(node.nodeType !== document.ELEMENT_NODE){
       throw new ReferenceError('insertAfter 함수의 첫  번째 인수는 ELEMENT_NODE 이여야 합니다.') 
    }
    node.insertAdjacentHTML('afterend' , text);
}

