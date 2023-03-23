replaceText(document.body)

function replaceText(element){
    if (element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType===Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){

        
        const newElement=document.createElement('span')
        newElement.innerHTML=element.textContent.replace(/Coronavirus/gi,
'<span class="rainbow">Coronavirus</span>')
element.replaceWith(newElement)
      
    }
    }

}