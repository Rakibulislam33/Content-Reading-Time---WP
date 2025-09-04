// External Dependencies
import React, { Component } from "react";

// Internal Dependencies
import { Title } from "../base/common";
import "../base/get_responsive_css";
import "./style.css";

class NextCircularImageHover extends Component {
  static slug = "dnxte_circular_image_hover";

  static css(props) {
    const additionalCss = [];

    const dnxtiep_cih_info_back = ["effect4", "effect17", "effect19"];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.dnxtiep_cih_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_cih_heading_margin",
          "%%order_class%% .neip-cih-heading",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_cih_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_cih_heading_padding",
          "%%order_class%% .neip-cih-heading",
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_cih_description_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_cih_description_margin",
          "%%order_class%% .neip-cih-desc",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_cih_description_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_cih_description_padding",
          "%%order_class%% .neip-cih-desc",
          "padding",
          true
        )
      );
    }

    // Hover BG Color
    if ("off" !== props.dnxtiep_cih_hover_bg_show_hide) {
      if (
        dnxtiep_cih_info_back.includes(props.dnxtiep_cih_image_hover_effect)
      ) {
        if ("on|tablet" === props.dnxtiep_cih_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info .neip-cih-info-back`,
              declaration: `background: ${props.dnxtiep_cih_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_cih_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info .neip-cih-info-back`,
              declaration: `background: ${props.dnxtiep_cih_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info .neip-cih-info-back`,
              declaration: `background: ${props.dnxtiep_cih_hover_bg};`,
            },
          ]);
        }
      } else {
        if ("on|tablet" === props.dnxtiep_cih_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info`,
              declaration: `background: ${props.dnxtiep_cih_hover_bg_tablet};`,
              device: "tablet",
            },
          ]);
        } else if ("on|phone" === props.dnxtiep_cih_hover_bg_last_edited) {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info`,
              declaration: `background: ${props.dnxtiep_cih_hover_bg_phone};`,
              device: "phone",
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info`,
              declaration: `background: ${props.dnxtiep_cih_hover_bg};`,
            },
          ]);
        }
      }
    }

    // Hover gradient
    if ("off" !== props.dnxtiep_cih_hover_gradient_show_hide) {
      let gradient_direction =
        props.dnxtiep_cih_hover_gradient_type === "linear-gradient"
          ? props.dnxtiep_cih_hover_gradient_type_linear_direction
          : props.dnxtiep_cih_hover_gradient_type_radial_direction;
      let color_one = props.dnxtiep_cih_hover_gradient_color_one;
      let color_two = props.dnxtiep_cih_hover_gradient_color_two;
      let gradient_start = props.dnxtiep_cih_hover_gradient_start_position;
      let gradient_end = props.dnxtiep_cih_hover_gradient_end_position;

      let gradient = `background: ${props.dnxtiep_cih_hover_gradient_type}(${gradient_direction}, ${color_one} ${gradient_start}, ${color_two} ${gradient_end});`;

      if (
        dnxtiep_cih_info_back.includes(props.dnxtiep_cih_image_hover_effect)
      ) {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info .neip-cih-info-back`,
            declaration: gradient,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-cih-item.neip-cih-${props.dnxtiep_cih_image_hover_effect} .neip-cih-info`,
            declaration: gradient,
          },
        ]);
      }
    }

    // Image round edge
    const boxShadowHorizontal = props.dnxtiep_cih_box_shadow_horizontal;
    const boxShadowVertical = props.dnxtiep_cih_box_shadow_vertical;
    const boxShadowBlur = props.dnxtiep_cih_box_shadow_blur_strength;
    const boxShadowSpread = props.dnxtiep_cih_box_shadow_spread_strength;

    // color
    const boxShadowColor = props.dnxtiep_cih_box_shadow_color;
    const boxShadowColorTablet = props.dnxtiep_cih_box_shadow_color_last_edited
      ? props.dnxtiep_cih_box_shadow_color_tablet
      : boxShadowColor;
    const boxShadowColorPhone = props.dnxtiep_cih_box_shadow_color_last_edited
      ? props.dnxtiep_cih_box_shadow_color_phone
      : boxShadowColorTablet;

    let box_shadow = `box-shadow: inset ${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColor},0 1px 2px rgba(0, 0, 0, 0.3) !important;`;

    additionalCss.push([
      {
        selector: `%%order_class%% .dnext-neip-cih-item .neip-cih-img::before`,
        declaration: box_shadow,
      },
    ]);

    if ("on|tablet" === props.dnxtiep_cih_box_shadow_color_last_edited) {
      let box_shadow_tablet = `box-shadow: inset ${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColorTablet},0 1px 2px rgba(0, 0, 0, 0.3) !important;`;

      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-neip-cih-item .neip-cih-img::before",
          declaration: box_shadow_tablet,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxtiep_cih_box_shadow_color_last_edited) {
      let box_shadow_phone = `box-shadow: inset ${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColorPhone},0 1px 2px rgba(0, 0, 0, 0.3) !important;`;

      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnext-neip-cih-item .neip-cih-img::before",
          declaration: box_shadow_phone,
          device: "phone",
        },
      ]);
    }

    return additionalCss;
  }

  render() {
    const props = this.props;

    const DnxtiepImg = () => {
      let dnxtiepImg = props.dynamic.dnxtiep_cih_image;
      let dnxtiepImgTablet = props.dynamic.dnxtiep_cih_image_tablet;
      let dnxtiepImgPhone = props.dynamic.dnxtiep_cih_image_phone;
      let dnxtiepImgHover = props.dynamic.dnxtiep_cih_image__hover;

      if (dnxtiepImg.value === "") return "";
      let dnxtiepImgAlt = props.dynamic.dnxtiep_cih_alt;

      if (dnxtiepImg.loading) return dnxtiepImg.render();

      if (props.dnxtiep_cih_image_hover_effect === "effect7") {
        if ("on|tablet" === props.dnxtiep_cih_image_last_edited) {
          return (
            <div class="neip-cih-img-container">
              <div className="neip-cih-img">
                <img
                  src={
                    dnxtiepImgTablet.value
                      ? dnxtiepImgTablet.value
                      : dnxtiepImg.value
                  }
                  alt={dnxtiepImgAlt.value}
                />
              </div>
            </div>
          );
        } else if ("on|phone" === props.dnxtiep_cih_image_last_edited) {
          return (
            <div class="neip-cih-img-container">
              <div className="neip-cih-img">
                <img
                  src={
                    dnxtiepImgPhone.value
                      ? dnxtiepImgPhone.value
                      : dnxtiepImgTablet.value
                      ? dnxtiepImgTablet.value
                      : dnxtiepImg.value
                  }
                  alt={dnxtiepImgAlt.value}
                />
              </div>
            </div>
          );
        } else if ("on|hover" === props.dnxtiep_cih_image__hover_enabled) {
          return (
            <div class="neip-cih-img-container">
              <div className="neip-cih-img">
                <img
                  src={
                    dnxtiepImgHover.value
                      ? dnxtiepImgHover.value
                      : dnxtiepImg.value
                  }
                  alt={dnxtiepImgAlt.value}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="neip-cih-img-container">
              <div className="neip-cih-img">
                <img src={dnxtiepImg.value} alt={dnxtiepImgAlt.value} />
              </div>
            </div>
          );
        }
      }

      if ("on|tablet" === props.dnxtiep_cih_image_last_edited) {
        return (
          <div className="neip-cih-img">
            <img
              src={
                dnxtiepImgTablet.value
                  ? dnxtiepImgTablet.value
                  : dnxtiepImg.value
              }
              alt={dnxtiepImgAlt.value}
            />
          </div>
        );
      } else if ("on|phone" === props.dnxtiep_cih_image_last_edited) {
        return (
          <div className="neip-cih-img">
            <img
              src={
                dnxtiepImgPhone.value
                  ? dnxtiepImgPhone.value
                  : dnxtiepImgTablet.value
                  ? dnxtiepImgTablet.value
                  : dnxtiepImg.value
              }
              alt={dnxtiepImgAlt.value}
            />
          </div>
        );
      } else if ("on|hover" === props.dnxtiep_cih_image__hover_enabled) {
        return (
          <div className="neip-cih-img">
            <img
              src={
                dnxtiepImgHover.value ? dnxtiepImgHover.value : dnxtiepImg.value
              }
              alt={dnxtiepImgAlt.value}
            />
          </div>
        );
      } else {
        return (
          <div className="neip-cih-img">
            <img src={dnxtiepImg.value} alt={dnxtiepImgAlt.value} />
          </div>
        );
      }
    };

    const Content = () => {
      const dnxtiep_cih_info_back = ["effect4", "effect17", "effect19"];

      // Description Dynamic Content
      const dnxtiepcihDescription = props.dynamic.dnxtiep_cih_description;
      let dnxtiepcihDescriptionComponent = dnxtiepcihDescription.render();

      if (
        dnxtiep_cih_info_back.includes(props.dnxtiep_cih_image_hover_effect)
      ) {
        return (
          <div className="neip-cih-info">
            <div className="neip-cih-info-back">
              <Title
                title={props.dnxtiep_cih_heading_text}
                dynamicTitle={props.dynamic.dnxtiep_cih_heading_text}
                tag={props.dnxtiep_cih_heading_tag}
                classes="neip-cih-heading"
              />
              <div className="">
                {dnxtiepcihDescriptionComponent}
              </div>
            </div>
          </div>
        );
      } else if (props.dnxtiep_cih_image_hover_effect === "effect7") {
        return (
          <div className="neip-cih-info-container">
            <div className="neip-cih-info">
              <Title
                title={props.dnxtiep_cih_heading_text}
                dynamicTitle={props.dynamic.dnxtiep_cih_heading_text}
                tag={props.dnxtiep_cih_heading_tag}
                classes="neip-cih-heading"
              />
              <div className="">
                {dnxtiepcihDescriptionComponent}
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="neip-cih-info">
          <Title
            title={props.dnxtiep_cih_heading_text}
            dynamicTitle={props.dynamic.dnxtiep_cih_heading_text}
            tag={props.dnxtiep_cih_heading_tag}
            classes="neip-cih-heading"
          />
          <div className="">
            {dnxtiepcihDescriptionComponent}
          </div>
        </div>
      );
    };

    const dnxtiepHoverClass = () => {
      let direction_class = "";
      const dnxtiep_cih_effect1 = [
        "effect1",
        "effect2",
        "effect3",
        "effect6",
        "effect7",
        "effect8",
        "effect10",
        "effect11",
        "effect13",
        "effect17",
      ];
      const dnxtiep_cih_effect2 = "effect5";
      const dnxtiep_cih_effect3 = "effect15";
      const dnxtiep_cih_effect4 = ["effect9", "effect19"];
      const dnxtiep_cih_effect5 = "effect12";
      const dnxtiep_cih_effect6 = "effect14";

      if (dnxtiep_cih_effect1.includes(props.dnxtiep_cih_image_hover_effect)) {
        direction_class = `neip-cih-${props.dnxtiep_cih_image_hover_direction1}`;
      }

      if (dnxtiep_cih_effect2 === props.dnxtiep_cih_image_hover_effect) {
        direction_class = `neip-cih-${props.dnxtiep_cih_image_hover_direction2}`;
      }
      if (dnxtiep_cih_effect5 === props.dnxtiep_cih_image_hover_effect) {
        direction_class = `neip-cih-${props.dnxtiep_cih_image_hover_direction5}`;
      }
      if (dnxtiep_cih_effect3 === props.dnxtiep_cih_image_hover_effect) {
        direction_class = `neip-cih-${props.dnxtiep_cih_image_hover_direction3}`;
      }
      if (dnxtiep_cih_effect4.includes(props.dnxtiep_cih_image_hover_effect)) {
        direction_class = `neip-cih-${props.dnxtiep_cih_image_hover_direction4}`;
      }
      if (dnxtiep_cih_effect6 === props.dnxtiep_cih_image_hover_effect) {
        direction_class = `neip-cih-${props.dnxtiep_cih_image_hover_direction6}`;
      }

      return `dnext-neip-cih-item neip-cih-${props.dnxtiep_cih_image_hover_effect} ${direction_class}`;
    };

    return (
      <div className={dnxtiepHoverClass()}>
        <div className="dnext-neip-cih-hvr">
          <DnxtiepImg />
          <Content />
        </div>
      </div>
    );
  }
}

export default NextCircularImageHover;
