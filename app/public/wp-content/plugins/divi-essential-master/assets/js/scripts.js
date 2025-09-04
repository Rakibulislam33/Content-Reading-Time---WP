(function($) {
  // Image Accordion
  $.fn.dnxte_image_accordion = function() {
    let $this = $(this);
    let accordion_type = $this
      .find(".dnxte_image_accordion_wrapper")
      .data("accordion-type");

    let expandLastItem = $this
      .find(".dnxte_image_accordion_wrapper")
      .data("expand-last-item");

    let $accordion_children = $this.find(".dnxte_image_accordion_item");

    let onloadOpen = $this.find("[data-active-on-load=1]");
    let accordionExpand = $this.find("[data-accordion-expand=defaults]");

    //Setup active on load
    onloadOpen.parents(".dnxte_image_accordion_item").addClass("dnxte-active");
    if (accordion_type === "on_hover") {
      $accordion_children.mouseenter(function() {
        $accordion_children.removeClass("dnxte-active");
        $(this).addClass("dnxte-active");
      });

      "off" === expandLastItem &&
        $accordion_children.mouseleave(function() {
          $accordion_children.removeClass("dnxte-active");
          accordionExpand
            .parents(".dnxte_image_accordion_item")
            .addClass("dnxte-active");
        });
    }

    // Setup active on click
    if (accordion_type === "on_click") {
      $this.addClass("dnxte_clickable");
      $accordion_children.click(function(e) {
        if ($(this).hasClass("dnxte-active")) {
          return;
        }
        $accordion_children.removeClass("dnxte-active");
        $(this).addClass("dnxte-active");
      });
    }
  };

  $(document).ready(function($) {
    const $grid = $(".dnxte-msnary-grid");
    const firstMenuItemSelector = $(
      ".dnxte-msnary-filter-items li:first-child"
    );
    const firstMenuItemFilter = firstMenuItemSelector.attr("data-filter");
    firstMenuItemSelector.addClass("active");

    if ($grid.length) {
      $grid.each(function() {
        const { gutter } = $(this).data();
        $(this).isotope({
          // layoutMode: "masonry",
          itemSelector: ".dnxte-msnary-item",
          percentPosition: true,
          stagger: 0,
          filter: firstMenuItemFilter,
          // transitionDuration: 90,
          // percentPosition: true,
          horizontalOrder: true,
          masonry: {
            columnWidth: ".grid-sizer",
            gutter: parseInt(gutter, 10),
          },
        });
      });

      $grid.imagesLoaded().progress(function() {
        $grid.isotope("layout");
      });
      $(window).scroll(() => {
        $grid.isotope("layout");
      });
    }

    $(".dnxte-msnary-filter-items li:first-child").addClass("active");
    $(".dnxte-msnary-filter-items li").on("click", function(item) {
      const that =
        "." +
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .attr("class")
          .split(" ")
          .join(".");

      $(`${that} .dnxte-msnary-filter-items li`).removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");

      $(`${that} .dnxte-msnary-grid`).isotope({
        filter: selector,
      });
    });

    const img = $(".image-link");
    const lighboxData = $grid.length && $grid.data();

    if (img.length && "none" !== lighboxData.lightbox) {
      img.each(function() {
        const that =
          "." +
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .attr("class")
            .split(" ")
            .join(".");

        const url = $(this)[0]?.attributes[1]?.value; // This will 'true' if the URL is an image link, 'false' otherwise.

        if (!isImageLink(url))
          return ;

        $(`${that} .image-link`).magnificPopup({
          removalDelay: 500,
          type: "image",
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            tCounter: "%curr% of %total%", // Markup for "1 of 7" counter
          },
          disableOn: function() {
            return lighboxData.lightbox;
          },
          image: {
            markup:
              '<div class="mfp-figure dnxte-msnary-mfp-config">' +
              '<div class="mfp-close"></div>' +
              '<div class="mfp-img"></div>' +
              '<div class="mfp-bottom-bar">' +
              '<div class="mfp-title"></div>' +
              '<div class="mfp-counter"></div>' +
              "</div>" +
              "</div>",
            titleSrc: function(item) {
              return item.el.attr("data-title") + item.el.attr("data-caption");
            },
          },
          zoom: {
            enabled: lighboxData.lightbox,
            duration: 500,
            opener: function(element) {
              return element.find("img");
            },
          },
        });
      });
      function isImageLink(url) {
        // Regular expression to match image file extensions
        const imagePattern = /\.(jpeg|jpg|gif|png|svg|webp)$/i;
        return imagePattern.test(url);
      }
    }

    $(".dnxte-magnifier img").each(function() {
      const magnifyData = $(this).data();
      $(this).magnify({
        speed: +magnifyData.speed,
        limitBounds: magnifyData.boundary === "on",
      });
    });

    $(document).ready(function() {
      $(".dnxte_image_accordion").each(function() {
        $(this).dnxte_image_accordion();
      });
    });
  });

  jQuery(function(dnxte_contenttoggle) {
    dnxte_contenttoggle(".dnxte-toggle-btn .dnxte-input").each(function() {
      var n = dnxte_contenttoggle(this)
          .parents(".dnxte-content-toggle")
          .find(".dnxte-content-toggle-back"),
        e = dnxte_contenttoggle(this)
          .parents(".dnxte-content-toggle")
          .find(".dnxte-content-toggle-front");
      this.checked ? (e.hide(), n.show()) : (n.hide(), e.show()),
        dnxte_contenttoggle(this).on("change", function() {
          this.checked ? (e.hide(), n.show()) : (n.hide(), e.show());
        });
    });
  });

  $(".tab-container").each(function() {
    const { tabEffect } = $(this)
      .find(".dnxte_tab_menu")
      .data();

    const dnxteTab = $(this).find(".dnxte_tab_a[data-activeOnLoad='on']");
    const tabActiveEffect = `dnxt-hover-ad-${tabEffect}--active`;
    if (dnxteTab.length > 0) {
      dnxteTab.first().addClass("dnxte_active_a");
      $(this)
        .find(
          ".dnxte_tab_content[data-id='" +
            dnxteTab.first().attr("data-id") +
            "']"
        )
        .addClass("dnxte_tab_content_active");
    } else {
      $(this)
        .find(".dnxte_tab_a:first")
        .addClass(`dnxte_active_a ${tabActiveEffect}`);
      $(this)
        .find(".dnxte_tab_content:first")
        .addClass("dnxte_tab_content_active");
    }
    const that = $(this);
    $(this)
      .find(".dnxte_tab_a")
      .click(function(e) {
        e.preventDefault();
        that.find(".dnxte_tab_content").removeClass("dnxte_tab_content_active");
        that
          .find(".dnxte_tab_content[data-id='" + $(this).attr("data-id") + "']")
          .addClass("dnxte_tab_content_active");
        that
          .find(".dnxte_tab_a")
          .removeClass(`dnxte_active_a ${tabActiveEffect}`);
        $(this).addClass(`dnxte_active_a ${tabActiveEffect}`);
      });
  });

  $(document).ready(function() {
    const $grid = $(".dnxte-msnary-grid");
    $grid.length &&
      $grid.imagesLoaded().done(function() {
        $grid?.isotope("layout");
      });
  });

  if (typeof dnxtedeviceData !== "undefined") {
    function updateDataGutter() {
      var screenWidth = window.innerWidth;
      var gutterValue;
      var columnsValue;

      var mobileBreakpoint = 767; // mobile breakpoint
      var tabletBreakpoint = 980; // tablet breakpoint

      let dnxtedevice = $(document).find(".dnxte-msnary-grid");

      dnxtedevice.each(function(key,$data) {
        
        let gutterMap = $data.dataset.gutterMap.split("|");
        let columnMap = $data.dataset.columnMap.split("|");

        if (screenWidth <= mobileBreakpoint) {
            gutterValue = gutterMap[0];
            columnsValue = columnMap[0];
        }
        else if (screenWidth <= tabletBreakpoint) {
            gutterValue = gutterMap[1];
            columnsValue = columnMap[1];
        }
        else {
            gutterValue = gutterMap[2];
            columnsValue = columnMap[2];
        }
          $data.setAttribute('data-gutter', gutterValue);
          $data.setAttribute('data-columns', columnsValue);
      });
  }
  // Run the function on initial load
  document.addEventListener('DOMContentLoaded', updateDataGutter);
  // Optionally, run the function on window resize to update the value dynamically
  window.addEventListener('resize', updateDataGutter);
  }
})(jQuery);
