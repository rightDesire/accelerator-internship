import { Swiper } from 'swiper';
import { Navigation, Pagination, Grid, Manipulation } from 'swiper/modules';

const initSwiper = (swiperWrapper, options) => new Swiper(swiperWrapper, options);

const updateSlider = (filter, swiper, slides) => {
  swiper.removeAllSlides();

  slides.forEach((slide) => {
    if (filter === 'all' || slide.getAttribute('data-category') === filter) {
      swiper.appendSlide(slide.cloneNode(true));
    }
  });

  swiper.update();
  swiper.slideTo(0);
};

const handleButtonClick = (button, swiper, buttons, slides) => {
  if (button.classList.contains('news__nav-btn--active')) {
    return;
  }

  buttons.forEach((btn) => btn.classList.remove('news__nav-btn--active'));
  button.classList.add('news__nav-btn--active');

  const filter = button.getAttribute('data-filter');
  updateSlider(filter, swiper, slides);
};

const initNewsSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="news"]');
  const swiperBtnPrev = document.querySelector('[data-swiper-btn-prev="news"]');
  const swiperBtnNext = document.querySelector('[data-swiper-btn-next="news"]');
  const swiperPagination = document.querySelector('[data-swiper-pagination="news"]');

  const swiperOptions = {
    modules: [Navigation, Pagination, Grid, Manipulation],
    loop: isLoop,
    navigation: {
      nextEl: swiperBtnNext,
      prevEl: swiperBtnPrev,
    },
    pagination: {
      el: swiperPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    breakpoints: breakpointSettings,
  };

  const mySwiper = initSwiper(swiperWrapper, swiperOptions);

  const buttons = document.querySelectorAll('[data-filter]');
  const slides = document.querySelectorAll('[data-category]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => handleButtonClick(button, mySwiper, buttons, slides));
  });

  return mySwiper;
};

export { initNewsSlider };
