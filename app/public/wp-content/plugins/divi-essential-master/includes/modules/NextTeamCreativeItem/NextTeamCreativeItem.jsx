// External Dependencies
import React, { Component } from "react";
import { applyPsuedoIconCss, IconUsingPsuedo } from "../base/common";
// Internal Dependencies
import "./style.css";
class NextTeamCreativeItem extends Component {
  static slug = "dnxte_team_creative_item";

  static css(props) {
    const css = [];

    // icon settings
    if ("social-items" === props.team_creative_social_network) {
      const selector =
        "%%order_class%% .dnext-team-creative-social-items span::before";
      applyPsuedoIconCss("team_creative_social_icon", selector, props, css);
    }

    // Social Icon Color
    if ("on|hover" === props.team_creative_icon_color__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a:hover",
          declaration: `color: ${props.team_creative_icon_color__hover};`,
        },
      ]);
    } else if ("on|tablet" === props.team_creative_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a",
          declaration: `color: ${props.team_creative_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.team_creative_icon_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a",
          declaration: `color: ${props.team_creative_icon_color_phone};`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a",
          declaration: `color: ${props.team_creative_icon_color};`,
        },
      ]);
    }

    if ("on|hover" === props.team_creative_icon_font_size__hover_enabled) {
      css.push([
        {
          selector:
            "%%order_class%% .dnext-team-creative-sn a span:hover::before",
          declaration: `font-size: ${props.team_creative_icon_font_size__hover}; width: calc(${props.team_creative_icon_font_size__hover} * 2); height: calc(${props.team_creative_icon_font_size__hover} * 2); line-height: calc(${props.team_creative_icon_font_size__hover} * 2);`,
        },
      ]);
    } else if ("on|tablet" === props.team_creative_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a span::before",
          declaration: `font-size: ${props.team_creative_icon_font_size_tablet}; width: calc(${props.team_creative_icon_font_size_tablet} * 2); height: calc(${props.team_creative_icon_font_size_tablet} * 2); line-height: calc(${props.team_creative_icon_font_size_tablet} * 2);`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.team_creative_icon_font_size_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a span::before",
          declaration: `font-size: ${props.team_creative_icon_font_size_phone}; width: calc(${props.team_creative_icon_font_size_phone} * 2); height: calc(${props.team_creative_icon_font_size_phone} * 2); line-height: calc(${props.team_creative_icon_font_size_phone} * 2);`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnext-team-creative-sn a span::before",
          declaration: `font-size: ${props.team_creative_icon_font_size}; width: calc(${props.team_creative_icon_font_size} * 2); height: calc(${props.team_creative_icon_font_size} * 2 ); line-height: calc(${props.team_creative_icon_font_size} * 2);`,
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

    if (socialbgColor.includes(props.team_creative_social_network)) {
      css.push([
        {
          selector: `%%order_class%% ${props.team_creative_social_network} span::before`,
          declaration: `background-color: ${props.background_color} !important;`,
        },
      ]);
    }

    return css;
  }

  render() {
    const props = this.props;
    let utils = window.ET_Builder.API.Utils;

    const teamCreativeSocialIcon = (
      <IconUsingPsuedo
        utils={utils}
        iconSlug="team_creative_social_icon"
        props={props}
      />
    );

    let skypeUrl = `skype:` + props.skype_url + `?` + props.skype_action;

    const teamCreativeUrl =
      "skype" === props.team_creative_social_network ? skypeUrl : props.url;

    const teamovlCardTarget =
      "on" === props.team_creative_link_new_window ? "_blank" : "";

    const teamCreativeSocialAddClass = props.team_creative_social_network
      ? `dnext-team-creative-` + props.team_creative_social_network
      : "dnext-team-creative-facebook";

    return (
      <li className="dnext-team-creative-sn">
        <a
          href={teamCreativeUrl}
          className={teamCreativeSocialAddClass}
          target={teamovlCardTarget}
        >
          {teamCreativeSocialIcon}
        </a>
      </li>
    );
  }
}

export default NextTeamCreativeItem;
