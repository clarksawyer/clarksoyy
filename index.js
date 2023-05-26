var clark = document.querySelector('.hamburger');
clark.onclick = function () {
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('active');
}

var fanny = document.getElementsByTagName('body')[0];
var ling = document.getElementById('label');
ling.addEventListener('click',function () {
    ling.classList.toggle('actives');
    fanny.classList.toggle('dark');
})

var hayabusa = document.getElementById('hacker');
hayabusa.onclick = function () {
    var gusion = document.querySelector('.hacker-answer');
    gusion.classList.toggle('hackers');
}

var olok = document.getElementById('security');
olok.onclick = function () {
    var gwapo = document.querySelector('.security-answer');
    gwapo.classList.toggle('securitys');
}

window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})