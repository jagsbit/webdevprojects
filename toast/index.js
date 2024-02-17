let box=document.querySelector(".tostBox");
let n=document.querySelectorAll(".btn").length;
for(i=0;i<n;i++){
    if(i==0){
       document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        let tost=document.createElement("div");
        tost.classList.add("tost");
        tost.classList.add("succes");
        tost.innerHTML='<i class="fa-solid fa-circle-check"></i> Sucess';
        box.appendChild(tost);
        setTimeout(()=>{
            tost.remove();
        },4000)
       })
      
    }
    else if(i==1){
        document.querySelectorAll(".btn")[i].addEventListener("click",function(){
            let tost=document.createElement("div");
           tost.classList.add("tost");
           tost.classList.add("error");
          tost.innerHTML= '<i class="fa-solid fa-circle-xmark"></i> error';
          box.appendChild(tost);
          setTimeout(()=>{
            tost.remove();
        },6000)
           })
    }
    else{
        document.querySelectorAll(".btn")[i].addEventListener("click",function(){
            let tost=document.createElement("div");
            tost.classList.add("tost");
            tost.classList.add("invalid");
            tost.innerHTML='<i class="fa-solid fa-circle-exclamation"></i>invalid';
            box.appendChild(tost);
            setTimeout(()=>{
                tost.remove();
            },6000)
           })
    }
   
}
