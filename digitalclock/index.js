 setInterval(async function(){
    let a= new Date();
    document.querySelector(".hr").innerHTML=a.getHours()+":";
    document.querySelector(".mn").innerHTML=a.getMinutes()+":";
    document.querySelector(".sc").innerHTML=a.getSeconds();
    document.querySelector(".dt").innerHTML=a.getDate()+":";
    document.querySelector(".mt").innerHTML=a.getMonth()+1+":";
    document.querySelector(".yr").innerHTML=a.getFullYear();

 },1000);