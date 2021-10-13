/*jshint esversion: 6 */

// Меню
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');
const menuLink = menu.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu--active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});

menuLink.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu--active');
  });
});

//Портфолио
const hamburgerPortfolio = document.querySelectorAll('.portfolio__item-name');
const portfolioReveal = document.querySelectorAll('.portfolio__reveal');
const portfolioTitle = document.querySelectorAll('.portfolio__reveal-title');

hamburgerPortfolio.forEach((item, i) => {
  item.addEventListener('click', () => {
    portfolioReveal[i].classList.add('portfolio__reveal--active');
  });
});

portfolioTitle.forEach((item, i) => {
  item.addEventListener('click', () => {
    portfolioReveal[i].classList.remove('portfolio__reveal--active');
  });
});

// Modal
const overlayModal = document.querySelector('.overlay');
const modal = overlayModal.querySelector('.modal');
const btnCloseModal = overlayModal.querySelector('.modal__close');

const closeModal = () => {
  overlayModal.classList.remove('overlay--active');
  modal.classList.remove('modal--active');
};

const showModal = () => {
  overlayModal.classList.add('overlay--active');
  modal.classList.add('modal--active');
};

overlayModal.addEventListener('click', (evt) => {
  if (evt.target.classList[0] === 'overlay') {
    closeModal();
  }
});
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeModal();
  }
});



// Page up
$(function(){
  $(window).scroll(() => {
    if ($(this).scrollTop() > window.innerHeight) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(() => {
    $("body").scroll();
  });

  $('.contacts__form').submit(function(evt) {
    evt.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.contacts__form').trigger('reset');
        showModal();
    });
    return false;
  });
});
