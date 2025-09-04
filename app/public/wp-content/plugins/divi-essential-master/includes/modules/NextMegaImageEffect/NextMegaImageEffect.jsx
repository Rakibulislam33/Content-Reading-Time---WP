// External Dependencies
import React, { Component } from "react";
import { applyPsuedoIconCss, Image, Title } from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class NextMegaImageEffect extends Component {
  static slug = "dnxte_mega_image_effect";

  static css(props) {
    const additionalCss = [];

    const blocks_effects = [
      "blocks-rotate-left",
      "blocks-rotate-right",
      "blocks-rotate-in-left",
      "blocks-rotate-in-right",
      "blocks-in",
      "blocks-out",
      "blocks-float-up",
      "blocks-float-down",
      "blocks-float-left",
      "blocks-float-right",
      "blocks-zoom-top-left",
      "blocks-zoom-top-right",
      "blocks-zoom-bottom-left",
      "blocks-zoom-bottom-right",
    ];

    const strip_effects = [
      "strip-shutter-up",
      "strip-shutter-down",
      "strip-shutter-left",
      "strip-shutter-right",
      "strip-horiz-up",
      "strip-horiz-down",
      "strip-horiz-top-left",
      "strip-horiz-top-right",
      "strip-horiz-bottom-left",
      "strip-horiz-bottom-right",
      "strip-vert-left",
      "strip-vert-right",
      "strip-vert-top-left",
      "strip-vert-top-right",
      "strip-vert-bottom-left",
      "strip-vert-bottom-right",
    ];

    const pixel_effects = [
      "pixel-up",
      "pixel-down",
      "pixel-left",
      "pixel-right",
      "pixel-top-left",
      "pixel-top-right",
      "pixel-bottom-left",
      "pixel-bottom-right",
    ];

    const border_effects = [
      "border-reveal",
      "border-reveal-vert",
      "border-reveal-horiz",
      "border-reveal-corners-1",
      "border-reveal-corners-2",
      "border-reveal-top-left",
      "border-reveal-top-right",
      "border-reveal-bottom-left",
      "border-reveal-bottom-right",
      "border-reveal-cc-1",
      "border-reveal-ccc-1",
      "border-reveal-cc-2",
      "border-reveal-ccc-2",
      "border-reveal-cc-3",
      "border-reveal-ccc-3",
    ];

    const blind_effects = [
      "blinds-horiz",
      "blinds-vert",
      "blinds-up",
      "blinds-down",
      "blinds-left",
      "blinds-right",
    ];

    const book_effects = [
      "book-open-horiz",
      "book-open-vert",
      "book-open-up",
      "book-open-down",
      "book-open-left",
      "book-open-right",
    ];

    const circle_effects = [
      "circle-up",
      "circle-down",
      "circle-left",
      "circle-right",
      "circle-top-left",
      "circle-top-right",
      "circle-bottom-left",
      "circle-bottom-right",
    ];

    const grad_effects = [
      "grad-radial-in",
      "grad-radial-out",
      "grad-up",
      "grad-down",
      "grad-left",
      "grad-right",
      "grad-top-left",
      "grad-top-right",
      "grad-bottom-left",
      "grad-bottom-right",
    ];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.dnxtiep_caption_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_caption_margin",
          '%%order_class%% [class^="imghvr-"] figcaption',
          "margin"
        )
      );
    }

    if ("" !== props.dnxtiep_caption_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_caption_padding",
          '%%order_class%% [class^="imghvr-"] figcaption',
          "padding"
        )
      );
    }

    if ("" !== props.dnxtiep_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_heading_margin",
          "%%order_class%% .dnxtiep-heading",
          "margin"
        )
      );
    }

    if ("" !== props.dnxtiep_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_heading_padding",
          "%%order_class%% .dnxtiep-heading",
          "padding"
        )
      );
    }

    if ("" !== props.dnxtiep_description_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_description_margin",
          "%%order_class%% .dnxtiep-description",
          "margin"
        )
      );
    }

    if ("" !== props.dnxtiep_description_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_description_padding",
          "%%order_class%% .dnxtiep-description",
          "padding"
        )
      );
    }

    if ("" !== props.dnxtiep_btn_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_btn_margin",
          "%%order_class%% .dnxt-nie-uih-btn",
          "margin"
        )
      );
    }

    if ("" !== props.dnxtiep_btn_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_btn_padding",
          "%%order_class%% .dnxt-nie-uih-btn",
          "padding"
        )
      );
    }

    // icon settings
    if (
      "off" !== props.dnxtiep_btn_icon &&
      "off" !== props.dnxtiep_btn_switch
    ) {
      // Button Icon Placement
      if ("right" === props.dnxtiep_btn_icon_placement) {
        const selector = "%%order_class%% .dnxt-nie-uih-btn::after";
        applyPsuedoIconCss("dnxtiep_btn_icon", selector, props, additionalCss);
      } else if ("left" === props.dnxtiep_btn_icon_placement) {
        const selector = "%%order_class%% .dnxt-nie-uih-btn::before";
        applyPsuedoIconCss("dnxtiep_btn_icon", selector, props, additionalCss);
      }

      if (
        "on" === props.dnxtiep_btn_on_hover &&
        "right" === props.dnxtiep_btn_icon_placement
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxtiep-btn-icon-on-hover:hover:after",
            declaration: "left: auto;margin-left: .3em;opacity: 1 !important;",
          },
        ]);
      } else if (
        "on" === props.dnxtiep_btn_on_hover &&
        "left" === props.dnxtiep_btn_icon_placement
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxtiep-btn-icon-on-hover:hover:before",
            declaration:
              "right: auto;margin-right: .3em;opacity: 1 !important;",
          },
        ]);
      }
    }

    // Button Icon Color
    if ("" !== props.dnxtiep_btn_icon_color) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-nie-uih-btn::after, %%order_class%% .dnxt-nie-uih-btn::before",
          declaration: `color: ${props.dnxtiep_btn_icon_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxtiep_btn_icon_color_last_edited) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-nie-uih-btn::after, %%order_class%% .dnxt-nie-uih-btn::before",
          declaration: `color: ${props.dnxtiep_btn_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxtiep_btn_icon_color_last_edited) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-nie-uih-btn::after, %%order_class%% .dnxt-nie-uih-btn::before",
          declaration: `color: ${props.dnxtiep_btn_icon_color_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxtiep_btn_icon_color__hover_enabled) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-nie-uih-btn:hover:before,%%order_class%% .dnxt-nie-uih-btn:hover:after",
          declaration: `color: ${props.dnxtiep_btn_icon_color__hover}`,
        },
      ]);
    }

    // Hover BG Color
    if ("off" !== props.dnxtiep_hover_bg_show_hide) {
      if (blocks_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blocks']:before, %%order_class%% [class^='imghvr-blocks']:after, %%order_class%% [class^='imghvr-blocks'] figcaption:before, %%order_class%% [class^='imghvr-blocks'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blocks']:before, %%order_class%% [class^='imghvr-blocks']:after, %%order_class%% [class^='imghvr-blocks'] figcaption:before, %%order_class%% [class^='imghvr-blocks'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blocks']:before, %%order_class%% [class^='imghvr-blocks']:after, %%order_class%% [class^='imghvr-blocks'] figcaption:before, %%order_class%% [class^='imghvr-blocks'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else if (strip_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-strip']:before, %%order_class%% [class^='imghvr-strip']:after, %%order_class%% [class^='imghvr-strip'] figcaption:before, %%order_class%% [class^='imghvr-strip'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-strip']:before, %%order_class%% [class^='imghvr-strip']:after, %%order_class%% [class^='imghvr-strip'] figcaption:before, %%order_class%% [class^='imghvr-strip'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-strip']:before, %%order_class%% [class^='imghvr-strip']:after, %%order_class%% [class^='imghvr-strip'] figcaption:before, %%order_class%% [class^='imghvr-strip'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else if (pixel_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-pixel']:before, %%order_class%% [class^='imghvr-pixel']:after, %%order_class%% [class^='imghvr-pixel'] figcaption:before, %%order_class%% [class^='imghvr-pixel'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-pixel']:before, %%order_class%% [class^='imghvr-pixel']:after, %%order_class%% [class^='imghvr-pixel'] figcaption:before, %%order_class%% [class^='imghvr-pixel'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-pixel']:before, %%order_class%% [class^='imghvr-pixel']:after, %%order_class%% [class^='imghvr-pixel'] figcaption:before, %%order_class%% [class^='imghvr-pixel'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else if (border_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: "%%order_class%% [class^='imghvr-']",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: "%%order_class%% [class^='imghvr-']",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: "%%order_class%% [class^='imghvr-']",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }

        if ("on|tablet" === props.dnxtiep_border_effect_color_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-border']:before, %%order_class%% [class^='imghvr-border']:after, %%order_class%% [class^='imghvr-border'] figcaption:before, %%order_class%% [class^='imghvr-border'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_border_effect_color_tablet};`,
              device: "tablet",
            },
          ]);
        } else if (
          "on|phone" === props.dnxtiep_border_effect_color_last_edited
        ) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-border']:before, %%order_class%% [class^='imghvr-border']:after, %%order_class%% [class^='imghvr-border'] figcaption:before, %%order_class%% [class^='imghvr-border'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_border_effect_color_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-border']:before, %%order_class%% [class^='imghvr-border']:after, %%order_class%% [class^='imghvr-border'] figcaption:before, %%order_class%% [class^='imghvr-border'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_border_effect_color};`,
            },
          ]);
        }
      } else if (blind_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blinds']:before, %%order_class%% [class^='imghvr-blinds']:after, %%order_class%% [class^='imghvr-blinds'] figcaption:before, %%order_class%% [class^='imghvr-blinds'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blinds']:before, %%order_class%% [class^='imghvr-blinds']:after, %%order_class%% [class^='imghvr-blinds'] figcaption:before, %%order_class%% [class^='imghvr-blinds'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blinds']:before, %%order_class%% [class^='imghvr-blinds']:after, %%order_class%% [class^='imghvr-blinds'] figcaption:before, %%order_class%% [class^='imghvr-blinds'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else if (book_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-book']:before, %%order_class%% [class^='imghvr-book']:after, %%order_class%% [class^='imghvr-book'] figcaption:before, %%order_class%% [class^='imghvr-book'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-book']:before, %%order_class%% [class^='imghvr-book']:after, %%order_class%% [class^='imghvr-book'] figcaption:before, %%order_class%% [class^='imghvr-book'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-book']:before, %%order_class%% [class^='imghvr-book']:after, %%order_class%% [class^='imghvr-book'] figcaption:before, %%order_class%% [class^='imghvr-book'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else if (circle_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-circle']:before, %%order_class%% [class^='imghvr-circle']:after, %%order_class%% [class^='imghvr-circle'] figcaption:before, %%order_class%% [class^='imghvr-circle'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-circle']:before, %%order_class%% [class^='imghvr-circle']:after, %%order_class%% [class^='imghvr-circle'] figcaption:before, %%order_class%% [class^='imghvr-circle'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-circle']:before, %%order_class%% [class^='imghvr-circle']:after, %%order_class%% [class^='imghvr-circle'] figcaption:before, %%order_class%% [class^='imghvr-circle'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else if (grad_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-grad']:before, %%order_class%% [class^='imghvr-grad']:after, %%order_class%% [class^='imghvr-grad'] figcaption:before, %%order_class%% [class^='imghvr-grad'] figcaption:after",
              declaration: `background: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-grad']:before, %%order_class%% [class^='imghvr-grad']:after, %%order_class%% [class^='imghvr-grad'] figcaption:before, %%order_class%% [class^='imghvr-grad'] figcaption:after",
              declaration: `background: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-grad']:before, %%order_class%% [class^='imghvr-grad']:after, %%order_class%% [class^='imghvr-grad'] figcaption:before, %%order_class%% [class^='imghvr-grad'] figcaption:after",
              declaration: `background: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      } else {
        if ("on|tablet" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                '%%order_class%% [class^="imghvr-"] figcaption, %%order_class%% [class^="imghvr-reveal-"]:before, %%order_class%% [class^="imghvr-shutter-out-"]:before, %%order_class%% [class^="imghvr-shutter-in-"]:after, %%order_class%% [class^="imghvr-shutter-in-"]:before, %%order_class%% [class^="imghvr-flash-"]:before, %%order_class%% [class^="imghvr-flash-"]:after',
              declaration: `background-color: ${props.dnxtiep_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector:
                '%%order_class%% [class^="imghvr-"] figcaption, %%order_class%% [class^="imghvr-reveal-"]:before, %%order_class%% [class^="imghvr-shutter-out-"]:before, %%order_class%% [class^="imghvr-shutter-in-"]:after, %%order_class%% [class^="imghvr-shutter-in-"]:before, %%order_class%% [class^="imghvr-flash-"]:before, %%order_class%% [class^="imghvr-flash-"]:after',
              declaration: `background-color: ${props.dnxtiep_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                '%%order_class%% [class^="imghvr-"] figcaption, %%order_class%% [class^="imghvr-reveal-"]:before, %%order_class%% [class^="imghvr-shutter-out-"]:before, %%order_class%% [class^="imghvr-shutter-in-"]:after, %%order_class%% [class^="imghvr-shutter-in-"]:before, %%order_class%% [class^="imghvr-flash-"]:before, %%order_class%% [class^="imghvr-flash-"]:after',
              declaration: `background-color: ${props.dnxtiep_hover_bg};`,
            },
          ]);
        }
      }
    }

    // Button BG Color
    if ("off" !== props.dnxtiep_btn_bg_show_hide) {
      if ("on|tablet" === props.dnxtiep_btn_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-nie-uih-btn",
            declaration: `background-color: ${props.dnxtiep_btn_bg_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_btn_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-nie-uih-btn",
            declaration: `background-color: ${props.dnxtiep_btn_bg_color_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.dnxtiep_btn_bg_color__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-nie-uih-btn:hover",
            declaration: `background-color: ${props.dnxtiep_btn_bg_color__hover}`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-nie-uih-btn",
            declaration: `background-color: ${props.dnxtiep_btn_bg_color};`,
          },
        ]);
      }
    }

    // Heading Background
    let dnxtiep_hover_gradient_apply = "";
    let dnxtiep_hover_gradient_color_one = "";
    let dnxtiep_hover_gradient_color_two = "";
    let dnxtiep_hover_gradient_type = "";
    let dnxtiep_hover_gl = "";
    let dnxtiep_hover_gr = "";
    let dnxtiep_hover_gradient_start_position = "";
    let dnxtiep_hover_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.dnxtiep_hover_gradient_type) {
      dnxtiep_hover_gradient_type = props.dnxtiep_hover_gradient_type;
    }

    // Heading Linear Gradient Direction
    if ("" !== props.dnxtiep_hover_gradient_type_linear_direction) {
      dnxtiep_hover_gl = props.dnxtiep_hover_gradient_type_linear_direction;
    }

    // Heading Radial Gradient Direction
    if ("" !== props.dnxtiep_hover_gradient_type_radial_direction) {
      dnxtiep_hover_gr = props.dnxtiep_hover_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.dnxtiep_hover_gradient_type) {
      dnxtiep_hover_gradient_apply = `${dnxtiep_hover_gr}`;
    } else if ("linear-gradient" === props.dnxtiep_hover_gradient_type) {
      dnxtiep_hover_gradient_apply = `${dnxtiep_hover_gl}`;
    }

    // Gradient color one for heading
    if ("" !== props.dnxtiep_hover_gradient_color_one) {
      dnxtiep_hover_gradient_color_one = props.dnxtiep_hover_gradient_color_one;
    }

    // Gradient color two for heading
    if ("" !== props.dnxtiep_hover_gradient_color_two) {
      dnxtiep_hover_gradient_color_two = props.dnxtiep_hover_gradient_color_two;
    }

    // Heading Gradient color start position
    if ("" !== props.dnxtiep_hover_gradient_start_position) {
      dnxtiep_hover_gradient_start_position =
        props.dnxtiep_hover_gradient_start_position;
    }

    // Heading Gradient color end position
    if ("" !== props.dnxtiep_hover_gradient_end_position) {
      dnxtiep_hover_gradient_end_position =
        props.dnxtiep_hover_gradient_end_position;
    }

    if ("off" !== props.dnxtiep_hover_gradient_show_hide) {
      if (blocks_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blocks']:before, %%order_class%% [class^='imghvr-blocks']:after, %%order_class%% [class^='imghvr-blocks'] figcaption:before, %%order_class%% [class^='imghvr-blocks'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else if (strip_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-strip']:before, %%order_class%% [class^='imghvr-strip']:after, %%order_class%% [class^='imghvr-strip'] figcaption:before, %%order_class%% [class^='imghvr-strip'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else if (pixel_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-pixel']:before, %%order_class%% [class^='imghvr-pixel']:after, %%order_class%% [class^='imghvr-pixel'] figcaption:before, %%order_class%% [class^='imghvr-pixel'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else if (border_effects.includes(props.dnxtiep_image_hover_effect)) {
        if ("on|tablet" === props.dnxtiep_border_effect_color_last_edited) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-border']:before, %%order_class%% [class^='imghvr-border']:after, %%order_class%% [class^='imghvr-border'] figcaption:before, %%order_class%% [class^='imghvr-border'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_border_effect_color_tablet};`,
              device: "tablet",
            },
          ]);
        } else if (
          "on|phone" === props.dnxtiep_border_effect_color_last_edited
        ) {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-border']:before, %%order_class%% [class^='imghvr-border']:after, %%order_class%% [class^='imghvr-border'] figcaption:before, %%order_class%% [class^='imghvr-border'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_border_effect_color_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector:
                "%%order_class%% [class^='imghvr-border']:before, %%order_class%% [class^='imghvr-border']:after, %%order_class%% [class^='imghvr-border'] figcaption:before, %%order_class%% [class^='imghvr-border'] figcaption:after",
              declaration: `background-color: ${props.dnxtiep_border_effect_color};`,
            },
          ]);
        }
        additionalCss.push([
          {
            selector: "%%order_class%% [class^='imghvr-']",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position}) !important;`,
          },
        ]);
      } else if (blind_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-blinds']:before, %%order_class%% [class^='imghvr-blinds']:after, %%order_class%% [class^='imghvr-blinds'] figcaption:before, %%order_class%% [class^='imghvr-blinds'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else if (book_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-book']:before, %%order_class%% [class^='imghvr-book']:after, %%order_class%% [class^='imghvr-book'] figcaption:before, %%order_class%% [class^='imghvr-book'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else if (circle_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-circle']:before, %%order_class%% [class^='imghvr-circle']:after, %%order_class%% [class^='imghvr-circle'] figcaption:before, %%order_class%% [class^='imghvr-circle'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else if (grad_effects.includes(props.dnxtiep_image_hover_effect)) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% [class^='imghvr-'], %%order_class%% [class^='imghvr-grad']:before, %%order_class%% [class^='imghvr-grad']:after, %%order_class%% [class^='imghvr-grad'] figcaption:before, %%order_class%% [class^='imghvr-grad'] figcaption:after",
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector:
              '%%order_class%% [class^="imghvr-"] figcaption, %%order_class%% [class^="imghvr-reveal-"]:before, %%order_class%% [class^="imghvr-shutter-out-"]:before, %%order_class%% [class^="imghvr-shutter-in-"]:after, %%order_class%% [class^="imghvr-shutter-in-"]:before, %%order_class%% [class^="imghvr-flash-"]:before, %%order_class%% [class^="imghvr-flash-"]:after',
            declaration: `background: ${dnxtiep_hover_gradient_type}(${dnxtiep_hover_gradient_apply},${dnxtiep_hover_gradient_color_one} ${dnxtiep_hover_gradient_start_position}, ${dnxtiep_hover_gradient_color_two} ${dnxtiep_hover_gradient_end_position});`,
          },
        ]);
      }
    }

    // Button Background
    let dnxtiep_btn_bg_gradient_apply = "";
    let dnxtiep_btn_bg_gradient_color_one = "";
    let dnxtiep_btn_bg_gradient_color_two = "";
    let dnxtiep_btn_bg_gradient_type = "";
    let dnxtiep_btn_bg_gl = "";
    let dnxtiep_btn_bg_gr = "";
    let dnxtiep_btn_bg_gradient_start_position = "";
    let dnxtiep_btn_bg_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.dnxtiep_btn_gradient_type) {
      dnxtiep_btn_bg_gradient_type = props.dnxtiep_btn_gradient_type;
    }

    // Button Linear Gradient Direction
    if ("" !== props.dnxtiep_btn_gradient_type_linear_direction) {
      dnxtiep_btn_bg_gl = props.dnxtiep_btn_gradient_type_linear_direction;
    }

    // Button Radial Gradient Direction
    if ("" !== props.dnxtiep_btn_gradient_type_radial_direction) {
      dnxtiep_btn_bg_gr = props.dnxtiep_btn_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.dnxtiep_btn_gradient_type) {
      dnxtiep_btn_bg_gradient_apply = `${dnxtiep_btn_bg_gr}`;
    } else if ("linear-gradient" === props.dnxtiep_btn_gradient_type) {
      dnxtiep_btn_bg_gradient_apply = `${dnxtiep_btn_bg_gl}`;
    }

    // Gradient color one for heading
    if ("" !== props.dnxtiep_btn_gradient_color_one) {
      dnxtiep_btn_bg_gradient_color_one = props.dnxtiep_btn_gradient_color_one;
    }

    // Gradient color two for heading
    if ("" !== props.dnxtiep_btn_gradient_color_two) {
      dnxtiep_btn_bg_gradient_color_two = props.dnxtiep_btn_gradient_color_two;
    }

    // Heading Gradient color start position
    if ("" !== props.dnxtiep_btn_gradient_start_position) {
      dnxtiep_btn_bg_gradient_start_position =
        props.dnxtiep_btn_gradient_start_position;
    }

    // Heading Gradient color end position
    if ("" !== props.dnxtiep_btn_gradient_end_position) {
      dnxtiep_btn_bg_gradient_end_position =
        props.dnxtiep_btn_gradient_end_position;
    }

    if ("off" !== props.dnxtiep_btn_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-nie-uih-btn",
          declaration: `background: ${dnxtiep_btn_bg_gradient_type}(${dnxtiep_btn_bg_gradient_apply},${dnxtiep_btn_bg_gradient_color_one} ${dnxtiep_btn_bg_gradient_start_position}, ${dnxtiep_btn_bg_gradient_color_two} ${dnxtiep_btn_bg_gradient_end_position});`,
        },
      ]);
    }

    // Button Alignment

    if ("center" === props.dnxtiep_btn_align_tablet) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: center;",
          device: "tablet",
        },
      ]);
    } else if ("right" === props.dnxtiep_btn_align_tablet) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: flex-end;",
          device: "tablet",
        },
      ]);
    } else if ("left" === props.dnxtiep_btn_align_tablet) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: flex-start;",
          device: "tablet",
        },
      ]);
    }

    if ("center" === props.dnxtiep_btn_align_phone) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: center;",
          device: "phone",
        },
      ]);
    } else if ("right" === props.dnxtiep_btn_align_phone) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: flex-end;",
          device: "phone",
        },
      ]);
    } else if ("left" === props.dnxtiep_btn_align_phone) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: flex-start;",
          device: "phone",
        },
      ]);
    }

    if ("center" === props.dnxtiep_btn_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: center;",
        },
      ]);
    } else if ("right" === props.dnxtiep_btn_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: flex-end;",
        },
      ]);
    } else if ("on|tablet" === props.dnxtiep_btn_align_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: `{$this->props['dnxtiep_btn_align_tablet']}`,
        },
      ]);
    } else if ("on|phone" === props.dnxtiep_btn_align_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: `{$this->props['dnxtiep_btn_align_phone']}`,
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep-button",
          declaration: "justify-content: flex-start;",
        },
      ]);
    }

    return additionalCss;
  }

  render() {
    const props = this.props;

    // Button Text Dynamic Content
    const btnText = props.dynamic.dnxtiep_button_text;
    let btnTextComponent = btnText.render();
    // Let Divi render the loading placeholder.
    if (btnText.loading) return btnTextComponent;

    //Button On Hover class inner
    let btnIconOnHover =
      "on" === props.dnxtiep_btn_on_hover ? "dnxtiep-btn-icon-on-hover" : "";

    const buttonTarget =
      "on" === props.dnxtiep_button_link_new_window ? "_blank" : "_self";

    let utils = window.ET_Builder.API.Utils;
    let oldIcon = props.dnxtiep_btn_icon
      ? props.dnxtiep_btn_icon.split("||")
      : "";
    let oldIconTablet = props.dnxtiep_btn_icon_tablet
      ? props.dnxtiep_btn_icon_tablet.split("||")
      : "";
    let oldIconPhone = props.dnxtiep_btn_icon_phone
      ? props.dnxtiep_btn_icon_phone.split("||")
      : "";
    let buttonIcon = oldIcon[0] ? utils.processFontIcon(oldIcon[0]) : "";
    let buttonIconTablet = oldIconTablet[0]
      ? utils.processFontIcon(oldIconTablet[0])
      : buttonIcon;
    let buttonIconPhone = oldIconPhone[0]
      ? utils.processFontIcon(oldIconPhone[0])
      : buttonIconTablet;

    // Image hover effect
    const dnxtiepImgHover = () =>
      `imghvr-${props.dnxtiep_image_hover_effect} dnxtiep-imghvr-wrapper`;

    // Text Effect
    let dnxtiep_text_effect = props.dnxtiep_text_effect;

    // Text Delay
    let dnxtiep_text_delay = props.dnxtiep_text_delay;

    // Description Dynamic Content
    const dnxtiepDescription = props.dynamic.dnxtiep_description;
    let dnxtiepDescriptionComponent = dnxtiepDescription.render();

    return (
      <figure className={dnxtiepImgHover()}>
        <Image
          dynamicImg={props.dynamic.dnxtiep_image}
          lastEdited={props.dynamic.dnxtiep_image_last_edited}
          hoverEnabled={props.dynamic.dnxtiep_image__hover_enabled}
          imageTablet={props.dynamic.dnxtiep_image_tablet}
          imagePhone={props.dynamic.dnxtiep_image_phone}
          imageHover={props.dynamic.dnxtiep_image__hover}
          imgAlt={props.dynamic.dnxtiep_alt}
        />
        <figcaption
          className={`${dnxtiep_text_effect} ${dnxtiep_text_delay} dnxtiep-imghvr-content`}
        >
          <Title
            title={props.dnxtiep_heading_text}
            dynamicTitle={props.dynamic.dnxtiep_heading_text}
            tag={props.dnxtiep_heading_tag || "h2"}
            classes="dnxtiep-heading"
          />
          <div className="dnxtiep-description">
            {dnxtiepDescriptionComponent}
          </div>
          {"off" !== props.dnxtiep_btn_show_hide && (
            <div className="dnxtiep-button">
              <a
                className={`dnxt-nie-uih-btn ih-fade-up ih-delay-lg ${btnIconOnHover}`}
                href={props.dnxtiep_button_link}
                target={buttonTarget}
                data-icon={buttonIcon}
                data-icon-tablet={buttonIconTablet}
                data-icon-phone={buttonIconPhone}
              >
                {btnTextComponent}
              </a>
            </div>
          )}
        </figcaption>
      </figure>
    );
  }
}

export default NextMegaImageEffect;
