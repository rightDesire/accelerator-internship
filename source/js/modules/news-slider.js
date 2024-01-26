import {Swiper} from '../vendor';

const initNewsSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="news"]');
  const swiperBtnPrev = document.querySelector('[data-swiper-btn-prev="news"]');
  const swiperBtnNext = document.querySelector('[data-swiper-btn-next="news"]');
  const swiperPagination = document.querySelector('[data-swiper-pagination="news"]');

  const swiperOptions = {
    loop: isLoop,
    navigation: {
      nextEl: swiperBtnNext,
      prevEl: swiperBtnPrev,
    },
    pagination: {
      el: swiperPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${(index + 1)}</span>`;
      },
    },
    breakpoints: breakpointSettings,
  };

  return new Swiper(swiperWrapper, swiperOptions);
};

export {initNewsSlider};
