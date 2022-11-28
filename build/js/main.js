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

const map = L.map('map', {scrollWheelZoom:false}).setView([59.968137, 30.316272], 18,5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const iconMapPin = L.icon ({
  iconUrl: 'img/icon-map-pin.svg',
  iconSize: [38, 50],
});

const marker = L.marker([59.968137, 30.316272], {icon: iconMapPin}).addTo(map);
marker.bindPopup("Санкт-Петербург, набережная реки Карповки, дом 5").addTo(map);
