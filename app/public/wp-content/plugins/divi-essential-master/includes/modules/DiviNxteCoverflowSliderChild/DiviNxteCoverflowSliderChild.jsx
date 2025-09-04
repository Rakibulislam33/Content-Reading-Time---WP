// External Dependencies
import { Component } from "react";
import { applyBgCss, applyCustomSpacing } from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class DiviNxteCoverflowSliderChild extends Component {
  static slug = "dnxte_coverflowslider_child";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      [
        "coverflowslider_button_margin",
        "%%order_class%% .dnxte-coverflow-button",
        "margin",
      ],
      [
        "coverflowslider_button_padding",
        "%%order_class%% .dnxte-coverflow-button",
        "padding",
      ],
      [
        "coverflowslider_content_wrapper_margin",
        "%%order_class%% .dnxte-coverflow-multitext",
        "margin",
      ],
      [
        "coverflowslider_content_wrapper_padding",
        "%%order_class%% .dnxte-coverflow-multitext",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleBgCss = [
      // overlay color
      {
        slug: "coverflow_overlay_color",
        use_color_gradient_slug: props.coverflow_overlay_use_color_gradient,
        gradient: {
          type: "coverflow_overlay_color_gradient_type",
          direction: "coverflow_overlay_color_gradient_direction",
          radial: "coverflow_overlay_color_gradient_direction_radial",
          start: "coverflow_overlay_color_gradient_start",
          end: "coverflow_overlay_color_gradient_end",
          start_position: "coverflow_overlay_color_gradient_start_position",
          end_position: "coverflow_overlay_color_gradient_end_position",
          overlays_image: "coverflow_overlay_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-coverflow-overlay-color",
        },
      },
      // Hover overlay color
      {
        slug: "coverflow_hover_overlay_color",
        use_color_gradient_slug:
          props.coverflow_hover_overlay_use_color_gradient,
        gradient: {
          type: "coverflow_hover_overlay_color_gradient_type",
          direction: "coverflow_hover_overlay_color_gradient_direction",
          radial: "coverflow_hover_overlay_color_gradient_direction_radial",
          start: "coverflow_hover_overlay_color_gradient_start",
          end: "coverflow_hover_overlay_color_gradient_end",
          start_position:
            "coverflow_hover_overlay_color_gradient_start_position",
          end_position: "coverflow_hover_overlay_color_gradient_end_position",
          overlays_image:
            "coverflow_hover_overlay_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-coverflow-overlay-color-hover",
        },
      },
      {
        slug: "coverflow_button_bg_color",
        use_color_gradient_slug: props.coverflow_button_bg_use_color_gradient,
        gradient: {
          type: "coverflow_button_bg_color_gradient_type",
          direction: "coverflow_button_bg_color_gradient_direction",
          radial: "coverflow_button_bg_color_gradient_direction_radial",
          start: "coverflow_button_bg_color_gradient_start",
          end: "coverflow_button_bg_color_gradient_end",
          start_position: "coverflow_button_bg_color_gradient_start_position",
          end_position: "coverflow_button_bg_color_gradient_end_position",
          overlays_image: "coverflow_button_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-coverflow-button",
        },
      },
    ];

    moduleBgCss.forEach((element) => applyBgCss(css, props, element));

    if ("" !== props.coverflowslider_text_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "coverflowslider_text_margin",
          "%%order_class%% .dnxte-coverflow-heading",
          "margin",
          true
        )
      );
    }

    if ("" !== props.coverflowslider_text_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "coverflowslider_text_padding",
          "%%order_class%% .dnxte-coverflow-heading",
          "padding",
          true
        )
      );
    }

    if ("" !== props.coverflowslider_content_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "coverflowslider_content_margin",
          "%%order_class%% .dnxte-coverflow-pra",
          "margin",
          true
        )
      );
    }

    if ("" !== props.coverflowslider_content_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "coverflowslider_content_padding",
          "%%order_class%% .dnxte-coverflow-pra",
          "padding",
          true
        )
      );
    }

    if ("" !== props.coverflowslider_image_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "coverflowslider_image_margin",
          "%%order_class%% .img-fluid",
          "margin",
          true
        )
      );
    }

    if ("" !== props.coverflowslider_image_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "coverflowslider_image_padding",
          "%%order_class%% .img-fluid",
          "padding",
          true
        )
      );
    }

    if (props.coverflowslider_layouts === "inside-image") {
      // Content position
      css.push([
        {
          selector: `%%order_class%% .dnxte-coverflow-inside-image`,
          declaration: `left: ${props.coverflowslider_content_horizontal ||
            "0%"} !important; top: ${props.coverflowslider_content_vertical ||
            "0%"} !important;`,
        },
      ]);

      if (
        "on|tablet" === props.coverflowslider_content_horizontal_last_edited ||
        "on|tablet" === props.coverflowslider_content_vertical_last_edited
      ) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-coverflow-inside-image",
            declaration: `left: ${props.coverflowslider_content_horizontal_tablet} !important;top: ${props.coverflowslider_content_vertical_tablet} !important;`,
            device: "tablet",
          },
        ]);
      } else if (
        "on|phone" === props.coverflowslider_content_horizontal_last_edited ||
        "on|phone" === props.coverflowslider_content_vertical_last_edited
      ) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-coverflow-inside-image",
            declaration: `left: ${props.coverflowslider_content_horizontal_phone} !important;top: ${props.coverflowslider_content_vertical_phone} !important;`,
            device: "phone",
          },
        ]);
      }
      // Content Position
    }

    return css;
  }

  render() {
    return null;
  }
}

export default DiviNxteCoverflowSliderChild;
