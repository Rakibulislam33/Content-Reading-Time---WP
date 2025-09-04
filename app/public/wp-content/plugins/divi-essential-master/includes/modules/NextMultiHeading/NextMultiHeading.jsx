import React, { Component } from "react";
import WOW from "../../../assets/js/wow.min.js";
import "../../../assets/css/reveal-animation.css";
import { Title } from "../base/common.jsx";
import "../base/get_responsive_css";
import "../base/hover-common.css";
import "./style.css";

class NextMultiHeading extends Component {
  static slug = "dnxte_multi_heading";

  static css(props) {
    const additionalCss = [];
    // Text One Background Color
    if ("off" !== props.bg_one_background_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-one",
          declaration: `background-color: ${props.bg_one_bg_color};`,
        },
      ]);
    }
    // Text Two Background Color
    if ("off" !== props.bg_two_background_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-two",
          declaration: `background-color: ${props.bg_two_bg_color};`,
        },
      ]);
    }
    // Text Three Background Color
    if ("off" !== props.bg_three_background_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-three",
          declaration: `background-color: ${props.bg_three_bg_color};`,
        },
      ]);
    }
    // Button Background One
    let bg_one_gradient_apply = "";
    let bg_one_gradient_color_one = "";
    let bg_one_gradient_color_two = "";
    let bg_one_gradient_type = "";
    let bg_one_gl = "";
    let bg_one_gr = "";
    let bg_one_gradient_start_position = "";
    let bg_one_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.bg_one_gradient_type) {
      bg_one_gradient_type = props.bg_one_gradient_type;
    }

    // Button Linear Gradient Direction
    if ("" !== props.bg_one_gradient_type_linear_direction) {
      bg_one_gl = props.bg_one_gradient_type_linear_direction;
    }

    // Button Radial Gradient Direction
    if ("" !== props.bg_one_gradient_type_radial_direction) {
      bg_one_gr = props.bg_one_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.bg_one_gradient_type) {
      bg_one_gradient_apply = `${bg_one_gr}`;
    } else if ("linear-gradient" === props.bg_one_gradient_type) {
      bg_one_gradient_apply = `${bg_one_gl}`;
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

    if ("off" !== props.bg_one_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-one",
          declaration: `background: ${bg_one_gradient_type}(${bg_one_gradient_apply},${bg_one_gradient_color_one} ${bg_one_gradient_start_position}, ${bg_one_gradient_color_two} ${bg_one_gradient_end_position});`,
        },
      ]);
    }

    // Button Background Two
    let bg_two_gradient_apply = "";
    let bg_two_gradient_color_one = "";
    let bg_two_gradient_color_two = "";
    let bg_two_gradient_type = "";
    let bg_two_gl = "";
    let bg_two_gr = "";
    let bg_two_gradient_start_position = "";
    let bg_two_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.bg_two_gradient_type) {
      bg_two_gradient_type = props.bg_two_gradient_type;
    }

    // Button Linear Gradient Direction
    if ("" !== props.bg_two_gradient_type_linear_direction) {
      bg_two_gl = props.bg_two_gradient_type_linear_direction;
    }

    // Button Radial Gradient Direction
    if ("" !== props.bg_two_gradient_type_radial_direction) {
      bg_two_gr = props.bg_two_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.bg_two_gradient_type) {
      bg_two_gradient_apply = `${bg_two_gr}`;
    } else if ("linear-gradient" === props.bg_two_gradient_type) {
      bg_two_gradient_apply = `${bg_two_gl}`;
    }

    // Gradient color one for button
    if ("" !== props.bg_two_gradient_color_one) {
      bg_two_gradient_color_one = props.bg_two_gradient_color_one;
    }

    // Gradient color two for button
    if ("" !== props.bg_two_gradient_color_two) {
      bg_two_gradient_color_two = props.bg_two_gradient_color_two;
    }

    // Button Gradient color start position
    if ("" !== props.bg_two_gradient_start_position) {
      bg_two_gradient_start_position = props.bg_two_gradient_start_position;
    }

    // Button Gradient color end position
    if ("" !== props.bg_two_gradient_end_position) {
      bg_two_gradient_end_position = props.bg_two_gradient_end_position;
    }

    if ("off" !== props.bg_two_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-two",
          declaration: `background: ${bg_two_gradient_type}(${bg_two_gradient_apply},${bg_two_gradient_color_one} ${bg_two_gradient_start_position}, ${bg_two_gradient_color_two} ${bg_two_gradient_end_position});`,
        },
      ]);
    }

    // Button Background Three
    let bg_three_gradient_apply = "";
    let bg_three_gradient_color_one = "";
    let bg_three_gradient_color_two = "";
    let bg_three_gradient_type = "";
    let bg_three_gl = "";
    let bg_three_gr = "";
    let bg_three_gradient_start_position = "";
    let bg_three_gradient_end_position = "";

    // checking gradient type
    if ("" !== props.bg_three_gradient_type) {
      bg_three_gradient_type = props.bg_three_gradient_type;
    }

    // Button Linear Gradient Direction
    if ("" !== props.bg_three_gradient_type_linear_direction) {
      bg_three_gl = props.bg_three_gradient_type_linear_direction;
    }

    // Button Radial Gradient Direction
    if ("" !== props.bg_three_gradient_type_radial_direction) {
      bg_three_gr = props.bg_three_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.bg_three_gradient_type) {
      bg_three_gradient_apply = `${bg_three_gr}`;
    } else if ("linear-gradient" === props.bg_three_gradient_type) {
      bg_three_gradient_apply = `${bg_three_gl}`;
    }

    // Gradient color one for button
    if ("" !== props.bg_three_gradient_color_one) {
      bg_three_gradient_color_one = props.bg_three_gradient_color_one;
    }

    // Gradient color two for button
    if ("" !== props.bg_three_gradient_color_two) {
      bg_three_gradient_color_two = props.bg_three_gradient_color_two;
    }

    // Button Gradient color start position
    if ("" !== props.bg_three_gradient_start_position) {
      bg_three_gradient_start_position = props.bg_three_gradient_start_position;
    }

    // Button Gradient color end position
    if ("" !== props.bg_three_gradient_end_position) {
      bg_three_gradient_end_position = props.bg_three_gradient_end_position;
    }

    if ("off" !== props.bg_three_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-three",
          declaration: `background: ${bg_three_gradient_type}(${bg_three_gradient_apply},${bg_three_gradient_color_one} ${bg_three_gradient_start_position}, ${bg_three_gradient_color_two} ${bg_three_gradient_end_position});`,
        },
      ]);
    }

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `background-color: ${props.text_one_bg};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `background-color: ${props.text_two_bg};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `background-color: ${props.text_three_bg};`,
      },
    ]);

    /**
     * Spacing between headings CSS
     *
     */

    if ("on" !== props.spacing_between_heading) {
      if ("on|tablet" === props.spacing_between_heading_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-one",
            declaration: `padding-right: ${props.spacing_between_heading_tablet};`,
            device: "tablet",
          },
        ]);
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-two",
            declaration: `padding-right: ${props.spacing_between_heading_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.spacing_between_heading_last_edited) {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-one",
            declaration: `padding-right: ${props.spacing_between_heading_phone};`,
            device: "phone",
          },
        ]);
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-two",
            declaration: `padding-right: ${props.spacing_between_heading_phone};`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-one",
            declaration: `padding-right: ${props.spacing_between_heading};`,
          },
        ]);
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-two",
            declaration: `padding-right: ${props.spacing_between_heading};`,
          },
        ]);
      }
    }

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.text_one) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "text_one_margin",
          "%%order_class%% .dnxt-text-one",
          "margin"
        )
      );
    }

    if ("" !== props.text_one) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "text_one_padding",
          "%%order_class%% .dnxt-text-one",
          "padding"
        )
      );
    }

    if ("" !== props.text_two) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "text_two_margin",
          "%%order_class%% .dnxt-text-two",
          "margin"
        )
      );
    }

    if ("" !== props.text_two) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "text_two_padding",
          "%%order_class%% .dnxt-text-two",
          "padding"
        )
      );
    }

    if ("" !== props.text_three) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "text_three_margin",
          "%%order_class%% .dnxt-text-three",
          "margin"
        )
      );
    }

    if ("" !== props.text_three) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "text_three_padding",
          "%%order_class%% .dnxt-text-three",
          "padding"
        )
      );
    }

    // Border one default color
    const border_one_color_top =
      props.border_color_top_border_one ||
      props.border_color_all_border_one ||
      "#333333";

    const border_one_color_bottom =
      props.border_color_bottom_border_one ||
      props.border_color_all_border_one ||
      "#333333";

    const border_one_color_left =
      props.border_color_left_border_one ||
      props.border_color_all_border_one ||
      "#333333";

    const border_one_color_right =
      props.border_color_right_border_one ||
      props.border_color_all_border_one ||
      "#333333";

    // Border one style
    const border_one_style_top =
      props.border_style_top_border_one ||
      props.border_style_all_border_one ||
      "solid";

    const border_one_style_bottom =
      props.border_style_bottom_border_one ||
      props.border_style_all_border_one ||
      "solid";

    const border_one_style_left =
      props.border_style_left_border_one ||
      props.border_style_all_border_one ||
      "solid";

    const border_one_style_right =
      props.border_style_right_border_one ||
      props.border_style_all_border_one ||
      "solid";

    //Add border one color & style
    additionalCss.push([
      // border one default color push
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-top-color: ${border_one_color_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-bottom-color: ${border_one_color_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-left-color: ${border_one_color_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-right-color: ${border_one_color_right};`,
      },
      // border default style push
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-top-style: ${border_one_style_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-bottom-style: ${border_one_style_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-left-style: ${border_one_style_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-one",
        declaration: `border-right-style: ${border_one_style_right};`,
      },
    ]);

    // Border two default color
    const border_two_color_top =
      props.border_color_top_border_two ||
      props.border_color_all_border_two ||
      "#333333";

    const border_two_color_bottom =
      props.border_color_bottom_border_two ||
      props.border_color_all_border_two ||
      "#333333";

    const border_two_color_left =
      props.border_color_left_border_two ||
      props.border_color_all_border_two ||
      "#333333";

    const border_two_color_right =
      props.border_color_right_border_two ||
      props.border_color_all_border_two ||
      "#333333";

    // Border two style
    const border_two_style_top =
      props.border_style_top_border_two ||
      props.border_style_all_border_two ||
      "solid";

    const border_two_style_bottom =
      props.border_style_bottom_border_two ||
      props.border_style_all_border_two ||
      "solid";

    const border_two_style_left =
      props.border_style_left_border_two ||
      props.border_style_all_border_two ||
      "solid";

    const border_two_style_right =
      props.border_style_right_border_two ||
      props.border_style_all_border_two ||
      "solid";

    //Add border two color & style
    additionalCss.push([
      // border two default color push
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-top-color: ${border_two_color_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-bottom-color: ${border_two_color_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-left-color: ${border_two_color_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-right-color: ${border_two_color_right};`,
      },
      // border default style push
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-top-style: ${border_two_style_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-bottom-style: ${border_two_style_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-left-style: ${border_two_style_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-two",
        declaration: `border-right-style: ${border_two_style_right};`,
      },
    ]);

    // Border three default color
    const border_three_color_top =
      props.border_color_top_border_three ||
      props.border_color_all_border_three ||
      "#333333";

    const border_three_color_bottom =
      props.border_color_bottom_border_three ||
      props.border_color_all_border_three ||
      "#333333";

    const border_three_color_left =
      props.border_color_left_border_three ||
      props.border_color_all_border_three ||
      "#333333";

    const border_three_color_right =
      props.border_color_right_border_three ||
      props.border_color_all_border_three ||
      "#333333";

    // Border three style
    const border_three_style_top =
      props.border_style_top_border_three ||
      props.border_style_all_border_three ||
      "solid";

    const border_three_style_bottom =
      props.border_style_bottom_border_three ||
      props.border_style_all_border_three ||
      "solid";

    const border_three_style_left =
      props.border_style_left_border_three ||
      props.border_style_all_border_three ||
      "solid";

    const border_three_style_right =
      props.border_style_right_border_three ||
      props.border_style_all_border_three ||
      "solid";

    //Add border three color & style
    additionalCss.push([
      // border three default color push
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-top-color: ${border_three_color_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-bottom-color: ${border_three_color_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-left-color: ${border_three_color_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-right-color: ${border_three_color_right};`,
      },
      // border default style push
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-top-style: ${border_three_style_top};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-bottom-style: ${border_three_style_bottom};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-left-style: ${border_three_style_left};`,
      },
      {
        selector: "%%order_class%% .dnxt-text-three",
        declaration: `border-right-style: ${border_three_style_right};`,
      },
    ]);

    let display_type;

    if (props.display_type_select === "on") {
      display_type = "block";
    } else {
      display_type = "inline";
    }
    // Display stacked
    additionalCss.push([
      {
        selector:
          "%%order_class%% .dnxt-text-one,%%order_class%% .dnxt-text-two,%%order_class%% .dnxt-text-three",
        declaration: `display: ${display_type};`,
      },
    ]);

    let text_one_reveal_color_before = "";

    // Reveal Effect for color before
    if ("" !== props.text_one_reveal_color_before) {
      text_one_reveal_color_before = props.text_one_reveal_color_before;
    }

    // Text Reveal Effect setting up color befor
    if ("on" === props.text_one_reveal_effect) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-one.reveal-effect.masker:after",
          declaration: `background: ${text_one_reveal_color_before}`,
        },
      ]);
    }
    let text_two_reveal_color_before = "";
    if ("" !== props.text_two_reveal_color_before) {
      text_two_reveal_color_before = props.text_two_reveal_color_before;
    }

    // Text Reveal Effect setting up color befor
    if ("on" === props.text_two_reveal_effect) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-two.reveal-effect.masker:after",
          declaration: `background: ${text_two_reveal_color_before}`,
        },
      ]);
    }

    let text_three_reveal_color_before = "";
    if ("" !== props.text_three_reveal_color_before) {
      text_three_reveal_color_before = props.text_three_reveal_color_before;
    }

    // Text Reveal Effect setting up color befor
    if ("on" === props.text_three_reveal_effect) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-text-three.reveal-effect.masker:after",
          declaration: `background: ${text_three_reveal_color_before}`,
        },
      ]);
    }

    if ("center" === props.text_one_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-one",
          declaration: `max-width: max-content; margin: 0 auto;`,
        },
      ]);
    } else if ("right" === props.text_one_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-one",
          declaration: `max-width: max-content; margin-left:auto;`,
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-one",
          declaration: `max-width: max-content; margin-right:auto;`,
        },
      ]);
    }
    if ("center" === props.text_two_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-two",
          declaration: `max-width: max-content; margin: 0 auto;`,
        },
      ]);
    } else if ("right" === props.text_two_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-two",
          declaration: `max-width: max-content; margin-left:auto;`,
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-two",
          declaration: `max-width: max-content; margin-right:auto;`,
        },
      ]);
    }
    if ("center" === props.text_three_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-three",
          declaration: `max-width: max-content; margin: 0 auto;`,
        },
      ]);
    } else if ("right" === props.text_three_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-three",
          declaration: `max-width: max-content; margin-left:auto;`,
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-three",
          declaration: `max-width: max-content; margin-right:auto;`,
        },
      ]);
    }

    if ("center" === props.inline_multi_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .wrapper",
          declaration: `text-align: center;`,
        },
      ]);
    } else if ("right" === props.inline_multi_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .wrapper",
          declaration: `text-align: right;`,
        },
      ]);
    } else if (
      "left" === props.inline_multi_align ||
      "left" === props.inline_multi_align
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .wrapper",
          declaration: `text-align: left;`,
        },
      ]);
    }
    if ("on|tablet" === props.inline_multi_align_last_edited) {
      if ("center" === props.inline_multi_align_tablet) {
        additionalCss.push([
          {
            selector: "%%order_class%% .wrapper",
            declaration: `text-align: center;`,
          },
        ]);
      } else if ("right" === props.inline_multi_align_tablet) {
        additionalCss.push([
          {
            selector: "%%order_class%% .wrapper",
            declaration: `text-align: right;`,
          },
        ]);
      } else if (
        "left" === props.inline_multi_align_tablet ||
        "justify" === props.inline_multi_align_tablet
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .wrapper",
            declaration: `text-align: left;`,
          },
        ]);
      }
    }
    if ("on|phone" === props.inline_multi_align_last_edited) {
      if ("center" === props.inline_multi_align_phone) {
        additionalCss.push([
          {
            selector: "%%order_class%% .wrapper",
            declaration: `text-align: center;`,
          },
        ]);
      } else if ("right" === props.inline_multi_align_phone) {
        additionalCss.push([
          {
            selector: "%%order_class%% .wrapper",
            declaration: `text-align: right;`,
          },
        ]);
      } else if (
        "left" === props.inline_multi_align_phone ||
        "justify" === props.inline_multi_align_phone
      ) {
        additionalCss.push([
          {
            selector: "%%order_class%% .wrapper",
            declaration: `text-align: left;`,
          },
        ]);
      }
    }
    /**
     * Gradient Text Color CSS t1 Start
     *
     */

    let gradient_type_t1 = "";
    let gradient_type_direction_apply_t1 = "";
    let gradient_linear_direction_t1 = "";
    let gradient_radial_diretion_t1 = "";
    let gradient_color_one_select_t1 = "";
    let gradient_color_two_select_t1 = "";
    let gradient_start_position_t1 = "";
    let gradient_end_position_t1 = "";

    // checking gradient type t1
    if (props.gradient_type_text_one !== "") {
      gradient_type_t1 = props.gradient_type_text_one;
    }

    // Linear gradient direction t1
    if ("" !== props.gradient_type_linear_direction_text_one) {
      gradient_linear_direction_t1 =
        props.gradient_type_linear_direction_text_one;
    }

    // Gradient Radial Direction t1
    if ("" !== props.gradient_type_radial_direction_text_one) {
      gradient_radial_diretion_t1 =
        props.gradient_type_radial_direction_text_one;
    }

    // Apply gradient direcion t1
    if ("radial-gradient" === props.gradient_type_text_one) {
      gradient_type_direction_apply_t1 = `${gradient_radial_diretion_t1}`;
    } else if ("linear-gradient" === props.gradient_type_text_one) {
      gradient_type_direction_apply_t1 = `${gradient_linear_direction_t1}`;
    }

    // Gradient color one for t1
    if ("" !== props.gradient_color_one_select_text_one) {
      gradient_color_one_select_t1 = props.gradient_color_one_select_text_one;
    }

    // Gradient color two for t1
    if ("" !== props.gradient_color_two_select_text_one) {
      gradient_color_two_select_t1 = props.gradient_color_two_select_text_one;
    }

    // Gradient color start position t1
    if ("" !== props.gradient_start_postion_text_one) {
      gradient_start_position_t1 = props.gradient_start_postion_text_one;
    }

    // Gradient color end position t1
    if ("" !== props.gradient_end_postion_text_one) {
      gradient_end_position_t1 = props.gradient_end_postion_text_one;
    }

    // Gradient setting up t1
    if ("on" === props.gradient_color_text_one) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-text-one .dnxt-gradient-text-color-1",
          declaration: `background: ${gradient_type_t1}(${gradient_type_direction_apply_t1},${gradient_color_one_select_t1} ${gradient_start_position_t1},${gradient_color_two_select_t1} ${gradient_end_position_t1});-webkit-background-clip: text;-webkit-text-fill-color: transparent;`,
        },
      ]);
    }

    /**
     * Gradient Text Color CSS T1 END
     *
     */

    /**
     * Gradient Text Color CSS T2 Start
     *
     */

    let gradient_type_t2 = "";
    let gradient_type_direction_apply_t2 = "";
    let gradient_linear_direction_t2 = "";
    let gradient_radial_diretion_t2 = "";
    let gradient_color_one_select_t2 = "";
    let gradient_color_two_select_t2 = "";
    let gradient_start_position_t2 = "";
    let gradient_end_position_t2 = "";

    // checking gradient type
    if (props.gradient_type_text_two !== "") {
      gradient_type_t2 = props.gradient_type_text_two;
    }

    // Linear gradient direction
    if ("" !== props.gradient_type_linear_direction_text_two) {
      gradient_linear_direction_t2 =
        props.gradient_type_linear_direction_text_two;
    }

    // Gradient Radial Direction t2
    if ("" !== props.gradient_type_radial_direction_text_two) {
      gradient_radial_diretion_t2 =
        props.gradient_type_radial_direction_text_two;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.gradient_type_text_two) {
      gradient_type_direction_apply_t2 = `${gradient_radial_diretion_t2}`;
    } else if ("linear-gradient" === props.gradient_type_text_two) {
      gradient_type_direction_apply_t2 = `${gradient_linear_direction_t2}`;
    }

    // Gradient color one for text two
    if ("" !== props.gradient_color_one_select_text_two) {
      gradient_color_one_select_t2 = props.gradient_color_one_select_text_two;
    }

    // Gradient color two for text two
    if ("" !== props.gradient_color_two_select_text_two) {
      gradient_color_two_select_t2 = props.gradient_color_two_select_text_two;
    }

    // Gradient color start position t2
    if ("" !== props.gradient_start_postion_text_two) {
      gradient_start_position_t2 = props.gradient_start_postion_text_two;
    }

    // Gradient color end position t2
    if ("" !== props.gradient_end_postion_text_two) {
      gradient_end_position_t2 = props.gradient_end_postion_text_two;
    }

    // Gradient setting up
    if ("on" === props.gradient_color_text_two) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-text-two .dnxt-gradient-text-color-2",
          declaration: `background: ${gradient_type_t2}(${gradient_type_direction_apply_t2},${gradient_color_one_select_t2} ${gradient_start_position_t2},${gradient_color_two_select_t2} ${gradient_end_position_t2});-webkit-background-clip: text;-webkit-text-fill-color: transparent;`,
        },
      ]);
    }

    /**
     * Gradient Text Color CSS T2 END
     *
     */

    /**
     * Gradient Text Color CSS t3 Start
     *
     */

    let gradient_type_t3 = "";
    let gradient_type_direction_apply_t3 = "";
    let gradient_linear_direction_t3 = "";
    let gradient_radial_diretion_t3 = "";
    let gradient_color_one_select_t3 = "";
    let gradient_color_two_select_t3 = "";
    let gradient_start_position_t3 = "";
    let gradient_end_position_t3 = "";

    // checking gradient type t3
    if (props.gradient_type_text_three !== "") {
      gradient_type_t3 = props.gradient_type_text_three;
    }

    // Linear gradient direction t3
    if ("" !== props.gradient_type_linear_direction_text_three) {
      gradient_linear_direction_t3 =
        props.gradient_type_linear_direction_text_three;
    }

    // Gradient Radial Direction t3
    if ("" !== props.gradient_type_radial_direction_text_three) {
      gradient_radial_diretion_t3 =
        props.gradient_type_radial_direction_text_three;
    }

    // Apply gradient direcion t3
    if ("radial-gradient" === props.gradient_type_text_three) {
      gradient_type_direction_apply_t3 = `${gradient_radial_diretion_t3}`;
    } else if ("linear-gradient" === props.gradient_type_text_three) {
      gradient_type_direction_apply_t3 = `${gradient_linear_direction_t3}`;
    }

    // Gradient color one for t3
    if ("" !== props.gradient_color_one_select_text_three) {
      gradient_color_one_select_t3 = props.gradient_color_one_select_text_three;
    }

    // Gradient color two for t3
    if ("" !== props.gradient_color_two_select_text_three) {
      gradient_color_two_select_t3 = props.gradient_color_two_select_text_three;
    }

    // Gradient color start position t3
    if ("" !== props.gradient_start_postion_text_three) {
      gradient_start_position_t3 = props.gradient_start_postion_text_three;
    }

    // Gradient color end position t3
    if ("" !== props.gradient_end_postion_text_three) {
      gradient_end_position_t3 = props.gradient_end_postion_text_three;
    }

    // Gradient setting up t3
    if ("on" === props.gradient_color_text_three) {
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-text-three .dnxt-gradient-text-color-3",
          declaration: `background: ${gradient_type_t3}(${gradient_type_direction_apply_t3},${gradient_color_one_select_t3} ${gradient_start_position_t3},${gradient_color_two_select_t3} ${gradient_end_position_t3});-webkit-background-clip: text;-webkit-text-fill-color: transparent;`,
        },
      ]);
    }

    /**
     * Gradient Text Color CSS t3 END
     *
     */

    return additionalCss;
  }

  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    const {
      heading_tag: HeadingTag,
      dnxt_text_hover_effect_switch,
      dnxt_text_hover_effect_select,
      text_one_reveal_effect,
      text_two_reveal_effect,
      text_three_reveal_effect,
    } = this.props;

    let hover_effect_enable =
      dnxt_text_hover_effect_switch === "on"
        ? dnxt_text_hover_effect_select
        : "";

    let text_one_reveal_enable =
      text_one_reveal_effect === "on" ? "reveal-effect masker wow" : "";
    let text_two_reveal_enable =
      text_two_reveal_effect === "on" ? "reveal-effect masker wow" : "";
    let text_three_reveal_enable =
      text_three_reveal_effect === "on" ? "reveal-effect masker wow" : "";

    return (
      <div className={`${hover_effect_enable} wrapper`}>
        <HeadingTag className="header-level">
          <span className={`dnxt-text-one ${text_one_reveal_enable}`}>
            <Title
              title={this.props.text_one}
              dynamicTitle={this.props.dynamic.text_one}
              tag="span"
              classes="dnxt-gradient-text-color-1"
            />
          </span>
          <span className={`dnxt-text-two ${text_two_reveal_enable}`}>
            <Title
              title={this.props.text_two}
              dynamicTitle={this.props.dynamic.text_two}
              tag="span"
              classes="dnxt-gradient-text-color-2"
            />
          </span>
          <span className={`dnxt-text-three ${text_three_reveal_enable}`}>
            <Title
              title={this.props.text_three}
              dynamicTitle={this.props.dynamic.text_three}
              tag="span"
              classes="dnxt-gradient-text-color-3"
            />
          </span>
        </HeadingTag>
      </div>
    );
  }
}

export default NextMultiHeading;
