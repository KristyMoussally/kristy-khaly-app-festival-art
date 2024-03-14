var swiper = new Swiper(".swiper-screenshots", {
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    1200: {
     slidesPerView: 3,
     slidesPerGroup: 1,
     spaceBetween: 25,
     centeredSlides: true,
   centeredSlidesBounds: true
   },
 },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});