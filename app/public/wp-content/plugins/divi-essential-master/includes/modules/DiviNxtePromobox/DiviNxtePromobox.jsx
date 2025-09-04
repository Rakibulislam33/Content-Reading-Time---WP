import React, { Component } from "react";
import { Button, getShapes, Image, Title } from "../base/common";
import "../base/get_responsive_css";
import "./style.css";

class DiviNxtePromobox extends Component {
  static slug = "dnxte_promobox";

  static css(props) {
    const css = [];

    // Custom Padding margin

    if ("" !== props.dnxte_promobox_title_one_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_title_one_margin",
          "%%order_class%% .dnxte-promobx-before-title",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_title_one_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_title_one_padding",
          "%%order_class%% .dnxte-promobx-before-title",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_promobox_title_two_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_title_two_margin",
          "%%order_class%% .dnxte-promobx-main-title",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_title_two_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_title_two_padding",
          "%%order_class%% .dnxte-promobx-main-title",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_promobox_title_three_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_title_three_margin",
          "%%order_class%% .dnxte-promobx-after-title",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_title_three_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_title_three_padding",
          "%%order_class%% .dnxte-promobx-after-title",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_promobox_content_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_content_margin",
          "%%order_class%% .dnxte-promobx-description",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_content_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_content_padding",
          "%%order_class%% .dnxte-promobx-description",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_promobox_image_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_image_margin",
          "%%order_class%% .dnxte-promobx-thumb img",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_image_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_image_padding",
          "%%order_class%% .dnxte-promobx-thumb img",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_promobox_button_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_button_margin",
          "%%order_class%% .dnxte-promobx-btn",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_button_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_button_padding",
          "%%order_class%% .dnxte-promobx-btn",
          "padding"
        )
      );
    }

    if ("" !== props.dnxte_promobox_offer_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_offer_margin",
          "%%order_class%% .dnxte-promo-box-badge",
          "margin"
        )
      );
    }

    if ("" !== props.dnxte_promobox_offer_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_promobox_offer_padding",
          "%%order_class%% .dnxte-promo-box-badge",
          "padding"
        )
      );
    }

    const slugsAndSelector = {
      useMask: "dnxte_promobox_use_mask",
      useMaskUpload: "dnxte_promobox_use_mask_upload",
      maskShape: "dnxte_promobox_mask_shape",
      maskUpload: "dnxte_promobox_upload_mask",
      maskSize: "dnxte_promobox_mask_size",
      imageHorizontal: "dnxte_promobox_image_horizontal",
      imageVertical: "dnxte_promobox_image_vertical",
      selector: "%%order_class%% .dnxte-promobx-thumb",
    };

    getShapes(props, css, slugsAndSelector);

    // Button Background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-promobx-btn`,
        declaration: `background-color: ${props.dnxte_promobox_button_bg_color} !important;`,
      },
    ]);

    if ("on|tablet" === props.dnxte_promobox_button_bg_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-promobx-btn`,
          declaration: `background-color: ${props.dnxte_promobox_button_bg_color_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.dnxte_promobox_button_bg_color_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-promobx-btn`,
          declaration: `background-color: ${props.dnxte_promobox_button_bg_color_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_promobox_button_bg_color__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-promobx-btn:hover`,
          declaration: `background-color: ${props.dnxte_promobox_button_bg_color__hover} !important;`,
        },
      ]);
    }
    // Button background color end

    // Offer background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-promo-box-badge`,
        declaration: `background-color: ${props.dnxte_promobox_offer_bg_color} !important;`,
      },
    ]);

    if ("on|tablet" === props.dnxte_promobox_offer_bg_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-promo-box-badge`,
          declaration: `background-color: ${props.dnxte_promobox_offer_bg_color_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_promobox_offer_bg_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-promo-box-badge`,
          declaration: `background-color: ${props.dnxte_promobox_offer_bg_color_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_promobox_offer_bg_color__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-promo-box-badge:hover`,
          declaration: `background-color: ${props.dnxte_promobox_offer_bg_color__hover} !important;`,
        },
      ]);
    }
    // Offer background color end
    // Image Width
    if ("on|tablet" === props.dnxte_promobox_image_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promobx-thumb img",
          declaration: `max-width: ${props.dnxte_promobox_image_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_promobox_image_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promobx-thumb img",
          declaration: `max-width: ${props.dnxte_promobox_image_width_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.dnxte_promobox_image_width__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promobx-thumb img",
          declaration: `max-width: ${props.dnxte_promobox_image_width__hover}`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promobx-thumb img",
          declaration: `max-width: ${props.dnxte_promobox_image_width};`,
        },
      ]);
    }
    // Image width end
    // Offer width
    if (
      "on|tablet" === props.dnxte_promobox_offer_width_last_edited ||
      "on|tablet" === props.dnxte_promobox_offer_height_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `width: ${props.dnxte_promobox_offer_width_tablet};height: ${props.dnxte_promobox_offer_height_tablet};`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.dnxte_promobox_offer_width_last_edited ||
      "on|phone" === props.dnxte_promobox_offer_height_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `width: ${props.dnxte_promobox_offer_width_phone};height: ${props.dnxte_promobox_offer_height_phone};`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_promobox_offer_width__hover_enabled ||
      "on|hover" === props.dnxte_promobox_offer_height__hover_enabled
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `width: ${props.dnxte_promobox_offer_width__hover};height: ${props.dnxte_promobox_offer_height__hover};`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `width: ${props.dnxte_promobox_offer_width};height: ${props.dnxte_promobox_offer_height};`,
        },
      ]);
    }
    // Offer width

    // Offer position
    css.push([
      {
        selector: `%%order_class%% .dnxte-promo-box-badge`,
        declaration: `right: ${props.dnxte_promobox_offer_horizontal} !important; bottom: ${props.dnxte_promobox_offer_vertical} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.dnxte_promobox_offer_horizontal_last_edited ||
      "on|tablet" === props.dnxte_promobox_offer_vertical_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `right: ${props.dnxte_promobox_offer_horizontal_tablet} !important;bottom: ${props.dnxte_promobox_offer_vertical_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.dnxte_promobox_offer_horizontal_last_edited ||
      "on|phone" === props.dnxte_promobox_offer_vertical_last_edited
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `right: ${props.dnxte_promobox_offer_horizontal_phone} !important;bottom: ${props.dnxte_promobox_offer_vertical_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_promobox_offer_horizontal__hover_enabled ||
      "on|hover" === props.dnxte_promobox_offer_vertical__hover_enabled
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge:hover",
          declaration: `right: ${props.dnxte_promobox_offer_horizontal__hover} !important;bottom: ${props.dnxte_promobox_offer_vertical__hover} !important;`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-promo-box-badge",
          declaration: `right: ${props.dnxte_promobox_offer_horizontal} !important;bottom: ${props.dnxte_promobox_offer_vertical} !important;`,
        },
      ]);
    }
    // Offer Position

    // Button alignment
    css.push([
      {
        selector: `%%order_class%% .dnxte-promobx-button`,
        declaration: `justify-content: ${props.dnxte_promobox_button_alignment};`,
      },
    ]);
    // Button alignment end

    return css;
  }

  render() {
    const { props } = this;

    // Description Dynamic Content
    const promoboxDescription = props.dynamic.dnxte_promobox_content;
    let promoboxDescriptionComponent = promoboxDescription.render();
    return (
      <div className="dnxte-promobx-container">
        <div className="dnxte-promobx-inner-wrap">
          <div className="dnxte-promobx-header">
            <div className="dnxte-promobx-title-wrap">
              <Title
                title={props.dnxte_promobox_title_one}
                dynamicTitle={props.dynamic.dnxte_promobox_title_one}
                tag={"div"}
                classes="dnxte-promobx-before-title"
              />
              <Title
                title={props.dnxte_promobox_title_two}
                dynamicTitle={props.dynamic.dnxte_promobox_title_two}
                tag={props.header_level || "h2"}
                classes="dnxte-promobx-main-title"
              />
              <Title
                title={props.dnxte_promobox_title_three}
                dynamicTitle={props.dynamic.dnxte_promobox_title_three}
                tag={"div"}
                classes="dnxte-promobx-after-title"
              />
            </div>
            <div className="dnxte-promobx-thumb">
              <Image
                imageTablet={props.dynamic.dnxte_promobox_image_tablet}
                imagePhone={props.dynamic.dnxte_promobox_image_phone}
                imageHover={props.dynamic.dnxte_promobox_image__hover}
                dynamicImg={props.dynamic.dnxte_promobox_image}
                lastEdited={props.dnxte_promobox_image_last_edited}
                hoverEnabled={props.dnxte_promobox_image__hover_enabled}
                imgAlt={props.dynamic.dnxte_promobox_image_alt}
                classes="img-fluid"
              />
            </div>
          </div>
          <div className="dnxte-promobx-footer">
            <div className="dnxte-promobx-description">
              {promoboxDescriptionComponent}
            </div>
            {props.dnxte_promobox_use_button === "on" && (
              <div className="dnxte-promobx-button">
                <Button
                  text={props.dnxte_promobox_button_text}
                  dynamicText={props.dynamic.dnxte_promobox_button_text}
                  link={props.dnxte_promobox_button_link}
                  linkTarget={props.dnxte_promobox_button_target}
                  classes="dnxte-promobx-btn"
                />
              </div>
            )}
          </div>
        </div>
        {props.dnxte_promobox_use_offer === "on" && (
          <div className="dnxte-promo-box-badge">
            <div className="dnxte-promobx-badge">
              <span>{props.dnxte_promobox_offer_text}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DiviNxtePromobox;
