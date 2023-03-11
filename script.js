const toggleButton = document.getElementsByClassName('menu-btn')[0];
const centermenu = document.getElementsByClassName('center-menu');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<centermenu.length; i++)
    centermenu[i].classList.toggle('active');
});

const animateButton = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('image45');
animateButton.addEventListener('click', function() {
    for(var i=0; i<menu.length; i++)
    menu[i].classList.toggle('active1');
});