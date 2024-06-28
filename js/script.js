const mobileNavOpen = document.getElementById('mobile-nav-opener');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNav = document.getElementById('mobile-navigation');

mobileNavOpen.addEventListener('click', function () {
  mobileNav.style.display = 'flex';
});

mobileNavClose.addEventListener('click', function () {
  mobileNav.style.display = 'none';
});
