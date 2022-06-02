var Tobtn=document.getElementById('todo-btn');
var TodoList=document.getElementById('todo-list');
var todoItem=document.getElementById('todo-item');
var Inp =document.getElementById('inp');
var currentInputval=''
Inp.addEventListener('input',function(e){
    
   currentInputval= e.target.value;
});


Inp.addEventListener('keyup', function(e){
if(e.key==="Enter"){
   
    addListItem();
}
});



function addListItem(e){
    if (currentInputval !== undefined && currentInputval !== null && currentInputval !== ''){
   var newElement= document.createElement('li');
   console.log(newElement);

   //console.log(Textnode);
  
   TodoList.appendChild(newElement);
   Inp.value='';
   currentInputval.value='';
   var count =TodoList.childElementCount;
   
   var Textnode=document.createTextNode(currentInputval);

   newElement.append(Textnode);
   list.
   newElement.id="li "+count;
   var todoItem=TodoList.firstElementChild;
   TodoList.insertBefore(newElement,todoItem);
   
//    if (count % 2 == 0){
//        document.getElementById('body').style.backgroundImage="url('images/bg1.jpg')"
//    }
//    else{
//        document.getElementById('body').style.backgroundImage="url('images/bg2.jpg')";
//    }
}
else{
    alert('please insert some text');
}
};

Tobtn.addEventListener('click',addListItem);