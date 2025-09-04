import { Component } from "react";
import { applyBgCss, applyCustomSpacing } from "../base/common";

class DiviNxteTestimonialChild extends Component {
  static slug = "dnxte_testimonial_child";

  static css(props) {
    const css = [];

    // Custom Padding margin
    const customMarginPadding = [
      [
        "dnxte_testimonial_description_padding",
        "%%order_class%% .dnxte-itcont-des",
        "padding",
      ],
      [
        "dnxte_testimonial_image_margin",
        "%%order_class%% .dnxte-tstimonial-prfle-review",
        "margin",
      ],
      [
        "dnxte_testimonial_image_padding",
        "%%order_class%% .dnxte-tstimonial-prfle-review",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleBgCss = [
      {
        slug: "description_bg_color",
        use_color_gradient_slug: props.description_bg_use_color_gradient,
        gradient: {
          type: "description_bg_color_gradient_type",
          direction: "description_bg_color_gradient_direction",
          radial: "description_bg_color_gradient_direction_radial",
          start: "description_bg_color_gradient_start",
          end: "description_bg_color_gradient_end",
          start_position: "description_bg_color_gradient_start_position",
          end_position: "description_bg_color_gradient_end_position",
          overlays_image: "description_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-itcont-des",
          hover: "%%order_class%% .dnxte-itcont-des:hover",
        },
      },
    ];

    moduleBgCss.forEach((element) => applyBgCss(css, props, element));

    return css;
  }

  render() {
    return null;
  }
}

export default DiviNxteTestimonialChild;
