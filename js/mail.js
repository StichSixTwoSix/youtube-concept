const swiper = new Swiper(".channel-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: ".channel1-button-next",
    prevEl: ".channel1-button-prev",
  },
  spaceBetween: 40,
});
