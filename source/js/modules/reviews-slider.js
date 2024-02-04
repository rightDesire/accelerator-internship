import {Swiper} from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const initReviewsSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="reviews"]');
  const swiperBtnPrev = document.querySelector('[data-swiper-btn-prev="reviews"]');
  const swiperBtnNext = document.querySelector('[data-swiper-btn-next="reviews"]');
  const swiperScrollBar = document.querySelector('[data-swiper-scrollbar="reviews"]');

  const swiperOptions = {
    modules: [Navigation, Scrollbar],
    loop: isLoop,
    navigation: {
      nextEl: swiperBtnNext,
      prevEl: swiperBtnPrev,
    },
    scrollbar: {
      el: swiperScrollBar,
      draggable: false,
    },
    breakpoints: breakpointSettings,
  };

  return new Swiper(swiperWrapper, swiperOptions);
};

export {initReviewsSlider};
