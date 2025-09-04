(function($) {
  /*
   * Create magnificPopup for coverflow carousel
   */
  $(document).ready(function() {
    function swiperMagnificPopup(wrapper, imageClass, moduleName) {
      const moduleWrapper = $(`${wrapper} .swiper-wrapper`);
      const { lightbox, orderclass } = moduleWrapper.data();
      const moduleAnchor = $(`${wrapper}`).find(`${imageClass}`);

      if (moduleWrapper.length > 0 && "on" === lightbox) {
        moduleWrapper.each(function() {
          // console.log("hello");
          const that = `.${$(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .attr("class")
            .split(" ")
            .join(".")} ${wrapper} .swiper-wrapper`;

          $(that).magnificPopup({
            removalDelay: 500,
            delegate: `a${imageClass}`,
            type: "image",
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              tCounter: "%curr% of %total%", // Markup for "1 of 7" counter
            },
            image: {
              markup:
                `<div class="mfp-figure dnxte-${moduleName}-mfp-config ${orderclass}">` +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                "</div>" +
                "</div>",
              titleSrc: function(item) {
                return item.el.find('img').attr("alt");
              },
            },
            zoom: {
              enabled: true,
              duration: 500,
              opener: function(element) {
                return element.find("img");
              },
            },
          });
        });
      } else {
        if ("thumbs-gallery" === moduleName) {
          moduleAnchor.each(function() {
            $(this).removeAttr("href");
          });
        } else if ("coverflow" === moduleName) {
          moduleAnchor.each(function() {
            const { link } = $(this).data();
            const linkArr = link.split(",");
            // commented by nazmul. For link not working
            // if (!!linkArr[0]) {
            //   $(this).css({
            //     "pointer-events": "none",
            //     cursor: "default",
            //   });
            // }
            Array.isArray(linkArr) &&
              linkArr.length > 0 &&
              $(this).attr({
                href: linkArr[0] || "#",
                target: linkArr[1],
              });
          });
        }
      }
    }

    if ($(".dnext-thumbs-gallery-top").length > 0) {
      $(".dnext-thumbs-gallery-top")
        .closest(".dnxte_thumbs_gallery_parent")
        .each(function() {
          const mainClass =
            "." +
            $(this)
              .attr("class")
              .split(" ")
              .join(".");
          swiperMagnificPopup(
            `${mainClass} .dnext-thumbs-gallery-top`,
            ".dnext-thumbs-gallery-top-image-link",
            "thumbs-gallery"
          );
        });
    }
    if ($(".dnxte-coverflowslider-active").length > 0) {
      $(".dnxte-coverflowslider-active")
        .closest(".dnxte_coverflowslider_parent")
        .each(function() {
          console.log($(this).attr("class"));
          const mainClass =
            "." +
            $(this)
              .attr("class")
              .split(" ")
              .join(".");
          swiperMagnificPopup(
            `${mainClass} .dnxte-coverflowslider-active`,
            ".dnxte-coverflow-image-link",
            "coverflow"
          );
        });
    }
  });
})(jQuery);
