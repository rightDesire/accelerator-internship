import {iosVhFix} from './utils/ios-vh-fix';
import {burger} from './modules/burger';
import {initAccordions} from './vendor/accordion/init-accordion';
import {initSliders} from './vendor/swiper/init-swipers';
import {Form} from './vendor/form-validate/form';
import {ScrollLock} from './utils/scroll-lock';
import {FocusLock} from './utils/focus-lock';
import {initModals} from './vendor/modals/init-modals';
import {CustomSelect} from './vendor/custom-select/custom-select';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const scrollLock = new ScrollLock();
  const focusLock = new FocusLock();
  iosVhFix();
  burger(scrollLock, focusLock);
  initAccordions();
  initSliders();
  // Modules

  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    const select = new CustomSelect();
    window.form = form;
    form.init();
    select.init();
    initModals();
  });
});
