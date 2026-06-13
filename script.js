document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (!menuButton || !navLinks) return;

  const closeMenu = function () {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  };

  const openMenu = function () {
    navLinks.classList.add('open');
    menuButton.setAttribute('aria-expanded', 'true');
    body.classList.add('menu-open');
  };

  menuButton.addEventListener('click', function () {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when any nav link or the phone number is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  // Close menu if window resizes back to desktop
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 980 && navLinks.classList.contains('open')) {
        closeMenu();
      }
    }, 100);
  });
});
