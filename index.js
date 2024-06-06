let menuico = document.querySelector('#menu-icono');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('activo');
                documen.querySelector('header nav a [href*=' + id + ' ]').classList.add('activo')
            })
        }
    })
}


menuico.onclick = () => {
    menuico.classList.toggle('bx-x');
    navbar.classList.toggle('activo');
}