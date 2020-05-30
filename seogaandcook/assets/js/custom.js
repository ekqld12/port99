var mySwiper = new Swiper ('#banner .swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
      }
  })

  var mySwiper2 = new Swiper ('.notice .swiper-container', {
    loop: true,
    spaceBetween: 60,
    slidesPerView: 'auto',
    centeredSlides: true
  })

  var myswiper3 = new Swiper('.story .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true
  });