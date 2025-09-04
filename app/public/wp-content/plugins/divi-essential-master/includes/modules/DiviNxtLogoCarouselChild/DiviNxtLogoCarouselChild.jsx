// External Dependencies
import { Component } from "react";
import { applyCss } from "../base/common";
// Internal Dependencies
import "./style.css";

class DiviNxtLogoCarouselChild extends Component {
  static slug = "dnxte_logo_carousel_child";

  static css(props) {
    const css = [];

    const moduleCss = [
      // Image Width
      [
        {
          desktop: `width: ${props.logo_carousel_width};`,
          tablet: `width: ${props.logo_carousel_width_tablet};`,
          phone: `width: ${props.logo_carousel_width_phone};`,
          hover: `width: ${props.logo_carousel_width__hover};`,
        },
        {
          desktop: "%%order_class%% .img-fluid",
          hover: "%%order_class%% .img-fluid:hover",
        },
        props.logo_carousel_width_last_edited,
        props.logo_carousel_width__hover_enabled,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    return css;
  }

  render() {
    return null;
  }
}

export default DiviNxtLogoCarouselChild;
