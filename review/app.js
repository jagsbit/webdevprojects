let arr=[
    {
        name:'Jags',
        prof:'Developer',
        img:"jags.jpg"
    },
    {
        name:'Sumit',
        prof:'Baniya',
        img:"sumit.jpg"

    },
    {
        name:'suraj',
        prof:'head coordinator',
        img:"suraj.jpg"

    },
    {
        name:'Mahendra',
        prof:'Dulha',
        img:"mahendra.jpg"

    },
    {
        name:'Shravan',
        prof:'Nashedi',
        img:"shravan.jpg"

    },
    {
        name:'Akshit',
        prof:'Bewada',
        img:"akshit.jpg"

    },
    {
        name:'Sunil',
        prof:'Lawda',
        img:'sunil.jpg'

    }
]
let name=document.querySelector('.name')
let prof=document.querySelector('.prof')
let inc=document.querySelector('#inc')
let desc=document.querySelector('#desc')
let img=document.getElementById('img')
let random=document.querySelector('.random')
let index=1;
let update=(index)=>{
    if(index<arr.length){
        name.innerHTML=arr[index].name
        prof.innerHTML=arr[index].prof
       img.setAttribute('src',arr[index].img)

    }
    
}
inc.addEventListener('click',()=>{
       index=(index+1)%arr.length;
       update(index)
})
desc.addEventListener('click',()=>{
    index=(index+arr.length-1)%arr.length
    update(index)
})
random.addEventListener('click',()=>{
    index=Math.round(Math.random()*(arr.length-1))
     update(index)
})
 
