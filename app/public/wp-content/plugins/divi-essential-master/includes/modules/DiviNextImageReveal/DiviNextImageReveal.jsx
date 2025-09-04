import React, { Component } from "react";
import WOW from "../../../assets/js/wow.min.js";
import "../../../assets/css/reveal-animation.css";
import { Image } from "../base/common.jsx";
import "./style.css";

class DiviNextImageReveal extends Component {
  static slug = "dnxte_image_reveal";

  static css(props) {
    const additionalCss = [];

    // Divider Text Background
    let dnextImgRevealSingleColor = "";
    let dnextGradientType = "";
    let dnextGradientLinear = "";
    let dnextGradientRadial = "";
    let dnextGradientApply = "";
    let dnextGradientColorOne = "";
    let dnextGradientColorTwo = "";
    let dnextGradientStartPosition = "";
    let dnextGradientEndPosition = "";

    // image reveal color
    if (props.dnext_single_color) {
      dnextImgRevealSingleColor = props.dnext_single_color;
    }
    // checking gradient type
    if (props.dnext_gradient_type_img_reveal) {
      dnextGradientType = props.dnext_gradient_type_img_reveal;
    }
    // Bg Linear Gradient Direction
    if (props.dnext_gradient_type_linear_direction_img_reveal) {
      dnextGradientLinear =
        props.dnext_gradient_type_linear_direction_img_reveal;
    }
    // Bg Radial Gradient Direction
    if (props.dnext_gradient_type_radial_direction_img_reveal) {
      dnextGradientRadial =
        props.dnext_gradient_type_radial_direction_img_reveal;
    }
    // Apply gradient direcion
    if ("radial-gradient" === props.dnext_gradient_type_img_reveal) {
      dnextGradientApply = `${dnextGradientRadial}`;
    } else if ("linear-gradient" === props.dnext_gradient_type_img_reveal) {
      dnextGradientApply = `${dnextGradientLinear}`;
    }
    // Gradient color one for text
    if (props.dnxt_color_tab_gradient_one) {
      dnextGradientColorOne = props.dnxt_color_tab_gradient_one;
    }
    // Gradient color two for content
    if (props.dnxt_color_tab_gradient_two) {
      dnextGradientColorTwo = props.dnxt_color_tab_gradient_two;
    }
    // Text Gradient color start position
    if (props.dnext_gradient_start_position_img_reveal) {
      dnextGradientStartPosition =
        props.dnext_gradient_start_position_img_reveal;
    }
    // Text Gradient color end position
    if (props.dnext_gradient_end_position_img_reveal) {
      dnextGradientEndPosition = props.dnext_gradient_end_position_img_reveal;
    }
    // single color
    if ("off" !== props.dnext_image_color_switch) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-imr-reveal-effect.dnext-imr-masker::after",
          declaration: `background-color: ${dnextImgRevealSingleColor}`,
        },
      ]);
    }
    // gradient color
    if ("off" !== props.dnext_gradient_color_switch) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-imr-reveal-effect.dnext-imr-masker::after",
          declaration: `background: ${dnextGradientType}(${dnextGradientApply},${dnextGradientColorOne} ${dnextGradientStartPosition}, ${dnextGradientColorTwo} ${dnextGradientEndPosition});`,
        },
      ]);
    }

    return additionalCss;
  }

  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    const { props } = this;
    return (
      <figure className="dnext-imr-reveal-effect dnext-imr-masker wow">
        <Image
          dynamicImg={props.dynamic.dnext_img_reveal}
          imageTablet={props.dynamic.dnext_img_reveal_tablet}
          imagePhone={props.dynamic.dnext_img_reveal_phone}
          imageHover={props.dynamic.dnext_img_reveal__hover}
          lastEdited={props.dnext_img_reveal_last_edited}
          hoverEnabled={props.dnext_img_reveal__hover_enabled}
          imgAlt={props.dynamic.dnext_img_reveal_alt}
        />
      </figure>
    );
  }
}

export default DiviNextImageReveal;
