import {Swiper} from '../vendor';

const initHeroSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="hero"]');
  const swiperPaginations = document.querySelector('[data-pagination="hero"]');

  const swiperOptions = {
    loop: isLoop,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    disableOnInteraction: false,
    pagination: {
      el: swiperPaginations,
      clickable: true,
    },
    breakpoints: breakpointSettings,
  };

  return new Swiper(swiperWrapper, swiperOptions);
};

export {initHeroSlider};
