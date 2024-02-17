//stone-1
//paper-2
//scissor-3
document.querySelector(".play").addEventListener("click",function(){
    var a=prompt("Enter your choice stone-1 paper -2 scissor-3");
    var b=Math.floor(3*Math.random())+1;
    var winner=0;
    document.querySelector(".img1").setAttribute("src","img"+a+".png");
    document.querySelector(".img2").setAttribute("src","img"+b+".png");
     
    if((a==1&&b==2)||(a==2&&b==1)){
        winner=2;
    }
    else if((a==2&&b==3)||(a==3&&b==2)){
        winner=3;
    }
    else if((a==1&&b==3)||(a==3&&b==1)){
        winner=1;
    }
    if(winner==0){
        document.querySelector("h1").innerHTML="draw";
    }
    else if(winner==a){
        document.querySelector("h1").innerHTML="You Won";
    }
    else{
        document.querySelector("h1").innerHTML="Jags won";
    }
});
// document.querySelector(".play").addEventListener("click",function(){
//     var a=Math.floor(3*Math.random())+1;
//     var b=Math.floor(3*Math.random())+1;
//     var winner=0;
//     document.querySelector(".img1").setAttribute("src","img"+a+".png");
//     document.querySelector(".img2").setAttribute("src","img"+b+".png");
     
//     if((a===1&&b===2)||(a===2&&b===1)){
//         winner=2;
//     }
//     else if((a===2&&b===3)||(a===3&&b===2)){
//         winner=3;
//     }
//     else if((a===1&&b===3)||(a===3&&b===1)){
//         winner=1;
//     }
//     if(winner===0){
//         document.querySelector("h1").innerHTML="draw";
//     }
//     else if(winner===a){
//         document.querySelector("h1").innerHTML="Player 1 wins";
//     }
//     else{
//         document.querySelector("h1").innerHTML="Player 2 wins";
//     }
// });



// if(a>b){
//     document.querySelector("h1").innerHTML="Player 1 wins";
// }
// else if(b>a){
//     document.querySelector("h1").innerHTML="Player 2 wins";
// }
// else{
//     document.querySelector("h1").innerHTML="draw";
// }
// document.querySelector(".img1").setAttribute("src","/images/dice"+a+".png");
// document.querySelector(".img2").setAttribute("src","/images/dice"+b+".png");
 