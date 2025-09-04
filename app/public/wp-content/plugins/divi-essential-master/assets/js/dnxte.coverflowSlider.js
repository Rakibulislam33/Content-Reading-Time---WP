jQuery(document).ready(function($) {
  if ($(".dnxte_coverflowslider_child").length) {
    $(".dnxte_coverflowslider_child ").each(function() {
      const imagePosition = $(this)
        .find(".dnxte-coverflow-image-container")
        .data("imagePosition");

      $(this).addClass("swiper-slide");
      $(this)
        .children(".et_pb_module_inner")
        .addClass(
          `dnxte-coverflowslider-item ${
            imagePosition ? `dnxte-coverflow-carousel-${imagePosition}` : ""
          }`
        );
    });
  }

  $(".dnxte-coverflowslider-active").length &&
    $(".dnxte-coverflowslider-active").each(function(e) {
      const coverflow = $(this).data();
      const coverflowBreakpoint =
        coverflow.breakpoints && coverflow.breakpoints.split("|");

      var coverflowSwiper = new Swiper(this, {
        direction: coverflow.direction,
        autoHeight: "on" === coverflow.autoheight,
        speed: coverflow.speed ? parseInt(coverflow.speed) : 400,
        spaceBetween: parseInt(coverflow.spacing),
        grabCursor: "on" === coverflow.grab,
        preventClicksPropagation: true,
        centeredSlides: 1 === coverflow.center,
        autoplay: {
          enabled: 1 === coverflow.autoplay,
          delay: coverflow.delay ? parseInt(coverflow.delay) : 0,
          disableOnInteraction: !1,
        },
        effect: "coverflow",
        coverflowEffect: {
          slideShadows: "on" === coverflow.covershadow,
          rotate: +coverflow.coverrotate,
          stretch: +coverflow.coverstretch,
          depth: +coverflow.coverdepth,
        },
        slidesPerView: coverflowBreakpoint && parseInt(coverflowBreakpoint[0]),
        centeredSlides: 1 === coverflow.center,
        loop: "on" === coverflow.loop,
        breakpoints: {
          1024: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[0]),
          },
          768: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[1]),
          },
          479: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[2]),
          },
          200: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[2]),
          },
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === coverflow.paginationBullets,
          clickable: true,
          type: coverflow.paginationType,
        },
        keyboard: {
          enabled: "on" === coverflow.keyboardenable,
          onlyInViewport: false,
        },
        mousewheel: {
          enabled: "on" === coverflow.mouse,
          invert: true,
        },
        navigation: {
          nextEl:
            $(this).siblings(".swiper-button-next")[0] ||
            $(this)
              .siblings(".swiper-button-container")
              .children(".swiper-button-next")[0],
          prevEl:
            $(this).siblings(".swiper-button-prev")[0] ||
            $(this)
              .siblings(".swiper-button-container")
              .children(".swiper-button-prev")[0],
        },
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
      });

      if (1 === coverflow.autoplay && coverflow.pauseonhover === 1) {
        $(this).on("mouseenter", function() {
          coverflowSwiper.autoplay.stop();
        });
        $(this).on("mouseleave", function() {
          coverflowSwiper.autoplay.start();
        });
      }
    });
});
