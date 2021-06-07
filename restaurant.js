


/* Mobile version sidenav */

var menu=document.getElementById('menu');
var menuBtn=document.getElementById('menuBtn');
var sideNav=document.getElementById('sideNav');

menuBtn.addEventListener('click', fun1);

function fun1(){
    sideNav.classList.toggle("fun");
    menuBtn.classList.toggle("color");
    
    if(sideNav.classList.contains('fun'))

    {menuBtn.innerHTML=`<span class="menu"><i class="fas fa-times"></i>`}
    else{
        menuBtn.innerHTML=`<span class="menu"><i class="fas fa-bars"></i>`
    }

}




var smallLinks=document.querySelectorAll('#r');

smallLinks.forEach(function(link){

link.addEventListener('click', disappear);

function disappear(){

    sideNav.classList.toggle("fun");

    menuBtn.classList.toggle("color");
    
    if(sideNav.classList.contains('fun'))

    {menuBtn.innerHTML=`<span class="menu"><i class="fas fa-times"></i>`}
    else{
        menuBtn.innerHTML=`<span class="menu"><i class="fas fa-bars"></i>`
    }
}
}
)

/* Modal opening/closing */

var modalBtn=document.getElementById('mdclick');
var modalBox=document.getElementById('modal');
var closeModalBtn=document.getElementById('closemodal');


modalBtn.addEventListener('click', openModal);

function openModal(){
  modalBox.classList.toggle("show");
}

closeModalBtn.addEventListener('click', closeModal);

function closeModal(){
  modalBox.classList.toggle("show");
}


/* Floating food animation */

var animButton=document.getElementById('anim');

animButton.addEventListener('click', floating);

function floating(){
  
var spans=document.querySelectorAll('#icon');

for(var i=0; i<spans.length; i++) {
spans[i].children[0].classList.add('float');}

setTimeout(function(){

for(var i=0; i<spans.length; i++) {
spans[i].children[0].classList.remove('float');}
}, 8000)
};


/* Smooth scrolling */

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


