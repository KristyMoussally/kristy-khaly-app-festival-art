let btnLike = document.getElementById("like");

if (btnLike !== null) {
  btnLike.addEventListener("click", () => {
    btnLike.classList.toggle("active");
  });
}

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
