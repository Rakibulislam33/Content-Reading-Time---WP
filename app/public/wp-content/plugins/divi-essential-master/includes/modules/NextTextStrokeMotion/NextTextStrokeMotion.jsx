// External Dependencies
import React, { Component } from "react";
// Internal Dependencies
import './style.css';



class NextTextStrokeMotion extends Component {

  static slug = 'dnxte_text_stroke_motion';

  static css(props) {
    const additionalCss = [];
    //Single Color Tab
    if (
      props.btn_single_show_hide !== "off" ||
      props.btn_multi_show_hide === "off"
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-animation-text",
          declaration: `stroke:${props.color_tab_single} !important;`
        }
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-animation-text",
          declaration: `stroke:${props.color_tab_single};`
        }
      ]);
    }
    //Multi Color Tab
    if (
      props.btn_multi_show_hide !== "off" ||
      props.btn_single_show_hide === "off"
    ) {
      if ("" !== props.color_tab_multi_one) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-text-stroke-animation-text:nth-child(1)",
            declaration: `stroke:${props.color_tab_multi_one}; animation-delay: -1s;`
          }
        ]);
      }
      if ("" !== props.color_tab_multi_two) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-text-stroke-animation-text:nth-child(2)",
            declaration: `stroke:${props.color_tab_multi_two} ;animation-delay: -2s;`
          }
        ]);
      }
      if ("" !== props.color_tab_multi_three) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-text-stroke-animation-text:nth-child(3)",
            declaration: `stroke:${props.color_tab_multi_three} ;animation-delay: -3s;`
          }
        ]);
      }
      if ("" !== props.color_tab_multi_four) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-text-stroke-animation-text:nth-child(4)",
            declaration: `stroke:${props.color_tab_multi_four} ;animation-delay: -4s;`
          }
        ]);
      }
      if ("" !== props.color_tab_multi_five) {
        additionalCss.push([
          {
            selector:
              "%%order_class%% .dnxt-text-stroke-animation-text:nth-child(5)",
            declaration: `stroke:${props.color_tab_multi_five} ;animation-delay: -5s;`
          }
        ]);
      }
    }

    // Fill Color Tab
    if ("" !== props.color_tab_fill) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-animation-text",
          declaration: `fill:${props.color_tab_fill};`
        }
      ]);
    }
    //Stroke Settings
    if (
      "" !== props.dnxt_stroke_width ||
      "" !== props.dnxt_stroke_dash ||
      "" !== props.dnxt_stroke_gap ||
      "" !== props.dnxt_stroke_dashoffset
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-stroke-animation-text",
          declaration: `stroke-width:${props.dnxt_stroke_width}; 
								  stroke-dasharray: ${props.dnxt_stroke_dash} ${props.dnxt_stroke_gap};
								  stroke-dashoffset: ${props.dnxt_stroke_dashoffset};
								`
        }
      ]);
    }
    //SVG height
    if ("" !== props.dnxt_stroke_fonts_line_height) {
      additionalCss.push([
        {
          selector: "%%order_class%% .text_stroke_svg_selector svg",
          declaration: `height: ${props.dnxt_stroke_fonts_line_height}`
        }
      ]);
    }

    return additionalCss;
  }

  render() {
    const { props } = this;
    let text_anchor = "";
    let text_anchor_x = "";
    let text_anchor_y = "";
    let dominant_baseline = "";

    //For Random Id Generate
    let _index = performance.now();

    let strokeText = this.props.dynamic.stroke_text;
    let strokeTextComponent = strokeText.render();
    if (strokeText.loading) {
      // Let Divi render the loading placeholder.
      return strokeTextComponent;
    }
    // Text Alignment Value
    switch (props.dnxt_stroke_motion_fonts_text_align) {
      case "left": {
        text_anchor = "before-edge";
        text_anchor_x = "0%";
        text_anchor_y = "0%";
        dominant_baseline = "text-before-edge";
        break;
      }
      case "right": {
        text_anchor = "end";
        text_anchor_x = "100%";
        text_anchor_y = "100%";
        dominant_baseline = "text-after-edge";
        break;
      }
      case "center": {
        text_anchor = "middle";
        text_anchor_x = "50%";
        text_anchor_y = "50%";
        dominant_baseline = "middle";
        break;
      }
      default: {
        text_anchor = "middle";
        text_anchor_x = "50%";
        text_anchor_y = "50%";
        dominant_baseline = "middle";
        break;
      }
    }

    return (
      <div className="text_stroke_svg_selector">
        <svg>
          <symbol id={_index}>
            <text
              textAnchor={text_anchor}
              dominantBaseline={dominant_baseline}
              x={text_anchor_x}
              y={text_anchor_y}
            >
              {strokeTextComponent}
            </text>
          </symbol>
          <g>
            <use
              href={"#" + _index}
              className="dnxt-text-stroke-animation-text"
            ></use>
            <use
              href={"#" + _index}
              className="dnxt-text-stroke-animation-text"
            ></use>
            <use
              href={"#" + _index}
              className="dnxt-text-stroke-animation-text"
            ></use>
            <use
              href={"#" + _index}
              className="dnxt-text-stroke-animation-text"
            ></use>
            <use
              href={"#" + _index}
              className="dnxt-text-stroke-animation-text"
            ></use>
          </g>
        </svg>
      </div>
    );
  }
}

export default NextTextStrokeMotion;
