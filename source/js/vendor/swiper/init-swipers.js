import {initHeroSlider} from '../../modules/hero-slider';

const vpDesktop = 1440;
const vpTablet = 768;
const vpMobile = 320;
const vpZero = 0;

const loop = {
  hero: true,
};

const initSlide = {
  toursDesktop: 6,
  toursTablet: 3,
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


export const initSliders = () => {
  initHeroSlider(loop.hero, breakpointsHero);
};
