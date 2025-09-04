jQuery(document).ready(function() {
  // hotspot bottom position settings
  $(".dnxte-hostpot-hotspots__wrapper").each(function() {
    const isBottom = $(this)
      .parent()
      .parent()
      .hasClass("tooltip-bottom");

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

    isBottom &&
      $(
        `${that} .dnxte-hostpot-hotspots__wrapper, ${that} .dnxte-hostpot-tooltip-text`
      ).hover(
        () => {
          //hover
          $(`${that} .dnxte-hostpot-tooltip-text`).addClass(
            "tooltip-hover-bottom"
          );
        },
        () => {
          //out
          $(`${that} .dnxte-hostpot-tooltip-text`).removeClass(
            "tooltip-hover-bottom"
          );
        }
      );
  });
});
