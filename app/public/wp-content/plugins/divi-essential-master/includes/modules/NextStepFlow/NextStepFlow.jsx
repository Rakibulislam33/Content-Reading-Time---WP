// External Dependencies
import React, { Component } from "react";
import {
  applyCss,
  getShapes,
  Icon,
  Image,
  Title
} from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class NextStepFlow extends Component {
  static slug = "dnxte_step_flow";

  static css(props) {
    const css = [];

    /**
     * Custom Padding Margin Output
     *
     */

    if ("" !== props.dnxte_badge_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_badge_padding",
          "%%order_class%% .dnxte-stepflow-badge",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_badge_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_badge_margin",
          "%%order_class%% .dnxte-stepflow-badge",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_circle_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_circle_padding",
          "%%order_class%% .dnxte-stepflow-icon-wrap",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_circle_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_circle_margin",
          "%%order_class%% .dnxte-stepflow-icon-wrap",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_title_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_title_padding",
          "%%order_class%% .dnxte-stepflow-title",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_title_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_title_margin",
          "%%order_class%% .dnxte-stepflow-title",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_des_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_des_padding",
          "%%order_class%% .dnxte-stepflow-content-wrapper p",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_des_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_des_margin",
          "%%order_class%% .dnxte-stepflow-content-wrapper p",
          "margin"
        )
      );
    }

    // shape settings
    const slugsAndSelector = {
      useMask: "stepflow_use_mask",
      useMaskUpload: "stepflow_use_mask_upload",
      maskShape: "stepflow_mask_shape",
      maskUpload: "stepflow_upload_mask",
      maskSize: "stepflow_mask_size",
      imageHorizontal: "stepflow_image_horizontal",
      imageVertical: "stepflow_image_vertical",
      selector: "%%order_class%% .dnxte-stepflow-image-wrap",
    };

    getShapes(props, css, slugsAndSelector);
    // shape settings end

    // Direction Style
    if ("off" !== props.dnxte_use_direction) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `border-style: ${props.dnxte_direction_style};`,
        },
      ]);
    }

    // Direction Color
    if ("off" !== props.dnxte_use_direction) {
      if ("" !== props.dnxte_direction_color) {
        css.push([
          {
            selector:
              "%%order_class%% .dnxte-stepflow-arrow, %%order_class%% .dnxte-stepflow-arrow::after",
            declaration: `border-color: ${props.dnxte_direction_color}!important;`,
          },
        ]);
      }
      if ("on|tablet" === props.dnxte_direction_color_last_edited) {
        css.push([
          {
            selector:
              "%%order_class%% .dnxte-stepflow-arrow, %%order_class%% .dnxte-stepflow-arrow::after",
            declaration: `border-color: ${props.dnxte_direction_color_tablet}!important;`,
            device: "tablet",
          },
        ]);
      }
      if ("on|phone" === props.dnxte_direction_color_last_edited) {
        css.push([
          {
            selector:
              "%%order_class%% .dnxte-stepflow-arrow, %%order_class%% .dnxte-stepflow-arrow::after",
            declaration: `border-color: ${props.dnxte_direction_color_phone}!important;`,
            device: "phone",
          },
        ]);
      }
      if ("on|hover" === props.dnxte_direction_color__hover_enabled) {
        css.push([
          {
            selector:
              "%%order_class%% .dnxte-stepflow-arrow:hover, %%order_class%% .dnxte-stepflow-arrow::after:hover",
            declaration: `border-color: ${props.dnxte_direction_color__hover}!important;`,
          },
        ]);
      }
    }

    // Direction Style
    if ("off" !== props.dnxte_use_direction) {
      if ("on|tablet" === props.dnxte_direction_style_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `border-style: ${props.dnxte_direction_style_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxte_direction_style_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `border-style: ${props.dnxte_direction_style_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.dnxte_direction_style__hover_enabled) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `border-style: ${props.dnxte_direction_style__hover}`,
          },
        ]);
      } else {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `border-style: ${props.dnxte_direction_style};`,
          },
        ]);
      }
    }
    // Direction width
    if ("off" !== props.dnxte_use_direction) {
      if ("on|tablet" === props.dnxte_direction_width_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `width: ${props.dnxte_direction_width_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxte_direction_width_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `width: ${props.dnxte_direction_width_phone};`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.dnxte_direction_width__hover_enabled) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `width: ${props.dnxte_direction_width__hover}`,
          },
        ]);
      } else {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `width: ${props.dnxte_direction_width};`,
          },
        ]);
      }
    }

    // Direction Angle
    if ("off" !== props.dnxte_use_direction) {
      if ("on|tablet" === props.dnxte_direction_angle_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `transform: rotate(${props.dnxte_direction_angle_tablet}deg);`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxte_direction_angle_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `transform: rotate(${props.dnxte_direction_angle_phone}deg);`,
            device: "phone",
          },
        ]);
      } else if ("on|hover" === props.dnxte_direction_angle__hover_enabled) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `transform: rotate(${props.dnxte_direction_angle__hover}deg);`,
          },
        ]);
      } else {
        css.push([
          {
            selector: "%%order_class%% .dnxte-stepflow-arrow",
            declaration: `transform: rotate(${props.dnxte_direction_angle}deg);`,
          },
        ]);
      }
    }

    // Direction Offset Top
    if ("off" !== props.dnxte_use_direction) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `top: ${props.dnxte_direction_offsettop_tablet};`,
          device: "tablet",
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `top: ${props.dnxte_direction_offsettop_phone};`,
          device: "phone",
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `top: ${props.dnxte_direction_offsettop__hover}`,
        },
      ]);

      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `top: ${props.dnxte_direction_offsettop};`,
        },
      ]);
    }

    // Direction Offset Left
    if ("off" !== props.dnxte_use_direction) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `left: calc(100% + ${props.dnxte_direction_offsetleft_tablet});`,
          device: "tablet",
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `left: calc(100% + ${props.dnxte_direction_offsetleft_phone});`,
          device: "phone",
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `left: calc(100% + ${props.dnxte_direction_offsetleft__hover});`,
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-arrow",
          declaration: `left: calc(100% + ${props.dnxte_direction_offsetleft});`,
        },
      ]);
    }

    if ("" !== props.dnxte_badge_bg_color) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-badge",
          declaration: `background-color: ${props.dnxte_badge_bg_color}!important;`,
        },
      ]);
    }

    // Circle Size
    if ("on|tablet" === props.dnxte_circle_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `padding: ${props.dnxte_circle_size_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_circle_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `padding: ${props.dnxte_circle_size_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.dnxte_circle_size__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `padding: ${props.dnxte_circle_size__hover}`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `padding: ${props.dnxte_circle_size};`,
        },
      ]);
    }

    const imageWidthCss = [
      {
        desktop: `width: ${props.dnxte_image_size} !important;`,
        tablet: `width: ${props.dnxte_image_size_tablet} !important;`,
        phone: `width: ${props.dnxte_image_size_phone} !important;`,
        hover: `width: ${props.dnxte_image_size__hover} !important;`,
      },
      {
        desktop: "%%order_class%% .dnxte-badge-img",
        hover: "%%order_class%% .dnxte-badge-img:hover",
      },
      props.dnxte_image_size_last_edited,
      props.dnxte_image_size__hover_enabled,
    ];

    const iconSizeCss = [
      {
        desktop: `font-size: ${props.dnxte_icon_size} !important;`,
        tablet: `font-size: ${props.dnxte_icon_size_tablet} !important;`,
        phone: `font-size: ${props.dnxte_icon_size_phone} !important;`,
        hover: `font-size: ${props.dnxte_icon_size__hover} !important;`,
      },
      {
        desktop: "%%order_class%% .dnxte-stepflow-icon-wrap",
        hover: "%%order_class%% .dnxte-stepflow-icon-wrap:hover",
      },
      props.dnxte_icon_size_last_edited,
      props.dnxte_icon_size__hover_enabled,
    ];

    if ("on" !== props.dnxte_use_image) {
      applyCss(
        iconSizeCss[0],
        css,
        iconSizeCss[1],
        iconSizeCss[2],
        iconSizeCss[3]
      );
    } else if ("off" !== props.dnxte_use_image) {
      applyCss(
        imageWidthCss[0],
        css,
        imageWidthCss[1],
        imageWidthCss[2],
        imageWidthCss[3]
      );
    }

    // Circle Background Color
    if ("" !== props.dnxte_circle_bg_color) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `background-color: ${props.dnxte_circle_bg_color}!important;`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxte_circle_bg_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `background-color: ${props.dnxte_circle_bg_color_tablet}!important;`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxte_circle_bg_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `background-color: ${props.dnxte_circle_bg_color_phone}!important;`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxte_circle_bg_color__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap:hover",
          declaration: `background-color: ${props.dnxte_circle_bg_color__hover}!important;`,
        },
      ]);
    }

    // Circle Color
    if ("" !== props.dnxte_circle_color) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `color: ${props.dnxte_circle_color}!important;`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxte_circle_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `color: ${props.dnxte_circle_color_tablet}!important;`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxte_circle_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap",
          declaration: `color: ${props.dnxte_circle_color_phone}!important;`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxte_circle_color__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-stepflow-icon-wrap:hover",
          declaration: `color: ${props.dnxte_circle_color__hover}!important;`,
        },
      ]);
    }

    return css;
  }

  render() {
    let props = this.props;

    // Description Dynamic Content
    const stepflowDescription = props.dynamic.dnxte_stepflow_description;
    let stepflowDescriptionComponent = stepflowDescription.render();

    const PrintIcon = () => {
      // 7||divi||400
      let utils = window.ET_Builder.API.Utils;

      if ("on|hover" === props.dnxte_badge_icon__hover_enabled) {
        return (
          <Icon
            utils={utils}
            icon={props.dnxte_badge_icon__hover}
            classes="dnxte-stepflow-icons dnxte-badge-icon"
          />
        );
      } else if ("on|tablet" === props.dnxte_badge_icon_last_edited) {
        return (
          <Icon
            utils={utils}
            icon={props.dnxte_badge_icon_tablet || props.dnxte_badge_icon}
            classes="dnxte-stepflow-icons dnxte-badge-icon"
          />
        );
      } else if ("on|phone" === props.dnxte_badge_icon_last_edited) {
        return (
          <Icon
            utils={utils}
            icon={props.dnxte_badge_icon_phone || props.dnxte_badge_icon}
            classes="dnxte-stepflow-icons dnxte-badge-icon"
          />
        );
      } else {
        return (
          <Icon
            utils={utils}
            icon={props.dnxte_badge_icon}
            classes="dnxte-stepflow-icons dnxte-badge-icon"
          />
        );
      }
    };

    let dnxte_stepflow_alignment = props.dnxte_stepflow_alignment
        ? "dnxte_stepflow_alignment_" + props.dnxte_stepflow_alignment
        : "",
      dnxte_stepflow_alignment_tablet = props.dnxte_stepflow_alignment_tablet
        ? "dnxte_stepflow_alignment_tablet_" +
          props.dnxte_stepflow_alignment_tablet
        : "",
      dnxte_stepflow_alignment_phone = props.dnxte_stepflow_alignment_phone
        ? "dnxte_stepflow_alignment_phone_" +
          props.dnxte_stepflow_alignment_phone
        : "";
    
    

    return (
      <div
        className={`dnxte-stepflow-wrapper dnxte-step-direction-pad ${dnxte_stepflow_alignment} ${dnxte_stepflow_alignment_tablet} ${dnxte_stepflow_alignment_phone}`}
      >
        <div className="dnxte-stepflow-icon-wrap">
          {"off" !== props.dnxte_use_direction && (
            <span className="dnxte-stepflow-arrow"></span>
          )}

          {"off" !== props.dnxte_use_image && (
            <div className="dnxte-stepflow-image-wrap">
              <Image
                dynamicImg={props.dynamic.dnxte_badge_image}
                lastEdited={props.dnxte_badge_image_last_edited}
                hoverEnabled={props.dnxte_badge_image__hover_enabled}
                imageTablet={props.dynamic.dnxte_badge_image_tablet}
                imagePhone={props.dynamic.dnxte_badge_image_phone}
                imageHover={props.dynamic.dnxte_badge_image__hover}
                imgAlt={props.dynamic.dnxte_badge_image_alt}
                classes="dnxte-badge-img et-waypoint et_pb_animation_top et-animated"
              />
            </div>
          )}

          {"on" !== props.dnxte_use_image && <PrintIcon />}

          <Title
            title={props.badge_title}
            dynamicTitle={props.dynamic.badge_title}
            tag="span"
            classes="dnxte-stepflow-badge"
          />
        </div>

        <div className="dnxte-stepflow-content-wrapper">
          <Title
            title={props.dnxte_stepflow_title}
            dynamicTitle={props.dynamic.dnxte_stepflow_title}
            tag={props.header_level || "h3"}
            classes="dnxte-stepflow-title"
          />
          <p>{stepflowDescriptionComponent}</p>
        </div>
      </div>
    );
  }
}

export default NextStepFlow;
