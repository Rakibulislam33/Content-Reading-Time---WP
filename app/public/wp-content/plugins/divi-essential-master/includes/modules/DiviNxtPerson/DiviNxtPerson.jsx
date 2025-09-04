// External Dependencies
import React, { Component } from "react";

// Internal Dependencies
import "../base/get_responsive_css";
import "./style.css";

import { Image, Title } from "../base/common";

class DnxtPerson extends Component {
  static slug = "dnxte_person";

  static css(props) {
    const css = [];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.person_image_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_image_margin",
          "%%order_class%% .dnxte-nextperson-img",
          "margin"
        )
      );
    }

    if ("" !== props.person_image_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_image_padding",
          "%%order_class%% .dnxte-nextperson-img",
          "padding"
        )
      );
    }

    if ("" !== props.person_content_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_content_margin",
          "%%order_class%% .dnxte-nextperson-wrapper",
          "margin"
        )
      );
    }

    if ("" !== props.person_content_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_content_padding",
          "%%order_class%% .dnxte-nextperson-wrapper",
          "padding"
        )
      );
    }

    if ("" !== props.person_title_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_title_margin",
          "%%order_class%% .dnxte-nextperson-header",
          "margin"
        )
      );
    }

    if ("" !== props.person_title_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_title_padding",
          "%%order_class%% .dnxte-nextperson-header",
          "padding"
        )
      );
    }

    if ("" !== props.person_position_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_position_margin",
          "%%order_class%% .dnxte-nextperson-pos",
          "margin"
        )
      );
    }

    if ("" !== props.person_position_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_position_padding",
          "%%order_class%% .dnxte-nextperson-pos",
          "padding"
        )
      );
    }

    if ("" !== props.person_body_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_body_margin",
          "%%order_class%% .dnxte-nextperson-wrapper p:last-of-type",
          "margin"
        )
      );
    }

    if ("" !== props.person_body_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "person_body_padding",
          "%%order_class%% .dnxte-nextperson-wrapper p:last-of-type",
          "padding"
        )
      );
    }

    // Image Width
    if ("on|tablet" === props.person_img_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-nextperson-img img",
          declaration: `max-width: ${props.person_img_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.person_img_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-nextperson-img img",
          declaration: `max-width: ${props.person_img_width_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.person_img_width__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-nextperson-img img",
          declaration: `max-width: ${props.person_img_width__hover}`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-nextperson-img img",
          declaration: `max-width: ${props.person_img_width};`,
        },
      ]);
    }

    // Content BG Color
    if ("off" !== props.person_bgc_show_hide) {
      if ("on|tablet" === props.person_bgc_color_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-nextperson-wrapper",
            declaration: `background: ${props.person_bgc_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.person_bgc_color_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte-nextperson-wrapper",
            declaration: `background: ${props.person_bgc_color_phone};`,
            device: "phone",
          },
        ]);
      } else {
        css.push([
          {
            selector: "%%order_class%% .dnxte-nextperson-wrapper",
            declaration: `background: ${props.person_bgc_color};`,
          },
        ]);
      }
    }

    // Content Gradient
    if ("off" !== props.person_gradient_show_hide) {
      let personGradientDirection =
        props.person_gradient_type === "linear-gradient"
          ? props.person_gradient_type_linear_direction
          : props.person_gradient_type_radial_direction;
      let personGradientColorOne = props.person_gradient_color_one;
      let personGradientColorTwo = props.person_gradient_color_two;
      let personGradientStartPosition = props.person_gradient_start_position;
      let personGradientEndPosition = props.person_gradient_end_position;

      let personGradientdient = `background: ${props.person_gradient_type}(${personGradientDirection}, ${personGradientColorOne} ${personGradientStartPosition}, ${personGradientColorTwo} ${personGradientEndPosition}) !important;`;

      css.push([
        {
          selector: `%%order_class%% .dnxte-nextperson-wrapper`,
          declaration: personGradientdient,
        },
      ]);
    }

    return css;
  }

  _person_description() {
    const props = this.props;

    // Description Dynamic Content
    const teampersoncontentDescription = props.dynamic.teamperson_content;
    let teampersonDescriptionComponent = teampersoncontentDescription.render();

    return (
      <div className="dnxte-nextperson-wrapper">
        <Title
          title={props.teamperson_name}
          dynamicTitle={props.dynamic.teamperson_name}
          tag={props.header_level || "h4"}
          classes="dnxte-nextperson-header"
        />
        <Title
          title={props.teamperson_position}
          dynamicTitle={props.dynamic.teamperson_position}
          tag="p"
          classes="dnxte-nextperson-pos"
        />
        <div className="dnxte-nextperson-pra">
          {teampersonDescriptionComponent}
        </div>
      </div>
    );
  }

  render() {
    const props = this.props;
    const personSocialItem = this.props.content;

    let social_item_alignment = props.person_alignment
      ? "dnext_person_social_alignment_" + props.person_alignment
      : "";
    let social_item_alignment_tablet = props.person_alignment_tablet
      ? "dnext_person_social_alignment_tablet_" + props.person_alignment_tablet
      : "";
    let social_item_alignment_phone = props.person_alignment_phone
      ? "dnext_person_social_alignment_phone_" + props.person_alignment_phone
      : "";

    let personTop = "";
    let personLeft = "";
    if ("person-left" === props.person_image_position) {
      personLeft = props.person_left;
    } else {
      personTop = props.person_top;
    }

    return (
      <div
        className={`dnxte-nextperson-team-wrap dnxte-nextperson-${personLeft}`}
      >
        <div className={`dnxte-nextperson-img dnxte-nextperson-${personTop}`}>
          <Image
            dynamicImg={props.dynamic.teamperson_image}
            lastEdited={props.teamperson_image_last_edited}
            hoverEnabled={props.teamperson_image__hover_enabled}
            imageTablet={props.dynamic.teamperson_image_tablet}
            imagePhone={props.dynamic.teamperson_image_phone}
            imageHover={props.dynamic.teamperson_image__hover}
            imgAlt={props.dynamic.teamperson_name}
          />
        </div>
        <div className="dnxte-nextperson-des">
          {this._person_description()}
          <ul
            className={`dnxte-nextperson-social ${social_item_alignment} ${social_item_alignment_tablet} ${social_item_alignment_phone}`}
          >
            {personSocialItem}
          </ul>
        </div>
      </div>
    );
  }
}

export default DnxtPerson;
