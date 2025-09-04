jQuery(document).ready(function($) {
  if ($(".dnxte_3dcubeslider_child").length) {
    $(".dnxte_3dcubeslider_child").addClass("swiper-slide");
    $(".dnxte_3dcubeslider_child .et_pb_module_inner").addClass(
      "dnxte-3dcubeslider-item"
    );
  }

  $(".dnxte-3dcubeslider-active").length &&
    $(".dnxte-3dcubeslider-active").each(function() {
      const cubeslider3d = $(this).data();
      var cubeslider = new Swiper(this, {
        autoHeight: false,
        speed: cubeslider3d.speed ? parseInt(cubeslider3d.speed) : 400,
        direction: cubeslider3d.direction,
        grabCursor: "on" === cubeslider3d.grab,
        loop: "on" === cubeslider3d.loop,
        effect: "cube",
        cubeEffect: {
          slideShadows: 1 === cubeslider3d.slideshadows,
          shadow: 1 === cubeslider3d.shadow,
          shadowOffset:
            1 === cubeslider3d.shadow ? parseInt(cubeslider3d.shadowoffset) : 0,
          shadowScale:
            1 === cubeslider3d.shadow
              ? parseFloat(cubeslider3d.shadowscale)
              : 0,
        },
        autoplay: {
          enabled: 1 === cubeslider3d.autoplay,
          delay: cubeslider3d.delay ? parseInt(cubeslider3d.delay) : 0,
          disableOnInteraction: !1,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === cubeslider3d.paginationBullets,
          clickable: true,
          type: cubeslider3d.paginationType,
        },
        keyboard: {
          enabled: "on" === cubeslider3d.keyboardenable,
          onlyInViewport: false,
        },
        mousewheel: {
          enabled: "on" === cubeslider3d.mouse,
          invert: true,
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0],
        },
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
      });

      if (1 === cubeslider3d.autoplay && cubeslider3d.pauseonhover === 1) {
        $(this).on("mouseenter", function() {
          cubeslider.autoplay.stop();
        });
        $(this).on("mouseleave", function() {
          cubeslider.autoplay.start();
        });
      }
    });
});
