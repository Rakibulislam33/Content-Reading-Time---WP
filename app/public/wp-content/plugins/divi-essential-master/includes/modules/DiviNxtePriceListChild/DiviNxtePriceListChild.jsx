import React, { Component } from "react";
import { applyCustomSpacing, Image, Title } from "../base/common";
import "./style.css";

class DiviNxtePriceListChild extends Component {
  static slug = "dnxte_price_list_child";

  static css(props) {
    const css = [];

    // Custom Padding margin
    const customMarginPadding = [
      [
        "dnxte_pricelist_title_margin",
        "%%order_class%% .dnxte-pricelist-title",
        "margin",
      ],
      [
        "dnxte_pricelist_title_padding",
        "%%order_class%% .dnxte-pricelist-title",
        "padding",
      ],
      [
        "dnxte_pricelist_desc_margin",
        "%%order_class%% .dnxte-pricelist-description",
        "margin",
      ],
      [
        "dnxte_pricelist_desc_padding",
        "%%order_class%% .dnxte-pricelist-description",
        "padding",
      ],
      [
        "dnxte_pricelist_image_margin",
        "%%order_class%% .dnxte-pricelist-image",
        "margin",
      ],
      [
        "dnxte_pricelist_image_padding",
        "%%order_class%% .dnxte-pricelist-image",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    css.push([
      {
        selector: `%%order_class%% .dnxte-pricelist-image`,
        declaration: `max-width: ${props.dnxte_pricelist_image_width} !important;margin-right: ${props.dnxte_pricelist_image_spacing} !important;`,
      },
    ]);

    return css;
  }

  render() {
    const { props } = this;
    
    // Description Dynamic Content
    const pricelistDescription = props.dynamic.dnxte_pricelist_description;
    let pricelistDescriptionComponent = pricelistDescription.render();

    return (
      <div className="dnxte-pricelist-wrapper">
        <div className="dnxte-pricelist-image">
              <Image
                dynamicImg={props.dynamic.dnxte_pricelist_image}
                lastEdited={props.dnxte_pricelist_image_last_edited}
                hoverEnabled={props.dnxte_pricelist_image__hover_enabled}
                imageTablet={props.dynamic.dnxte_pricelist_image_tablet}
                imagePhone={props.dynamic.dnxte_pricelist_image_phone}
                imageHover={props.dynamic.dnxte_pricelist_image__hover}
                imgAlt={props.dynamic.dnxte_pricelist_image_alt}
              />
            </div>
            <div className="dnxte-pricelist-item-wrapper">
              <div className="dnxte-pricelist-header">
                <Title
                  title={props.dnxte_pricelist_heading_text}
                  dynamicTitle={props.dynamic.dnxte_pricelist_heading_text}
                  tag="div"
                  classes="dnxte-pricelist-title"
                />
                <div className="dnxte-pricelist-separator" />
                <div className="dnxte-pricelist-price">
                  {props.dnxte_pricelist_price
                    ? props.dnxte_pricelist_price
                    : "0$"}
                </div>
              </div>
              <div className="dnxte-pricelist-description">
                {pricelistDescriptionComponent}
              </div>
            </div>
      </div>
    );
  }
}

export default DiviNxtePriceListChild;
