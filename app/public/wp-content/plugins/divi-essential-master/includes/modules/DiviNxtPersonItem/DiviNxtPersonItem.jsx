// External Dependencies
import React, { Component } from "react";

// Internal Dependencies
import "./style.css";

class DnxtPersonItem extends Component {
  static slug = "dnxte_person_item";

  static css(props) {
    const css = [];

    // Social Icon Color
    if ("on|hover" === props.person_icon_color__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a:hover",
          declaration: `color: ${props.person_icon_color__hover};`,
        },
      ]);
    } else if ("on|tablet" === props.person_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a",
          declaration: `color: ${props.person_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.person_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a",
          declaration: `color: ${props.person_icon_color_phone};`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a",
          declaration: `color: ${props.person_icon_color};`,
        },
      ]);
    }

    if ("on|hover" === props.person_icon_font_size__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a span:hover::before",
          declaration: `font-size: ${props.person_icon_font_size__hover}; width: calc(${props.person_icon_font_size__hover} * 2); height: calc(${props.person_icon_font_size__hover} * 2); line-height: calc(${props.person_icon_font_size__hover} * 2)`,
        },
      ]);
    } else if ("on|tablet" === props.person_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a span::before",
          declaration: `font-size: ${props.person_icon_font_size_tablet}; width: calc(${props.person_icon_font_size_tablet} * 2); height: calc(${props.person_icon_font_size_tablet} * 2); line-height: calc(${props.person_icon_font_size_tablet} * 2)`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.person_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a span::before",
          declaration: `font-size: ${props.person_icon_font_size_phone}; width: calc(${props.person_icon_font_size_phone} * 2); height: calc(${props.person_icon_font_size_phone} * 2); line-height: calc(${props.person_icon_font_size_phone} * 2)`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-person-sn a span::before",
          declaration: `font-size: ${props.person_icon_font_size}; width: calc(${props.person_icon_font_size} * 2); height: calc(${props.person_icon_font_size} * 2); line-height: calc(${props.person_icon_font_size} * 2)`,
        },
      ]);
    }

    const socialbgColor = [
      "facebook",
      "twitter",
      "pinterest",
      "linkedin",
      "tumblr",
      "instagram",
      "skype",
      "flikr",
      "dribbble",
      "youtube",
      "vimeo",
    ];

    if (socialbgColor.includes(props.person_social_network)) {
      css.push([
        {
          selector: `%%order_class%% .dnext-person${props.person_social_network} span::before`,
          declaration: `background-color: ${props.background_color} !important;`,
        },
      ]);
    }

    return css;
  }

  render() {
    const props = this.props;

    let utils = window.ET_Builder.API.Utils;
    let dataIcon = props.person_social_icon
      ? utils.processFontIcon(props.person_social_icon)
      : false;

    const personSocialIcon = <span className="" data-icon={dataIcon}></span>;

    let skypeUrl = `skype:` + props.skype_url + `?` + props.skype_action;

    const personUrl =
      "skype" === props.person_social_network ? skypeUrl : props.url;

    const personTarget = "on" === props.person_link_new_window ? "_blank" : "";

    const personSocialAddClass = props.person_social_network
      ? `dnext-person-` + props.person_social_network
      : "dnext-person-facebook";

    return (
      <li className="dnxte-person-sn">
        <a
          href={personUrl}
          className={personSocialAddClass}
          target={personTarget}
        >
          {personSocialIcon}
        </a>
      </li>
    );
  }
}

export default DnxtPersonItem;
