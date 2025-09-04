// External Dependencies
import React, { Component } from "react";
import "../base/get_responsive_css";
import "../base/hover-common.css";
import { Icon } from "../base/common";
// Internal Dependencies
import "./style.css";

class NextDualButton extends Component {
  static slug = "dnxte_dual_button";

  static css(props) {
    const additionalCss = [];
    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.button_text_one) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "button_one_margin",
          "%%order_class%% .dnxt-button-wrapper .buttonOne",
          "margin"
        )
      );
    }

    if ("" !== props.button_text_one) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "button_one_padding",
          "%%order_class%% .dnxt-button-wrapper .buttonOne",
          "padding"
        )
      );
    }
    if ("" !== props.button_text_two) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "button_two_margin",
          "%%order_class%% .dnxt-button-wrapper .buttonTwo",
          "margin"
        )
      );
    }

    if ("" !== props.button_text_two) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "button_two_padding",
          "%%order_class%% .dnxt-button-wrapper .buttonTwo",
          "padding"
        )
      );
    }

    // Button One Icon Setup
    if ("on" === props.btn_one_icon_show_hide) {
      // Button Icon Color
      let btn_one_icon_color = "";

      if ("" !== props.btn_one_icon_color) {
        btn_one_icon_color = props.btn_one_icon_color;
      }
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-one-btn-icon i",
          declaration: `color: ${btn_one_icon_color};`,
        },
      ]);

      // Button Icon Hover Color
      let btn_two_ich_enabled = typeof props.btn_two_icon_color__hover_enabled
        ? "on|hover"
        : "off|hover";
      let btn_one_ic_hover = props.btn_one_icon_color__hover;
      if ("on|hover" === btn_two_ich_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-one-btn-icon:hover i",
            declaration: `color: ${btn_one_ic_hover};`,
          },
        ]);
      }
      // Button Icon Show On Hover
      if (
        "on" === props.btn_one_on_hover &&
        "right" === props.btn_one_icon_placement
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-one-btn-icon:hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      } else if ("on" === props.btn_one_on_hover) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-one-btn-icon:hover i",
            declaration: "opacity: 1;visibility: visible;",
          },
        ]);
      }
      if (
        "on" === props.btn_one_on_hover &&
        "left" === props.btn_one_icon_placement
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-one-btn-icon:hover i",
            declaration:
              "opacity: 1;visibility: visible;padding-right: 0.4em;margin-left: 0;",
          },
        ]);
      }
      // Button Icon Placement
      if (
        "off" === props.btn_one_on_hover &&
        "left" === props.btn_one_icon_placement
      ) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-one-btn-icon.dnxt-btn-icon-one-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-right: 0.4em;",
          },
        ]);
      } else if (
        "off" === props.btn_one_on_hover &&
        "right" === props.btn_one_icon_placement
      ) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-one-btn-icon.dnxt-btn-icon-one-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      }
    }

    // Button Two Icon Setup
    if ("on" === props.btn_two_icon_show_hide) {
      // Button Icon Color
      let btn_two_icon_color = "";

      if ("" !== props.btn_two_icon_color) {
        btn_two_icon_color = props.btn_two_icon_color;
      }
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-two-btn-icon i",
          declaration: `color: ${btn_two_icon_color};`,
        },
      ]);
      // Button Icon Hover Color
      let btn_two_ich_enabled = typeof props.btn_two_icon_color__hover_enabled
        ? "on|hover"
        : "off|hover";
      let btn_two_ic_hover = props.btn_two_icon_color__hover;
      if ("on|hover" === btn_two_ich_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-two-btn-icon:hover i",
            declaration: `color: ${btn_two_ic_hover};`,
          },
        ]);
      }
      // Button Icon Show On Hover
      if (
        "on" === props.btn_two_on_hover &&
        "right" === props.btn_two_icon_placement
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-two-btn-icon:hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      } else if ("on" === props.btn_two_on_hover) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-two-btn-icon:hover i:",
            declaration: "opacity: 1;visibility: visible;",
          },
        ]);
      }
      if (
        "on" === props.btn_two_on_hover &&
        "left" === props.btn_two_icon_placement
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-two-btn-icon:hover i",
            declaration:
              "opacity: 1;visibility: visible;padding-right: 0.4em;margin-left: 0;",
          },
        ]);
      } else if ("on" === props.btn_two_on_hover) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-two-btn-icon:hover i",
            declaration: "opacity: 1;visibility: visible;",
          },
        ]);
      }
      // Button Icon Placement
      if (
        "off" === props.btn_two_on_hover &&
        "left" === props.btn_two_icon_placement
      ) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-two-btn-icon.dnxt-btn-icon-two-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-right: 0.4em;",
          },
        ]);
      } else if (
        "off" === props.btn_two_on_hover &&
        "right" === props.btn_two_icon_placement
      ) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-two-btn-icon.dnxt-btn-icon-two-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      }
    }

    // Button One Color
    if ("off" !== props.btn_one_show_hide) {
      if ("" !== props.button_bg_one) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonOne",
            declaration: `background: ${props.button_bg_one};`,
          },
        ]);
      }
      if ("on|tablet" === props.button_bg_one_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonOne",
            declaration: `background: ${props.button_bg_one_tablet};`,
            device: "tablet",
          },
        ]);
      }
      if ("on|phone" === props.button_bg_one_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonOne",
            declaration: `background: ${props.button_bg_one_phone};`,
            device: "phone",
          },
        ]);
      }
      if ("on|hover" === props.button_bg_one__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonOne",
            declaration: `background: ${props.button_bg_one__hover}`,
          },
        ]);
      }
    }

    // Button Background Gradient One
    if ("off" !== props.btn_one_gradient_show_hide) {
      let bgOneGradientDirection =
          props.bg_one_gradient_type === "linear-gradient"
            ? props.bg_one_gradient_type_linear_direction
            : props.bg_one_gradient_type_radial_direction,
        bgOneGradientColorOne = props.bg_one_gradient_color_one,
        bgOneGradientColorTwo = props.bg_one_gradient_color_two,
        bgOneGradientStartPosition = props.bg_one_gradient_start_position,
        bgOneGradientEndPosition = props.bg_one_gradient_end_position,
        bgOneGradientdient = `background: ${props.bg_one_gradient_type}(${bgOneGradientDirection}, ${bgOneGradientColorOne} ${bgOneGradientStartPosition}, ${bgOneGradientColorTwo} ${bgOneGradientEndPosition}) !important;`;

      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-button-wrapper .buttonOne`,
          declaration: bgOneGradientdient,
        },
      ]);
    }

    // Button Two Color
    if ("off" !== props.btn_two_color_show_hide) {
      if ("" !== props.button_bg_two) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonTwo",
            declaration: `background: ${props.button_bg_two};`,
          },
        ]);
      }
      if ("on|tablet" === props.button_bg_two_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonTwo",
            declaration: `background: ${props.button_bg_two_tablet};`,
            device: "tablet",
          },
        ]);
      }
      if ("on|phone" === props.button_bg_two_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonTwo",
            declaration: `background: ${props.button_bg_two_phone};`,
            device: "phone",
          },
        ]);
      }
      if ("on|hover" === props.button_bg_two__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-button-wrapper .buttonTwo",
            declaration: `background: ${props.button_bg_two__hover}`,
          },
        ]);
      }
    }

    // Button Background Gradient Two
    if ("off" !== props.btn_two_gradient_show_hide) {
      let bgTwoGradientDirection =
          props.bg_two_gradient_type === "linear-gradient"
            ? props.bg_two_gradient_type_linear_direction
            : props.bg_two_gradient_type_radial_direction,
        bgTwoGradientColorOne = props.bg_two_gradient_color_one,
        bgTwoGradientColorTwo = props.bg_two_gradient_color_two,
        bgTwoGradientStartPosition = props.bg_two_gradient_start_position,
        bgTwoGradientEndPosition = props.bg_two_gradient_end_position,
        bgTwoGradientdient = `background: ${props.bg_two_gradient_type}(${bgTwoGradientDirection}, ${bgTwoGradientColorOne} ${bgTwoGradientStartPosition}, ${bgTwoGradientColorTwo} ${bgTwoGradientEndPosition}) !important;`;

      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-button-wrapper .buttonTwo`,
          declaration: bgTwoGradientdient,
        },
      ]);
    }

    // Button One Hover Background Color
    let dnxt_dual_one_hover_bg_color = props.dnxt_dual_one_hover_bg_color;
    let dnxt_dual_one_hover_bg = props.dnxt_dual_one_hover_bg;
    if ("" !== props.dnxt_dual_one_hover_bg_color) {
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.${dnxt_dual_one_hover_bg}:before`,
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .${dnxt_dual_one_hover_bg}:hover:before`,
          declaration: `transform: scaleX(1)!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-fade:hover",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
    }

    // Button Two Hover Background Color
    let dnxt_dual_two_hover_bg_color = props.dnxt_dual_two_hover_bg_color;
    let dnxt_dual_two_hover_bg = props.dnxt_dual_two_hover_bg;
    if ("" !== props.dnxt_dual_two_hover_bg_color) {
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.${dnxt_dual_two_hover_bg}:before`,
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .${dnxt_dual_two_hover_bg}:hover:before`,
          declaration: `transform: scaleX(1)!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-fade:hover",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Radial Out
    if ("dnxt-hover-radial-out" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_radial_out_bg_color =
        props.dnxt_dual_one_radial_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-radial-out",
          declaration: `background: ${dnxt_dual_one_radial_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-radial-out:before",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-radial-out:hover:before`,
          declaration: `transform: scale(2)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-radial-out" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_radial_out_bg_color =
        props.dnxt_dual_two_radial_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-radial-out",
          declaration: `background: ${dnxt_dual_two_radial_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-radial-out:before",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-radial-out:hover:before`,
          declaration: `transform: scale(2)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Rectangle In
    if ("dnxt-hover-rectangle-in" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_rectangle_in_bg_color =
        props.dnxt_dual_one_rectangle_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-rectangle-in",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-rectangle-in:before",
          declaration: `background: ${dnxt_dual_one_rectangle_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-rectangle-in:hover:before`,
          declaration: `transform: scale(0)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-rectangle-in" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_rectangle_in_bg_color =
        props.dnxt_dual_two_rectangle_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-rectangle-in",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-rectangle-in:before",
          declaration: `background: ${dnxt_dual_two_rectangle_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-rectangle-in:hover:before`,
          declaration: `transform: scale(0)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Radial In
    if ("dnxt-hover-radial-in" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_radial_in_bg_color =
        props.dnxt_dual_one_radial_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-radial-in",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-radial-in:before",
          declaration: `background: ${dnxt_dual_one_radial_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-radial-in:hover:before`,
          declaration: `transform: scale(0)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-radial-in" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_radial_in_bg_color =
        props.dnxt_dual_two_radial_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-radial-in",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-radial-in:before",
          declaration: `background: ${dnxt_dual_two_radial_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-radial-in:hover:before`,
          declaration: `transform: scale(0)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Rectangle Out
    if ("dnxt-hover-rectangle-out" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_rectangle_out_bg_color =
        props.dnxt_dual_one_rectangle_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-rectangle-out",
          declaration: `background: ${dnxt_dual_one_rectangle_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-rectangle-out:before",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-rectangle-out:hover:before`,
          declaration: `transform: scale(1)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-rectangle-out" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_rectangle_out_bg_color =
        props.dnxt_dual_two_rectangle_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-rectangle-out",
          declaration: `background: ${dnxt_dual_two_rectangle_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-rectangle-out:before",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-rectangle-out:hover:before`,
          declaration: `transform: scale(1)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Shutter In
    if ("dnxt-hover-shutter-in-horizontal" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_shutter_in_bg_color =
        props.dnxt_dual_one_shutter_in_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-in-horizontal",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-in-horizontal:before",
          declaration: `background: ${dnxt_dual_one_shutter_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-shutter-in-horizontal:hover:before`,
          declaration: `transform: scaleX(0)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-shutter-in-horizontal" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_shutter_in_bg_color =
        props.dnxt_dual_two_shutter_in_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-in-horizontal",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-in-horizontal:before",
          declaration: `background: ${dnxt_dual_two_shutter_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-shutter-in-horizontal:hover:before`,
          declaration: `transform: scaleX(0)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Shutter Out
    if ("dnxt-hover-shutter-out-horizontal" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_shutter_out_bg_color =
        props.dnxt_dual_one_shutter_out_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-out-horizontal",
          declaration: `background: ${dnxt_dual_one_shutter_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-out-horizontal:before",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-shutter-out-horizontal:hover:before`,
          declaration: `transform: scaleX(1)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-shutter-out-horizontal" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_shutter_out_bg_color =
        props.dnxt_dual_two_shutter_out_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-out-horizontal",
          declaration: `background: ${dnxt_dual_two_shutter_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-out-horizontal:before",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-shutter-out-horizontal:hover:before`,
          declaration: `transform: scaleX(1)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Shutter In Vertical
    if ("dnxt-hover-shutter-in-vertical" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_shutter_in_v_bg_color =
        props.dnxt_dual_one_shutter_in_v_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-in-vertical",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-in-vertical:before",
          declaration: `background: ${dnxt_dual_one_shutter_in_v_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-shutter-in-vertical:hover:before`,
          declaration: `transform: scaleY(0)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-shutter-in-vertical" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_shutter_in_v_bg_color =
        props.dnxt_dual_two_shutter_in_v_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-in-vertical",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-in-vertical:before",
          declaration: `background: ${dnxt_dual_two_shutter_in_v_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-shutter-in-vertical:hover:before`,
          declaration: `transform: scaleY(0)!important;`,
        },
      ]);
    }
    // Button One & Two Hover Background Color Shutter Out Vertical
    if ("dnxt-hover-shutter-out-vertical" === props.dnxt_dual_one_hover_bg) {
      let dnxt_dual_one_shutter_out_v_bg_color =
        props.dnxt_dual_one_shutter_out_v_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-out-vertical",
          declaration: `background: ${dnxt_dual_one_shutter_out_v_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-shutter-out-vertical:before",
          declaration: `background: ${dnxt_dual_one_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonOne.dnxt-hover-shutter-out-vertical:hover:before`,
          declaration: `transform: scaleY(1)!important;`,
        },
      ]);
    }
    if ("dnxt-hover-shutter-out-vertical" === props.dnxt_dual_two_hover_bg) {
      let dnxt_dual_two_shutter_out_v_bg_color =
        props.dnxt_dual_two_shutter_out_v_bg_color;
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-out-vertical",
          declaration: `background: ${dnxt_dual_two_shutter_out_v_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-shutter-out-vertical:before",
          declaration: `background: ${dnxt_dual_two_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% a.buttonTwo.dnxt-hover-shutter-out-vertical:hover:before`,
          declaration: `transform: scaleY(1)!important;`,
        },
      ]);
    }

    // Hover One & Two Trim Border Color
    let dnxt_dual_one_trim_border_color = props.dnxt_dual_one_trim_border_color;
    if ("dnxt-hover-trim" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-trim:before",
          declaration: `border: ${dnxt_dual_one_trim_border_color} solid 4px;`,
        },
      ]);
    }
    let dnxt_dual_two_trim_border_color = props.dnxt_dual_two_trim_border_color;
    if ("dnxt-hover-trim" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-trim:before",
          declaration: `border: ${dnxt_dual_two_trim_border_color} solid 4px;`,
        },
      ]);
    }
    // Hover One & Two Ripple Out Border Color
    let dnxt_dual_one_ripple_out_color = props.dnxt_dual_one_ripple_out_color;
    if ("dnxt-hover-ripple-out" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-ripple-out:before",
          declaration: `border: ${dnxt_dual_one_ripple_out_color} solid 6px;`,
        },
      ]);
    }
    let dnxt_dual_two_ripple_out_color = props.dnxt_dual_two_ripple_out_color;
    if ("dnxt-hover-ripple-out" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-ripple-out:before",
          declaration: `border: ${dnxt_dual_two_ripple_out_color} solid 6px;`,
        },
      ]);
    }
    // Hover One & Two Ripple In Border Color
    let dnxt_dual_one_ripple_in_color = props.dnxt_dual_one_ripple_in_color;
    if ("dnxt-hover-ripple-in" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-ripple-in:before",
          declaration: `border: ${dnxt_dual_one_ripple_in_color} solid 6px;`,
        },
      ]);
    }
    let dnxt_dual_two_ripple_in_color = props.dnxt_dual_two_ripple_in_color;
    if ("dnxt-hover-ripple-in" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-ripple-in:before",
          declaration: `border: ${dnxt_dual_two_ripple_in_color} solid 6px;`,
        },
      ]);
    }
    // Hover One & Two Underline From Left Color
    let dnxt_dual_one_underline_from_left_color =
      props.dnxt_dual_one_underline_from_left_color;
    if ("dnxt-hover-underline-from-left" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-underline-from-left:before",
          declaration: `background: ${dnxt_dual_one_underline_from_left_color}`,
        },
      ]);
    }
    let dnxt_dual_two_underline_from_left_color =
      props.dnxt_dual_two_underline_from_left_color;
    if ("dnxt-hover-underline-from-left" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-underline-from-left:before",
          declaration: `background: ${dnxt_dual_two_underline_from_left_color}`,
        },
      ]);
    }
    // Hover One & Two Underline From Center Color
    let dnxt_dual_one_underline_from_center_color =
      props.dnxt_dual_one_underline_from_center_color;
    if (
      "dnxt-hover-underline-from-center" === props.dnxt_dual_one_hover_border
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-underline-from-center:before",
          declaration: `background: ${dnxt_dual_one_underline_from_center_color}`,
        },
      ]);
    }
    let dnxt_dual_two_underline_from_center_color =
      props.dnxt_dual_two_underline_from_center_color;
    if (
      "dnxt-hover-underline-from-center" === props.dnxt_dual_two_hover_border
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-underline-from-center:before",
          declaration: `background: ${dnxt_dual_two_underline_from_center_color}`,
        },
      ]);
    }
    // Hover One & Two Underline From Right Color
    let dnxt_dual_one_underline_from_right_color =
      props.dnxt_dual_one_underline_from_right_color;
    if (
      "dnxt-hover-underline-from-right" === props.dnxt_dual_one_hover_border
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-underline-from-right:before",
          declaration: `background: ${dnxt_dual_one_underline_from_right_color}`,
        },
      ]);
    }
    let dnxt_dual_two_underline_from_right_color =
      props.dnxt_dual_two_underline_from_right_color;
    if (
      "dnxt-hover-underline-from-right" === props.dnxt_dual_two_hover_border
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-underline-from-right:before",
          declaration: `background: ${dnxt_dual_two_underline_from_right_color}`,
        },
      ]);
    }
    // Hover One & Two Overline From Left Color
    let dnxt_dual_one_overline_left_color =
      props.dnxt_dual_one_overline_left_color;
    if ("dnxt-hover-overline-from-left" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-overline-from-left:before",
          declaration: `background: ${dnxt_dual_one_overline_left_color}`,
        },
      ]);
    }
    let dnxt_dual_two_overline_left_color =
      props.dnxt_dual_two_overline_left_color;
    if ("dnxt-hover-overline-from-left" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-overline-from-left:before",
          declaration: `background: ${dnxt_dual_two_overline_left_color}`,
        },
      ]);
    }
    // Hover One & Two Overline From Center Color
    let dnxt_dual_one_overline_center_color =
      props.dnxt_dual_one_overline_center_color;
    if (
      "dnxt-hover-overline-from-center" === props.dnxt_dual_one_hover_border
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-overline-from-center:before",
          declaration: `background: ${dnxt_dual_one_overline_center_color}`,
        },
      ]);
    }
    let dnxt_dual_two_overline_center_color =
      props.dnxt_dual_two_overline_center_color;
    if (
      "dnxt-hover-overline-from-center" === props.dnxt_dual_two_hover_border
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-overline-from-center:before",
          declaration: `background: ${dnxt_dual_two_overline_center_color}`,
        },
      ]);
    }
    // Hover One & Two Overline From Right Color
    let dnxt_dual_one_overline_right_color =
      props.dnxt_dual_one_overline_right_color;
    if ("dnxt-hover-overline-from-right" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-overline-from-right:before",
          declaration: `background: ${dnxt_dual_one_overline_right_color}`,
        },
      ]);
    }
    let dnxt_dual_two_overline_right_color =
      props.dnxt_dual_two_overline_right_color;
    if ("dnxt-hover-overline-from-right" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-overline-from-right:before",
          declaration: `background: ${dnxt_dual_two_overline_right_color}`,
        },
      ]);
    }
    // Hover One & Two Reveal Color
    let dnxt_dual_one_reveal_color = props.dnxt_dual_one_reveal_color;
    if ("dnxt-hover-reveal" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonOne.dnxt-hover-reveal:before",
          declaration: `border-color: ${dnxt_dual_one_reveal_color}`,
        },
      ]);
    }
    let dnxt_dual_two_reveal_color = props.dnxt_dual_two_reveal_color;
    if ("dnxt-hover-reveal" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% a.buttonTwo.dnxt-hover-reveal:before",
          declaration: `border-color: ${dnxt_dual_two_reveal_color}`,
        },
      ]);
    }
    // Hover One & Two Underline Reveal Color
    let dnxt_dual_one_underline_reveal_color =
      props.dnxt_dual_one_underline_reveal_color;
    if ("dnxt-hover-underline-reveal" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-underline-reveal:before",
          declaration: `background: ${dnxt_dual_one_underline_reveal_color}`,
        },
      ]);
    }
    let dnxt_dual_two_underline_reveal_color =
      props.dnxt_dual_two_underline_reveal_color;
    if ("dnxt-hover-underline-reveal" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-underline-reveal:before",
          declaration: `background: ${dnxt_dual_two_underline_reveal_color}`,
        },
      ]);
    }
    // Hover One & Two Overline Reveal Color
    let dnxt_dual_one_overline_reveal_color =
      props.dnxt_dual_one_overline_reveal_color;
    if ("dnxt-hover-overline-reveal" === props.dnxt_dual_one_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonOne.dnxt-hover-overline-reveal:before",
          declaration: `background: ${dnxt_dual_one_overline_reveal_color}`,
        },
      ]);
    }
    let dnxt_dual_two_overline_reveal_color =
      props.dnxt_dual_two_overline_reveal_color;
    if ("dnxt-hover-overline-reveal" === props.dnxt_dual_two_hover_border) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% a.buttonTwo.dnxt-hover-overline-reveal:before",
          declaration: `background: ${dnxt_dual_two_overline_reveal_color}`,
        },
      ]);
    }

    return additionalCss;
  }

  render() {
    const { props } = this;

    const buttonOneId = props.button_one_css_id || "";
    const buttonTwoId = props.button_two_css_id || "";
    const buttonOneClasses = props.button_one_css_classes || "";
    const buttonTwoClasses = props.button_two_css_classes || "";

    // Button One Hover 2D
    let btnOneHover2d = "";
    if ("" !== props.dnxt_dual_one_hover_2d) {
      btnOneHover2d = props.dnxt_dual_one_hover_2d;
    }

    // Button Two Hover 2D
    let btnTwoHover2d = "";
    if ("" !== props.dnxt_dual_two_hover_2d) {
      btnTwoHover2d = props.dnxt_dual_two_hover_2d;
    }

    // Button One Hover Background
    let btnOneHoverBg = "";
    if ("" !== props.dnxt_dual_one_hover_bg) {
      btnOneHoverBg = props.dnxt_dual_one_hover_bg;
    }
    // Button Two Hover Background
    let btnTwoHoverBg = "";
    if ("" !== props.dnxt_dual_two_hover_bg) {
      btnTwoHoverBg = props.dnxt_dual_two_hover_bg;
    }

    // Button One Hover Stock
    let btnOneHoverBorder = "";
    if ("" !== props.dnxt_dual_one_hover_border) {
      btnOneHoverBorder = props.dnxt_dual_one_hover_border;
    }
    // Button Two Hover Stock
    let btnTwoHoverBorder = "";
    if ("" !== props.dnxt_dual_two_hover_border) {
      btnTwoHoverBorder = props.dnxt_dual_two_hover_border;
    }

    // Button One Hover Icons
    let btnOneHoverIcons = "";
    if ("" !== props.dnxt_dual_one_hover_icons) {
      btnOneHoverIcons = props.dnxt_dual_one_hover_icons;
    }
    // Button Two Hover Icons
    let btnTwoHoverIcons = "";
    if ("" !== props.dnxt_dual_two_hover_icons) {
      btnTwoHoverIcons = props.dnxt_dual_two_hover_icons;
    }

    let utils = window.ET_Builder.API.Utils;

    let iconOne = <Icon utils={utils} icon={props.btn_one_icon} tag="i" />;
    let rightOneItag = "right" === props.btn_one_icon_placement ? iconOne : "";
    let leftOneItag = "left" === props.btn_one_icon_placement ? iconOne : "";

    let iconHtml = <Icon utils={utils} icon={props.btn_two_icon} tag="i" />;
    let rightTwoItag = "right" === props.btn_two_icon_placement ? iconHtml : "";
    let leftTwoItag = "left" === props.btn_two_icon_placement ? iconHtml : "";

    const buttonTargetOne =
      "on" === props.button_link_one_new_window ? "_blank" : "_self";
    const buttonTargetTwo =
      "on" === props.button_link_two_new_window ? "_blank" : "_self";

    //Button On Hover class inner
    let btnIconOneOnHover =
      "off" === props.btn_one_on_hover ? "dnxt-btn-icon-one-on-hover" : "";
    //Button On Hover class inner
    let btnIconTwoOnHover =
      "off" === props.btn_two_on_hover ? "dnxt-btn-icon-two-on-hover" : "";

    // Dynamic Content
    const btnTextOne = this.props.dynamic.button_text_one;
    let btnTextOneComponent = btnTextOne.render();
    if (btnTextOne.loading) {
      // Let Divi render the loading placeholder.
      return btnTextOneComponent;
    }
    const btnTextTwo = this.props.dynamic.button_text_two;
    let btnTextTwoComponent = btnTextTwo.render();
    if (btnTextTwo.loading) {
      // Let Divi render the loading placeholder.
      return btnTextTwoComponent;
    }

    let dnxt_dual_button_alignment = props.dnxt_dual_button_alignment
        ? "dnxt_dual_button_alignment_" + props.dnxt_dual_button_alignment
        : "",
      dnxt_dual_button_alignment_tablet = props.dnxt_dual_button_alignment_tablet
        ? "dnxt_dual_button_alignment_tablet_" +
          props.dnxt_dual_button_alignment_tablet
        : "",
      dnxt_dual_button_alignment_phone = props.dnxt_dual_button_alignment_phone
        ? "dnxt_dual_button_alignment_phone_" +
          props.dnxt_dual_button_alignment_phone
        : "";

    return (
      <div
        className={`dnxt-button-wrapper ${dnxt_dual_button_alignment} ${dnxt_dual_button_alignment_tablet} ${dnxt_dual_button_alignment_phone}`}
      >
        <a
          id={buttonOneId}
          className={`buttonOne dnxt-one-btn-icon ${btnIconOneOnHover} ${btnOneHover2d} ${btnOneHoverBg} ${btnOneHoverIcons} ${btnOneHoverBorder} ${buttonOneClasses}`}
          href={props.button_link_one}
          target={buttonTargetOne}
        >
          {leftOneItag}
          {btnTextOneComponent}
          {rightOneItag}
        </a>
        <a
          id={buttonTwoId}
          className={`buttonTwo dnxt-two-btn-icon ${btnIconTwoOnHover} ${btnTwoHover2d} ${btnTwoHoverBg} ${btnTwoHoverBorder} ${btnTwoHoverIcons} ${buttonTwoClasses}`}
          href={props.button_link_two}
          target={buttonTargetTwo}
        >
          {leftTwoItag}
          {btnTextTwoComponent}
          {rightTwoItag}
        </a>
      </div>
    );
  }
}

export default NextDualButton;
