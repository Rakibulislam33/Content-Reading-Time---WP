// External Dependencies
import React, { Component } from "react";

// Internal Dependencies
import { Image, Title } from "../base/common";
import "../base/get_responsive_css";
import "./style.css";

class NextImageHoverBox extends Component {
  static slug = "dnxte_image_hover_box";

  static css(props) {
    const additionalCss = [];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.dnxtiep_ihb_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_ihb_heading_margin",
          `%%order_class%% .neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-heading`,
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_ihb_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_ihb_heading_padding",
          `%%order_class%% .neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-heading`,
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_ihb_description_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_ihb_description_margin",
          `%%order_class%% .neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-desc`,
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_ihb_description_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_ihb_description_padding",
          `%%order_class%% .neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-desc`,
          "padding",
          true
        )
      );
    }

    // Hover bg color
    if ("off" !== props.dnxtiep_ihb_hover_bg_show_hide) {
      if (props.dnxtiep_ihb_image_hover_effect === "effect7") {
        if ("on|tablet" === props.dnxtiep_ihb_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-info-back`,
              declaration: `background: ${props.dnxtiep_ihb_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_ihb_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-info-back`,
              declaration: `background: ${props.dnxtiep_ihb_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-info-back`,
              declaration: `background: ${props.dnxtiep_ihb_hover_bg};`,
            },
          ]);
        }
      } else {
        if ("on|tablet" === props.dnxtiep_ihb_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info`,
              declaration: `background: ${props.dnxtiep_ihb_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_ihb_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info`,
              declaration: `background: ${props.dnxtiep_ihb_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info`,
              declaration: `background: ${props.dnxtiep_ihb_hover_bg};`,
            },
          ]);
        }
      }
    }

    // Heading bg color
    if ("off" !== props.dnxtiep_ihb_heading_bg_show_hide) {
      if (props.dnxtiep_ihb_image_hover_effect !== "effect2") {
        if ("on|tablet" === props.dnxtiep_ihb_heading_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-heading`,
              declaration: `background: ${props.dnxtiep_ihb_heading_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_ihb_heading_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-heading`,
              declaration: `background: ${props.dnxtiep_ihb_heading_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-heading`,
              declaration: `background: ${props.dnxtiep_ihb_heading_bg};`,
            },
          ]);
        }
      }
    }

    // Hover gradient
    if ("off" !== props.dnxtiep_ihb_hover_gradient_show_hide) {
      let gradient_direction =
        props.dnxtiep_ihb_hover_gradient_type === "linear-gradient"
          ? props.dnxtiep_ihb_hover_gradient_type_linear_direction
          : props.dnxtiep_ihb_hover_gradient_type_radial_direction;
      let color_one = props.dnxtiep_ihb_hover_gradient_color_one;
      let color_two = props.dnxtiep_ihb_hover_gradient_color_two;
      let gradient_start = props.dnxtiep_ihb_hover_gradient_start_position;
      let gradient_end = props.dnxtiep_ihb_hover_gradient_end_position;

      let gradient = `background: ${props.dnxtiep_ihb_hover_gradient_type}(${gradient_direction}, ${color_one} ${gradient_start}, ${color_two} ${gradient_end});`;

      if (props.dnxtiep_ihb_image_hover_effect === "effect7") {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-info-back`,
            declaration: gradient,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info`,
            declaration: gradient,
          },
        ]);
      }
    }

    // Heading gradient
    if ("off" !== props.dnxtiep_ihb_heading_gradient_show_hide) {
      let heading_gradient_direction =
        props.dnxtiep_ihb_heading_gradient_type === "linear-gradient"
          ? props.dnxtiep_ihb_heading_gradient_type_linear_direction
          : props.dnxtiep_ihb_heading_gradient_type_radial_direction;
      let heading_color_one = props.dnxtiep_ihb_heading_gradient_color_one;
      let heading_color_two = props.dnxtiep_ihb_heading_gradient_color_two;
      let heading_gradient_start =
        props.dnxtiep_ihb_heading_gradient_start_position;
      let heading_gradient_end =
        props.dnxtiep_ihb_heading_gradient_end_position;

      let heading_gradient = `background: ${props.dnxtiep_ihb_heading_gradient_type}(${heading_gradient_direction}, ${heading_color_one} ${heading_gradient_start}, ${heading_color_two} ${heading_gradient_end});`;

      if (props.dnxtiep_ihb_image_hover_effect !== "effect2") {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-${props.dnxtiep_ihb_image_hover_effect} .neip-ihb-info .neip-ihb-heading`,
            declaration: heading_gradient,
          },
        ]);
      }
    }

    if (props.dnxtiep_ihb_image_hover_effect === "effect2") {
      if ("on|tablet" === props.dnxtiep_ihb_cap_height_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-effect2 .neip-ihb-info`,
            declaration: `height: ${props.dnxtiep_ihb_cap_height_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_ihb_cap_height_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-effect2 .neip-ihb-info`,
            declaration: `height: ${props.dnxtiep_ihb_cap_height_phone};`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-ihb.neip-ihb-effect2 .neip-ihb-info`,
            declaration: `height: ${props.dnxtiep_ihb_cap_height};`,
          },
        ]);
      }
    }

    return additionalCss;
  }

  render() {
    const props = this.props;

    // Description Dynamic Content
    const dnxtiepihbDescription = props.dynamic.dnxtiep_ihb_description;
    let dnxtiepihbDescriptionComponent = dnxtiepihbDescription.render();

    const Content = () => {
      if (props.dnxtiep_ihb_image_hover_effect === "effect7") {
        return (
          <div className="neip-ihb-info">
            <div className="neip-ihb-info-back">
              <Title
                title={props.dnxtiep_ihb_heading_text}
                dynamicTitle={props.dynamic.dnxtiep_ihb_heading_text}
                tag={props.dnxtiep_ihb_heading_tag}
                classes="neip-ihb-heading"
              />
              <div className="neip-ihb-desc">
                {dnxtiepihbDescriptionComponent}
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="neip-ihb-info">
          <Title
            title={props.dnxtiep_ihb_heading_text}
            dynamicTitle={props.dynamic.dnxtiep_ihb_heading_text}
            tag={props.dnxtiep_ihb_heading_tag}
            classes="neip-ihb-heading"
          />
          <div className="neip-ihb-desc">
            {dnxtiepihbDescriptionComponent}
          </div>
        </div>
      );
    };

    const dnxtiepHoverClass = () => {
      let direction_class = "";
      let dnxtiep_ihb_effect1 = "effect2";
      let dnxtiep_ihb_effect2 = "effect3";
      let dnxtiep_ihb_effect3 = "effect4";
      let dnxtiep_ihb_effect4 = "effect6";
      let dnxtiep_ihb_effect5 = [
        "effect7",
        "effect8",
        "effect9",
        "effect10",
        "effect11",
        "effect12",
        "effect13",
      ];

      if (dnxtiep_ihb_effect1 === props.dnxtiep_ihb_image_hover_effect) {
        direction_class = `neip-ihb-${props.dnxtiep_ihb_image_hover_direction1}`;
      }
      if (dnxtiep_ihb_effect2 === props.dnxtiep_ihb_image_hover_effect) {
        direction_class = `neip-ihb-${props.dnxtiep_ihb_image_hover_direction2}`;
      }
      if (dnxtiep_ihb_effect3 === props.dnxtiep_ihb_image_hover_effect) {
        direction_class = `neip-ihb-${props.dnxtiep_ihb_image_hover_direction3}`;
      }
      if (dnxtiep_ihb_effect4 === props.dnxtiep_ihb_image_hover_effect) {
        direction_class = `neip-ihb-${props.dnxtiep_ihb_image_hover_direction4}`;
      }
      if (dnxtiep_ihb_effect5.includes(props.dnxtiep_ihb_image_hover_effect)) {
        direction_class = `neip-ihb-${props.dnxtiep_ihb_image_hover_direction5}`;
      }

      return `dnext-neip-ihb neip-ihb-${props.dnxtiep_ihb_image_hover_effect} ${direction_class}`;
    };

    return (
      <div className={dnxtiepHoverClass()}>
        <div className="dnext-neip-ihb-hvr">
          <div className="neip-ihb-img">
            <Image
              imageTablet={this.props.dynamic.dnxtiep_ihb_image_tablet}
              imagePhone={this.props.dynamic.dnxtiep_ihb_image_phone}
              imageHover={this.props.dynamic.dnxtiep_ihb_image__hover}
              dynamicImg={this.props.dynamic.dnxtiep_ihb_image}
              lastEdited={this.props.dnxtiep_ihb_image_last_edited}
              hoverEnabled={this.props.dnxtiep_ihb_image__hover_enabled}
              imgAlt={this.props.dynamic.dnxtiep_ihb_alt}
            />
          </div>
          <Content />
        </div>
      </div>
    );
  }
}

export default NextImageHoverBox;
