// External Dependencies
import React, { Component } from "react";
import { applyPsuedoIconCss, IconUsingPsuedo } from "../base/common";
// Internal Dependencies
import "./style.css";

class NextTeamOverlayItem extends Component {
  static slug = "dnxte_team_overlay_item";

  static css(props) {
    const css = [];

    if ("social-items" === props.teamovl_social_network) {
      const selector =
        "%%order_class%% .dnext-teamovl-social-items span::before";
      applyPsuedoIconCss("teamovl_social_icon", selector, props, css);
    }

    if ("" !== props.teamovl_icon_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "teamovl_icon_margin",
          "%%order_class%% .dnext-teamovl-social-icon span",
          "margin"
        )
      );
    }

    if ("" !== props.teamovl_icon_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "teamovl_icon_padding",
          "%%order_class%% .dnext-teamovl-social-icon span::before",
          "padding"
        )
      );
    }

    // Social Icon Color
    if ("on|hover" === props.teamovl_icon_color__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a:hover",
          declaration: `color: ${props.teamovl_icon_color__hover};`,
        },
      ]);
    } else if ("on|tablet" === props.teamovl_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a",
          declaration: `color: ${props.teamovl_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.teamovl_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a",
          declaration: `color: ${props.teamovl_icon_color_phone};`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a",
          declaration: `color: ${props.teamovl_icon_color};`,
        },
      ]);
    }

    if ("on|hover" === props.teamovl_icon_font_size__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a span:hover::before",
          declaration: `font-size: ${props.teamovl_icon_font_size__hover}; width: calc(${props.teamovl_icon_font_size__hover} * 2); height: calc(${props.teamovl_icon_font_size__hover} * 2); line-height: calc(${props.teamovl_icon_font_size__hover} * 2);`,
        },
      ]);
    } else if ("on|tablet" === props.teamovl_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a span::before",
          declaration: `font-size: ${props.teamovl_icon_font_size_tablet}; width: calc(${props.teamovl_icon_font_size_tablet} * 2); height: calc(${props.teamovl_icon_font_size_tablet} * 2); line-height: calc(${props.teamovl_icon_font_size_tablet} * 2);`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.teamovl_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a span::before",
          declaration: `font-size: ${props.teamovl_icon_font_size_phone}; width: calc(${props.teamovl_icon_font_size_phone} * 2); height: calc(${props.teamovl_icon_font_size_phone} * 2); line-height: calc(${props.teamovl_icon_font_size_phone} * 2);`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnext-teamovl-sn a span::before",
          declaration: `font-size: ${props.teamovl_icon_font_size}; width: calc(${props.teamovl_icon_font_size} * 2); height: calc(${props.teamovl_icon_font_size} * 2 ); line-height: calc(${props.teamovl_icon_font_size} * 2);`,
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

    if (socialbgColor.includes(props.teamovl_social_network)) {
      css.push([
        {
          selector: `%%order_class%% ${props.teamovl_social_network} span::before`,
          declaration: `background-color: ${props.background_color} !important;`,
        },
      ]);
    }

    return css;
  }

  render() {
    const props = this.props;
    let utils = window.ET_Builder.API.Utils;

    const teamOvlSocialIcon = (
      <IconUsingPsuedo
        utils={utils}
        iconSlug="teamovl_social_icon"
        props={props}
      />
    );

    let skypeUrl = `skype:` + props.skype_url + `?` + props.skype_action;

    const teamovlUrl =
      "skype" === props.teamovl_social_network ? skypeUrl : props.url;

    const teamovlTarget =
      "on" === props.teamovl_link_new_window ? "_blank" : "";

    const teamovlSocialAddClass = props.teamovl_social_network
      ? `dnext-teamovl-social-icon dnext-teamovl-` +
        props.teamovl_social_network
      : "dnext-teamovl-social-icon dnext-teamovl-facebook";

    return (
      <li className="dnext-teamovl-sn">
        <a
          href={teamovlUrl}
          className={teamovlSocialAddClass}
          target={teamovlTarget}
        >
          {teamOvlSocialIcon}
        </a>
      </li>
    );
  }
}

export default NextTeamOverlayItem;
