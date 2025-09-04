// External Dependencies
import React, { Component } from "react";
import {
  applyBgCss,
  applyPsuedoIconCss,
  getAlignment, IconUsingPsuedo, Image,
  Title
} from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class Next3dFlipbox extends Component {
  static slug = "dnxte_3d_flipbox";

  static css(props) {
    const additionalCss = [];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.front_icon_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_icon_margin",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span",
          "margin"
        )
      );
    }

    if ("" !== props.front_icon_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_icon_padding",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span:before",
          "padding"
        )
      );
    }

    if ("" !== props.front_image_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_image_margin",
          "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-front-image",
          "margin"
        )
      );
    }

    if ("" !== props.front_image_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_image_padding",
          "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-front-image",
          "padding"
        )
      );
    }

    if ("" !== props.front_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_heading_margin",
          "%%order_class%% .dnext-3d-transform-flpb-flip-box-front .dnext-3d-transform-flpb-flip-box-header",
          "margin"
        )
      );
    }

    if ("" !== props.front_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_heading_padding",
          "%%order_class%% .dnext-3d-transform-flpb-flip-box-front .dnext-3d-transform-flpb-flip-box-header",
          "padding"
        )
      );
    }

    if ("" !== props.front_content_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_content_margin",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-front .dnext-3d-flipbox-front-pra",
          "margin"
        )
      );
    }

    if ("" !== props.front_content_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_content_padding",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-front p",
          "padding"
        )
      );
    }

    if ("" !== props.back_icon_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_icon_margin",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span",
          "margin"
        )
      );
    }

    if ("" !== props.back_icon_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_icon_padding",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span:before",
          "padding"
        )
      );
    }

    if ("" !== props.back_image_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_image_margin",
          "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-back-image",
          "margin"
        )
      );
    }

    if ("" !== props.back_image_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_image_padding",
          "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-back-image",
          "padding"
        )
      );
    }

    if ("" !== props.back_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_heading_margin",
          "%%order_class%% .dnext-3d-transform-flpb-flip-box-back .dnext-3d-transform-flpb-flip-box-header",
          "margin"
        )
      );
    }

    if ("" !== props.back_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_heading_padding",
          "%%order_class%% .dnext-3d-transform-flpb-flip-box-back .dnext-3d-transform-flpb-flip-box-header",
          "padding"
        )
      );
    }

    if ("" !== props.back_content_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_content_margin",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-back .dnext-3d-flipbox-back-pra",
          "margin"
        )
      );
    }

    if ("" !== props.back_content_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_content_padding",
          "%%order_class%% .dnext-3d-flpb-flibbox-icon-back p",
          "padding"
        )
      );
    }

    if ("" !== props.back_btn_margin_outer) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_margin_outer",
          "%%order_class%% .dnext-3d-flpb-flibbox-flip-button",
          "margin"
        )
      );
    }

    if ("" !== props.back_btn_padding_outer) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_padding_outer",
          "%%order_class%% .dnext-3d-flpb-flibbox-flip-button",
          "padding"
        )
      );
    }

    if ("" !== props.back_btn_margin_inner) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_margin_inner",
          "%%order_class%% .dnext-3d-flpb-flibbox-readmore",
          "margin"
        )
      );
    }

    if ("" !== props.back_btn_padding_inner) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_padding_inner",
          "%%order_class%% .dnext-3d-flpb-flibbox-readmore",
          "padding"
        )
      );
    }

    // icon settings
    if ("off" !== props.front_icon_switch) {
      const selector =
        "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span::before";
      applyPsuedoIconCss("front_icon", selector, props, additionalCss);
    }

    // Front Icon Color
    if ("" !== props.front_icon_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span",
          declaration: `color: ${props.front_icon_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.front_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span",
          declaration: `color: ${props.front_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.front_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span",
          declaration: `color: ${props.front_icon_color_phone};`,
          device: "phone",
        },
      ]);
    }
    // back icon settings
    if ("off" !== props.back_icon_switch) {
      const selector =
        "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span::before";
      applyPsuedoIconCss("back_icon", selector, props, additionalCss);
    }

    // Back Icon Color
    if ("" !== props.back_icon_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span",
          declaration: `color: ${props.back_icon_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.back_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span",
          declaration: `color: ${props.back_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.back_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span",
          declaration: `color: ${props.back_icon_color_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.back_icon_color__hover_enabled) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span:hover",
          declaration: `color: ${props.back_icon_color__hover};`,
        },
      ]);
    }

    // Front Icon Size
    if ("" !== props.front_icon_size) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span::before",
          declaration: `font-size: ${props.front_icon_size};`,
        },
      ]);
    }
    if ("on|tablet" === props.front_icon_size_last_edited) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span::before",
          declaration: `font-size: ${props.front_icon_size_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.front_icon_size_last_edited) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span::before",
          declaration: `font-size: ${props.front_icon_size_phone};`,
          device: "phone",
        },
      ]);
    }

    // Back Icon Size
    if ("" !== props.back_icon_size) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span::before",
          declaration: `font-size: ${props.back_icon_size};`,
        },
      ]);
    }
    if ("on|tablet" === props.back_icon_size_last_edited) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span::before",
          declaration: `font-size: ${props.back_icon_size_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.back_icon_size_last_edited) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span::before",
          declaration: `font-size: ${props.back_icon_size_phone};`,
          device: "phone",
        },
      ]);
    }

    // Front BG Color
    if ("off" !== props.front_bgc_show_hide) {
      if ("on|tablet" === props.front_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: ${props.front_bgc_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.front_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: ${props.front_bgc_color_phone};`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: ${props.front_bgc_color};`,
          },
        ]);
      }
    }

    // Front Gradient
    if ("off" !== props.front_gradient_show_hide) {
      let frontGradientDirection =
        props.front_gradient_type === "linear-gradient"
          ? props.front_gradient_type_linear_direction
          : props.front_gradient_type_radial_direction;
      let frontGradientColorOne = props.front_gradient_color_one;
      let frontGradientColorTwo = props.front_gradient_color_two;
      let frontGradientStartPosition = props.front_gradient_start_position;
      let frontGradientEndPosition = props.front_gradient_end_position;

      let frontGradientdient = `background: ${props.front_gradient_type}(${frontGradientDirection}, ${frontGradientColorOne} ${frontGradientStartPosition}, ${frontGradientColorTwo} ${frontGradientEndPosition}) !important;`;

      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-3d-transform-flpb-flip-box-front`,
          declaration: frontGradientdient,
        },
      ]);
    }

    let front_bg_image = props.front_bg_image;
    let front_bg_image_tablet = props.front_bg_image_tablet;
    let front_bg_image_phone = props.front_bg_image_phone;

    const front_overlay_direction =
      props.front_overlay_type === "linear-gradient"
        ? props.front_overlay_type_linear_direction
        : props.front_overlay_type_radial_direction;

    if (
      "off" !== props.front_bgi_show_hide &&
      "off" !== props.front_overlay_show_hide
    ) {
      const front_overlay_style = `${props.front_overlay_type}(${front_overlay_direction},${props.front_overlay_color_one} ${props.front_overlay_start_position}, ${props.front_overlay_color_two} ${props.front_overlay_end_position})`;

      if ("on|tablet" === props.front_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: ${front_overlay_style}, url(${
              front_bg_image_tablet ? front_bg_image_tablet : front_bg_image
            }) !important;`,
          },
        ]);
      } else if ("on|phone" === props.front_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: ${front_overlay_style}, url(${
              front_bg_image_phone
                ? front_bg_image_phone
                : front_bg_image_tablet
                ? front_bg_image_tablet
                : front_bg_image
            }) !important;`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: ${front_overlay_style}, url(${front_bg_image}) !important;`,
          },
        ]);
      }
    } else if ("off" !== props.front_bgi_show_hide) {
      if ("on|tablet" === props.front_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background-image: url(${
              front_bg_image_tablet ? front_bg_image_tablet : front_bg_image
            }) !important;`,
          },
        ]);
      } else if ("on|phone" === props.front_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background-image: url(${
              front_bg_image_phone
                ? front_bg_image_phone
                : front_bg_image_tablet
                ? front_bg_image_tablet
                : front_bg_image
            }) !important;`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-front",
            declaration: `background: url(${front_bg_image});`,
          },
        ]);
      }
    }

    // Back BG Color
    if ("off" !== props.back_bgc_show_hide) {
      if ("on|tablet" === props.back_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background: ${props.back_bgc_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.back_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background: ${props.back_bgc_color_phone};`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background: ${props.back_bgc_color};`,
          },
        ]);
      }
    }

    // Back Gradient
    if ("off" !== props.back_gradient_show_hide) {
      let backGradientDirection =
        props.back_gradient_type === "linear-gradient"
          ? props.back_gradient_type_linear_direction
          : props.back_gradient_type_radial_direction;
      let backGradientColorOne = props.back_gradient_color_one;
      let backGradientColorTwo = props.back_gradient_color_two;
      let backGradientStartPosition = props.back_gradient_start_position;
      let backGradientEndPosition = props.back_gradient_end_position;

      let backGradientdient = `background: ${props.back_gradient_type}(${backGradientDirection}, ${backGradientColorOne} ${backGradientStartPosition}, ${backGradientColorTwo} ${backGradientEndPosition}) !important;`;

      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-3d-transform-flpb-flip-box-back`,
          declaration: backGradientdient,
        },
      ]);
    }

    let back_bg_image = props.back_bg_image;
    let back_bg_image_tablet = props.back_bg_image_tablet;
    let back_bg_image_phone = props.back_bg_image_phone;

    const back_overlay_direction =
      props.back_overlay_type === "linear-gradient"
        ? props.back_overlay_type_linear_direction
        : props.back_overlay_type_radial_direction;

    if (
      "off" !== props.back_bgi_show_hide &&
      "off" !== props.back_overlay_show_hide
    ) {
      const back_overlay_style = `${props.back_overlay_type}(${back_overlay_direction},${props.back_overlay_color_one} ${props.back_overlay_start_position}, ${props.back_overlay_color_two} ${props.back_overlay_end_position})`;

      if ("on|tablet" === props.back_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background: ${back_overlay_style}, url(${
              back_bg_image_tablet ? back_bg_image_tablet : back_bg_image
            }) !important;`,
          },
        ]);
      } else if ("on|phone" === props.back_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background: ${back_overlay_style}, url(${
              back_bg_image_phone
                ? back_bg_image_phone
                : back_bg_image_tablet
                ? back_bg_image_tablet
                : back_bg_image
            }) !important`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background: ${back_overlay_style}, url(${back_bg_image}) !important;`,
          },
        ]);
      }
    } else if ("off" !== props.back_bgi_show_hide) {
      if ("on|tablet" === props.back_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background-image: url(${
              back_bg_image_tablet ? back_bg_image_tablet : back_bg_image
            }) !important;`,
          },
        ]);
      } else if ("on|phone" === props.back_bg_image_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background-image: url(${
              back_bg_image_phone
                ? back_bg_image_phone
                : back_bg_image_tablet
                ? back_bg_image_tablet
                : back_bg_image
            }) !important`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnext-3d-transform-flpb-flip-box-back",
            declaration: `background-image: url(${back_bg_image}) !important;`,
          },
        ]);
      }
    }

    // Button Background Color
    if ("" !== props.btn_bg_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-readmore",
          declaration: `background-color: ${props.btn_bg_color}`,
        },
      ]);
    }
    if ("on|tablet" === props.btn_bg_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-readmore",
          declaration: `background-color: ${props.btn_bg_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.btn_bg_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-readmore",
          declaration: `background-color: ${props.btn_bg_color_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.btn_bg_color__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-3d-flpb-flibbox-readmore:hover",
          declaration: `background-color: ${props.btn_bg_color__hover};`,
        },
      ]);
    }

    // Front Image background color & width
    additionalCss.push([
      {
        selector: `%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-front-image`,
        declaration: `background-color: ${props.front_image_color} !important; width: ${props.front_image_size} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.front_image_color_last_edited ||
      "on|tablet" === props.front_image_size_last_edited
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-front-image",
          declaration: `background-color: ${props.front_image_color_tablet} !important;width: ${props.front_image_size_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.front_image_color_last_edited ||
      "on|phone" === props.front_image_size_last_edited
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-front-image",
          declaration: `background-color: ${props.front_image_color_phone} !important;width: ${props.front_image_size_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.front_image_color__hover_enabled ||
      "on|hover" === props.front_image_size__hover_enabled
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-front-image:hover",
          declaration: `background-color: ${props.front_image_color__hover} !important;width: ${props.front_image_size__hover} !important;`,
        },
      ]);
    }
    // Front Image background color & width end

    // Back Image background color & width
    additionalCss.push([
      {
        selector: `%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-back-image`,
        declaration: `background-color: ${props.back_image_color} !important; width: ${props.back_image_size} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.back_image_color_last_edited ||
      "on|tablet" === props.back_image_size_last_edited
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-back-image",
          declaration: `background-color: ${props.back_image_color_tablet} !important;width: ${props.back_image_size_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.back_image_color_last_edited ||
      "on|phone" === props.back_image_size_last_edited
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-back-image",
          declaration: `background-color: ${props.back_image_color_phone} !important;width: ${props.back_image_size_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.back_image_color__hover_enabled ||
      "on|hover" === props.back_image_size__hover_enabled
    ) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-3d-flipbox-image img.dnext-3d-flipbox-back-image:hover",
          declaration: `background-color: ${props.back_image_color__hover} !important;width: ${props.back_image_size__hover} !important;`,
        },
      ]);
    }
    // Back Image background color & width end

    const moduleBgCss = [
      {
        slug: "front_icon_bg_color",
        use_color_gradient_slug: props.front_icon_bg_use_color_gradient,
        gradient: {
          type: "front_icon_bg_color_gradient_type",
          direction: "front_icon_bg_color_gradient_direction",
          radial: "front_icon_bg_color_gradient_direction_radial",
          start: "front_icon_bg_color_gradient_start",
          end: "front_icon_bg_color_gradient_end",
          start_position: "front_icon_bg_color_gradient_start_position",
          end_position: "front_icon_bg_color_gradient_end_position",
          overlays_image: "front_icon_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span:before",
          hover:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-front span::before:hover",
        },
      },
      {
        slug: "back_icon_bg_color",
        use_color_gradient_slug: props.back_icon_bg_use_color_gradient,
        gradient: {
          type: "back_icon_bg_color_gradient_type",
          direction: "back_icon_bg_color_gradient_direction",
          radial: "back_icon_bg_color_gradient_direction_radial",
          start: "back_icon_bg_color_gradient_start",
          end: "back_icon_bg_color_gradient_end",
          start_position: "back_icon_bg_color_gradient_start_position",
          end_position: "back_icon_bg_color_gradient_end_position",
          overlays_image: "back_icon_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span:before",
          hover:
            "%%order_class%% .dnext-3d-flpb-flibbox-icon-back span::before:hover",
        },
      },
    ];

    moduleBgCss.forEach((element) => applyBgCss(additionalCss, props, element));

    return additionalCss;
  }

  /**
   * Custom method to render button UI
   *
   * @return {string|React.Component}
   */
  _renderButton() {
    const props = this.props;
    const buttonTarget = "on" === props.button_link_new_window ? "_blank" : "";
    return (
      <div className="dnext-3d-flpb-flibbox-flip-button">
        <a
          href={props.button_link}
          className="dnext-3d-flpb-flibbox-readmore"
          target={buttonTarget}
        >
          {props.button_text}
        </a>
      </div>
    );
  }
  /**
   * Custom method to render 3D Flip Box Front Side UI
   *
   * @return {string|React.Component}
   */
  _front_fields() {
    const props = this.props;
    const utils = window.ET_Builder.API.Utils;

    const front_icon_alignment_classes = getAlignment(
      "front_icon_alignment",
      props,
      "dnext_3d"
    );

    const front_image_alignment_classes = getAlignment(
      "front_image_alignment",
      props
    );

    // Description Dynamic Content
    const frontcontentDescription = props.dynamic.front_content;
    let frontcontentDescriptionComponent = frontcontentDescription.render();
    
    return (
      <div className="dnext-3d-transform-flpb-flip-box-front">
        <div className="dnext-3d-transform-flpb-inner dnext-3d-flpb-flibbox-icon-front">
          {"off" !== props.front_icon_switch && (
            <IconUsingPsuedo
              utils={utils}
              iconSlug="front_icon"
              props={props}
              classes={`et-waypoint et-pb-icon et_pb_animation_top et-animated ${front_icon_alignment_classes}`}
            />
          )}

          {"off" !== props.front_image_switch && (
            <div
              className={`dnext-3d-flipbox-image ${front_image_alignment_classes}`}
            >
              <Image
                dynamicImg={props.dynamic.front_image}
                lastEdited={props.front_image_last_edited}
                hoverEnabled={props.front_image__hover_enabled}
                imageTablet={props.dynamic.front_image_tablet}
                imagePhone={props.dynamic.front_image_phone}
                imageHover={props.dynamic.front_image__hover}
                imgAlt={props.dynamic.front_image_alt}
                classes="dnext-3d-flipbox-front-image"
              />
            </div>
          )}

          <Title
            title={props.front_heading}
            dynamicTitle={props.dynamic.front_heading}
            tag={props.front_heading_tag || "h4"}
            classes="dnext-3d-transform-flpb-flip-box-header"
          />
          <div className="dnext-3d-flipbox-front-pra">
            {frontcontentDescriptionComponent}
          </div>
        </div>
      </div>
    );
  }

  /**
   * Custom method to render 3D Flip Box Front Side UI
   *
   * @return {string|React.Component}
   */
  _back_fields() {
    const props = this.props;
    const utils = window.ET_Builder.API.Utils;

    const back_icon_alignment_classes = getAlignment(
      "back_icon_alignment",
      props,
      "dnext_3d"
    );

    const back_image_alignment_classes = getAlignment(
      "back_image_alignment",
      props
    );

    // Description Dynamic Content
    const backcontentDescription = props.dynamic.back_content;
    let backcontentDescriptionComponent = backcontentDescription.render();

    return (
      <div className="dnext-3d-transform-flpb-flip-box-back">
        <div className="dnext-3d-transform-flpb-inner dnext-3d-flpb-flibbox-icon-back">
          {"off" !== props.back_icon_switch && (
            <IconUsingPsuedo
              utils={utils}
              iconSlug="back_icon"
              props={props}
              classes={`et-waypoint et-pb-icon et_pb_animation_top et-animated ${back_icon_alignment_classes}`}
            />
          )}

          {"off" !== props.back_image_switch && (
            <div
              className={`dnext-3d-flipbox-image ${back_image_alignment_classes}`}
            >
              <Image
                dynamicImg={props.dynamic.back_image}
                lastEdited={props.back_image_last_edited}
                hoverEnabled={props.back_image__hover_enabled}
                imageTablet={props.dynamic.back_image_tablet}
                imagePhone={props.dynamic.back_image_phone}
                imageHover={props.dynamic.back_image__hover}
                imgAlt={props.dynamic.back_image_alt}
                classes="dnext-3d-flipbox-back-image"
              />
            </div>
          )}
          <Title
            title={props.back_heading}
            dynamicTitle={props.dynamic.back_heading}
            tag={props.back_heading_tag || "h4"}
            classes="dnext-3d-transform-flpb-flip-box-header"
          />
          <div className="dnext-3d-flipbox-back-pra">
            {backcontentDescriptionComponent}
          </div>
          {"off" !== props.btn_show_hide ? this._renderButton() : null}
        </div>
      </div>
    );
  }

  render() {
    const props = this.props;
    const flipboxEffect = props.flipbox_effect;

    return (
      <div className="dnext-3d-transform-flpb-box-item">
        <div className={`dnext-3d-transform-flpb-flip-box ${flipboxEffect}`}>
          {this._front_fields()}
          {this._back_fields()}
        </div>
      </div>
    );
  }
}

export default Next3dFlipbox;
