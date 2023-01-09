// Sticky Navbar for Header

window.addEventListener("scroll", function(){
  var header = document.querySelector(".navbar")
  header.classList.toggle("sticky", window.scrollY > 0)
})

// Swipper JS for Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },
});
