// External Dependencies
import { Component } from "react";
// Internal Dependencies
import "./style.css";
import "../base/get_responsive_css";

class DiviNxte3dCubeSliderChild extends Component {
  static slug = "dnxte_3dcubeslider_child";

  static css(props) {
    const css = [];

    if ("" !== props.cubeslider_heading_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "cubeslider_heading_margin",
          "%%order_class%% .dnxte-3dcubeslider-heading",
          "margin"
        )
      );
    }

    if ("" !== props.cubeslider_heading_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "cubeslider_heading_padding",
          "%%order_class%% .dnxte-3dcubeslider-heading",
          "padding"
        )
      );
    }

    if ("" !== props.cubeslider_content_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "cubeslider_content_margin",
          "%%order_class%% .dnxte-3dcubeslider-pra",
          "margin"
        )
      );
    }

    if ("" !== props.cubeslider_content_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "cubeslider_content_padding",
          "%%order_class%% .dnxte-3dcubeslider-pra",
          "padding"
        )
      );
    }

    // Content position
    css.push([
      {
        selector: `%%order_class%% .dnxte-3dcubeslider-multitext`,
        declaration: `left: ${props.cubeslider_content_horizontal ||
          "0%"} !important; top: ${props.cubeslider_content_vertical ||
          "50%"} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.cubeslider_content_horizontal_last_edited ||
      "on|tablet" === props.cubeslider_content_vertical_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-3dcubeslider-multitext",
          declaration: `left: ${props.cubeslider_content_horizontal_tablet} !important;top: ${props.cubeslider_content_vertical_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.cubeslider_content_horizontal_last_edited ||
      "on|phone" === props.cubeslider_content_vertical_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-3dcubeslider-multitext",
          declaration: `left: ${props.cubeslider_content_horizontal_phone} !important;top: ${props.cubeslider_content_vertical_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.cubeslider_content_horizontal__hover_enabled ||
      "on|hover" === props.cubeslider_content_vertical__hover_enabled
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-3dcubeslider-multitext:hover",
          declaration: `left: ${props.cubeslider_content_horizontal__hover} !important;top: ${props.cubeslider_content_vertical__hover} !important;`,
        },
      ]);
    }
    // Content Position

    return css;
  }

  render() {
    return null;
  }
}

export default DiviNxte3dCubeSliderChild;
