jQuery(document).ready(function($) {
  if ($(".dnxte_thumbs_gallery_child").length) {
    $(".dnxte_thumbs_gallery_child").addClass("swiper-slide");
    $(".dnxte_thumbs_gallery_child .et_pb_module_inner").addClass(
      "dnext-thumbs-gallery-item"
    );
  }

  $(".dnext-thumbs-gallery-top").length &&
    $(".dnext-thumbs-gallery-top").each(function(e) {
      // thumbs bottom slider gallery
      const that =
        "." +
        $(this)
          .parent()
          .parent()
          .parent()
          .attr("class")
          .split(" ")
          .join(".");

      const thumbsBottomData = $(that + " .dnext-thumbs-gallery-bottom").data();
      const thumbsBottomBreakpoint =
        thumbsBottomData.breakpoints && thumbsBottomData.breakpoints.split("|");

      const thumbsBottomSwiper = new Swiper(
        that + " .dnext-thumbs-gallery-bottom",
        {
          direction: thumbsBottomData.direction,
          speed: thumbsBottomData.speed
            ? parseInt(thumbsBottomData.speed)
            : 400,
          spaceBetween: parseInt(thumbsBottomData.spacing),
          grabCursor: "on" === thumbsBottomData.grab,
          preventClicksPropagation: true,
          autoplay: {
            enabled: 1 === thumbsBottomData.autoplay,
            delay: thumbsBottomData.delay
              ? parseInt(thumbsBottomData.delay)
              : 0,
            disableOnInteraction: !1,
          },
          slidesPerView:
            thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[0]),
          centeredSlides: "on" === thumbsBottomData.center,
          loop: "on" === thumbsBottomData.loop,
          breakpoints: {
            1024: {
              slidesPerView:
                thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[0]),
            },
            768: {
              slidesPerView:
                thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[1]),
            },
            479: {
              slidesPerView:
                thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[2]),
            },
            200: {
              slidesPerView:
                thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[2]),
            },
          },
          keyboard: {
            enabled: "on" === thumbsBottomData.keyboard,
            onlyInViewport: false,
          },
          mousewheel: {
            enabled: "on" === thumbsBottomData.mouse,
            invert: true,
          },
          observer: !0,
          observeParents: !0,
          observeSlideChildren: !0,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        }
      );

      if (
        1 === thumbsBottomData.autoplay &&
        thumbsBottomData.pauseonhover === 1
      ) {
        $(this).on("mouseenter", function() {
          thumbsBottomSwiper.autoplay.stop();
        });
        $(this).on("mouseleave", function() {
          thumbsBottomSwiper.autoplay.start();
        });
      }
      // thumbs bottom slider gallery

      const thumbsData = $(this).data();
      const thumbsBreakpoint =
        thumbsData.breakpoints && thumbsData.breakpoints.split("|");
      const thumbsSwiper = new Swiper(this, {
        direction: thumbsData.direction,
        speed: thumbsData.speed ? parseInt(thumbsData.speed) : 400,
        spaceBetween: parseInt(thumbsData.spacing),
        grabCursor: "on" === thumbsData.grab,
        preventClicksPropagation: true,
        autoplay: {
          enabled: 1 === thumbsData.autoplay,
          delay: thumbsData.delay ? parseInt(thumbsData.delay) : 0,
          disableOnInteraction: !1,
        },
        slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[0]),
        centeredSlides: "on" === thumbsData.center,
        loop: "on" === thumbsData.loop,
        breakpoints: {
          1024: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[0]),
          },
          768: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[1]),
          },
          479: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[2]),
          },
          200: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[2]),
          },
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === thumbsData.paginationBullets,
          clickable: true,
          type: thumbsData.paginationType,
        },
        keyboard: {
          enabled: "on" === thumbsData.keyboard,
          onlyInViewport: false,
        },
        mousewheel: {
          enabled: "on" === thumbsData.mouse,
          invert: true,
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0],
        },
        thumbs: {
          swiper: thumbsBottomSwiper,
        },
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
      });

      if (1 === thumbsData.autoplay && thumbsData.pauseonhover === 1) {
        $(this).on("mouseenter", function() {
          thumbsSwiper.autoplay.stop();
        });
        $(this).on("mouseleave", function() {
          thumbsSwiper.autoplay.start();
        });
      }
    });
});
