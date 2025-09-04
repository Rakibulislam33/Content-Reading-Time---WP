jQuery(document).ready(function($) {
  $(".dnxte-blog-carousel-slide-active").each(function(e) {
    const blogslide = $(this).data();

    const blogslideBreakpoint =
      blogslide.breakpoints && blogslide.breakpoints.split("|");

    const blogslidespaceBetween =
      blogslide.spaceBetween && blogslide.spaceBetween.split("|");

    var dnxteBlogslider = new Swiper(this, {
      autoHeight: "on" === blogslide.autoheight,
      speed: blogslide.speed ? parseInt(blogslide.speed) : 400,
      centeredSlides: true === blogslide.center,
      direction: "horizontal",
      slidesPerView: blogslideBreakpoint && parseInt(blogslideBreakpoint[0]),
      spaceBetween: blogslidespaceBetween && parseInt(blogslidespaceBetween[0]),
      effect: "coverflow",
      coverflowEffect: {
        slideShadows: "on" === blogslide.covershadow,
        rotate: +blogslide.coverrotate,
        stretch: +blogslide.coverstretch,
        depth: +blogslide.coverdepth,
      },
      breakpoints: {
        1024: {
          slidesPerView:
            blogslideBreakpoint && parseInt(blogslideBreakpoint[0]),
          spaceBetween:
            blogslidespaceBetween && parseInt(blogslidespaceBetween[0]),
        },
        768: {
          slidesPerView:
            blogslideBreakpoint && parseInt(blogslideBreakpoint[1]),
          spaceBetween:
            blogslidespaceBetween && parseInt(blogslidespaceBetween[1]),
        },
        479: {
          slidesPerView:
            blogslideBreakpoint && parseInt(blogslideBreakpoint[2]),
          spaceBetween:
            blogslidespaceBetween && parseInt(blogslidespaceBetween[2]),
        },
        200: {
          slidesPerView:
            blogslideBreakpoint && parseInt(blogslideBreakpoint[2]),
          spaceBetween:
            blogslidespaceBetween && parseInt(blogslidespaceBetween[2]),
        },
      },
      grabCursor: "on" === blogslide.grabCursor,
      loop: "on" === blogslide.loop,
      autoplay: {
        enabled: 1 === blogslide.autoplay,
        delay: blogslide.delay ? parseInt(blogslide.delay) : 1000,
        disableOnInteraction: !1,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: "on" === blogslide.paginationBullets,
        clickable: "on" === blogslide.clickable,
        type: blogslide.paginationType,
      },
      keyboard: {
        enabled: "on" === blogslide.keyboardenable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === blogslide.mouse,
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
    });
    if (1 === blogslide.autoplay && blogslide.pauseonhover === 1) {
      $(this).mouseenter(function() {
        dnxteBlogslider.autoplay.stop();
      });
      $(this).mouseleave(function() {
        dnxteBlogslider.autoplay.start();
      });
    }
  });
});
