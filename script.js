let menu =  document.querySelector('.menu');
let navbar = document.querySelector('.nav')



menu.addEventListener('click',function(){
    navbar.classList.toggle('active');
})


window.onscroll = () =>{
    navbar.classList.remove('active');
}