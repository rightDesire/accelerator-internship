import {initHeroSlider} from '../modules/hero-slider';
import {initProgramsSlider} from '../modules/programs-slider';
import {initNewsSlider} from '../modules/news-slider';
import {initReviewsSlider} from '../modules/reviews-slider';

const vpDesktop = 1440;
const vpTablet = 768;
const vpMobile = 320;

const loop = {
  hero: true,
  programs: false,
  news: false,
  reviews: false
};

const initSlide = {
  programsDesktop: 3,
  programsTablet: 2.12,
  programsMobile: 1,
  newsDesktop: 'auto',
  newsTablet: 2,
  newsMobile: 1,
  reviewsDesktop: 2,
  reviewsTablet: 1.27,
  reviewsMobile: 1,
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
    slidesPerGroup: 3,
    spaceBetween: 32,
    scrollbar: {
      dragSize: 392,
    },
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: initSlide.programsTablet,
    slidesPerGroup: 1,
    spaceBetween: 30,
    scrollbar: {
      dragSize: 324,
    },
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: initSlide.programsMobile,
    slidesPerGroup: 1,
    spaceBetween: 0,
  },
};

const breakpointsNews = {
  [vpDesktop]: {
    allowTouchMove: false,
    slidesPerView: initSlide.newsDesktop,
    grid: {
      fill: 'row',
      rows: 1,
    },
    spaceBetween: 32,
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: initSlide.newsTablet,
    grid: {
      fill: 'column',
      rows: 2,
    },
    spaceBetween: 30,
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: initSlide.newsMobile,
    grid: {
      fill: 'column',
      rows: 2,
    },
    spaceBetween: 20,
  },
};

const breakpointsReviews = {
  [vpDesktop]: {
    allowTouchMove: false,
    slidesPerView: initSlide.reviewsDesktop,
    spaceBetween: 32,
    scrollbar: {
      dragSize: 392,
    },
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: initSlide.reviewsTablet,
    spaceBetween: 30,
    scrollbar: {
      dragSize: 324,
    },
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: initSlide.reviewsMobile,
    spaceBetween: 0,
  },
};

export const initSliders = () => {
  initHeroSlider(loop.hero, breakpointsHero);
  initProgramsSlider(loop.programs, breakpointsPrograms);
  initNewsSlider(loop.news, breakpointsNews);
  initReviewsSlider(loop.reviews, breakpointsReviews);
};
