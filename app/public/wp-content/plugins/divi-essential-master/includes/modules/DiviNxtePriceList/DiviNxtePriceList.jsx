import { Component } from "react";
import "./style.css";
import "../base/get_responsive_css";

class DiviNxtePriceList extends Component {
  static slug = "dnxte_price_list_parent";

  static css(props) {
    const css = [];

    if ("" !== props.dnxte_pricelist_item_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_pricelist_item_padding",
          "%%order_class%% .dnxte_price_list_child",
          "padding"
        )
      );
    }

    css.push([
      {
        selector: `%%order_class%% .dnxte-pricelist-wrapper`,
        declaration: `align-items: ${props.dnxte_pricelist_vertical_alignment};`
      }
    ]);

    if ("none" !== props.dnxte_pricelist_separator_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-pricelist-separator`,
          declaration: `border-bottom-style: ${props.dnxte_pricelist_separator_style};border-bottom-width: ${props.dnxte_pricelist_separator_width}; border-bottom-color: ${props.dnxte_pricelist_separator_color}; margin-left: ${props.dnxte_pricelist_separator_gap}; margin-right: ${props.dnxte_pricelist_separator_gap};`
        }
      ]);
    } else if ("none" === props.dnxte_pricelist_separator_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-pricelist-separator`,
          declaration: `border-bottom-style: none;`
        }
      ]);
    }

    if ("none" !== props.dnxte_pricelist_divider_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte_price_list_child:not(:last-child)`,
          declaration: `border-bottom-style: ${props.dnxte_pricelist_divider_style};border-bottom-width: ${props.dnxte_pricelist_divider_width}; border-bottom-color: ${props.dnxte_pricelist_divider_color};`
        }
      ]);
    } else if ("none" === props.dnxte_pricelist_divider_style) {
      css.push([
        {
          selector: `%%order_class%% .dnxte_price_list_child:not(:last-child)`,
          declaration: `border-bottom-style: none;`
        }
      ]);
    }

    css.push([
      {
        selector: `%%order_class%% .dnxte-pricelist-image`,
        declaration: `max-width: ${props.dnxte_pricelist_image_width};margin-right: ${props.dnxte_pricelist_image_spacing};`
      }
    ]);

    return css;
  }

  render() {
    return <>{this.props.content}</>;
  }
}

export default DiviNxtePriceList;
