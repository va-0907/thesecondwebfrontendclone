const question = document.getElementById('question');
const optionBox = document.querySelector('.option-box');
const header = document.querySelector('.header');
const sectionHero = document.querySelector('.section-hero');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-icon');
const xIcon = document.querySelector('.x-icon');
const sectionMenu = document.querySelector('.section-menu');
const contentMenu = document.querySelector('.container-menu-nav');
const menuLinks = document.querySelectorAll('.menu-click');

var countOption = 0;
var countMenu = 0;

menuLinks.forEach((el) => {
    el.onclick = () => {
        countMenu++;
        sectionMenu.style.display = 'none';
        xIcon.style.display = 'none';
        menu.style.display = 'block';
    }
})

menuBtn.onclick = () => {
    countMenu++;
    if (countMenu % 2 != 0) {
        sectionMenu.style.display = 'block';
        xIcon.style.display = 'block';
        menu.style.display = 'none';
    } else {
        sectionMenu.style.display = 'none';
        xIcon.style.display = 'none';
        menu.style.display = 'block';
    }
}

question.onclick = () => {
    countOption++;
    if (countOption % 2 == 0) {
        optionBox.style.display = 'none';
    } else
        optionBox.style.display = 'block';
}

window.onscroll = function() {
    let headerScrollBar = window.pageYOffset - sectionHero.offsetHeight;
    if (headerScrollBar > 0) {
        header.style.backgroundColor = "#fbf9f9f1";
        header.style.position = "fixed";
        sectionMenu.style.position = "fixed";
    }
    if (headerScrollBar < 0) {
        header.style.backgroundColor = "#fdf2e9"
        header.style.position = "relative";
        sectionMenu.style.position = "absolute";
    }
}