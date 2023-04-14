const header = document.querySelector("header");

let menu = document.querySelector('#mobile-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

typeWrite(document.querySelector(".typewriter"));

function typeWrite(elemento) {
    const textoArray = elemento.innerText.split("");
    elemento.innerText = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerText += letra;
      }, 75 * i);
    });
  }

  

