// External Dependencies
import React, { Component } from "react";
import { getAlignment, getShapes, Icon } from "../base/common";
import "../base/get_responsive_css";
import "../base/hover-common.css";
import { VanillaTilt } from "./script/vanilla-tilt.min.js";
// Internal Dependencies
import "./style.css";

// Tilt Animation
function tilt_animation(params, values, element) {
  switch (params) {
    case "init":
      VanillaTilt.init(element, { ...values });
      break;
    case "destroy":
      if (element) {
        try {
          if (element.vanillaTilt) {
            element.vanillaTilt.destroy();
          }
        } catch (err) {
          console.log("err", err);
        }
      }
      break;
    default:
      break;
  }
}

class NextBlurb extends Component {
  static slug = "dnxte_blurb";

  constructor(props) {
    super(props);
    this.tilt = React.createRef();
    this.tiltUpdate = null;
  }

  componentDidMount() {
    const props = this.props;
    if ("off" !== props.dnxt_blurb_tilt_switch) {
      const tilt = this.tilt.current;
      tilt_animation(
        "init",
        {
          reverse: false,
          max: props.dnxt_tilt_max ? parseInt(props.dnxt_tilt_max) : 0,
          speed: props.dnxt_tilt_speed ? parseInt(props.dnxt_tilt_speed) : 0,
          startX: props.dnxt_tilt_startx ? parseInt(props.dnxt_tilt_startx) : 0,
          startY: props.dnxt_tilt_starty ? parseInt(props.dnxt_tilt_starty) : 0,
          scale: props.dnxt_tilt_scale ? parseInt(props.dnxt_tilt_scale) : 1,
          glare: false,
          perspective: parseInt(props.dnxt_tilt_perspective),
        },
        tilt
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;
    //Tilt Effect
    const tilt = this.tilt.current;
    if ("off" !== props.dnxt_blurb_tilt_switch && this.props !== prevProps) {
      this.tiltUpdate = tilt;
      if ("off" !== props.dnxt_blurb_tilt_glare) {
        tilt_animation("destroy", {}, tilt);
        tilt_animation(
          "init",
          {
            max: props.dnxt_tilt_max ? parseInt(props.dnxt_tilt_max) : 0,
            speed: props.dnxt_tilt_speed ? parseInt(props.dnxt_tilt_speed) : 0,
            startX: props.dnxt_tilt_startx
              ? parseInt(props.dnxt_tilt_startx)
              : 0,
            startY: props.dnxt_tilt_starty
              ? parseInt(props.dnxt_tilt_starty)
              : 0,
            scale: props.dnxt_tilt_scale ? parseInt(props.dnxt_tilt_scale) : 1,
            perspective: parseInt(props.dnxt_tilt_perspective),
            glare: true,
            "max-glare": props.dnxt_tilt_max_glare,
          },
          tilt
        );
      }

      if ("off" === props.dnxt_blurb_tilt_glare) {
        tilt_animation("destroy", {}, tilt);
        tilt_animation(
          "init",
          {
            max: props.dnxt_tilt_max ? parseInt(props.dnxt_tilt_max) : 0,
            speed: props.dnxt_tilt_speed ? parseInt(props.dnxt_tilt_speed) : 0,
            startX: props.dnxt_tilt_startx
              ? parseInt(props.dnxt_tilt_startx)
              : 0,
            startY: props.dnxt_tilt_starty
              ? parseInt(props.dnxt_tilt_starty)
              : 0,
            scale: props.dnxt_tilt_scale ? parseInt(props.dnxt_tilt_scale) : 1,
            glare: false,
            perspective: parseInt(props.dnxt_tilt_perspective),
          },
          tilt
        );
      }
      if ("off" !== props.dnxt_tilt_reverse) {
        tilt_animation("destroy", {}, tilt);
        tilt_animation(
          "init",
          {
            reverse: true,
            max: props.dnxt_tilt_max ? parseInt(props.dnxt_tilt_max) : 0,
            speed: props.dnxt_tilt_speed ? parseInt(props.dnxt_tilt_speed) : 0,
            startX: props.dnxt_tilt_startx
              ? parseInt(props.dnxt_tilt_startx)
              : 0,
            startY: props.dnxt_tilt_starty
              ? parseInt(props.dnxt_tilt_starty)
              : 0,
            scale: props.dnxt_tilt_scale ? parseInt(props.dnxt_tilt_scale) : 1,
            perspective: parseInt(props.dnxt_tilt_perspective),
            glare: props.dnxt_blurb_tilt_glare === "on" ? true : false,
            "max-glare": props.dnxt_tilt_max_glare,
          },
          tilt
        );
      }
      if ("off" === props.dnxt_tilt_reverse) {
        tilt_animation("destroy", {}, tilt);
        tilt_animation(
          "init",
          {
            reverse: false,
            max: props.dnxt_tilt_max ? parseInt(props.dnxt_tilt_max) : 0,
            speed: props.dnxt_tilt_speed ? parseInt(props.dnxt_tilt_speed) : 0,
            startX: props.dnxt_tilt_startx
              ? parseInt(props.dnxt_tilt_startx)
              : 0,
            startY: props.dnxt_tilt_starty
              ? parseInt(props.dnxt_tilt_starty)
              : 0,
            scale: props.dnxt_tilt_scale ? parseInt(props.dnxt_tilt_scale) : 1,
            perspective: parseInt(props.dnxt_tilt_perspective),
            glare: props.dnxt_blurb_tilt_glare === "on" ? true : false,
            "max-glare": props.dnxt_tilt_max_glare,
          },
          tilt
        );
      }
    } else {
      tilt_animation("destroy", {}, this.tiltUpdate);
    }
  }

  static css(props) {
    const additionalCss = [];

    const slugsAndSelector = {
      useMask: "dnxt_blurb_use_mask",
      useMaskUpload: "dnxt_blurb_use_mask_upload",
      maskShape: "dnxt_blurb_mask_shape",
      maskUpload: "dnxt_blurb_upload_mask",
      maskSize: "dnxt_blurb_mask_size",
      imageHorizontal: "dnxt_blurb_image_horizontal",
      imageVertical: "dnxt_blurb_image_vertical",
      selector: "%%order_class%% .dnxt-blurb-image",
    };

    getShapes(props, additionalCss, slugsAndSelector);

    if (
      props.image_placement &&
      (props.image_placement.startsWith("left") ||
        props.image_placement.startsWith("right"))
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image",
          declaration: `width: auto;`,
        },
      ]);
    }

    if ("on" === props.btn_show_hide) {
      // Button Icon Placement
      if ("right" === props.btn_icon_placement) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon i",
            declaration: `content: attr(data-icon)`,
          },
        ]);
      } else if ("left" === props.btn_icon_placement) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon i",
            declaration: `content: attr(data-icon)`,
          },
        ]);
      }

      // Button Icon Color
      let btn_icon_color = "";

      if ("" !== props.btn_icon_color) {
        btn_icon_color = props.btn_icon_color;
      }
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-btn-icon i",
          declaration: `color: ${btn_icon_color};`,
        },
      ]);
      let btn_icon_hover_enabled = typeof props.btn_icon_color__hover_enabled
        ? "on|hover"
        : "off|hover";
      // Button Icon Hover Color
      let btn_icon_color_hover = props.btn_icon_color__hover;
      if ("on|hover" === btn_icon_hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon:hover i",
            declaration: `color: ${btn_icon_color_hover};`,
          },
        ]);
      }

      // Button Icon On Hover
      if ("on" === props.btn_on_hover && "right" === props.btn_icon_placement) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon:hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      } else if ("on" === props.btn_on_hover) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon:hover i",
            declaration: "opacity: 1;visibility: visible;",
          },
        ]);
      }
      if ("on" === props.btn_on_hover && "left" === props.btn_icon_placement) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon:hover i",
            declaration:
              "opacity: 1;visibility: visible;padding-right: 0.4em;margin-left: 0;",
          },
        ]);
      } else if ("on" === props.btn_on_hover) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon:hover i",
            declaration: "opacity: 1;visibility: visible;",
          },
        ]);
      }
      // Button Icon Placement
      if ("off" === props.btn_on_hover && "left" === props.btn_icon_placement) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-btn-icon.dnxt-btn-icon-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-right: 0.4em;",
          },
        ]);
      } else if (
        "off" === props.btn_on_hover &&
        "right" === props.btn_icon_placement
      ) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-btn-icon.dnxt-btn-icon-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      }
    }

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.dnxt_image) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_img_margin",
          "%%order_class%% .dnxt-blurb-image",
          "margin"
        )
      );
    }

    if ("" !== props.dnxt_image) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_img_padding",
          "%%order_class%% .dnxt-blurb-image",
          "padding"
        )
      );
    }

    if ("" !== props.dnxt_font_icon) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_icon_margin",
          "%%order_class%% .dnxt-blurb-icon",
          "margin"
        )
      );
    }

    if ("" !== props.dnxt_font_icon) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_icon_padding",
          "%%order_class%% .dnxt-blurb-icon span",
          "padding"
        )
      );
    }

    if ("" !== props.blurb_pre_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_pre_margin",
          "%%order_class%% .dnxt-blurb-pre-heading",
          "margin"
        )
      );
    }

    if ("" !== props.blurb_pre_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_pre_padding",
          "%%order_class%% .dnxt-blurb-pre-heading",
          "padding"
        )
      );
    }

    if ("" !== props.blurb_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_post_margin",
          "%%order_class%% .dnxt-blurb-post-heading",
          "margin"
        )
      );
    }

    if ("" !== props.blurb_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_post_padding",
          "%%order_class%% .dnxt-blurb-post-heading",
          "padding"
        )
      );
    }

    if ("" !== props.blurb_post_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_header_margin",
          "%%order_class%% .dnxt-blurb-heading",
          "margin"
        )
      );
    }

    if ("" !== props.blurb_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_post_padding",
          "%%order_class%% .dnxt-blurb-post-heading",
          "padding"
        )
      );
    }

    if ("" !== props.blurb_post_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_header_margin",
          "%%order_class%% .dnxt-blurb-heading",
          "margin"
        )
      );
    }

    if ("" !== props.blurb_post_heading) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_header_padding",
          "%%order_class%% .dnxt-blurb-heading",
          "padding"
        )
      );
    }

    if ("" !== props.blurb_description) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_content_margin",
          "%%order_class%% .dnxt-blurb-description",
          "margin"
        )
      );
    }

    if ("" !== props.blurb_description) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_content_padding",
          "%%order_class%% .dnxt-blurb-description",
          "padding"
        )
      );
    }

    additionalCss.push(
      window.DndhCommon.get_responsive_css(
        props,
        "dnxt_body_margin",
        "%%order_class%% .dnxt-blurb-container",
        "margin"
      )
    );

    additionalCss.push(
      window.DndhCommon.get_responsive_css(
        props,
        "dnxt_body_padding",
        "%%order_class%% .dnxt-blurb-container",
        "padding"
      )
    );

    if ("" !== props.blurb_btntext) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_button_margin",
          "%%order_class%% .dnxt-blurb-btn",
          "margin"
        )
      );
    }

    if ("" !== props.blurb_btntext) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_button_padding",
          "%%order_class%% .dnxt-blurb-btn",
          "padding"
        )
      );
    }

    // Button Icon Placement
    if ("right" === props.font_icon_placement) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: "align-self: flex-end;",
        },
      ]);
    } else if ("center" === props.font_icon_placement) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: "align-self: center;",
        },
      ]);
    } else if ("left" === props.font_icon_placement) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: "align-self: flex-start;",
        },
      ]);
    }

    // Font Icon Color
    if ("" !== props.font_icon_color) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `color: ${props.font_icon_color};`,
        },
      ]);
    }
    if ("on|tablet" === props.font_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `color: ${props.font_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.font_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `color: ${props.font_icon_color_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.font_icon_color__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span:hover",
          declaration: `color: ${props.font_icon_color__hover}`,
        },
      ]);
    }

    // Font Icon BG Color
    if ("off" !== props.use_font_icon_bg_color) {
      if ("on|tablet" === props.font_icon_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-icon span",
            declaration: `background-color: ${props.font_icon_bg_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.font_icon_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-icon span",
            declaration: `background-color: ${props.font_icon_bg_color_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.font_icon_bg_color__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-icon span:hover",
            declaration: `background-color: ${props.font_icon_bg_color__hover}`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-icon span",
            declaration: `background-color: ${props.font_icon_bg_color};`,
          },
        ]);
      }
    }

    // Font Icon Size
    if ("" !== props.font_icon_size) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `font-size: ${props.font_icon_size};`,
        },
      ]);
    }
    if ("on|tablet" === props.font_icon_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `font-size: ${props.font_icon_size_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.font_icon_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `font-size: ${props.font_icon_size_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.font_icon_size__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span:hover",
          declaration: `font-size: ${props.font_icon_size__hover}`,
        },
      ]);
    }

    // Image Width
    if ("on|tablet" === props.dnxt_image_max_width_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image",
          declaration: `max-width: ${props.dnxt_image_max_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxt_image_max_width_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image",
          declaration: `max-width: ${props.dnxt_image_max_width_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.dnxt_image_max_width__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image:hover",
          declaration: `max-width: ${props.dnxt_image_max_width__hover}`,
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image",
          declaration: `max-width: ${props.dnxt_image_max_width};`,
        },
      ]);
    }

    // Content Width
    if ("" !== props.dnxt_content_max_width) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-container",
          declaration: `max-width: ${props.dnxt_content_max_width}!important;`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxt_content_max_width_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-container",
          declaration: `max-width: ${props.dnxt_content_max_width_tablet}!important;`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxt_content_max_width_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-container",
          declaration: `max-width: ${props.dnxt_content_max_width_phone}!important;`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxt_content_max_width__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image img:hover",
          declaration: `width: ${props.dnxt_content_max_width__hover}`,
        },
      ]);
    }

    // Button Background One
    let button_bg_one = "";
    let bg_one_gradient_apply = "";
    let bg_one_gradient_color_one = "";
    let bg_one_gradient_color_two = "";
    let bg_one_gradient_type = "";
    let btn_bg_one_gl = "";
    let btn_bg_one_gr = "";
    let bg_one_gradient_start_position = "";
    let bg_one_gradient_end_position = "";

    // Button color
    if ("" !== props.button_bg_one) {
      button_bg_one = props.button_bg_one;
    }

    // checking gradient type
    if ("" !== props.bg_one_gradient_type) {
      bg_one_gradient_type = props.bg_one_gradient_type;
    }

    // Button Linear Gradient Direction
    if ("" !== props.bg_one_gradient_type_linear_direction) {
      btn_bg_one_gl = props.bg_one_gradient_type_linear_direction;
    }

    // Button Radial Gradient Direction
    if ("" !== props.bg_one_gradient_type_radial_direction) {
      btn_bg_one_gr = props.bg_one_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.bg_one_gradient_type) {
      bg_one_gradient_apply = `${btn_bg_one_gr}`;
    } else if ("linear-gradient" === props.bg_one_gradient_type) {
      bg_one_gradient_apply = `${btn_bg_one_gl}`;
    }

    // Gradient color one for button
    if ("" !== props.bg_one_gradient_color_one) {
      bg_one_gradient_color_one = props.bg_one_gradient_color_one;
    }

    // Gradient color two for button
    if ("" !== props.bg_one_gradient_color_two) {
      bg_one_gradient_color_two = props.bg_one_gradient_color_two;
    }

    // Button Gradient color start position
    if ("" !== props.bg_one_gradient_start_position) {
      bg_one_gradient_start_position = props.bg_one_gradient_start_position;
    }

    // Button Gradient color end position
    if ("" !== props.bg_one_gradient_end_position) {
      bg_one_gradient_end_position = props.bg_one_gradient_end_position;
    }

    if ("on" === props.btn_one_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-button-wrapper .dnxt-blurb-btn",
          declaration: `background-color : ${button_bg_one}`,
        },
      ]);
    }
    if ("on" === props.btn_one_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-button-wrapper .dnxt-blurb-btn",
          declaration: `background: ${bg_one_gradient_type}(${bg_one_gradient_apply},${bg_one_gradient_color_one} ${bg_one_gradient_start_position}, ${bg_one_gradient_color_two} ${bg_one_gradient_end_position});`,
        },
      ]);
    }

    // Heading Background
    let heading_gradient_apply = "";
    let heading_gradient_color_one = "";
    let heading_gradient_color_two = "";
    let heading_gradient_type = "";
    let heading_gl = "";
    let heading_gr = "";
    let heading_gradient_start_position = "";
    let heading_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.heading_gradient_type) {
      heading_gradient_type = props.heading_gradient_type;
    }

    // Heading Linear Gradient Direction
    if ("" !== props.heading_gradient_type_linear_direction) {
      heading_gl = props.heading_gradient_type_linear_direction;
    }

    // Heading Radial Gradient Direction
    if ("" !== props.heading_gradient_type_radial_direction) {
      heading_gr = props.heading_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.heading_gradient_type) {
      heading_gradient_apply = `${heading_gr}`;
    } else if ("linear-gradient" === props.heading_gradient_type) {
      heading_gradient_apply = `${heading_gl}`;
    }

    // Gradient color one for heading
    if ("" !== props.heading_gradient_color_one) {
      heading_gradient_color_one = props.heading_gradient_color_one;
    }

    // Gradient color two for heading
    if ("" !== props.heading_gradient_color_two) {
      heading_gradient_color_two = props.heading_gradient_color_two;
    }

    // Heading Gradient color start position
    if ("" !== props.heading_gradient_start_position) {
      heading_gradient_start_position = props.heading_gradient_start_position;
    }

    // Heading Gradient color end position
    if ("" !== props.heading_gradient_end_position) {
      heading_gradient_end_position = props.heading_gradient_end_position;
    }

    if ("off" !== props.heading_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-heading-wrapper",
          declaration: `background: ${heading_gradient_type}(${heading_gradient_apply},${heading_gradient_color_one} ${heading_gradient_start_position}, ${heading_gradient_color_two} ${heading_gradient_end_position});`,
        },
      ]);
    }

    // Heading BG Color
    if ("off" !== props.heading_bg_show_hide) {
      if ("on|tablet" === props.heading_bg_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-heading-wrapper",
            declaration: `background-color: ${props.heading_bg_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.heading_bg_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-heading-wrapper",
            declaration: `background-color: ${props.heading_bg_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.heading_bg__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-heading-wrapper:hover",
            declaration: `background-color: ${props.heading_bg__hover}`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-heading-wrapper",
            declaration: `background-color: ${props.heading_bg};`,
          },
        ]);
      }
    }

    // Content Background
    let content_gradient_apply = "";
    let content_gradient_color_one = "";
    let content_gradient_color_two = "";
    let content_gradient_type = "";
    let content_gl = "";
    let content_gr = "";
    let content_gradient_start_position = "";
    let content_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.content_gradient_type) {
      content_gradient_type = props.content_gradient_type;
    }

    // Content Linear Gradient Direction
    if ("" !== props.content_gradient_type_linear_direction) {
      content_gl = props.content_gradient_type_linear_direction;
    }

    // Content Radial Gradient Direction
    if ("" !== props.content_gradient_type_radial_direction) {
      content_gr = props.content_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.content_gradient_type) {
      content_gradient_apply = `${content_gr}`;
    } else if ("linear-gradient" === props.content_gradient_type) {
      content_gradient_apply = `${content_gl}`;
    }

    // Gradient color one for content
    if ("" !== props.content_gradient_color_one) {
      content_gradient_color_one = props.content_gradient_color_one;
    }

    // Gradient color two for content
    if ("" !== props.content_gradient_color_two) {
      content_gradient_color_two = props.content_gradient_color_two;
    }

    // Content Gradient color start position
    if ("" !== props.content_gradient_start_position) {
      content_gradient_start_position = props.content_gradient_start_position;
    }

    // Content Gradient color end position
    if ("" !== props.content_gradient_end_position) {
      content_gradient_end_position = props.content_gradient_end_position;
    }

    if ("on" === props.content_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-container",
          declaration: `background: ${content_gradient_type}(${content_gradient_apply},${content_gradient_color_one} ${content_gradient_start_position}, ${content_gradient_color_two} ${content_gradient_end_position});`,
        },
      ]);
    }

    // Content BG color
    if ("off" !== props.content_bg_show_hide) {
      if ("on|tablet" === props.content_bg_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-container",
            declaration: `background-color: ${props.content_bg_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.content_bg_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-container",
            declaration: `background-color: ${props.content_bg_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.content_bg__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-container:hover",
            declaration: `background-color: ${props.content_bg__hover}`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-container",
            declaration: `background-color: ${props.content_bg};`,
          },
        ]);
      }
    }

    // Image Background
    let bg_img_gradient_apply = "";
    let bg_img_gradient_color_one = "";
    let bg_img_gradient_color_two = "";
    let bg_img_gradient_type = "";
    let bg_img_gl = "";
    let bg_img_gr = "";
    let bg_img_gradient_start_position = "";
    let bg_img_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.bg_img_gradient_type) {
      bg_img_gradient_type = props.bg_img_gradient_type;
    }

    // Linear Gradient Direction
    if ("" !== props.bg_img_gradient_type_linear_direction) {
      bg_img_gl = props.bg_img_gradient_type_linear_direction;
    }

    // Radial Gradient Direction
    if ("" !== props.bg_img_gradient_type_radial_direction) {
      bg_img_gr = props.bg_img_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.bg_img_gradient_type) {
      bg_img_gradient_apply = `${bg_img_gr}`;
    } else if ("linear-gradient" === props.bg_img_gradient_type) {
      bg_img_gradient_apply = `${bg_img_gl}`;
    }

    // Gradient color one for content
    if ("" !== props.bg_img_gradient_color_one) {
      bg_img_gradient_color_one = props.bg_img_gradient_color_one;
    }

    // Gradient color two for content
    if ("" !== props.bg_img_gradient_color_two) {
      bg_img_gradient_color_two = props.bg_img_gradient_color_two;
    }

    // Gradient color start position
    if ("" !== props.bg_img_gradient_start_position) {
      bg_img_gradient_start_position = props.bg_img_gradient_start_position;
    }

    // Gradient color end position
    if ("" !== props.bg_img_gradient_end_position) {
      bg_img_gradient_end_position = props.bg_img_gradient_end_position;
    }

    if ("off" !== props.bg_img_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image",
          declaration: `background: ${bg_img_gradient_type}(${bg_img_gradient_apply},${bg_img_gradient_color_one} ${bg_img_gradient_start_position}, ${bg_img_gradient_color_two} ${bg_img_gradient_end_position});`,
        },
      ]);
    }

    // Image BG color
    if ("off" !== props.use_image_bg_color) {
      if ("on|tablet" === props.image_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-image",
            declaration: `background-color: ${props.image_bg_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.image_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-image",
            declaration: `background-color: ${props.image_bg_color_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.image_bg_color__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-image:hover",
            declaration: `background-color: ${props.image_bg_color__hover}`,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-blurb-image",
            declaration: `background-color: ${props.image_bg_color};`,
          },
        ]);
      }
    }

    // Content Background
    let font_icon_gradient_apply = "";
    let font_icon_gradient_color_one = "";
    let font_icon_gradient_color_two = "";
    let font_icon_gradient_type = "";
    let font_icon_gl = "";
    let font_icon_gr = "";
    let font_icon_gradient_start_position = "";
    let font_icon_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.font_icon_gradient_type) {
      font_icon_gradient_type = props.font_icon_gradient_type;
    }

    // Content Linear Gradient Direction
    if ("" !== props.font_icon_gradient_type_linear_direction) {
      font_icon_gl = props.font_icon_gradient_type_linear_direction;
    }

    // Content Radial Gradient Direction
    if ("" !== props.font_icon_gradient_type_radial_direction) {
      font_icon_gr = props.font_icon_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.font_icon_gradient_type) {
      font_icon_gradient_apply = `${font_icon_gr}`;
    } else if ("linear-gradient" === props.font_icon_gradient_type) {
      font_icon_gradient_apply = `${font_icon_gl}`;
    }

    // Gradient color one for content
    if ("" !== props.font_icon_gradient_color_one) {
      font_icon_gradient_color_one = props.font_icon_gradient_color_one;
    }

    // Gradient color two for content
    if ("" !== props.font_icon_gradient_color_two) {
      font_icon_gradient_color_two = props.font_icon_gradient_color_two;
    }

    // Content Gradient color start position
    if ("" !== props.font_icon_gradient_start_position) {
      font_icon_gradient_start_position =
        props.font_icon_gradient_start_position;
    }

    // Content Gradient color end position
    if ("" !== props.font_icon_gradient_end_position) {
      font_icon_gradient_end_position = props.font_icon_gradient_end_position;
    }

    if ("off" !== props.use_font_icon_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon span",
          declaration: `background: ${font_icon_gradient_type}(${font_icon_gradient_apply},${font_icon_gradient_color_one} ${font_icon_gradient_start_position}, ${font_icon_gradient_color_two} ${font_icon_gradient_end_position});`,
        },
      ]);
    }

    // Button Hover Background Color
    let dnxt_hover_bg_color = props.dnxt_hover_bg_color;
    let dnxt_hover_bg = props.dnxt_hover_bg;
    if ("" !== props.dnxt_hover_bg_color) {
      additionalCss.push([
        {
          selector: `%%order_class%% .${dnxt_hover_bg}:before`,
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .${dnxt_hover_bg}:hover:before`,
          declaration: `transform: scaleX(1)!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-fade:hover",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
    }
    // Button Hover Background Color Radial Out
    if ("dnxt-hover-radial-out" === props.dnxt_hover_bg) {
      let dnxt_radial_out_bg_color = props.dnxt_radial_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-radial-out",
          declaration: `background: ${dnxt_radial_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-radial-out:before",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-radial-out:hover:before`,
          declaration: `transform: scale(2)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Radial In
    if ("dnxt-hover-radial-in" === props.dnxt_hover_bg) {
      let dnxt_radial_in_bg_color = props.dnxt_radial_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-radial-in",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-radial-in:before",
          declaration: `background: ${dnxt_radial_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-radial-in:hover:before`,
          declaration: `transform: scale(0)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Rectangle In
    if ("dnxt-hover-rectangle-in" === props.dnxt_hover_bg) {
      let dnxt_rectangle_in_bg_color = props.dnxt_rectangle_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-rectangle-in",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-rectangle-in:before",
          declaration: `background: ${dnxt_rectangle_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-rectangle-in:hover:before`,
          declaration: `transform: scale(0)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Rectangle Out
    if ("dnxt-hover-rectangle-out" === props.dnxt_hover_bg) {
      let dnxt_rectangle_out_bg_color = props.dnxt_rectangle_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-rectangle-out",
          declaration: `background: ${dnxt_rectangle_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-rectangle-out:before",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-rectangle-out:hover:before`,
          declaration: `transform: scale(1)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Shutter In
    if ("dnxt-hover-shutter-in-horizontal" === props.dnxt_hover_bg) {
      let dnxt_shutter_in_bg_color = props.dnxt_shutter_in_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-in-horizontal",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-in-horizontal:before",
          declaration: `background: ${dnxt_shutter_in_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-shutter-in-horizontal:hover:before`,
          declaration: `transform: scaleX(0)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Shutter Out
    if ("dnxt-hover-shutter-out-horizontal" === props.dnxt_hover_bg) {
      let dnxt_shutter_out_bg_color = props.dnxt_shutter_out_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-out-horizontal",
          declaration: `background: ${dnxt_shutter_out_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-out-horizontal:before",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-shutter-out-horizontal:hover:before`,
          declaration: `transform: scaleX(1)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Shutter In Vertical
    if ("dnxt-hover-shutter-in-vertical" === props.dnxt_hover_bg) {
      let dnxt_shutter_in_v_bg_color = props.dnxt_shutter_in_v_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-in-vertical",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-in-vertical:before",
          declaration: `background: ${dnxt_shutter_in_v_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-shutter-in-vertical:hover:before`,
          declaration: `transform: scaleY(0)!important;`,
        },
      ]);
    }
    // Button Hover Background Color Shutter Out Vertical
    if ("dnxt-hover-shutter-out-vertical" === props.dnxt_hover_bg) {
      let dnxt_shutter_out_v_bg_color = props.dnxt_shutter_out_v_bg_color;
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-out-vertical",
          declaration: `background: ${dnxt_shutter_out_v_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-shutter-out-vertical:before",
          declaration: `background: ${dnxt_hover_bg_color}!important;`,
        },
      ]);
      additionalCss.push([
        {
          selector: `%%order_class%% .dnxt-hover-shutter-out-vertical:hover:before`,
          declaration: `transform: scaleY(1)!important;`,
        },
      ]);
    }
    // Button Hover Background Color
    let dnxt_hover_border_bg_color = props.dnxt_hover_border_bg_color;
    let dnxt_hover_border = props.dnxt_hover_border;
    if ("" !== props.dnxt_hover_bg_color) {
      additionalCss.push([
        {
          selector: `%%order_class%% .${dnxt_hover_border}`,
          declaration: `background: ${dnxt_hover_border_bg_color}!important;`,
        },
      ]);
    }

    // Hover Trim Border Color
    let dnxt_trim_border_color = props.dnxt_trim_border_color;
    if ("dnxt-hover-trim" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-trim:before",
          declaration: `border: ${dnxt_trim_border_color} solid 4px;`,
        },
      ]);
    }
    // Hover Ripple Out Border Color
    let dnxt_ripple_out_color = props.dnxt_ripple_out_color;
    if ("dnxt-hover-ripple-out" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-ripple-out:before",
          declaration: `border: ${dnxt_ripple_out_color} solid 6px;`,
        },
      ]);
    }
    // Hover Ripple In Border Color
    let dnxt_ripple_in_color = props.dnxt_ripple_in_color;
    if ("dnxt-hover-ripple-in" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-ripple-in:before",
          declaration: `border: ${dnxt_ripple_in_color} solid 6px;`,
        },
      ]);
    }
    // Hover Underline From Left Color
    let dnxt_underline_from_left_color = props.dnxt_underline_from_left_color;
    if ("dnxt-hover-underline-from-left" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-underline-from-left:before",
          declaration: `background: ${dnxt_underline_from_left_color}`,
        },
      ]);
    }
    // Hover Underline From Center Color
    let dnxt_underline_from_center_color =
      props.dnxt_underline_from_center_color;
    if ("dnxt-hover-underline-from-center" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-underline-from-center:before",
          declaration: `background: ${dnxt_underline_from_center_color}`,
        },
      ]);
    }
    // Hover Underline From Right Color
    let dnxt_underline_from_right_color = props.dnxt_underline_from_right_color;
    if ("dnxt-hover-underline-from-right" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-underline-from-right:before",
          declaration: `background: ${dnxt_underline_from_right_color}`,
        },
      ]);
    }
    // Hover Overline From Left Color
    let dnxt_overline_left_color = props.dnxt_overline_left_color;
    if ("dnxt-hover-overline-from-left" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-overline-from-left:before",
          declaration: `background: ${dnxt_overline_left_color}`,
        },
      ]);
    }
    // Hover Overline From Center Color
    let dnxt_overline_center_color = props.dnxt_overline_center_color;
    if ("dnxt-hover-overline-from-center" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-overline-from-center:before",
          declaration: `background: ${dnxt_overline_center_color}`,
        },
      ]);
    }
    // Hover Overline From Right Color
    let dnxt_overline_right_color = props.dnxt_overline_right_color;
    if ("dnxt-hover-overline-from-right" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-overline-from-right:before",
          declaration: `background: ${dnxt_overline_right_color}`,
        },
      ]);
    }
    // Hover Reveal Color
    let dnxt_reveal_color = props.dnxt_reveal_color;
    if ("dnxt-hover-reveal" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-reveal:before",
          declaration: `border-color: ${dnxt_reveal_color}`,
        },
      ]);
    }
    // Hover Underline Reveal Color
    let dnxt_underline_reveal_color = props.dnxt_underline_reveal_color;
    if ("dnxt-hover-underline-reveal" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-underline-reveal:before",
          declaration: `background: ${dnxt_underline_reveal_color}`,
        },
      ]);
    }
    // Hover Overline Reveal Color
    let dnxt_overline_reveal_color = props.dnxt_overline_reveal_color;
    if ("dnxt-hover-overline-reveal" === props.dnxt_hover_border) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-hover-overline-reveal:before",
          declaration: `background: ${dnxt_overline_reveal_color}`,
        },
      ]);
    }

    // Image Zindex
    let img_zindex = parseInt(props.img_zindex);
    if ("" !== img_zindex) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-image img",
          declaration: `position: relative; z-index: ${img_zindex}`,
        },
      ]);
    }
    // Icon Zindex
    let icon_zindex = parseInt(props.icon_zindex);
    if ("" !== icon_zindex) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-icon",
          declaration: `position: relative; z-index: ${icon_zindex}`,
        },
      ]);
    }
    // Heading Zindex
    let heading_zindex = parseInt(props.heading_zindex);
    if ("" !== heading_zindex) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-blurb-heading-wrapper",
          declaration: `position: relative; z-index: ${heading_zindex}`,
        },
      ]);
    }
    // Button Zindex
    let button_zindex = parseInt(props.button_zindex);
    if ("" !== button_zindex) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-button-wrapper .dnxt-blurb-btn",
          declaration: `position: relative; z-index: ${button_zindex}`,
        },
      ]);
    }

    return additionalCss;
  }

  render() {
    const props = this.props;

    let utils = window.ET_Builder.API.Utils;

    let iconHtml  = <Icon utils = {utils} tag = "i" icon = {props.btn_icon || ""} />;
    let rightItag = "right" === props.btn_icon_placement ? iconHtml : "";
    let leftItag   = "left" === props.btn_icon_placement ? iconHtml : "";

    // Button Text Dynamic Content
    const btnText = props.dynamic.button_text;
    let btnTextComponent = btnText.render();
    if (btnText.loading) {
      // Let Divi render the loading placeholder.
      return btnTextComponent;
    }

    //Button On Hover class inner
    let btnIconOnHover =
      "off" === props.btn_on_hover ? "dnxt-btn-icon-on-hover" : "";

    // Hover Effect 2D
    let dnxt_hover_effect = "";
    if ("off" !== props.blurb_hover_switch) {
      dnxt_hover_effect = props.dnxt_hover_effect;
    }

    // Button Hover 2D
    let btnHover2d = "";
    if ("" !== props.dnxt_hover_2d) {
      btnHover2d = props.dnxt_hover_2d;
    }

    // Button Hover Background
    let btnHoverBg = "";
    if ("" !== props.dnxt_hover_bg) {
      btnHoverBg = props.dnxt_hover_bg;
    }

    // Button Hover Stock
    let btnHoverBorder = "";
    if ("" !== props.dnxt_hover_border) {
      btnHoverBorder = props.dnxt_hover_border;
    }

    // Button Hover Icons
    let btnHoverIcons = "";
    if ("" !== props.dnxt_hover_icons) {
      btnHoverIcons = props.dnxt_hover_icons;
    }

    const buttonTarget =
      "on" === props.button_link_new_window ? "_blank" : "_self";

    // Description Dynamic Content
    const blurbDescription = props.dynamic.blurb_description;
    let blurbDescriptionComponent = blurbDescription.render();
    if (blurbDescription.loading) {
      // Let Divi render the loading placeholder.
      return blurbDescriptionComponent;
    }

    // Pre Heading Dynamic Content
    let preHeadingTag = props.pre_heading_tag;
    const blurb_pre_heading = {
      preHeadingTag,
      printPreHeading() {
        if ("on" === props.blurb_pre_switch) {
          let blurbPreHeading = props.dynamic.blurb_pre_heading;
          let blurbPreHeadingComponent = blurbPreHeading.render();
          if (blurbPreHeading.loading) {
            // Let Divi render the loading placeholder.
            return blurbPreHeadingComponent;
          }
          return (
            <this.preHeadingTag className="dnxt-blurb-pre-heading">
              {blurbPreHeadingComponent}
            </this.preHeadingTag>
          );
        }
      },
    };

    // Main Heading Dynamic Content
    let headingTag = props.heading_tag;
    const blurb_heading = {
      headingTag,
      printHeading() {
        let blurbHeading = props.dynamic.blurb_heading;
        let blurbHeadingComponent = blurbHeading.render();
        if (blurbHeading.loading) {
          // Let Divi render the loading placeholder.
          return blurbHeadingComponent;
        }
        return (
          <this.headingTag className="dnxt-blurb-heading">
            {blurbHeadingComponent}
          </this.headingTag>
        );
      },
    };

    // Post Heading Dynamic Content
    let postHeadingTag = props.post_heading_tag;
    const blurb_post_heading = {
      postHeadingTag,
      printPostHeading() {
        if ("on" === props.blurb_post_switch) {
          let blurbPostHeading = props.dynamic.blurb_post_heading;
          let blurbPostHeadingComponent = blurbPostHeading.render();
          if (blurbPostHeading.loading) {
            // Let Divi render the loading placeholder.
            return blurbPostHeadingComponent;
          }
          return (
            <this.postHeadingTag className="dnxt-blurb-post-heading">
              {blurbPostHeadingComponent}
            </this.postHeadingTag>
          );
        }
      },
    };

    const dnxt_image = {
      printImage() {
        let image = props.dynamic.dnxt_image;
        let image_tablet = props.dynamic.dnxt_image_tablet;
        let image_phone = props.dynamic.dnxt_image_phone;
        let image_hover = props.dynamic.dnxt_image__hover;
        let dnxt_alt = props.dnxt_alt;
        if (image.loading) {
          // Let Divi render the loading placeholder.
          return image.render();
        }
        if ("" !== image.value) {
          if ("on|tablet" === props.dnxt_image_last_edited) {
            return (
              <img
                className="img-fluid"
                src={image_tablet.value ? image_tablet.value : image.value}
                alt={dnxt_alt}
              />
            );
          } else if ("on|phone" === props.dnxt_image_last_edited) {
            return (
              <img
                className="img-fluid"
                src={
                  image_phone.value
                    ? image_phone.value
                    : image_tablet.value
                    ? image_tablet.value
                    : image.value
                }
                alt={dnxt_alt}
              />
            );
          } else if ("on|hover" === props.dnxt_image__hover_enabled) {
            return (
              <img
                className="img-fluid"
                src={image_hover.value ? image_hover.value : image.value}
                alt={dnxt_alt}
              />
            );
          }
          return <img className="img-fluid" src={image.value} alt={dnxt_alt} />;
        }
      },
    };
    // Icon
    const font_icon = {
      printIcon() {
        let utils = window.ET_Builder.API.Utils;

        return (
          <Icon
            utils={utils}
            icon={props.dnxt_font_icon || ""}
            classes="et-pb-icon"
          />
        );
      },
    };

    let image_placement = getAlignment(
      "image_placement",
      props,
      "dnxt-blurb-wrapper-one"
    );
    let img_class = getAlignment("image_placement", props, "dnxt-blurb-image");

    // Icon Placement Setup
    let fonticonplace = "";
    let fontclass = "";
    if ("dnxt-blurb-wrapper-two-top-left" === props.font_icon_placement) {
      fonticonplace = "dnxt-blurb-wrapper-two-top-left";
      fontclass = "dnxt-blurb-icon-top-left";
    } else if (
      "dnxt-blurb-wrapper-two-top-center" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-top-center";
      fontclass = "dnxt-blurb-icon-top-center";
    } else if (
      "dnxt-blurb-wrapper-two-top-right" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-top-right";
      fontclass = "dnxt-blurb-icon-top-right";
    } else if (
      "dnxt-blurb-wrapper-two-left-top" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-left-top";
    } else if (
      "dnxt-blurb-wrapper-two-left-center" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-left-center";
    } else if (
      "dnxt-blurb-wrapper-two-left-bottom" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-left-bottom";
    } else if (
      "dnxt-blurb-wrapper-two-bottom-left" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-bottom-left";
      fontclass = "dnxt-blurb-icon-bottom-left";
    } else if (
      "dnxt-blurb-wrapper-two-bottom-center" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-bottom-center";
      fontclass = "dnxt-blurb-icon-bottom-center";
    } else if (
      "dnxt-blurb-wrapper-two-bottom-right" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-bottom-right";
      fontclass = "dnxt-blurb-icon-bottom-right";
    } else if (
      "dnxt-blurb-wrapper-two-right-top" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-right-top";
    } else if (
      "dnxt-blurb-wrapper-two-right-center" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-right-center";
    } else if (
      "dnxt-blurb-wrapper-two-right-bottom" === props.font_icon_placement
    ) {
      fonticonplace = "dnxt-blurb-wrapper-two-right-bottom";
    }

    return (
      <>
        {"on" === props.dnxt_blurb_tilt_switch ? (
          <div
            ref={this.tilt}
            className={`dnxt-blurb-wrapper-outer ${dnxt_hover_effect}`}
            data-tilt
          >
            <div className={`dnxt-blurb-wrapper ${image_placement}`}>
              <div className={`dnxt-blurb-image ${img_class}`}>
                {dnxt_image.printImage()}
              </div>
              <div className={fonticonplace}>
                {"off" !== props.dnxt_use_icon ? (
                  <div className={`dnxt-blurb-icon ${fontclass}`}>
                    {font_icon.printIcon()}
                  </div>
                ) : null}
                <div className="dnxt-blurb-container">
                  <div className="dnxt-blurb-heading-wrapper">
                    {blurb_pre_heading.printPreHeading()}
                    {blurb_heading.printHeading()}
                    {blurb_post_heading.printPostHeading()}
                  </div>
                  <div className="dnxt-blurb-description">
                    {blurbDescriptionComponent}
                  </div>
                  {"off" !== props.dnxt_btn_show_hide ? (
                    <div className="dnxt-button-wrapper">
                      <a
                        href={props.button_link}
                        className={`dnxt-blurb-btn dnxt-btn-icon ${btnIconOnHover} ${btnHover2d} ${btnHoverBg} ${btnHoverBorder} ${btnHoverIcons}`}
                        target={buttonTarget}
                      >
                        {leftItag}
                        {btnTextComponent}
                        {rightItag}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`dnxt-blurb-wrapper-outer ${dnxt_hover_effect}`}>
            <div className={`dnxt-blurb-wrapper ${image_placement}`}>
              <div className={`dnxt-blurb-image ${img_class}`}>
                {dnxt_image.printImage()}
              </div>
              <div className={fonticonplace}>
                {"off" !== props.dnxt_use_icon ? (
                  <div className={`dnxt-blurb-icon ${fontclass}`}>
                    {font_icon.printIcon()}
                  </div>
                ) : null}
                <div className="dnxt-blurb-container">
                  <div className="dnxt-blurb-heading-wrapper">
                    {blurb_pre_heading.printPreHeading()}
                    {blurb_heading.printHeading()}
                    {blurb_post_heading.printPostHeading()}
                  </div>
                  <div className="dnxt-blurb-description">
                    {blurbDescriptionComponent}
                  </div>
                  {"off" !== props.dnxt_btn_show_hide ? (
                    <div className="dnxt-button-wrapper">
                      <a
                        href={props.button_link}
                        className={`dnxt-blurb-btn dnxt-btn-icon ${btnIconOnHover} ${btnHover2d} ${btnHoverBg} ${btnHoverBorder} ${btnHoverIcons}`}
                        target={buttonTarget}
                      >
                        {leftItag}
                        {btnTextComponent}
                        {rightItag}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default NextBlurb;
