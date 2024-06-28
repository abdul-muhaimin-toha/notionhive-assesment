// /////////////////////////////////
// Selecting Elements
// /////////////////////////////////

const mobileNavOpen = document.getElementById('mobile-nav-opener');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNav = document.getElementById('mobile-navigation');

// /////////////////////////////////
// Navigation Functionality
// /////////////////////////////////

mobileNavOpen.addEventListener('click', function () {
  mobileNav.style.display = 'flex';
});

mobileNavClose.addEventListener('click', function () {
  mobileNav.style.display = 'none';
});

// /////////////////////////////////
// Slider Functionality
// /////////////////////////////////

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 6000,
    loop: true,
  });
});
