import {initHeroSlider} from '../../modules/hero-slider';
import {initProgramsSlider} from '../../modules/programs-slider';

const vpDesktop = 1440;
const vpTablet = 768;
const vpMobile = 320;
const vpZero = 0;

const loop = {
  hero: true,
  programs: false,
};

const initSlide = {
  programsDesktop: 3,
  programsTablet: 2.12,
  programsMobile: 1,
};

const breakpointsHero = {
  [vpDesktop]: {
    allowTouchMove: false,
  },
  [vpTablet]: {
    allowTouchMove: true,
  },
  [vpMobile]: {
    allowTouchMove: true,
  },
};

const breakpointsPrograms = {
  [vpDesktop]: {
    allowTouchMove: false,
    slidesPerView: initSlide.programsDesktop,
    spaceBetween: 32,
    scrollbar: {
      dragSize: 392,
    },
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: initSlide.programsTablet,
    spaceBetween: 30,
    scrollbar: {
      dragSize: 324,
    },
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: initSlide.programsMobile,
    spaceBetween: 0,
  },
};

export const initSliders = () => {
  initHeroSlider(loop.hero, breakpointsHero);
  initProgramsSlider(loop.programs, breakpointsPrograms)
};
