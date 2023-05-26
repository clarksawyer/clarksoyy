window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})

var fanny = document.getElementsByTagName('body')[0];
var ling = document.getElementById('label');
ling.addEventListener('click',function () {
    ling.classList.toggle('actives');
    fanny.classList.toggle('dark');
})

var clark = document.querySelector('.hamburger');
clark.onclick = function () {
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('active');
}