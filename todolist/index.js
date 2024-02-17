showNotes();
let btn=document.querySelector(".ct");
btn.addEventListener("click",function(){
    let titletext=document.querySelector(".tit").value;
    let todotext=document.querySelector(".todo").value;
    // console.log(title);
    // console.log(todo);
    let title=localStorage.getItem("title");
    let todo=localStorage.getItem("todo");
    if(title==null){
        titleObj=[];
    }
    else{
        titleObj=JSON.parse(title);
    }
    if(todo==null){
        todoObj=[];
    }
    else{
        todoObj=JSON.parse(todo);
    }
    titleObj.push(titletext);
    todoObj.push(todotext);
    localStorage.setItem("title",JSON.stringify(titleObj));
    localStorage.setItem("todo",JSON.stringify(todoObj));
    document.querySelector(".tit").value="";
    document.querySelector(".todo").value="";
    // console.log(localStorage.getItem('title'));
    // console.log(localStorage.getItem('todo'));
    showNotes();

});
function showNotes(){
    let title=localStorage.getItem("title");
    let todo=localStorage.getItem("todo");
    if(title==null){
        titleObj=[];
    }
    else{
        titleObj=JSON.parse(title);
    }
    if(todo==null){
        todoObj=[];
    }
    else{
        todoObj=JSON.parse(todo);
    }
    let html="";
    titleObj.forEach(function(item,i){
        html+=`<div class="box">
        <p><b>${titleObj[i]}</b></p>
        <p>${todoObj[i]}</p>
        <button id="${i}" onclick="deletetodo(this.id)" >Delete</button>
         </div>`;
    });
    
    // todoObj.forEach(element => {
    //     var todoNote=element;
    // });
    document.querySelector(".todolist").innerHTML=html;
}
function deletetodo(i){
    // console.log("deletin todo",i);
    let title=localStorage.getItem("title");
    let todo=localStorage.getItem("todo");
    if(title==null){
        titleObj=[];
    }
    else{
        titleObj=JSON.parse(title);
    }
    if(todo==null){
        todoObj=[];
    }
    else{
        todoObj=JSON.parse(todo);
    }
    titleObj.splice(i,1);
    todoObj.splice(i,1);
    localStorage.setItem("title",JSON.stringify(titleObj));
    localStorage.setItem("todo",JSON.stringify(todoObj));
    showNotes();
}
