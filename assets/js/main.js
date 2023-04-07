const header = document.querySelector("header");
const nav = document.querySelector("nav");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
    nav.classList.toglle("sticky-nav", window.scrolY > 0)
});

// let menu = document.querySelector('.mobile-menu');
// let navbar = document.querySelector('.nav-bar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('open');
// };

// const sr = ScrollReveal ({
//     distance: '25px',
//     duration: 2500,
//     reset: true
// })

// sr.reveal('.home',{delay:190, origin: 'bottom'})

// sr.reveal('.about,.skills,.service,.project,.contact',{delay: 200, origin: 'right'})