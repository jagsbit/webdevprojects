
function add(){
    var a=document.getElementsByClassName("inp")[0].innerHTML;
    alert("a is "+a);
}
document.querySelector(".btn1").addEventListener("click",add);