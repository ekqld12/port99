var mySwiper = new Swiper ('#banner .swiper-container', {
  // Optional parameters
  loop: true,
      slidesPerView: 'auto',
      spaceBetween: 3,
      centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '#banner .swiper-pagination',
    type: 'bullets',
    clickable: true,
},
// Navigation arrows

});
