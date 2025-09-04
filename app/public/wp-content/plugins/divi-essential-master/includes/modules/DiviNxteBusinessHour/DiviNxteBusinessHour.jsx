import React, { Component } from "react";
import "./style.css";
import "../base/get_responsive_css";

class DiviNxteBusinessHour extends Component {
  static slug = "dnxte_business_hour_parent";

  static css(props) {
    const css = [];

    if ("" !== props.dnxte_busihr_item_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_busihr_item_padding",
          "%%order_class%% .dnxte-Busihr-wekname",
          "padding"
        )
      );
    }

    if ("off" !== props.dnxte_busihr_bg_striped) {
      css.push([
        {
          selector: `%%order_class%% .dnxte_business_hour_child:nth-child(odd)`,
          declaration: `background-color: ${props.dnxte_busihr_odd_background};`
        }
      ]);

      css.push([
        {
          selector: `%%order_class%% .dnxte_business_hour_child:nth-child(even)`,
          declaration: `background-color: ${props.dnxte_busihr_even_background};`
        }
      ]);
    }

    if ("none" !== props.dnxte_busihr_separator_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-Busihr-separator`,
          declaration: `border-bottom-style: ${props.dnxte_busihr_separator_style};border-bottom-width: ${props.dnxte_busihr_separator_width}; border-bottom-color: ${props.dnxte_busihr_separator_color}; margin-left: ${props.dnxte_busihr_separator_gap}; margin-right: ${props.dnxte_busihr_separator_gap};`
        }
      ]);
    } else if ("none" === props.dnxte_busihr_separator_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-Busihr-separator`,
          declaration: `border-bottom-style: ${props.dnxte_busihr_separator_style};`
        }
      ]);
    }

    if ("none" !== props.dnxte_busihr_divider_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte_business_hour_child:not(:last-child)`,
          declaration: `border-bottom-style: ${props.dnxte_busihr_divider_style};border-bottom-width: ${props.dnxte_busihr_divider_width}; border-bottom-color: ${props.dnxte_busihr_divider_color};`
        }
      ]);
    } else if ("none" === props.dnxte_busihr_divider_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte_business_hour_child:not(:last-child)`,
          declaration: `border-bottom-style: ${props.dnxte_busihr_divider_style};`
        }
      ]);
    }

    return css;
  }

  render() {
    return <div className="dnxte-Busihr-wrapper">{this.props.content}</div>;
  }
}

export default DiviNxteBusinessHour;
