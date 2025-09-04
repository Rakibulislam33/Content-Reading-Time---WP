jQuery(document).ready(function($) {
  // Before After Slider
  $(".dnxtecomparisonslide").length &&
    $(".dnxtecomparisonslide").each(function(e) {
      const beforeAfterData = $(this).data();
      $(this).twentytwenty({
        default_offset_pct: beforeAfterData.offset, // How much of the before image is visible when the page loads
        orientation: beforeAfterData.orientation, // Orientation of the before and after images ('horizontal' or 'vertical')
        before_label: beforeAfterData.beforeLabel, // Set a custom before label
        after_label: beforeAfterData.afterLabel, // Set a custom after label
        no_overlay: "off" === beforeAfterData.overlay, //Do not show the overlay with before and after
        move_slider_on_hover: "on" === beforeAfterData.moveslideronhover, // Move slider on mouse hover?
        move_with_handle_only: "on" === beforeAfterData.movewithhandleonly, // Allow a user to swipe anywhere on the image to control slider movement.
        click_to_move: "on" === beforeAfterData.clicktomove, // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
      });
    });
});
