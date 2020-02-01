
addItem = ()=>{
var input = document.getElementById('input')
var item = input.value
ul = document.getElementById('list')
var textNode = document.createTextNode(item)

if(item==''){
    // const newP = document.createElement('p');
    // newP.textContent = 'Enter your todo'
    // document.querySelector('ul#list').appendChild(newP)
    return false;
    
} else{
    li = document.createElement('li')
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id','check')
    var label = document.createElement('label')
    label.setAttribute('for','item')   //optional
    

    //add elements on web page

    ul.appendChild(label)
    li.appendChild(checkbox)
    label.appendChild(textNode)
    li.appendChild(label)
    ul.insertBefore(li,ul.childNodes[0])
   
    
}
}
removeItem = ()=>{
    li = ul.children
    for(let i=0;i<li.length;i++){
        while(li[i]&&li[i].children[0].checked){
            ul.removeChild(li[i])
        }
    }
}

removeAll = ()=>{
    li = ul.children
    for(let i=0;i<li.length;i++){
        while(li[i]){
        ul.removeChild(li[i])
        }
    }
}

var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var remAll = document.getElementById('rAll')
remAll.addEventListener('click',removeAll)







