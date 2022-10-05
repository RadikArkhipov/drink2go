const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__user-nav-toggle');

header.classList.remove('page-header--nav-nojs');
navToggle.addEventListener('click', function() {
  header.classList.toggle('page-header--nav-open');
});

const introSliderContainer = document.querySelector('.intro__slider-container');
const introSliderPagination = document.querySelector('.intro__slider-pagination');

if (introSliderContainer) {
  const nextButton = introSliderContainer.querySelector('.intro__slider-btn--next');
  const prevButton = introSliderContainer.querySelector('.intro__slider-btn--prev');

  new Swiper(introSliderContainer, {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    pagination: {
      el: introSliderPagination,
      clickable: true,
    }
  })
}

