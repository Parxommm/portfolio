// Меню
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu--active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});


// Метрики
const metricsValue = document.querySelectorAll('.metrics-list__value');
const metricsBar = document.querySelectorAll('.metrics-list__bar');

metricsValue.forEach((item, i) => {
  if (Number(item.innerHTML.slice(0, -1)) >= 100) {
    metricsBar[i].style.width = '100%';
  } else {
    metricsBar[i].style.width = item.innerHTML;
  }
})
