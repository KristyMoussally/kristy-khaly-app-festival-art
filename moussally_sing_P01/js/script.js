const swiperButtonsList = new Swiper(".swiper-filters", {
  grabCursor: true,
  slidesPerView: 2.6,
  spaceBetween: 1,
});

const swiperArtworksVedette = new Swiper(".swiper-featured-artworks", {
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 1,
});

const btnLike = document.querySelector("#like");

btnLike.addEventListener("click", function () {
  btnLike.classlist.replace("bi bi-balloon-heart", "active");
});
