import {Swiper} from 'swiper';
import { Navigation, Scrollbar, Autoplay, Grid } from 'swiper/modules';

const initProgramsSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="programs"]');
  const swiperBtnPrev = document.querySelector('[data-swiper-btn-prev="programs"]');
  const swiperBtnNext = document.querySelector('[data-swiper-btn-next="programs"]');
  const swiperScrollBar = document.querySelector('[data-swiper-scrollbar="programs"]');

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

export {initProgramsSlider};
