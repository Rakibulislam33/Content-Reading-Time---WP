import React, { Component } from "react";
import { applyCss, Image, Title } from "../base/common";
import "../base/get_responsive_css";

class DiviNxteFloatingElementChild extends Component {
  static slug = "dnxte_floating_element_child";

  static css(props) {
    const css = [];
    const effectCount =
      props.dnxte_floting_shape_effects_count === "number"
        ? parseInt(props.dnxte_floting_shape_effects_count_number) || 10
        : props.dnxte_floting_shape_effects_count || "infinite";

    // Custom Padding margin
    if (props.floting_shape_use_image === "on") {
      if ("" !== props.dnxte_floting_shape_image_margin) {
        css.push(
          window.DndhCommon.get_responsive_css(
            props,
            "dnxte_floting_shape_image_margin",
            "%%order_class%% .dnxte-floting-image",
            "margin",
            true
          )
        );
      }

      if ("" !== props.dnxte_floting_shape_image_padding) {
        css.push(
          window.DndhCommon.get_responsive_css(
            props,
            "dnxte_floting_shape_image_padding",
            "%%order_class%% .dnxte-floting-image",
            "padding",
            true
          )
        );
      }
    }

    if (props.floting_shape_use_text === "on") {
      if ("" !== props.dnxte_floting_shape_title_margin) {
        css.push(
          window.DndhCommon.get_responsive_css(
            props,
            "dnxte_floting_shape_title_margin",
            "%%order_class%% .dnxte-floting-text",
            "margin",
            true
          )
        );
      }

      if ("" !== props.dnxte_floting_shape_title_padding) {
        css.push(
          window.DndhCommon.get_responsive_css(
            props,
            "dnxte_floting_shape_title_padding",
            "%%order_class%% .dnxte-floting-text",
            "padding",
            true
          )
        );
      }
    }

    // Floating Animation Item position

    const positionCustom = [
      // horizontal default
      [
        {
          desktop: `left: ${props.dnxte_floting_shape_effects_horizontal} !important;`,
          tablet: `left: ${props.dnxte_floting_shape_effects_horizontal_tablet} !important;`,
          phone: `left: ${props.dnxte_floting_shape_effects_horizontal_phone} !important;`,
          hover: `left: ${props.dnxte_floting_shape_effects_horizontal__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-fltshape",
          hover: "%%order_class%% .dnxte-fltshape:hover",
        },
        props.dnxte_floting_shape_effects_horizontal_last_edited,
        props.dnxte_floting_shape_effects_horizontal__hover_enabled,
      ],
      // vertical default
      [
        {
          desktop: `top: ${props.dnxte_floting_shape_effects_vertical} !important;`,
          tablet: `top: ${props.dnxte_floting_shape_effects_vertical_tablet} !important;`,
          phone: `top: ${props.dnxte_floting_shape_effects_vertical_phone} !important;`,
          hover: `top: ${props.dnxte_floting_shape_effects_vertical__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-fltshape",
          hover: "%%order_class%% .dnxte-fltshape:hover",
        },
        props.dnxte_floting_shape_effects_vertical_last_edited,
        props.dnxte_floting_shape_effects_vertical__hover_enabled,
      ],
    ];
    const positionDefault = [
      // horizontal custom
      [
        {
          desktop: `left: ${props.dnxte_floting_shape_effects_horizontal} !important;`,
          tablet: `left: ${props.dnxte_floting_shape_effects_horizontal_tablet} !important;`,
          phone: `left: ${props.dnxte_floting_shape_effects_horizontal_phone} !important;`,
          hover: `left: ${props.dnxte_floting_shape_effects_horizontal__hover} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-fltshape-one,%%order_class%% .dnxte-fltshape-two,%%order_class%% .dnxte-fltshape-three,%%order_class%% .dnxte-fltshape-four,%%order_class%% .dnxte-fltshape-five,%%order_class%% .dnxte-fltshape-six,%%order_class%% .dnxte-fltshape-seven",
          hover:
            "%%order_class%% .dnxte-fltshape-one:hover,%%order_class%% .dnxte-fltshape-two:hover,%%order_class%% .dnxte-fltshape-three:hover,%%order_class%% .dnxte-fltshape-four:hover,%%order_class%% .dnxte-fltshape-five:hover,%%order_class%% .dnxte-fltshape-six:hover,%%order_class%% .dnxte-fltshape-seven:hover",
        },
        props.dnxte_floting_shape_effects_horizontal_last_edited,
        props.dnxte_floting_shape_effects_horizontal__hover_enabled,
      ],
      // vertical custom
      [
        {
          desktop: `top: ${props.dnxte_floting_shape_effects_vertical} !important;`,
          tablet: `top: ${props.dnxte_floting_shape_effects_vertical_tablet} !important;`,
          phone: `top: ${props.dnxte_floting_shape_effects_vertical_phone} !important;`,
          hover: `top: ${props.dnxte_floting_shape_effects_vertical__hover} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-fltshape-one,%%order_class%% .dnxte-fltshape-two,%%order_class%% .dnxte-fltshape-three,%%order_class%% .dnxte-fltshape-four,%%order_class%% .dnxte-fltshape-five,%%order_class%% .dnxte-fltshape-six,%%order_class%% .dnxte-fltshape-seven",
          hover:
            "%%order_class%% .dnxte-fltshape-one:hover,%%order_class%% .dnxte-fltshape-two:hover,%%order_class%% .dnxte-fltshape-three:hover,%%order_class%% .dnxte-fltshape-four:hover,%%order_class%% .dnxte-fltshape-five:hover,%%order_class%% .dnxte-fltshape-six:hover,%%order_class%% .dnxte-fltshape-seven:hover",
        },
        props.dnxte_floting_shape_effects_vertical_last_edited,
        props.dnxte_floting_shape_effects_vertical__hover_enabled,
      ],
    ];

    if (props.dnxte_floting_shape_default_effects !== "custom") {
      positionDefault.forEach((element) =>
        applyCss(element[0], css, element[1], element[2], element[3])
      );
    } else if (props.dnxte_floting_shape_default_effects === "custom") {
      positionCustom.forEach((element) =>
        applyCss(element[0], css, element[1], element[2], element[3])
      );
    }
    // Floating Animation Item Position
    css.push([
      {
        selector: `%%order_class%% .dnxte-fltshape`,
        declaration: `-webkit-animation: ${props.dnxte_floting_shape_effects ||
          "dnxtefltmoveone"} ${props.dnxte_floting_shape_effects_duration ||
          "30s"} ${props.dnxte_floting_shape_effects_direction ||
          "alternate"} ${effectCount} ${props.dnxte_floting_shape_effects_timing ||
          "linear"};
        animation: ${props.dnxte_floting_shape_effects ||
          "dnxtefltmoveone"} ${props.dnxte_floting_shape_effects_duration ||
          "30s"} ${props.dnxte_floting_shape_effects_direction ||
          "alternate"} ${effectCount} ${props.dnxte_floting_shape_effects_timing ||
          "linear"};`,
      },
    ]);

    return css;
  }

  handleClasses = () => {
    const isImage =
      this.props.floting_shape_use_image === "on" ||
      !this.props.floting_shape_use_image
        ? "dnxte-floting-image"
        : "dnxte-floting-text";

    if (
      this.props.dnxte_floting_shape_default_effects !== "custom" ||
      !this.props.dnxte_floting_shape_default_effects
    )
      return `dnxte-fltshape-${this.props.dnxte_floting_shape_default_effects ||
        "three"} ${isImage}`;
    return `dnxte-fltshape ${isImage}`;
  };

  render() {
    const { props } = this;
    if (
      props.floting_shape_use_image === "on" ||
      !props.floting_shape_use_image
    ) {
      return (
        <Image
          dynamicImg={props.dynamic.floting_shape_image}
          lastEdited={props.floting_shape_image_last_edited}
          hoverEnabled={props.floting_shape_image__hover_enabled}
          imageTablet={props.dynamic.floting_shape_image_tablet}
          imagePhone={props.dynamic.floting_shape_image_phone}
          imageHover={props.dynamic.floting_shape_image__hover}
          imgAlt={props.dynamic.floting_shape_alt}
          classes={this.handleClasses()}
        />
      );
    } else if (props.floting_shape_use_text === "on") {
      return (
        <Title
          title={props.floting_shape_text}
          dynamicTitle={props.dynamic.floting_shape_text}
          tag="div"
          classes={this.handleClasses()}
        />
      );
    } else {
      return "";
    }
  }
}

export default DiviNxteFloatingElementChild;
