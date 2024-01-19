export const burger = (ScrollLock, FocusLock) => {
  let prevScrollPos = window.scrollY;
  const header = document.querySelector('[data-header=""]');
  const burgerButton = document.querySelector('[data-burger=""]');
  const body = document.body;

  const closeMenu = () => {
    ScrollLock.enableScrolling();
    FocusLock.unlock('[data-header]');
    document.removeEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
    header.classList.remove('is-open');
    body.classList.remove('overlay');
  };

  const openMenu = () => {
    ScrollLock.disableScrolling();
    FocusLock.lock('[data-header]');
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
    header.classList.add('is-open');
    body.classList.add('overlay');
  };

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      header.classList.remove('is-hidden');
    } else {
      header.classList.add('is-hidden');
    }

    prevScrollPos = currentScrollPos;
  });

  burgerButton.addEventListener('click', () => {
    if (header.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  body.addEventListener('click', (event) => {
    if (!header.contains(event.target) && !burgerButton.contains(event.target)) {
      header.classList.remove('is-open');
      body.classList.remove('overlay');
    }
  });
};
