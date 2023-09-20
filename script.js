let menu =  document.querySelector('.menu');
let navbar = document.querySelector('.nav')



menu.addEventListener('click',function(){
    navbar.classList.toggle('active');
})


window.onscroll = () =>{
    navbar.classList.remove('active');
}


let list = document.querySelectorAll('.list');

for(let i=0; i < list.length; i++){

     list[i].addEventListener('click', function(){
        let j=0;

            while( j < list.length ){
                list[j++].className = "list";
            }
        list[i].className = "list active";
     })
}
