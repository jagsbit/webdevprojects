let show = document.querySelector('.show');
let list = document.querySelector('.list');
show.addEventListener('click', () => {
   
    if (list.style.display === "none") {
        //console.log('clicked in');
        list.style.display = "block";
    } else {
        //console.log('clicked out');
        list.style.display = "none";
    }
});