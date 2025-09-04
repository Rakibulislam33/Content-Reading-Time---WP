// External Dependencies
import React, { Component } from "react";
import { getAlignment, Icon } from "../base/common";
import "../base/hover-common.css";
// Internal Dependencies
import "./style.css";

class NextButton extends Component {
  static slug = "dnxte_button";

  static css(props) {
    const additionalCss = [];

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
      if ("" !== props.btn_icon_color) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon i",
            declaration: `color: ${props.btn_icon_color};`,
          },
        ]);
      }
      if ("on|tablet" === props.btn_icon_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon i",
            declaration: `color: ${props.btn_icon_color_tablet};`,
            device: "tablet",
          },
        ]);
      }
      if ("on|phone" === props.btn_icon_color_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon i",
            declaration: `color: ${props.btn_icon_color_phone};`,
            device: "phone",
          },
        ]);
      }
      if ("on|hover" === props.btn_icon_color__hover_enabled) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-btn-icon:hover i",
            declaration: `color: ${props.btn_icon_color__hover}`,
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
            selector: "%%order_class%% .dnxt-btn-icon.dnxt-btn-icon-on-hover i",
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
            selector: "%%order_class%% .dnxt-btn-icon.dnxt-btn-icon-on-hover i",
            declaration:
              "opacity: 1;visibility: visible;margin-left: 0;padding-left: 0.4em;",
          },
        ]);
      }
    }

    // Button Hover Background Color
    let dnxt_hover_bg_color = "";
    if ("" !== props.dnxt_hover_bg_color) {
      dnxt_hover_bg_color = props.dnxt_hover_bg_color;
    }
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
          selector: "%%order_class%% .dnxt-hover-radial-out:hover:before",
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
          declaration: `background: ${dnxt_overline_left_color}!important;`,
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

    return additionalCss;
  }

  render() {
    const props = this.props;

    let utils = window.ET_Builder.API.Utils;

    const dnxt_button_alignment_classes = getAlignment(
      "dnxt_button_alignment",
      props
    );

    let iconHtml = <Icon utils={utils} tag="i" icon={props.btn_icon || ""} />;
    let rightItag = "right" === props.btn_icon_placement ? iconHtml : "";
    let lefItag = "left" === props.btn_icon_placement ? iconHtml : "";

    const buttonTarget =
      "on" === props.button_link_new_window ? "_blank" : "_self";

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

    //Button On Hover class inner
    let btnIconOnHover =
      "off" === props.btn_on_hover ? "dnxt-btn-icon-on-hover" : "";

    // Dynamic Content
    const btnText = this.props.dynamic.button_text;
    let btnTextComponent = btnText.render();
    if (btnText.loading) {
      // Let Divi render the loading placeholder.
      return btnTextComponent;
    }

    return (
      <div className={`dnxt-button-wrapper ${dnxt_button_alignment_classes}`}>
        <a
          className={`dnxt-btn-icon ${btnIconOnHover} ${btnHover2d} ${btnHoverBg} ${btnHoverBorder} ${btnHoverIcons}`}
          href={props.button_link}
          target={buttonTarget}
        >
          {lefItag}
          {btnTextComponent}
          {rightItag}
        </a>
      </div>
    );
  }
}

export default NextButton;
