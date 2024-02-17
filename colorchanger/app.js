 let box=document.querySelector('.box');
 let color="#"
 let hex="0123456789ABCDEF"
 setInterval(()=>{
      for(let i=0;i<6;i++){
           color+=hex[Math.round(Math.random()*15)]
      }
      box.style.backgroundColor=color;
      color="#"
 },2000)