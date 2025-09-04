import React, { Component } from "react";
import "./style.css";
import "../base/get_responsive_css";

class DiviNxteFloatingElement extends Component {
  static slug = "dnxte_floating_element";

  static css(props) {
    const css = [];

    // Custom Padding margin

    if ("" !== props.dnxte_floting_shape_item_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_floting_shape_item_margin",
          "%%order_class%% .dnxte_floating_element_child",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxte_floting_shape_item_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_floting_shape_item_padding",
          "%%order_class%% .dnxte_floating_element_child",
          "padding",
          true
        )
      );
    }

    return css;
  }

  render() {
    return <div className="dnxte-floatimg-wrapper">{this.props.content}</div>;
  }
}

export default DiviNxteFloatingElement;
