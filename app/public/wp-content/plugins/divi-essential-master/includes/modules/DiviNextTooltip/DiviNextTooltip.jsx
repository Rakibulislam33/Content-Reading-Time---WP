// External Dependencies
import React, { Component } from "react";

// Internal Dependencies
import "./style.css";
import { Image } from "../base/common";

class DiviNextTooltip extends Component {
  static slug = "dnxte_tooltip";

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
          "margin"
        )
      );
    }

    if ("" !== props.tooltip_text_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_text_padding",
          "%%order_class%% .dnxte_tooltip_text",
          "padding"
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
          "margin"
        )
      );
    }

    if ("" !== props.tooltip_desc_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_desc_padding",
          "%%order_class%% .dnxte-tooltip-content",
          "padding"
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
          "margin"
        )
      );
    }

    if ("" !== props.tooltip_text_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tooltip_text_padding",
          "%%order_class%% .dnxte-tooltip-image-container",
          "padding"
        )
      );
    }

    // Icon  settings
    css.push([
      {
        selector: `%%order_class%% .dnxte-hotspot_icon`,
        declaration: `color: ${props.hotspot_icon_color}; font-size: ${props.hotspot_icon_size};`,
      },
    ]);

    if (
      "on|tablet" === props.hotspot_icon_color_last_edited ||
      "on|tablet" === props.hotspot_icon_size_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hotspot_icon`,
          declaration: `color: ${props.hotspot_icon_color_tablet}; font-size: ${props.hotspot_icon_size_tablet};`,
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
          declaration: `color: ${props.hotspot_icon_color_phone}; font-size: ${props.hotspot_icon_size_phone};`,
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
          declaration: `color: ${props.hotspot_icon_color__hover}; font-size: ${props.hotspot_icon_size__hover};`,
        },
      ]);
    }
    // Icon Settings

    // Hotspot background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper`,
        declaration: `background-color: ${props.hotspot_bg};`,
      },
    ]);

    if (
      "on|tablet" === props.hotspot_bg_last_edited ||
      "on|tablet" === props.hotspot_icon_size_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper`,
          declaration: `background-color: ${props.hotspot_bg_tablet};`,
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
          declaration: `background-color: ${props.hotspot_bg_phone};`,
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
          declaration: `background-color: ${props.hotspot_bg__hover};`,
        },
      ]);
    }
    // Hotspot background color end

    // Hotspot Background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:before`,
        declaration: `background-color: ${props.hotspot_wave_color};`,
      },
    ]);

    if ("on|tablet" === props.hotspot_wave_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:before`,
          declaration: `background-color: ${props.hotspot_wave_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.hotspot_wave_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:before`,
          declaration: `background-color: ${props.hotspot_wave_color_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.hotspot_wave_color__hover_enabled) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-hostpot-hotspots__wrapper:hover::before`,
          declaration: `background-color: ${props.hotspot_wave_color__hover};`,
        },
      ]);
    }
    // Hotspot background color end

    return css;
  }


  render() {
    return (
      <div className="dnxte-hostpot-hotspots-wrapper">
        <Image
          dynamicImg={this.props.dynamic.tooltip_image}
          lastEdited={this.props.tooltip_image_last_edited}
          hoverEnabled={this.props.tooltip_image__hover_enabled}
          imageTablet={this.props.dynamic.tooltip_image_tablet}
          imagePhone={this.props.dynamic.tooltip_image_phone}
          imageHover={this.props.dynamic.tooltip_image__hover}
          imgAlt={this.props.dynamic.tooltip_image_alt}
          classes="dnxte-hostpot-hotspots-minimage"
        />
        <div className="dnxte-hostpot-hotspots-container">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default DiviNextTooltip;
