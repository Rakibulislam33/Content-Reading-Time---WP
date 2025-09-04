// External Dependencies
import React, { Component } from "react";
import { applyPsuedoIconCss, IconUsingPsuedo } from "../base/common";
// Internal Dependencies
import "./style.css";

class NextTeamOverlayCardItem extends Component {
  static slug = "dnxte_team_overlay_card_item";

  static css(props) {
    const css = [];

    if ("social-items" === props.teamovl_card_social_network) {
      const selector =
        "%%order_class%% .dnext-teamovl-card-social-items span::before";
      applyPsuedoIconCss("teamovl_card_social_icon", selector, props, css);
    }

    // Social Icon Color
    if ("on|hover" === props.teamovl_card_icon_color__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a:hover",
          declaration: `color: ${props.teamovl_card_icon_color__hover};`,
        },
      ]);
    } else if ("on|tablet" === props.teamovl_card_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a",
          declaration: `color: ${props.teamovl_card_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.teamovl_card_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a",
          declaration: `color: ${props.teamovl_card_icon_color_phone};`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a",
          declaration: `color: ${props.teamovl_card_icon_color};`,
        },
      ]);
    }

    if ("on|hover" === props.teamovl_card_icon_font_size__hover_enabled) {
      css.push([
        {
          selector:
            "%%order_class%% .dnext-teamovl-card-sn a span:hover::before",
          declaration: `font-size: ${props.teamovl_card_icon_font_size__hover}; width: calc(${props.teamovl_card_icon_font_size__hover} * 2); height: calc(${props.teamovl_card_icon_font_size__hover} * 2); line-height: calc(${props.teamovl_card_icon_font_size__hover} * 2);`,
        },
      ]);
    } else if ("on|tablet" === props.teamovl_card_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a span::before",
          declaration: `font-size: ${props.teamovl_card_icon_font_size_tablet}; width: calc(${props.teamovl_card_icon_font_size_tablet} * 2); height: calc(${props.teamovl_card_icon_font_size_tablet} * 2); line-height: calc(${props.teamovl_card_icon_font_size_tablet} * 2);`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.teamovl_card_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a span::before",
          declaration: `font-size: ${props.teamovl_card_icon_font_size_phone}; width: calc(${props.teamovl_card_icon_font_size_phone} * 2); height: calc(${props.teamovl_card_icon_font_size_phone} * 2); line-height: calc(${props.teamovl_card_icon_font_size_phone} * 2);`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-card-sn a span::before",
          declaration: `font-size: ${props.teamovl_card_icon_font_size}; width: calc(${props.teamovl_card_icon_font_size} * 2); height: calc(${props.teamovl_card_icon_font_size} * 2 ); line-height: calc(${props.teamovl_card_icon_font_size} * 2);`,
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

    if (socialbgColor.includes(props.teamovl_card_social_network)) {
      css.push([
        {
          selector: `%%order_class%% .dnext-teamovl-card${props.teamovl_card_social_network} span::before`,
          declaration: `background-color: ${props.background_color} !important;`,
        },
      ]);
    }

    return css;
  }

  render() {
    const { props } = this;

    let utils = window.ET_Builder.API.Utils;

    const teamovlCardSocialIcon = (
      <IconUsingPsuedo
        utils={utils}
        iconSlug="teamovl_card_social_icon"
        props={props}
      />
    );

    let skypeUrl = `skype:` + props.skype_url + `?` + props.skype_action;

    const teamovlCardUrl =
      "skype" === props.teamovl_card_social_network ? skypeUrl : props.url;

    const teamovlCardTarget =
      "on" === props.teamovl_card_link_new_window ? "_blank" : "";

    const teamovlCardSocialAddClass = props.teamovl_card_social_network
      ? `dnext-teamovl-card-` + props.teamovl_card_social_network
      : "dnext-teamovl-card-facebook";

    return (
      <li className="dnext-teamovl-card-sn">
        <a
          href={teamovlCardUrl}
          className={teamovlCardSocialAddClass}
          target={teamovlCardTarget}
        >
          {teamovlCardSocialIcon}
        </a>
      </li>
    );
  }
}

export default NextTeamOverlayCardItem;
