// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class NextTextStroke extends Component {

  static slug = 'dnxte_text_stroke';

  static css(props) {
    const additionalCss = [];
    // define radial gradient direcion text
    let gradient_radial_direction_text = "";

    // Apply radial gradient direcion text
    if (props.dnxt_gradient_type_radial_direction_text) {
      gradient_radial_direction_text = `${props.dnxt_gradient_type_radial_direction_text}`;
    }
    // Hover from Stroke to Fill: 1
    if (
      "dnxt-text-fill-to-stroke" === props.dnxt_text_hover_effect_select &&
      "dnxt-text-stroke-to-fill" !== props.dnxt_text_hover_effect_select &&
      "dnxt-text-stroke-none" !== props.dnxt_text_hover_effect_select
    ) {
      // Stroke width, color and motion duration
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-main",
          declaration: `-webkit-text-stroke-width: ${props.dnxt_stroke_text_width};
                        -webkit-text-stroke-color: ${props.dnxt_stroke_text_color};
                        transition: ${props.dnxt_hover_motion_duration};
                        `
        }
      ]);
      // Hover Motion duration
      let hoverMotionDuration = "";
      if (props.dnxt_hover_motion_duration) {
        hoverMotionDuration = props.dnxt_hover_motion_duration;
      }
      // if gradient switch is 'on'
      if (
        "off" === props.dnxt_single_text_color &&
        "on" === props.dnxt_gradient_text_color
      ) {
        // if there's something on gradient one or two
        if (
          props.dnxt_color_tab_gradient_one ||
          props.dnxt_color_tab_gradient_two
        ) {
          // for hover gradient motion
          if (
            "linear-gradient" === props.dnxt_gradient_type_text ||
            "radial-gradient" === props.dnxt_gradient_type_text
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-fill-main",
                declaration: `
                                transition: background-size ${hoverMotionDuration} cubic-bezier(0.67, 0.01, 0.15, 0.98);
                                `
              }
            ]);
          }
          // Hover Animations
          // for top-animation-hover
          if (
            "dnxt-hover-top-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            if ("linear-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-top",
                  declaration: `background-image: linear-gradient(
                                        ${props.dnxt_gradient_type_linear_direction_text},
                                        ${props.dnxt_color_tab_gradient_one} 
                                        ${props.dnxt_gradient_start_position_text}, 
                                        ${props.dnxt_color_tab_gradient_two} 
                                        ${props.dnxt_gradient_end_position_text});`
                }
              ]);
            }
            if ("radial-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-top",
                  declaration: `background-image: radial-gradient(circle at 
                                    ${gradient_radial_direction_text},
                                    ${props.dnxt_color_tab_gradient_one} 
                                    ${props.dnxt_gradient_start_position_text}, 
                                    ${props.dnxt_color_tab_gradient_two} 
                                    ${props.dnxt_gradient_end_position_text},
                                    transparent 50.1%);`
                }
              ]);
            }
          }
          // for right-animation-hover:
          if (
            "dnxt-hover-right-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            if ("linear-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-right",
                  declaration: `background-image: linear-gradient(
                                            ${props.dnxt_gradient_type_linear_direction_text},
                                            ${props.dnxt_color_tab_gradient_one} 
                                            ${props.dnxt_gradient_start_position_text},
                                            ${props.dnxt_color_tab_gradient_two} 
                                            ${props.dnxt_gradient_end_position_text});`
                }
              ]);
            }
            if ("radial-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-right",
                  declaration: `background-image: radial-gradient(circle at 
                                    ${gradient_radial_direction_text},
                                    ${props.dnxt_color_tab_gradient_one} 
                                    ${props.dnxt_gradient_start_position_text}, 
                                    ${props.dnxt_color_tab_gradient_two} 
                                    ${props.dnxt_gradient_end_position_text},
                                    transparent 50.1%);`
                }
              ]);
            }
          }
          // for bottom-animation-hover
          if (
            "dnxt-hover-bottom-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            if ("linear-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-bottom",
                  declaration: `background-image: linear-gradient(
                                                        ${props.dnxt_gradient_type_linear_direction_text},
                                                        ${props.dnxt_color_tab_gradient_one} 
                                                        ${props.dnxt_gradient_start_position_text},
                                                        ${props.dnxt_color_tab_gradient_two} 
                                                        ${props.dnxt_gradient_end_position_text});`
                }
              ]);
            }
            if ("radial-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-bottom",
                  declaration: `background-image: radial-gradient(circle at 
                                    ${gradient_radial_direction_text},
                                    ${props.dnxt_color_tab_gradient_one} 
                                    ${props.dnxt_gradient_start_position_text}, 
                                    ${props.dnxt_color_tab_gradient_two} 
                                    ${props.dnxt_gradient_end_position_text},
                                    transparent 50.1%);`
                }
              ]);
            }
          }
          // for left-animation-hover
          if (
            "dnxt-hover-left-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            if ("linear-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-left",
                  declaration: `background-image: linear-gradient(
                                            ${props.dnxt_gradient_type_linear_direction_text}, 
                                            ${props.dnxt_color_tab_gradient_one} 
                                            ${props.dnxt_gradient_start_position_text}, 
                                            ${props.dnxt_color_tab_gradient_two} 
                                            ${props.dnxt_gradient_end_position_text}, transparent 50.1%);`
                }
              ]);
            }
            if ("radial-gradient" === props.dnxt_gradient_type_text) {
              additionalCss.push([
                {
                  selector: "%%order_class%% .dnxt-text-stroke-left",
                  declaration: `background-image: radial-gradient(circle at 
                                    ${gradient_radial_direction_text},
                                    ${props.dnxt_color_tab_gradient_one} 
                                    ${props.dnxt_gradient_start_position_text}, 
                                    ${props.dnxt_color_tab_gradient_two} 
                                    ${props.dnxt_gradient_end_position_text},
                                    transparent 50.1%);`
                }
              ]);
            }
          }
          //for angle animation
          if (
            "dnxt-hover-angle-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-angle",
                declaration: `background-image: linear-gradient(135deg, 
                                        ${props.dnxt_color_tab_gradient_one} 0%, 
                                        ${props.dnxt_color_tab_gradient_two} 50%, transparent 50.1%);`
              }
            ]);
          }
          // for radial-hover
          if (
            "dnxt-hover-radial-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-radial",
                declaration: `background-image: radial-gradient(circle farthest-corner at center center,
                                    ${props.dnxt_color_tab_gradient_one} 
                                    ${props.dnxt_gradient_start_position_text}, 
                                    ${props.dnxt_color_tab_gradient_two} 
                                    ${props.dnxt_gradient_end_position_text}, transparent 50.1%);
                                `
              }
            ]);
          }
        }
      }
      // if Single switch is on
      if (
        "on" === props.dnxt_single_text_color ||
        "off" === props.dnxt_gradient_text_color
      ) {
        if (props.color_tab_single) {
          additionalCss.push([
            {
              selector: "%%order_class%% .dnxt-text-stroke-fill-main",
              declaration: `
                                        transition: background-size ${props.dnxt_hover_motion_duration} cubic-bezier(0.67, 0.01, 0.15, 0.98);
                                        `
            }
          ]);
          // WITH HOVER: (from Fill to Stroke)
          // for top-animation-hover
          if (
            "dnxt-hover-top-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-top",
                declaration: `
                                background-image: linear-gradient(180deg, ${props.color_tab_single} 0%, ${props.color_tab_single} 50%, transparent 50.1%);
                                `
              }
            ]);
          }
          // for right-animation-hover:
          if (
            "dnxt-hover-right-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-right",
                declaration: `
                                background-image: linear-gradient(${props.color_tab_single}, ${props.color_tab_single});
                                `
              }
            ]);
          }
          // for bottom-animation-hover
          if (
            "dnxt-hover-bottom-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-bottom",
                declaration: `
                                    background-image: linear-gradient(
                                        ${props.color_tab_single}, 
                                        ${props.color_tab_single});
                                `
              }
            ]);
          }
          // for left-animation-hover
          if (
            "dnxt-hover-left-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-left",
                declaration: `
                                    background-image: linear-gradient(
                                        ${props.color_tab_single}, 
                                        ${props.color_tab_single});
                                    `
              }
            ]);
          }
          //for angle animation
          if (
            "dnxt-hover-angle-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-angle",
                declaration: `background-image: linear-gradient(135deg, ${props.color_tab_single} 0%, ${props.color_tab_single} 50%, transparent 50.1%);`
              }
            ]);
          }
          // for radial-hover
          if (
            "dnxt-hover-radial-animation" ===
            props.dnxt_text_select_hover_direction
          ) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-radial",
                declaration: `
                                    background-image: radial-gradient(circle at center center,
                                        ${props.color_tab_single} 0%, 
                                        ${props.color_tab_single} 40%, transparent 50.1%);
                                `
              }
            ]);
          }
        }
      }
    }
    // Hover from Fill to Stroke: 2
    if (
      "dnxt-text-stroke-to-fill" === props.dnxt_text_hover_effect_select &&
      "dnxt-text-fill-to-stroke" !== props.dnxt_text_hover_effect_select &&
      "dnxt-text-stroke-none" !== props.dnxt_text_hover_effect_select
    ) {
      // Stroke Width
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-main",
          declaration: `-webkit-text-stroke-width: ${props.dnxt_stroke_text_width};
                    `
        },
        // Stroke hover color
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-main:hover",
          declaration: `-webkit-text-stroke-color: ${props.dnxt_stroke_text_color};`
        }
      ]);
      // if gradient switch is 'on':
      if (
        "off" === props.dnxt_single_text_color &&
        "on" === props.dnxt_gradient_text_color
      ) {
        // hover effect:
        additionalCss.push([
          {
            selector: "%%order_class%% .dnxt-text-stroke-to-fill-hover",
            declaration: `
                            -webkit-background-clip: text;
                            background-position: 100% 0%;
                            -webkit-text-fill-color: transparent;
                            `
          },
          {
            selector: "%%order_class%% .dnxt-text-stroke-to-fill-hover:hover",
            declaration: `
                        background: transparent;
                        -webkit-text-stroke-color: ${props.dnxt_stroke_text_color};
                        background-size: 100% 200%;
                        `
          }
        ]);
        // if there's something on gradient one or two:
        if (
          props.dnxt_color_tab_gradient_one ||
          props.dnxt_color_tab_gradient_two ||
          props.dnxt_gradient_start_position_text ||
          props.dnxt_gradient_end_position_text
        ) {
          // for linear gradient:
          if ("linear-gradient" === props.dnxt_gradient_type_text) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-fill-main",
                declaration: `
                                    background: linear-gradient(
                                        ${props.dnxt_gradient_type_linear_direction_text},
                                        ${props.dnxt_color_tab_gradient_one} 
                                        ${props.dnxt_gradient_start_position_text},
                                        ${props.dnxt_color_tab_gradient_two} 
                                        ${props.dnxt_gradient_end_position_text});
                                    -webkit-text-fill-color: transparent;
                                    -webkit-text-stroke-color: transparent;
                                    transition: background-size ${props.dnxt_hover_motion_duration} cubic-bezier(0.67, 0.01, 0.15, 0.98);`
              }
            ]);
          }
          // for radial gradient:
          if ("radial-gradient" === props.dnxt_gradient_type_text) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-fill-main",
                declaration: `
                                background: radial-gradient(circle at 
                                    ${gradient_radial_direction_text},
                                    ${props.dnxt_color_tab_gradient_one} 
                                    ${props.dnxt_gradient_start_position_text}, 
                                    ${props.dnxt_color_tab_gradient_two} 
                                    ${props.dnxt_gradient_end_position_text},
                                    transparent 50.1%);
                                -webkit-text-stroke-color: transparent;
                                transition: background-size ${props.dnxt_hover_motion_duration} cubic-bezier(0.67, 0.01, 0.15, 0.98);`
              }
            ]);
          }
        }
      }
      // if Single switch is on
      if (
        "on" === props.dnxt_single_text_color &&
        "off" === props.dnxt_gradient_text_color
      ) {
        if (props.color_tab_single) {
          additionalCss.push([
            {
              selector: "%%order_class%% .dnxt-text-stroke-fill-main",
              declaration: `
                                -webkit-text-fill-color: ${props.color_tab_single};
                                transition: ${props.dnxt_hover_motion_duration};
                                `
            },
            {
              selector: "%%order_class%% .dnxt-text-stroke-to-fill-hover",
              declaration: `
                                -webkit-background-clip: text;
                                background-position: 100% 0%;
                                color: ${props.color_tab_single};
                                -webkit-text-stroke: ${props.dnxt_stroke_text_width};
                                -webkit-text-fill-color: ${props.color_tab_single};
                                `
            },
            {
              selector: "%%order_class%% .dnxt-text-stroke-to-fill-hover:hover",
              declaration: `
                            -webkit-text-fill-color: transparent;
                            background-size: 100% 200%;
                            `
            }
          ]);
        }
      }
    }
    // No hover Effect: 3
    if (
      "dnxt-text-stroke-none" === props.dnxt_text_hover_effect_select &&
      "dnxt-text-stroke-to-fill" !== props.dnxt_text_hover_effect_select &&
      "dnxt-text-fill-to-stroke" !== props.dnxt_text_hover_effect_select
    ) {
      // Stroke width
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-main",
          declaration: `-webkit-text-stroke-width: ${props.dnxt_stroke_text_width};`
        }
      ]);
      // if gradient switch is 'on'
      if (
        "off" === props.dnxt_single_text_color &&
        "on" === props.dnxt_gradient_text_color
      ) {
        // if there's something on gradient one or two
        if (
          props.dnxt_color_tab_gradient_one ||
          props.dnxt_color_tab_gradient_two
        ) {
          // for linear gradient
          if ("linear-gradient" === props.dnxt_gradient_type_text) {
            additionalCss.push([
              {
                selector:
                  "%%order_class%% .dnxt-text-stroke-fill-without-hover",
                declaration: `
                                    background: -webkit-linear-gradient(${props.dnxt_gradient_type_linear_direction_text},
                                        ${props.dnxt_color_tab_gradient_one} 
                                        ${props.dnxt_gradient_start_position_text},
                                        ${props.dnxt_color_tab_gradient_two} 
                                        ${props.dnxt_gradient_end_position_text});
                                    -webkit-background-clip: text;
                                    -webkit-text-stroke-color: transparent;
                                    -webkit-text-fill-color: #fff;
                                    `
              }
            ]);
          }

          //for radial gradient (from Fill to Stroke)
          if ("radial-gradient" === props.dnxt_gradient_type_text) {
            additionalCss.push([
              {
                selector: "%%order_class%% .dnxt-text-stroke-fill-main",
                declaration: `
                                    background-image: radial-gradient(circle at 
                                        ${gradient_radial_direction_text},
                                        ${props.dnxt_color_tab_gradient_one} 
                                        ${props.dnxt_gradient_start_position_text}, 
                                        ${props.dnxt_color_tab_gradient_two} 
                                        ${props.dnxt_gradient_end_position_text},
                                        transparent 50.1%);
                                    -webkit-text-fill-color: transparent;
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: #fff;
                                `
              }
            ]);
          }
        }
      }
      // if Single switch is on
      if (
        props.dnxt_single_text_color === "on" ||
        props.dnxt_gradient_text_color === "off"
      ) {
        if (props.color_tab_single) {
          additionalCss.push([
            {
              selector: "%%order_class%% .dnxt-text-stroke-fill-main",
              declaration: `-webkit-text-stroke-color: ${props.color_tab_single};`
            }
          ]);
        }
      }
    }
    // Text Alignment: left
    if ("left" === props.dnxt_stroke_fonts_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-wrapper",
          declaration: `text-align: ${props.dnxt_stroke_fonts_text_align} !important;;`
        }
      ]);
    }
    // Text Alignment: center
    if ("center" === props.dnxt_stroke_fonts_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-wrapper",
          declaration: `text-align: ${props.dnxt_stroke_fonts_text_align} !important;`
        }
      ]);
    }
    // Text Alignment: right
    if ("right" === props.dnxt_stroke_fonts_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-wrapper",
          declaration: `text-align: ${props.dnxt_stroke_fonts_text_align} !important;;`
        }
      ]);
    }
    // Text Alignment: justify
    if ("justify" === props.dnxt_stroke_fonts_text_align) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-fill-wrapper",
          declaration: `text-align: ${props.dnxt_stroke_fonts_text_align} !important;;`
        }
      ]);
    }
    return additionalCss;
  }
  render() {
    const props = this.props;
    const HeadingTag = props.dnxt_text_heading_tag;
    const nextStrokeText = props.dynamic.dnxt_text_stroke_title;
    let nextStrokeTextComponent = nextStrokeText.render();
    // hover direction
    let hoverDirection = "";
    // without hover
    let strokeFillNone = "";
    // with hover - stroke to fill
    let strokeToFill = "";

    // set hover effects
    switch (props.dnxt_text_hover_effect_select) {
      // Fill to Stroke: 1
      case "dnxt-text-fill-to-stroke": {
        strokeFillNone = "";
        strokeToFill = "";
        hoverDirection = "dnxt-text-stroke-top";
        break;
      }
      // Stroke to Fill: 2
      case "dnxt-text-stroke-to-fill": {
        strokeFillNone = "";
        strokeToFill = "dnxt-text-stroke-to-fill-hover";
        hoverDirection = "";
        break;
      }
      // none: 3
      case "dnxt-text-stroke-none": {
        strokeFillNone = "dnxt-text-stroke-fill-without-hover";
        hoverDirection = "";
        strokeToFill = "";
        break;
      }
      default: {
        hoverDirection = "dnxt-text-stroke-top";
        strokeFillNone = "";
        strokeToFill = "";
        break;
      }
    }
    // set hover directions
    switch (props.dnxt_text_select_hover_direction) {
      case "dnxt-hover-top-animation": {
        hoverDirection = "dnxt-text-stroke-top";
        break;
      }
      case "dnxt-hover-right-animation": {
        hoverDirection = "dnxt-text-stroke-right";
        break;
      }
      case "dnxt-hover-bottom-animation": {
        hoverDirection = "dnxt-text-stroke-bottom";
        break;
      }
      case "dnxt-hover-left-animation": {
        hoverDirection = "dnxt-text-stroke-left";
        break;
      }
      case "dnxt-hover-angle-animation": {
        hoverDirection = "dnxt-text-stroke-angle";
        break;
      }
      case "dnxt-hover-radial-animation": {
        hoverDirection = "dnxt-text-stroke-radial";
        break;
      }
      default: {
        hoverDirection = "dnxt-text-stroke-top";
        break;
      }
    }
    
    return (
      <div className="dnxt-text-stroke-fill-wrapper">
        <HeadingTag
          className={`dnxt-text-stroke-fill-main ${
            "dnxt-text-stroke-none" === props.dnxt_text_hover_effect_select
              ? strokeFillNone
              : "dnxt-text-stroke-to-fill" ===
                props.dnxt_text_hover_effect_select
              ? strokeToFill
              : hoverDirection
          } `}
        >
          {nextStrokeTextComponent}
        </HeadingTag>
      </div>
    );
  }
}

export default NextTextStroke;
