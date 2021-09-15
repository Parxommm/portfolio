const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu--active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});
