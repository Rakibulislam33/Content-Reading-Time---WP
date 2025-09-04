// External Dependencies
import React, { Component } from "react";
import { applyCss, Icon, Image, Title } from "../base/common";

class DiviNextTooltipChild extends Component {
  static slug = "dnxte_tooltip_child";

  static css(props) {
    const css = [];

    // Custom Padding

    if ("" !== props.hotspot_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "hotspot_padding",
          "%%order_class%% .dnxte-hostpot-hotspots__wrapper",
          "padding"
        )
      );
    }

    if ("" !== props.tooltip_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_padding",
          "%%order_class%% .dnxte-hostpot-tooltip-text",
          "padding"
        )
      );
    }

    // Text Margin Padding
    if ("" !== props.tooltip_text_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_text_margin",
          "%%order_class%% .dnxte_tooltip_text",
          "margin",
          true
        )
      );
    }

    if ("" !== props.tooltip_text_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_text_padding",
          "%%order_class%% .dnxte_tooltip_text",
          "padding",
          true
        )
      );
    }

    // Description Margin Padding
    if ("" !== props.tooltip_desc_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_desc_margin",
          "%%order_class%% .dnxte-tooltip-content",
          "margin",
          true
        )
      );
    }

    if ("" !== props.tooltip_desc_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_desc_padding",
          "%%order_class%% .dnxte-tooltip-content",
          "padding",
          true
        )
      );
    }

    // Image Margin Padding
    if ("" !== props.tooltip_image_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_image_margin",
          "%%order_class%% .dnxte-tooltip-image-container",
          "margin",
          true
        )
      );
    }

    if ("" !== props.tooltip_text_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_text_padding",
          "%%order_class%% .dnxte-tooltip-image-container",
          "padding",
          true
        )
      );
    }

    // Tooltip Position

    if (props.tooltip_position === "bottom") {
      css.push([
        {
          selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
          declaration: "position: relative !important;",
        },
      ]);
    }

    if (props.tooltip_position !== "bottom") {
      css.push([
        {
          selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
          declaration: "position: absolute !important;",
        },
      ]);
    }

    // Hotspot position
    css.push([
      {
        selector: `%%order_class%%.et_pb_module`,
        declaration: `left: ${props.hotspot_horizontal ||
          "50%"} !important; top: ${props.hotspot_vertical ||
          "20%"} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.hotspot_horizontal_last_edited ||
      "on|tablet" === props.hotspot_vertical_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%%.et_pb_module",
          declaration: `left: ${props.hotspot_horizontal_tablet} !important;top: ${props.hotspot_vertical_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.hotspot_horizontal_last_edited ||
      "on|phone" === props.hotspot_vertical_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%%.et_pb_module",
          declaration: `left: ${props.hotspot_horizontal_phone} !important;top: ${props.hotspot_vertical_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.hotspot_horizontal__hover_enabled ||
      "on|hover" === props.hotspot_vertical__hover_enabled
    ) {
      css.push([
        {
          selector: "%%order_class%%.et_pb_module:hover",
          declaration: `left: ${props.hotspot_horizontal__hover} !important;top: ${props.hotspot_vertical__hover} !important;`,
        },
      ]);
    }
    // Hotspot Position

    // Icon  settings
    css.push([
      {
        selector: `%%order_class%% .dnxte-hotspot_icon`,
        declaration: `color: ${props.hotspot_icon_color} !important; font-size: ${props.hotspot_icon_size} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.hotspot_icon_color_last_edited ||
      "on|tablet" === props.hotspot_icon_size_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hotspot_icon`,
          declaration: `color: ${props.hotspot_icon_color_tablet} !important; font-size: ${props.hotspot_icon_size_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.hotspot_icon_color_last_edited ||
      "on|phone" === props.hotspot_icon_size_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hotspot_icon`,
          declaration: `color: ${props.hotspot_icon_color_phone} !important; font-size: ${props.hotspot_icon_size_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.hotspot_icon_color__hover_enabled ||
      "on|hover" === props.hotspot_icon_size__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hotspot_icon:hover`,
          declaration: `color: ${props.hotspot_icon_color__hover} !important; font-size: ${props.hotspot_icon_size__hover} !important;`,
        },
      ]);
    }
    // Icon Settings

    // Hotspot background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper`,
        declaration: `background-color: ${props.hotspot_bg} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.hotspot_bg_last_edited ||
      "on|tablet" === props.hotspot_icon_size_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper`,
          declaration: `background-color: ${props.hotspot_bg_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.hotspot_bg_last_edited ||
      "on|phone" === props.hotspot_icon_size_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper`,
          declaration: `background-color: ${props.hotspot_bg_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.hotspot_bg__hover_enabled ||
      "on|hover" === props.hotspot_icon_size__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:hover`,
          declaration: `background-color: ${props.hotspot_bg__hover} !important;`,
        },
      ]);
    }
    // Hotspot background color end

    // Hotspot Background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:before`,
        declaration: `background-color: ${props.hotspot_wave_color} !important;`,
      },
    ]);

    if ("on|tablet" === props.hotspot_wave_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:before`,
          declaration: `background-color: ${props.hotspot_wave_color_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.hotspot_wave_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:before`,
          declaration: `background-color: ${props.hotspot_wave_color_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.hotspot_wave_color__hover_enabled) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:hover::before`,
          declaration: `background-color: ${props.hotspot_wave_color__hover} !important;`,
        },
      ]);
    }
    // Hotspot background color end

    // Tooltip triangle background color
    const triangleBackgroundColor = [
      [
        {
          desktop: `border-color: transparent !important;border-${props.tooltip_position}-color: ${props.tooltip_bg} !important;`,
          tablet: `border-color: transparent !important;border-${props.tooltip_position}-color: ${props.tooltip_bg_tablet} !important;`,
          phone: `border-color: transparent !important;border-${props.tooltip_position}-color: ${props.tooltip_bg_phone} !important;`,
          hover: `border-color: transparent !important;border-${props.tooltip_position}-color: ${props.tooltip_bg__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-hostpot-tooltip-text:after",
          hover: "%%order_class%% .dnxte-hostpot-tooltip-text:hover::after",
        },
        props.tooltip_bg_last_edited,
        props.tooltip_bg__hover_enabled,
      ],
      // tooltip background color
      [
        {
          desktop: `background-color: ${props.tooltip_bg} !important;`,
          tablet: `background-color: ${props.tooltip_bg_tablet} !important;`,
          phone: `background-color: ${props.tooltip_bg_phone} !important;`,
          hover: `background-color: ${props.tooltip_bg__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-hostpot-tooltip-text",
          hover: "%%order_class%% .dnxte-hostpot-tooltip-text:hover",
        },
        props.tooltip_bg_last_edited,
        props.tooltip_bg__hover_enabled,
      ],
    ];

    triangleBackgroundColor.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );
    // Tooltip triangle background color end

    // Tooltip Width
    if ("on|tablet" === props.tooltip_width) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
          declaration: `width: ${props.tooltip_width_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.tooltip_width) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
          declaration: `width: ${props.tooltip_width_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.tooltip_width__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
          declaration: `width: ${props.tooltip_width__hover} !important;`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
          declaration: `width: ${props.tooltip_width} !important;`,
        },
      ]);
    }
    // Tooltip width end

    // Tooltip Layout
    css.push([
      {
        selector: "%%order_class%% .dnxte-hostpot-tooltip-text",
        declaration: `flex-direction: ${props.tooltip_layout};`,
      },
    ]);
    // Tooltip Layout End

    // Tooltip Image position

    if (["row", "row-reverse"].includes(props.tooltip_layout)) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-tooltip-image-container",
          declaration: `align-self: ${props.tooltip_image_vertical};`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-tooltip-image-container",
          declaration: `justify-content: ${props.tooltip_image_vertical};`,
        },
      ]);
    }
    // Tooltip  Image position end

    // Image Width
    if ("on|tablet" === props.tooltip_image_width) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-tooltip-image-container",
          declaration: `width: ${props.tooltip_image_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.tooltip_image_width) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-tooltip-image-container",
          declaration: `width: ${props.tooltip_image_width_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.tooltip_image_width__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-tooltip-image-container",
          declaration: `width: ${props.tooltip_image_width__hover};`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-tooltip-image-container",
          declaration: `width: ${props.tooltip_image_width};`,
        },
      ]);
    }
    // Image width end

    const hotspotSizing = [
      {
        desktop: `min-width: ${props.hotspot_sizing ||
          30}px !important; min-height: ${props.hotspot_sizing ||
          30}px !important;`,
        tablet: `min-width: ${props.hotspot_sizing_tablet}px !important; min-height: ${props.hotspot_sizing_tablet}px !important;`,
        phone: `min-width: ${props.hotspot_sizing_phone}px !important; min-height: ${props.hotspot_sizing_phone}px !important;`,
      },
      {
        desktop:
          "%%order_class%% .dnxte-hostpot-hotspots__wrapper,%%order_class%% .dnxte-hostpot-hotspots__wrapper:before",
      },
      props.hotspot_sizing_last_edited,
    ];

    applyCss(hotspotSizing[0], css, hotspotSizing[1], hotspotSizing[2]);

    if ("bottom" === props.tooltip_position) {
      css.push([
        {
          selector:
            "%%order_class%% .dnxte-hostpot-tooltip .dnxte-hostpot-tooltip-item.tooltip-bottom .dnxte-hostpot-tooltip-content ~ .dnxte-hostpot-tooltip-text",
          declaration: `transform: translateX(-50%) translate3d(${+props.hotspot_sizing /
            2 || 30 / 2}px, 0px, 0px) !important;`,
        },
      ]);

      if ("on|tablet" === props.hotspot_sizing_last_edited) {
        css.push([
          {
            selector:
              "%%order_class%% .dnxte-hostpot-tooltip .dnxte-hostpot-tooltip-item.tooltip-bottom .dnxte-hostpot-tooltip-content ~ .dnxte-hostpot-tooltip-text",
            declaration: `transform: translateX(-50%) translate3d(${+props.hotspot_sizing_tablet /
              2}px, 0px, 0px) !important;`,
            device: "tablet",
          },
        ]);
      }
      if ("on|phone" === props.hotspot_sizing_last_edited) {
        css.push([
          {
            selector:
              "%%order_class%% .dnxte-hostpot-tooltip .dnxte-hostpot-tooltip-item.tooltip-bottom .dnxte-hostpot-tooltip-content ~ .dnxte-hostpot-tooltip-text",
            declaration: `transform: translateX(-50%) translate3d(${+props.hotspot_sizing_phone /
              2}px, 0px, 0px) !important;`,
            device: "phone",
          },
        ]);
      }
    }

    return css;
  }

  constructor(props) {
    super(props);

    this.state = {
      isBottom: false,
    };
  }

  mouseenter = () => {
    if (this.props.tooltip_position === "bottom") {
      this.setState({
        isBottom: true,
      });
    }
  };
  mouseleave = () => {
    if (this.props.tooltip_position === "bottom") {
      this.setState({
        isBottom: false,
      });
    }
  };

  render() {
    const { props, state } = this;
    const ResponsiveIcon = ({ utils, iconSlug, classes = "" }) => {
      if ("on|tablet" === props[`${iconSlug}_last_edited`]) {
        return (
          <Icon
            utils={utils}
            icon={props.tooltip_hotspot_icon_tablet}
            classes={classes}
          />
        );
      } else if ("on|phone" === props[`${iconSlug}_last_edited`]) {
        return (
          <Icon
            utils={utils}
            icon={props.tooltip_hotspot_icon_phone}
            classes={classes}
          />
        );
      } else {
        return (
          <Icon
            utils={utils}
            icon={props.tooltip_hotspot_icon || "N"}
            classes={classes}
          />
        );
      }
    };
    const utils = window.ET_Builder.API.Utils;
    const { isBottom } = state;
        // Description Dynamic Content
        const tooltipDescription = props.dynamic.tooltip_content;
        let tooltipDescriptionComponent = tooltipDescription.render();

    return (
      <div
        id={props.css_id || null}
        className={`dnxte-hostpot-hotspot ${props.css_classes}`}
      >
        <div className="dnxte-hostpot-tooltip">
          <div
            className={`dnxte-hostpot-tooltip-item tooltip-${props.tooltip_position ||
              "top"}`}
          >
            <div className="dnxte-hostpot-tooltip-content">
              <div
                className="dnxte-hostpot-hotspots__wrapper"
                onMouseEnter={this.mouseenter}
                onMouseLeave={this.mouseleave}
              >
                {props.tooltip_hotspot_text !== "" && (
                  <Title
                    title={props.tooltip_hotspot_text || ""}
                    dynamicTitle={props.dynamic.tooltip_hotspot_text}
                    tag="span"
                    classes="dnxte-hostpot-hotspot__text"
                  />
                )}
                {props.tooltip_use_hotspot_icon !== "off" && (
                  <ResponsiveIcon
                    utils={utils}
                    iconSlug="tooltip_hotspot_icon"
                    classes="et-pb-icon dnxte-hotspot_icon"
                  />
                )}
              </div>
            </div>
            <div
              className={`dnxte-hostpot-tooltip-text ${isBottom &&
                "tooltip-hover-bottom"}`}
              onMouseEnter={this.mouseenter}
              onMouseLeave={this.mouseleave}
            >
              {props.tooltip_use_image === "on" && (
                <div className="dnxte-tooltip-image-container">
                  <Image
                    dynamicImg={props.dynamic.tooltip_image}
                    lastEdited={props.tooltip_image_last_edited}
                    hoverEnabled={props.tooltip_image__hover_enabled}
                    imageTablet={props.dynamic.tooltip_image_tablet}
                    imagePhone={props.dynamic.tooltip_image_phone}
                    imageHover={props.dynamic.tooltip_image__hover}
                    imgAlt={props.dynamic.tooltip_image_alt}
                  />
                </div>
              )}
              <div className="dnxte-tooltip-content-container">
                <Title
                  title={props.tooltip_text}
                  dynamicTitle={props.dynamic.tooltip_text}
                  tag="p"
                  classes="dnxte_tooltip_text"
                />
                <div className="dnxte-tooltip-content">
                  {tooltipDescriptionComponent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiviNextTooltipChild;
