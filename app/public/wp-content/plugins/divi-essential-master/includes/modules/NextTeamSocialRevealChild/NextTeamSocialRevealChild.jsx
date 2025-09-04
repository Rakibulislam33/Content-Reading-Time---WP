// External Dependencies
import React, { Component } from "react";
import { applyPsuedoIconCss, IconUsingPsuedo } from "../base/common";
// Internal Dependencies
import "./style.css";

class NextTeamSocialRevealChild extends Component {
  static slug = "dnxte_team_social_reveal_child";

  static css(props) {
    const additionalCss = [];

    if ("social-items" === props.dnext_social_network) {
      const selector = "%%order_class%% .dnext-social-items span::before";
      applyPsuedoIconCss("dnext_social_icon", selector, props, additionalCss);
    }

    // Social Icon Color
    if ("on|hover" === props.teamsorev_icon_color__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span:hover",
          declaration: `color: ${props.teamsorev_icon_color__hover};`,
        },
      ]);
    } else if ("on|tablet" === props.teamsorev_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `color: ${props.teamsorev_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.teamsorev_icon_color_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `color: ${props.teamsorev_icon_color_phone};`,
          device: "phone",
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `color: ${props.teamsorev_icon_color};`,
        },
      ]);
    }

    if ("on|hover" === props.teamsorev_icon_font_size__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `font-size: ${props.teamsorev_icon_font_size__hover};`,
        },
      ]);
    } else if ("on|tablet" === props.teamsorev_icon_font_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `font-size: ${props.teamsorev_icon_font_size_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.teamsorev_icon_font_size_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `font-size: ${props.teamsorev_icon_font_size_phone};`,
          device: "phone",
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxte-teamsorev-sn a span",
          declaration: `font-size: ${props.teamsorev_icon_font_size};`,
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

    if (socialbgColor.includes(props.dnext_social_network)) {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-${props.dnext_social_network} span::before`,
          declaration: `background-color: ${props.background_color} !important;`,
        },
      ]);
    }

    return additionalCss;
  }

  render() {
    const { props } = this;

    let utils = window.ET_Builder.API.Utils;

    const socialIcon = (
      <IconUsingPsuedo
        utils={utils}
        iconSlug="dnext_social_icon"
        props={props}
      />
    );

    let skypeUrl = `skype:` + props.skype_url + `?` + props.skype_action;

    const teamsorevUrl =
      "skype" === props.dnext_social_network ? skypeUrl : props.url;

    const teamsorevTarget =
      "on" === props.teamsorev_link_new_window ? "_blank" : "";

    const socialAddClass = props.dnext_social_network
      ? `dnext-` + props.dnext_social_network
      : "dnext-facebook";

    return (
      <li className="dnxte-teamsorev-sn">
        <a
          href={teamsorevUrl}
          className={socialAddClass}
          target={teamsorevTarget}
        >
          {socialIcon}
        </a>
      </li>
    );
  }
}

export default NextTeamSocialRevealChild;
