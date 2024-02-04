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
  iosVhFix();
  // Modules
  initSliders();
  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    const select = new CustomSelect();
    const scrollLock = new ScrollLock();
    const focusLock = new FocusLock();
    window.form = form;
    form.init();
    select.init();
    burger(scrollLock, focusLock);
    initAccordions();
    initModals();
  });
});
