let toggle=document.querySelector('#toggle')
let navbar=document.querySelector('.nav-bar')
let close=document.querySelector('#close')
toggle.addEventListener('click',()=>{
         if(navbar.classList.contains('show-bar'))
                    navbar.classList.remove('show-bar')
        else
                 navbar.classList.add('show-bar')   
})
close.addEventListener('click',()=>{
    navbar.classList.remove('show-bar')
})
