const swiper = new Swiper(".channel-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".channel1-button-next",
    prevEl: ".channel1-button-prev",
  },
  spaceBetween: 20,
});

const recomended = new Swiper(".rec-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".rec-button-next",
    prevEl: ".rec-button-prev",
  },
  spaceBetween: 20,
});

const swiper2 = new Swiper(".channel2-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".channel2-button-next",
    prevEl: ".channel2-button-prev",
  },
  spaceBetween: 20,
});

const searchBtn = document.querySelector(".mobile-search");
const mobileSearch = document.querySelector(".input-group");
searchBtn.addEventListener("click", () => {
  mobileSearch.classList.toggle("is-open");
});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
}
