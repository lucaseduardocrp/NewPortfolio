const header = document.querySelector("header");

window.onload = function(){
    AOS.init({
        duration: 1500,
    });
}

let menu = document.querySelector('.mobile-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};


