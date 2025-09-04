import React, { Component } from "react";
import { applyBgCss } from "../base/common";
import "./style.css";

class NextTimeline extends Component {
  static slug = "dnxte_timeline";

  static css(props) {
    const css = [];

    // Circle width
    const circleWidthHeight = props.dnxte_circle_width * 2 + "px";
    const circleMarginLeft = `-${props.dnxte_circle_width}px`;

    css.push([
      {
        selector: `%%order_class%% .dnxte-timline-img`,
        declaration: `width: ${circleWidthHeight};height: ${circleWidthHeight};margin-left: ${circleMarginLeft};`,
      },
    ]);

    if ("off" === props.dnxte_use_triangle) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-timline-content::before`,
          declaration: `border-right-color: transparent !important;border-left-color: transparent !important;`,
        },
      ]);
    }

    const timelineBarColor = {
      slug: "timeline_bar_color",
      use_color_gradient_slug: props.timeline_bar_use_color_gradient,
      gradient: {
        type: "timeline_bar_color_gradient_type",
        direction: "timeline_bar_color_gradient_direction",
        radial: "timeline_bar_color_gradient_direction_radial",
        start: "timeline_bar_color_gradient_start",
        end: "timeline_bar_color_gradient_end",
        start_position: "timeline_bar_color_gradient_start_position",
        end_position: "timeline_bar_color_gradient_end_position",
        overlays_image: "timeline_bar_color_gradient_overlays_image",
      },
      css_property: {
        desktop: "%%order_class%% #dnxte-timline::before",
        hover: "%%order_class%% #dnxte-timline::before:hover",
      },
    };

    applyBgCss(css, props, timelineBarColor);


    if ("off" !== props.dnxte_use_triangle) {
      const triangleColor = props.dnxte_triangle_color || "#fff";
      css.push([
        {
          selector: `%%order_class%% .dnxte_timeline_child:nth-child(odd) .dnxte-timline-content::before`,
          declaration: `border-left: 7px solid ${triangleColor};`,
        },
      ]);

      css.push([
        {
          selector: `%%order_class%% .dnxte_timeline_child:nth-child(even) .dnxte-timline-content::before`,
          declaration: `border-right: 7px solid ${triangleColor};`,
        },
      ]);

      css.push([
        {
          selector: `%%order_class%% .dnxte_timeline_child:nth-child(odd) .dnxte-timline-content::before,%%order_class%% .dnxte_timeline_child:nth-child(even) .dnxte-timline-content::before`,
          declaration: `right: 100%;border-right: 7px solid ${triangleColor};left:auto;border-left:0;`,
          device: "tablet",
        },
      ]);

      css.push([
        {
          selector: `%%order_class%% .dnxte_timeline_child:nth-child(odd) .dnxte-timline-content::before,%%order_class%% .dnxte_timeline_child:nth-child(even) .dnxte-timline-content::before`,
          declaration: `right: 100%;border-right: 7px solid ${triangleColor};left:auto;border-left:0;`,
          device: "phone",
        },
      ]);
    }


    return css;
  }

  render() {
    return <section id="dnxte-timline">{this.props.content}</section>;
  }
}

export default NextTimeline;
