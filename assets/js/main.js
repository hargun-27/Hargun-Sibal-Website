let menu = document.querySelector(".menu-btn");
let navbar = document.querySelector(".nav");

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

menu.addEventListener("click", function() {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  menuBtn.classList.remove('open');
  menuOpen = false;
};

