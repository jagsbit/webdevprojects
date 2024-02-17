
let todo=document.querySelector(".container input");
let listcontainer=document.querySelector(".list-container");
let btn=document.querySelector(".container button");
show();
btn.addEventListener("click",function(){
    // console.log(todo.value);
    if(todo.value==''){
        alert("enter your todo");
        save();
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=todo.value;
        listcontainer.appendChild(li);
        let btn=document.createElement("button");
        btn.innerHTML="x";
        btn.style=" background-color: red; color: white; border: none; outline: none;   position: absolute; right:20px;   border-radius: 50%;"
        li.appendChild(btn);
       
        save();
    }
    todo.value="";

});
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
        save();
    }

});
function save(){
    localStorage.setItem("todo",listcontainer.innerHTML);
    
}
function show(){
    if(localStorage.getItem==null){
        listcontainer.innerHTML='';
        return;
    }
    listcontainer.innerHTML=localStorage.getItem("todo");
}

