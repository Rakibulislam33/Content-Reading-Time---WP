// External Dependencies
import React, { Component } from "react";
import { Icon } from "../base/common";
// Internal Dependencies
import "./style.css";

class DiviNextDivider extends Component {
  static slug = "dnxte_divider";

  static css(props) {
    const additionalCss = [];

    let dnextDividerIconColor = props.dnext_sid_icon_color,
      dnextDividerIconColorHover = props.dnext_sid_icon_color__hover,
      dnextDividerIconColorTablet = props.dnext_sid_icon_color_tablet,
      dnextDividerIconColorPhone = props.dnext_sid_icon_color_phone;

    let dnextDividerIconFontSize = props.dnext_sid_icon_font_size,
      dnextDividerIconFontHover = props.dnext_sid_icon_font_size__hover,
      dnextDividerIconFontSizeTablet = props.dnext_sid_icon_font_size_tablet,
      dnextDividerIconFontSizePhone = props.dnext_sid_icon_font_size_phone;

    let dnextDividerIconSelector =
      "%%order_class%% .dnext-sid-text-divider-icon";
    let dnextDividerImgWidth = props.dnext_sid_image_max_width,
      dnextDividerImgWidthHover = props.dnext_sid_image_max_width__hover,
      dnextDividerImgWidthTablet = props.dnext_sid_image_max_width_tablet,
      dnextDividerImgWidthPhone = props.dnext_sid_image_max_width_phone;

    // Divider Text Background
    let dnextDividerBgColor = "",
      dnextGradientType = "",
      dnextGradientLinear = "",
      dnextGradientRadial = "",
      dnextGradientApply = "",
      dnextGradientColorOne = "",
      dnextGradientColorTwo = "",
      dnextGradientStartPosition = "",
      dnextGradientEndPosition = "";

    if ("on|hover" === props.dnext_sid_image_max_width__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider-img:hover",
          declaration: `max-width: ${dnextDividerImgWidthHover}`,
        },
      ]);
    } else if ("on|tablet" === props.dnext_sid_image_max_width_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider-img",
          declaration: `max-width: ${dnextDividerImgWidthTablet}`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnext_sid_image_max_width_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider-img",
          declaration: `max-width: ${dnextDividerImgWidthPhone}`,
          device: "phone",
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider-img",
          declaration: `max-width: ${dnextDividerImgWidth}`,
        },
      ]);
    }

    if ("on|hover" === props.dnext_sid_icon_color__hover_enabled) {
      additionalCss.push([
        {
          selector: dnextDividerIconSelector,
          declaration: `color: ${dnextDividerIconColorHover};`,
        },
      ]);
    } else if (
      dnextDividerIconColorTablet &&
      "on|tablet" === props.dnext_sid_icon_color_last_edited
    ) {
      additionalCss.push([
        {
          selector: dnextDividerIconSelector,
          declaration: `color: ${dnextDividerIconColorTablet};`,
        },
      ]);
    } else if (
      dnextDividerIconColorPhone &&
      "on|phone" === props.dnext_sid_icon_color_last_edited
    ) {
      additionalCss.push([
        {
          selector: dnextDividerIconSelector,
          declaration: `color: ${dnextDividerIconColorPhone};`,
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: dnextDividerIconSelector,
          declaration: `color: ${dnextDividerIconColor}`,
        },
      ]);
    }

    if ("on" !== props.dnext_sid_use_icon) {
      if ("on|hover" === props.dnext_sid_icon_font_size__hover_enabled) {
        additionalCss.push([
          {
            selector: dnextDividerIconSelector,
            declaration: `font-size: ${dnextDividerIconFontHover}`,
          },
        ]);
      } else if (
        dnextDividerIconFontSizeTablet &&
        "on|tablet" === props.dnext_sid_icon_font_size_last_edited
      ) {
        additionalCss.push([
          {
            selector: dnextDividerIconSelector,
            declaration: `font-size: ${dnextDividerIconFontSizeTablet}`,
          },
        ]);
      } else if (
        dnextDividerIconFontSizePhone &&
        "on|phone" === props.dnext_sid_icon_font_size_last_edited
      ) {
        additionalCss.push([
          {
            selector: dnextDividerIconSelector,
            declaration: `font-size: ${dnextDividerIconFontSizePhone}`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: dnextDividerIconSelector,
            declaration: `font-size: ${dnextDividerIconFontSize}`,
          },
        ]);
      }
    }

    // icon/img bg color
    if (props.dnext_divider_bg) {
      dnextDividerBgColor = props.dnext_divider_bg;
    }

    // checking gradient type
    if (props.dnext_divider_bg_gradient_type) {
      dnextGradientType = props.dnext_divider_bg_gradient_type;
    }

    // Bg Linear Gradient Direction
    if (props.dnext_divider_bg_gradient_type_linear_direction) {
      dnextGradientLinear =
        props.dnext_divider_bg_gradient_type_linear_direction;
    }

    // Bg Radial Gradient Direction
    if (props.dnext_divider_bg_gradient_type_radial_direction) {
      dnextGradientRadial =
        props.dnext_divider_bg_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.dnext_divider_bg_gradient_type) {
      dnextGradientApply = `${dnextGradientRadial}`;
    } else if ("linear-gradient" === props.dnext_divider_bg_gradient_type) {
      dnextGradientApply = `${dnextGradientLinear}`;
    }

    // Gradient color one for text
    if (props.dnext_divider_bg_gradient_color_one) {
      dnextGradientColorOne = props.dnext_divider_bg_gradient_color_one;
    }

    // Gradient color two for content
    if (props.dnext_divider_bg_gradient_color_two) {
      dnextGradientColorTwo = props.dnext_divider_bg_gradient_color_two;
    }

    // Text Gradient color start position
    if (props.dnext_divider_bg_gradient_start_position) {
      dnextGradientStartPosition =
        props.dnext_divider_bg_gradient_start_position;
    }

    // Text Gradient color end position
    if (props.dnext_divider_bg_gradient_end_position) {
      dnextGradientEndPosition = props.dnext_divider_bg_gradient_end_position;
    }

    // single color
    if ("on" === props.dnext_divider_bg_show_hide) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-sid-text-divider-img, %%order_class%% .dnext-sid-text-divider-icon",
          declaration: `background: ${dnextDividerBgColor}`,
        },
      ]);
    }

    // gradient color
    if ("on" === props.dnext_divider_bg_gradient_show_hide) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-sid-text-divider-img, %%order_class%% .dnext-sid-text-divider-icon",
          declaration: `background: ${dnextGradientType}(${dnextGradientApply},${dnextGradientColorOne} ${dnextGradientStartPosition}, ${dnextGradientColorTwo} ${dnextGradientEndPosition});`,
        },
      ]);
    }

    // Divider Style
    if ("" !== props.dnext_sid_divider_style) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider",
          declaration: `border-top-style: ${props.dnext_sid_divider_style};`,
        },
      ]);
    }

    // Divider Color
    if ("" !== props.dnext_sid_divider_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider",
          declaration: `border-top-color: ${props.dnext_sid_divider_color};`,
        },
      ]);
    }

    // Divider Width
    if ("" !== props.dnext_sid_divider_width) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider",
          declaration: `border-top-width: ${props.dnext_sid_divider_width};`,
        },
      ]);
    }

    // Divider Gap
    if ("" !== props.dnext_sid_divider_gap) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-sid-text-divider",
          declaration: `margin: ${props.dnext_sid_divider_gap};`,
        },
      ]);
    }

    return additionalCss;
  }

  render() {
    let props = this.props;

    // Dynamic Image or Icon
    const dnextSidImage = {
      printImage() {
        let dynamicImg = props.dynamic.dnext_sid_img,
          dynamicImgTablet = props.dynamic.dnext_sid_img_tablet,
          dynamicImgPhone = props.dynamic.dnext_sid_img_phone,
          dynamicImgHover = props.dynamic.dnext_sid_img__hover,
          dynamicImgAlt = props.dynamic.dnext_sid_alt;

        let utils = window.ET_Builder.API.Utils;

        if (dynamicImg.loading) {
          // Let Divi render the loading placeholder.
          return dynamicImg.render();
        }
        // select image or icon
        if ("on" === props.dnext_sid_use_icon && dynamicImg.hasValue) {
          if ("on|tablet" === props.dnext_sid_img_last_edited) {
            return (
              <img
                className="dnext-sid-text-divider-img et-waypoint et_pb_animation_top et-animated"
                src={
                  dynamicImgTablet.value
                    ? dynamicImgTablet.value
                    : dynamicImg.value
                }
                alt={dynamicImgAlt}
              />
            );
          } else if ("on|phone" === props.dnext_sid_img_last_edited) {
            return (
              <img
                className="dnext-sid-text-divider-img et-waypoint et_pb_animation_top et-animated"
                src={
                  dynamicImgTablet.value
                    ? dynamicImgPhone.value
                    : dynamicImgTablet.value
                    ? dynamicImgTablet.value
                    : dynamicImg.value
                }
                alt={dynamicImgAlt}
              />
            );
          } else if ("on|hover" === props.dnext_sid_img__hover_enabled) {
            return (
              <img
                className="dnext-sid-text-divider-img et-waypoint et_pb_animation_top et-animated"
                src={
                  dynamicImgHover.value
                    ? dynamicImgHover.value
                    : dynamicImg.value
                }
                alt={dynamicImgAlt}
              />
            );
          }
          return (
            <img
              className="dnext-sid-text-divider-img et-waypoint et_pb_animation_top et-animated"
              src={dynamicImg.value}
              alt={dynamicImgAlt.value}
            />
          );
        }

        if ("off" === props.dnext_sid_use_icon) {
          if ("on|hover" === props.dnext_sid_font_icon__hover_enabled) {
            return (
              <Icon
                utils={utils}
                icon={props.dnext_sid_font_icon__hover || "7"}
                classes="dnext-sid-text-divider-icon"
              />
            );
          } else if ("on|tablet" === props.dnext_sid_font_icon_last_edited) {
            return (
              <Icon
                utils={utils}
                icon={props.dnext_sid_font_icon_tablet || "7"}
                classes="dnext-sid-text-divider-icon"
              />
            );
          } else if ("on|phone" === props.dnext_sid_font_icon_last_edited) {
            return (
              <Icon
                utils={utils}
                icon={props.dnext_sid_font_icon_phone || "7"}
                classes="dnext-sid-text-divider-icon"
              />
            );
          } else {
            return (
              <Icon
                utils={utils}
                icon={props.dnext_sid_font_icon || "7"}
                classes="dnext-sid-text-divider-icon"
              />
            );
          }
        }
      },
    };

    let dnext_sid_icon_alignment = "";
    switch (props.dnext_sid_icon_alignment) {
      case "left":
        dnext_sid_icon_alignment += "dnext-sid-text-divider-alignment-left";
        break;
      case "right":
        dnext_sid_icon_alignment += "dnext-sid-text-divider-alignment-right";
        break;
      default:
        dnext_sid_icon_alignment = "";
        break;
    }
    return (
      <div
        className={`dnext-sid-text-divider-wrapper ${dnext_sid_icon_alignment}`}
      >
        <div className="dnext-sid-text-divider-before dnext-sid-text-divider" />
        {dnextSidImage.printImage()}
        <div className="dnext-sid-text-divider-after dnext-sid-text-divider" />
      </div>
    );
  }
}

export default DiviNextDivider;
