var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});


typewriter
  .pauseFor(1000)
  .typeString('Hi, I\'m Hargun')
  .start();

/*== MENU SHOW ==*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

    // SHOW
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

    // HIDDEN
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
    })

navLink.forEach( n => n.addEventListener('click', linkAction))

