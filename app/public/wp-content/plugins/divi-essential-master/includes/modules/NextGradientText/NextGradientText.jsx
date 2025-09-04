import React, { Component } from "react";
import WOW from "../../../assets/js/wow.min.js";
import "../../../assets/css/reveal-animation.css";
import { Title } from "../base/common.jsx";
import "../base/hover-common.css";
import "./style.css";

class NextGradientText extends Component {
  static slug = "dnxte_gradient_text";

  static css(props) {
    const additionalCss = [];

    /**
     * Gradient Text Color CSS Start
     *
     */

    let gradient_type_text =
      props.gradient_type_text !== "" ? props.gradient_type_text : "";
    let gradient_radial_diretion_text =
      "" !== props.gradient_type_radial_direction_text
        ? props.gradient_type_radial_direction_text
        : "";
    let gradient_linear_direction_text =
      "" !== props.gradient_type_linear_direction_text
        ? props.gradient_type_linear_direction_text
        : "";
    let gradient_type_direction_apply_text =
      "radial-gradient" === props.gradient_type_text
        ? gradient_radial_diretion_text
        : gradient_linear_direction_text;

    let gradient_color_one_select_text =
      "" !== props.gradient_color_one_select_text
        ? props.gradient_color_one_select_text
        : "";
    let gradient_color_two_select_text =
      "" !== props.gradient_color_two_select_text
        ? props.gradient_color_two_select_text
        : "";
    let gradient_start_position_text =
      "" !== props.gradient_start_position_text
        ? props.gradient_start_position_text
        : "";
    let gradient_end_position_text =
      "" !== props.gradient_end_position_text
        ? props.gradient_end_position_text
        : "";

    // Gradient setting up t1
    additionalCss.push([
      {
        selector:
          "%%order_class%% .dnxt-gradient-text.dnxt-gradient-text-color",
        declaration: `background: ${gradient_type_text}(${gradient_type_direction_apply_text},${gradient_color_one_select_text} ${gradient_start_position_text},${gradient_color_two_select_text} ${gradient_end_position_text});-webkit-background-clip: text;-webkit-text-fill-color: transparent;`,
      },
    ]);

    /**
     * Text Reveal Effect CSS Start
     *
     */
    let text_reveal_color_before_value =
      "" !== props.text_reveal_color_before
        ? props.text_reveal_color_before
        : "";

    // Text Reveal Effect setting up color befor
    if ("on" === props.text_reveal_effect) {
      additionalCss.push([
        {
          selector: "%%order_class%% .reveal-effect.masker:after",
          declaration: `background: ${text_reveal_color_before_value}`,
        },
      ]);
    }

    // Border Title default color
    const title_border_color_top =
      props.border_color_top_title_border ||
      props.border_color_all_title_border ||
      "#333333";

    const title_border_color_bottom =
      props.border_color_bottom_title_border ||
      props.border_color_all_title_border ||
      "#333333";

    const title_border_color_left =
      props.border_color_left_title_border ||
      props.border_color_all_title_border ||
      "#333333";

    const title_border_color_right =
      props.border_color_right_title_border ||
      props.border_color_all_title_border ||
      "#333333";

    // Border Title style
    const title_border_style_top =
      props.border_style_top_title_border ||
      props.border_style_all_title_border ||
      "solid";

    const title_border_style_bottom =
      props.border_style_bottom_title_border ||
      props.border_style_all_title_border ||
      "solid";

    const title_border_style_left =
      props.border_style_left_title_border ||
      props.border_style_all_title_border ||
      "solid";

    const title_border_style_right =
      props.border_style_right_title_border ||
      props.border_style_all_title_border ||
      "solid";

    //Add border one color & style
    additionalCss.push([
      // border one default color push
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-top-color: ${title_border_color_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-bottom-color: ${title_border_color_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-left-color: ${title_border_color_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-right-color: ${title_border_color_right};`,
      },
      // border default style push
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-top-style: ${title_border_style_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-bottom-style: ${title_border_style_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-left-style: ${title_border_style_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-gradient-text",
        declaration: `border-right-style: ${title_border_style_right};`,
      },
    ]);

    return additionalCss;
  }

  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    const {
      heading_tag,
      text_reveal_effect,
      dnxt_text_hover_effect_switch,
      dnxt_text_hover_effect_select,
    } = this.props;

    const text_reveal_enable =
      text_reveal_effect === "on" ? "reveal-effect masker wow" : "";
    const hover_effect_enable =
      dnxt_text_hover_effect_switch === "on"
        ? dnxt_text_hover_effect_select
        : "";

    return (
      <div className="dnxt-text-reveal">
        <div className="dnxt-reveal-text-container">
          <div className={text_reveal_enable}>
            <Title
              title={this.props.gradient_title}
              dynamicTitle={this.props.dynamic.gradient_title}
              tag={heading_tag}
              classes={`dnxt-gradient-text dnxt-gradient-text-color ${hover_effect_enable}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NextGradientText;
