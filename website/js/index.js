/** mobile menu function */
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const mobileMenuBtn = document.querySelector('.menu-btn');
const mobileMenuBtnClose = document.querySelector('.mobile-nav-close-btn');

mobileMenuBtn.addEventListener('click', (e) => {
  mobileNav.classList.toggle('isActive');
  header.classList.toggle('menu-slide');
  main.classList.toggle('menu-slide');
});

mobileMenuBtnClose.addEventListener('click', (e) => {
  mobileNav.classList.toggle('isActive');
  header.classList.toggle('menu-slide');
  main.classList.toggle('menu-slide');
});

/** basket functions */
const basketBtn = document.querySelector('.header-basket');
const basketBtnMobile = document.querySelector('.mobile-basket');
const basketDropdown = document.querySelector('.basket-dropdown');
const basketDropdownMobile = document.querySelector('.basket-dropdown-mobile');

basketBtn.addEventListener('click', (e) => {
  basketDropdown.classList.toggle('basketVisible');
});

basketBtnMobile.addEventListener('click', (e) => {
  basketDropdownMobile.classList.toggle('basketVisible');
});

/** slider function */
const setupSlider = () => {
  const scrollableEl = document.querySelector('.js-slider-scrollable');
  const prevEl = document.querySelector('.js-slider-prev');
  const nextEl = document.querySelector('.js-slider-next');

  if (!scrollableEl) {
    return;
  }

  const handleControlClick = (e) => {
    const isPrev = e.target.classList.contains('is-prev');
    const scrollX = document.querySelector('.product-slider-item').offsetWidth;

    scrollableEl.scrollBy({
      left: isPrev ? (scrollX + 27) * -1 : scrollX + 27,
      behavior: 'smooth',
    });
  };

  prevEl.addEventListener('click', handleControlClick);
  nextEl.addEventListener('click', handleControlClick);
};

document.addEventListener('DOMContentLoaded', setupSlider);
