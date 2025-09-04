// External Dependencies
import React, { Component } from "react";
import {
  applyBgCss,
  applyPsuedoIconCss,
  Button,
  getAlignment,
  getShapes,
  IconUsingPsuedo,
  Image,
  Title
} from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class DiviNxtFlipbox extends Component {
  static slug = "dnxte_flip_box";

  static css(props) {
    const additionalCss = [];

    const slugsAndSelector = [
      {
        useMask: "front_dnext_flipbox_use_mask",
        useMaskUpload: "front_dnext_flipbox_use_mask_upload",
        maskShape: "front_dnext_flipbox_mask_shape",
        maskUpload: "front_dnext_flipbox_upload_mask",
        maskSize: "front_dnext_flipbox_mask_size",
        imageHorizontal: "front_dnext_flipbox_image_horizontal",
        imageVertical: "front_dnext_flipbox_image_vertical",
        selector: "%%order_class%% .dnext-flipbox-front-image",
      },
      {
        useMask: "back_dnext_flipbox_use_mask",
        useMaskUpload: "back_dnext_flipbox_use_mask_upload",
        maskShape: "back_dnext_flipbox_mask_shape",
        maskUpload: "back_dnext_flipbox_upload_mask",
        maskSize: "back_dnext_flipbox_mask_size",
        imageHorizontal: "back_dnext_flipbox_image_horizontal",
        imageVertical: "back_dnext_flipbox_image_vertical",
        selector: "%%order_class%% .dnext-flipbox-back-image",
      },
    ];
    slugsAndSelector.map((item) => getShapes(props, additionalCss, item));

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.front_icon_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_icon_margin",
          "%%order_class%% .dnext-flpb-flibbox-front span",
          "margin"
        )
      );
    }

    if ("" !== props.front_icon_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_icon_padding",
          "%%order_class%% .dnext-flpb-flibbox-front span:before",
          "padding"
        )
      );
    }

    if ("" !== props.front_image_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_image_margin",
          "%%order_class%% .dnext-flipbox-image .dnext-flpb-flipbox-front-image",
          "margin"
        )
      );
    }

    if ("" !== props.front_image_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_image_padding",
          "%%order_class%% .dnext-flipbox-image .dnext-flpb-flipbox-front-image",
          "padding"
        )
      );
    }

    if ("" !== props.back_image_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_image_margin",
          "%%order_class%% .dnext-flipbox-image .dnext-flpb-flipbox-back-image",
          "margin"
        )
      );
    }

    if ("" !== props.back_image_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_image_padding",
          "%%order_class%% .dnext-flipbox-image .dnext-flpb-flipbox-back-image",
          "padding"
        )
      );
    }

    if ("" !== props.front_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_heading_margin",
          "%%order_class%% .dnext-flpb-flibbox-heading-font",
          "margin"
        )
      );
    }

    if ("" !== props.front_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_heading_padding",
          "%%order_class%% .dnext-flpb-flibbox-heading-font",
          "padding"
        )
      );
    }

    if ("" !== props.front_content_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_content_margin",
          "%%order_class%% .dnext-flpb-flibbox-front .dnext-flipbox-front-pra",
          "margin"
        )
      );
    }

    if ("" !== props.front_content_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_content_padding",
          "%%order_class%% .dnext-flpb-flibbox-front .dnext-flipbox-front-pra",
          "padding"
        )
      );
    }

    if ("" !== props.back_icon_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_icon_margin",
          "%%order_class%% .dnext-flpb-flibbox-back span",
          "margin"
        )
      );
    }

    if ("" !== props.back_icon_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_icon_padding",
          "%%order_class%% .dnext-flpb-flibbox-back span",
          "padding"
        )
      );
    }

    if ("" !== props.back_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_heading_margin",
          "%%order_class%% .dnext-flpb-flibbox-heading-back",
          "margin"
        )
      );
    }

    if ("" !== props.back_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_heading_padding",
          "%%order_class%% .dnext-flpb-flibbox-heading-back",
          "padding"
        )
      );
    }

    if ("" !== props.back_content_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_content_margin",
          "%%order_class%% .dnext-flpb-flibbox-back .dnext-flipbox-back-pra",
          "margin"
        )
      );
    }

    if ("" !== props.back_content_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_content_padding",
          "%%order_class%% .dnext-flpb-flibbox-back .dnext-flipbox-back-pra",
          "padding"
        )
      );
    }

    if ("" !== props.back_btn_margin_outer) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_margin_outer",
          "%%order_class%% .dnext-flpb-flibbox-flip-button",
          "margin"
        )
      );
    }

    if ("" !== props.back_btn_padding_outer) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_padding_outer",
          "%%order_class%% .dnext-flpb-flibbox-flip-button",
          "padding"
        )
      );
    }

    if ("" !== props.back_btn_margin_inner) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_margin_inner",
          "%%order_class%% .dnext-flpb-flibbox-readmore",
          "margin"
        )
      );
    }

    if ("" !== props.back_btn_padding_inner) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_btn_padding_inner",
          "%%order_class%% .dnext-flpb-flibbox-readmore",
          "padding"
        )
      );
    }

    if ("" !== props.front_content_desc_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "front_content_desc_padding",
          "%%order_class%% .dnext-flpb-flibbox-front",
          "padding"
        )
      );
    }

    if ("" !== props.back_content_desc_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "back_content_desc_padding",
          "%%order_class%% .dnext-flpb-flibbox-back",
          "padding"
        )
      );
    }

    // icon settings
    if ("off" !== props.front_icon_switch) {
      const selector = "%%order_class%% .dnext-flpb-flibbox-icon-font::before";
      applyPsuedoIconCss("front_icon", selector, props, additionalCss);
    }
    // Front Icon Color
    if ("" !== props.front_icon_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-front span",
          declaration: `color: ${props.front_icon_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.front_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-front span",
          declaration: `color: ${props.front_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.front_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-front span",
          declaration: `color: ${props.front_icon_color_phone};`,
          device: "phone",
        },
      ]);
    }

    // back icon settings

    if ("off" !== props.back_icon_switch) {
      const selector = "%%order_class%% .dnext-flpb-flibbox-icon-back::before";
      applyPsuedoIconCss("back_icon", selector, props, additionalCss);
    }

    // Back Icon Color
    if ("" !== props.back_icon_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-back span",
          declaration: `color: ${props.back_icon_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.back_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-back span",
          declaration: `color: ${props.back_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.back_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-back span",
          declaration: `color: ${props.back_icon_color_phone};`,
          device: "phone",
        },
      ]);
    }

    // Front Icon Size
    if ("" !== props.front_icon_size) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-front span::before",
          declaration: `font-size: ${props.front_icon_size};`,
        },
      ]);
    }
    if ("on|tablet" === props.front_icon_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-front span::before",
          declaration: `font-size: ${props.front_icon_size_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.front_icon_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-front span::before",
          declaration: `font-size: ${props.front_icon_size_phone};`,
          device: "phone",
        },
      ]);
    }

    // Back Icon Size
    if ("" !== props.back_icon_size) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-back span::before",
          declaration: `font-size: ${props.back_icon_size};`,
        },
      ]);
    }
    if ("on|tablet" === props.back_icon_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-back span::before",
          declaration: `font-size: ${props.back_icon_size_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.back_icon_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-back span::before",
          declaration: `font-size: ${props.back_icon_size_phone};`,
          device: "phone",
        },
      ]);
    }

    // Back Icon Color
    if ("" !== props.btn_bg_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-readmore",
          declaration: `background-color: ${props.btn_bg_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.btn_bg_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-readmore",
          declaration: `background-color: ${props.btn_bg_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.btn_bg_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-readmore",
          declaration: `background-color: ${props.btn_bg_color_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.btn_bg_color__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-flpb-flibbox-readmore:hover",
          declaration: `background-color: ${props.btn_bg_color__hover};`,
        },
      ]);
    }

    // Front BG Color
    if ("off" !== props.front_bgc_show_hide) {
      if ("on|tablet" === props.front_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front",
            declaration: `background: ${props.front_bgc_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.front_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front",
            declaration: `background: ${props.front_bgc_color_phone};`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front",
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
          selector: `%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front`,
          declaration: frontGradientdient,
        },
      ]);
    }

    let front_bg_image = props.front_bg_image;
    let front_bg_image_tablet = props.front_bg_image_tablet;
    let front_bg_image_phone = props.front_bg_image_phone;

    if ("off" !== props.front_bgi_show_hide) {
      if ("on|tablet" === props.front_bg_image_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front",
            declaration: `background-image: url(${
              front_bg_image_tablet ? front_bg_image_tablet : front_bg_image
            }) !important`,
          },
        ]);
      } else if ("on|phone" === props.front_bg_image_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front",
            declaration: `background-image: url(${
              front_bg_image_phone
                ? front_bg_image_phone
                : front_bg_image_tablet
                ? front_bg_image_tablet
                : front_bg_image
            }) !important`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-front",
            declaration: `background-image: url(${front_bg_image}) !important`,
          },
        ]);
      }
    }

    // Back BG Color
    if ("off" !== props.back_bgc_show_hide) {
      if ("on|tablet" === props.back_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back",
            declaration: `background: ${props.back_bgc_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.back_bgc_color_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back",
            declaration: `background: ${props.back_bgc_color_phone};`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back",
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
          selector: `%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back`,
          declaration: backGradientdient,
        },
      ]);
    }

    let back_bg_image = props.back_bg_image;
    let back_bg_image_tablet = props.back_bg_image_tablet;
    let back_bg_image_phone = props.back_bg_image_phone;

    if ("off" !== props.back_bgi_show_hide) {
      if ("on|tablet" === props.back_bg_image_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back",
            declaration: `background-image: url(${
              back_bg_image_tablet ? back_bg_image_tablet : back_bg_image
            }) !important`,
          },
        ]);
      } else if ("on|phone" === props.back_bg_image_last_edited) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back",
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
            selector:
              "%%order_class%% .dnext-flpb-flibbox-card .dnext-flpb-flibbox-back",
            declaration: `background-image: url(${back_bg_image}) !important`,
          },
        ]);
      }
    }

    // Front Image background color & width
    additionalCss.push([
      {
        selector: `%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-front-image`,
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
            "%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-front-image",
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
            "%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-front-image",
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
            "%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-front-image:hover",
          declaration: `background-color: ${props.front_image_color__hover} !important;width: ${props.front_image_size__hover} !important;`,
        },
      ]);
    }
    // Front Image background color & width end

    // Back Image background color & width
    additionalCss.push([
      {
        selector: `%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-back-image`,
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
            "%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-back-image",
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
            "%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-back-image",
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
            "%%order_class%% .dnext-flipbox-image img.dnext-flpb-flipbox-back-image:hover",
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
          desktop: "%%order_class%% .dnext-flpb-flibbox-front span:before",
          hover: "%%order_class%% .dnext-flpb-flibbox-front span::before:hover",
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
          desktop: "%%order_class%% .dnext-flpb-flibbox-back span:before",
          hover: "%%order_class%% .dnext-flpb-flibbox-back span::before:hover",
        },
      },
    ];

    moduleBgCss.forEach((element) => applyBgCss(additionalCss, props, element));

    return additionalCss;
  }

  /**
   * Custom method to render Flip Box Front Side UI
   *
   * @return {string|React.Component}
   */
  _frontend_field() {
    const props = this.props;
    const utils = window.ET_Builder.API.Utils;

    const front_icon_alignment_classes = getAlignment(
      "front_icon_alignment",
      props,
      "dnext"
    );

    const front_image_alignment_classes = getAlignment(
      "front_image_alignment",
      props
    );

    // Description Dynamic Content
    const frontcontentDescription = props.dynamic.front_content;
    let frontcontentDescriptionComponent = frontcontentDescription.render();

    return (
      <div className="dnext-flpb-flibbox-front">
        {"off" !== props.front_icon_switch && (
          <IconUsingPsuedo
            utils={utils}
            iconSlug="front_icon"
            props={props}
            classes={`dnext-flpb-flibbox-icon-font ${front_icon_alignment_classes}`}
          />
        )}

        {"off" !== props.front_image_switch && (
          <div
            className={`dnext-flipbox-image dnext-flipbox-front-image ${front_image_alignment_classes}`}
          >
            <Image
              dynamicImg={props.dynamic.front_image}
              lastEdited={props.front_image_last_edited}
              hoverEnabled={props.front_image__hover_enabled}
              imageTablet={props.dynamic.front_image_tablet}
              imagePhone={props.dynamic.front_image_phone}
              imageHover={props.dynamic.front_image__hover}
              imgAlt={props.dynamic.front_image_alt}
              classes="dnext-flpb-flipbox-front-image"
            />
          </div>
        )}

        <Title
          title={props.front_heading}
          dynamicTitle={props.dynamic.front_heading}
          tag={props.front_heading_tag || "h4"}
          classes="dnext-flpb-flibbox-heading-font"
        />
        <div className="dnext-flipbox-front-pra">
          {frontcontentDescriptionComponent}
        </div>
      </div>
    );
  }

  /**
   * Custom method to render Flip Box Back Side UI
   *
   * @return {string|React.Component}
   */
  _backend_field() {
    const props = this.props;
    const utils = window.ET_Builder.API.Utils;

    const back_icon_alignment_classes = getAlignment(
      "back_icon_alignment",
      props,
      "dnext"
    );

    const back_image_alignment_classes = getAlignment(
      "back_image_alignment",
      props
    );

    // Description Dynamic Content
    const backcontentDescription = props.dynamic.back_content;
    let backcontentDescriptionComponent = backcontentDescription.render();

    return (
      <div className="dnext-flpb-flibbox-back">
        {"off" !== props.back_icon_switch && (
          <IconUsingPsuedo
            utils={utils}
            iconSlug="back_icon"
            props={props}
            classes={`dnext-flpb-flibbox-icon-back ${back_icon_alignment_classes}`}
          />
        )}

        {"off" !== props.back_image_switch && (
          <div
            className={`dnext-flipbox-image dnext-flipbox-back-image ${back_image_alignment_classes}`}
          >
            <Image
              dynamicImg={props.dynamic.back_image}
              lastEdited={props.back_image_last_edited}
              hoverEnabled={props.back_image__hover_enabled}
              imageTablet={props.dynamic.back_image_tablet}
              imagePhone={props.dynamic.back_image_phone}
              imageHover={props.dynamic.back_image__hover}
              imgAlt={props.dynamic.back_image_alt}
              classes="dnext-flpb-flipbox-back-image"
            />
          </div>
        )}

        <Title
          title={props.back_heading}
          dynamicTitle={props.dynamic.back_heading}
          tag={props.back_heading_tag || "h4"}
          classes="dnext-flpb-flibbox-heading-back"
        />
        <div className="dnext-flipbox-back-pra">
          {backcontentDescriptionComponent}
        </div>
        {"off" !== props.btn_show_hide && (
          <div className="dnext-flpb-flibbox-flip-button">
            <Button
              text={props.button_text}
              dynamicText={props.dynamic.button_text}
              link={props.button_link}
              linkTarget={props.button_link_new_window}
              classes="dnext-flpb-flibbox-readmore"
            />
          </div>
        )}
      </div>
    );
  }

  render() {
    const props = this.props;
    const flipEffect = props.flipbox_placement;
    return (
      <div
        className={`dnext-flpb-flibbox-card-wrapper dnext-flpb-flibbox-flip-${flipEffect}`}
      >
        <div className="dnext-flpb-flibbox-card">
          {this._frontend_field()}
          {this._backend_field()}
        </div>
      </div>
    );
  }
}

export default DiviNxtFlipbox;
