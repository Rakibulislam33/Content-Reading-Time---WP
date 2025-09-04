import React, { Component } from "react";
import { applyCss, applyAllBgCss, applyCustomSpacing } from "../base/common";
import "./style.css";
import {
  TabBody,
  applyCompositTabsWrap,
  applyCompositWidthCss,
  applyCompositPlacementCss,
} from "./Components";

class NextAdvancedTab extends Component {
  static slug = "dnxte_advanced_tab";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      ["tab_wrapper_margin", "%%order_class%% .RRT__tabs", "margin"],
      [
        "body_wrapper_margin",
        "%%order_class%% .RRT__panel:not(.dnxte_tab_content_layout)",
        "margin",
      ],
      [
        "body_wrapper_padding",
        "%%order_class%% .RRT__panel:not(.dnxte_tab_content_layout)",
        "padding",
        false,
      ],
    ];

    customMarginPadding.forEach((element) => {
      applyCustomSpacing(
        props,
        css,
        element[0],
        element[1],
        element[2],
        element[3]
      );
    });

    const flexDirectionWrapper = {
      center: "column",
      bottom: "column-reverse",
      left: "row",
      right: "row-reverse",
    };
    const flexDirectionUl = {
      center: "row",
      bottom: "row",
      left: "column",
      right: "column",
    };

    // const contentAlignment = {
    //   left: "flex-start",
    //   center: "center",
    //   right: "flex-end",
    // };
    // const iconJustifyContent = (placement) =>
    //   ["bottom", "right"].includes(placement) ? "flex-end" : "initial";
    const moduleCss = [
      // animation name
      [
        {
          desktop: `animation-name:  ${props.hover_effect} !important;-webkit-animation-name: ${props.hover_effect} !important;`,
          tablet: `animation-name:  ${props.hover_effect_tablet} !important;-webkit-animation-name: ${props.hover_effect_tablet} !important;`,
          phone: `animation-name:  ${props.hover_effect_phone} !important;-webkit-animation-name: ${props.hover_effect_phone} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte_tab_content_active",
        },
        props.hover_effect_last_edited,
      ],
      // animation duration
      [
        {
          desktop: `animation-duration:  ${props.hover_animation_duration}s !important;-webkit-animation-duration: ${props.hover_animation_duration}s !important;`,
          tablet: `animation-duration:  ${props.hover_animation_duration_tablet}s !important;-webkit-animation-duration: ${props.hover_animation_duration_tablet}s !important;`,
          phone: `animation-duration:  ${props.hover_animation_duration_phone}s !important;-webkit-animation-duration: ${props.hover_animation_duration_phone}s !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte_tab_content_active",
        },
        props.hover_effect_last_edited,
      ],
      [
        {
          desktop: `flex-direction:  ${
            flexDirectionWrapper[props.tab_item_placement || "center"]
          };justify-content: ${
            "right" === props.tab_item_placement ? "space-between" : "initial"
          }`,
          tablet: `flex-direction:  ${
            flexDirectionWrapper[props.tab_item_placement_tablet || "center"]
          };justify-content: ${
            "right" === props.tab_item_placement ? "space-between" : "initial"
          }`,
          phone: `flex-direction:  ${
            flexDirectionWrapper[props.tab_item_placement_phone || "center"]
          };justify-content: ${
            "right" === props.tab_item_placement ? "space-between" : "initial"
          }`,
        },
        {
          desktop: "%%order_class%% .RRT__container",
        },
        props.tab_item_placement_last_edited,
      ],
      [
        {
          desktop: `flex-direction:  ${
            flexDirectionUl[props.tab_item_placement || "center"]
          };`,
          tablet: `flex-direction:  ${
            flexDirectionUl[props.tab_item_placement_tablet || "center"]
          };`,
          phone: `flex-direction:  ${
            flexDirectionUl[props.tab_item_placement_phone || "center"]
          };`,
        },
        {
          desktop: "%%order_class%% .RRT__container .RRT__tabs",
        },
        props.tab_item_placement_last_edited,
      ],
      [
        {
          desktop: `font-size: ${props.tab_icon_size || "20px"};`,
          tablet: `font-size:  ${props.tab_icon_size_tablet};`,
          phone: `font-size:  ${props.tab_icon_size_phone}`,
        },
        {
          desktop: "%%order_class%% span.dnxte_tab_nav_icon",
        },
        props.tab_icon_size_last_edited,
      ],
      [
        {
          desktop: `color: ${props.tab_icon_color};`,
          tablet: `color:  ${props.tab_icon_color_tablet};`,
          phone: `color:  ${props.tab_icon_color_phone}`,
        },
        {
          desktop:
            "%%order_class%% .RRT__tabs .dnxte_advanced_tab_item span.dnxte_tab_nav_icon",
        },
        props.tab_icon_color_last_edited,
      ],
      [
        {
          desktop: `color: ${props.tab_icon_active_color} !important;`,
          tablet: `color:  ${props.tab_icon_active_color_tablet} !important;`,
          phone: `color:  ${props.tab_icon_active_color_phone} !important;`,
        },
        {
          desktop:
            "%%order_class%% .RRT__tabs .RRT__tab--selected span.dnxte_tab_nav_icon_active",
        },
        props.tab_icon_active_color_last_edited,
      ],
      [
        {
          desktop: `font-size: ${props.body_icon_size || "20px"};`,
          tablet: `font-size:  ${props.body_icon_size_tablet};`,
          phone: `font-size:  ${props.body_icon_size_phone}`,
        },
        {
          desktop:
            "%%order_class%% .dnxte_tab_content_slidebar_one .dnxte_tab_content_icon",
        },
        props.body_icon_size_last_edited,
      ],
      [
        {
          desktop: `color: ${props.body_icon_color || "20px"};`,
          tablet: `color:  ${props.body_icon_color_tablet};`,
          phone: `color:  ${props.body_icon_color_phone}`,
        },
        {
          desktop:
            "%%order_class%% .dnxte_tab_content_slidebar_one .dnxte_tab_content_icon",
        },
        props.body_icon_color_last_edited,
      ],
      [
        {
          desktop: `text-align: ${props.tab_content_alignment || "left"};`,
          tablet: `text-align: ${props.tab_content_alignment_tablet};`,
          phone: `text-align: ${props.tab_content_alignment_phone};`,
        },
        {
          desktop: "%%order_class%% .RRT__tabs .RRT__tab span",
        },
        props.tab_content_alignment_last_edited,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    const moduleBgCss = {
      tab_container_: {
        desktop: "%%order_class%% .RRT__tabs",
        hover: "%%order_class%% .RRT__tabs:hover",
      },
      tab_single_: {
        desktop: "%%order_class%% .dnxte-ad-tab:not(.RRT__tab--selected)",
        hover: "%%order_class%% .dnxte-ad-tab:not(.RRT__tab--selected):hover",
        important: false,
      },
      tab_active_: {
        desktop: "%%order_class%% .dnxte-ad-tab.RRT__tab--selected",
        hover: "%%order_class%% .dnxte-ad-tab.RRT__tab--selected:hover",
      },
      content_container_: {
        desktop: "%%order_class%% .RRT__panel",
        hover: "%%order_class%% .RRT__panel:hover",
      },
    };

    applyAllBgCss(css, props, moduleBgCss);
    applyCompositTabsWrap("use_tabs_wrap", props, css);
    applyCompositWidthCss(
      "tabs_min_width",
      "tabs_max_width",
      "use_tabs_fullwidth",
      css,
      props
    );
    applyCompositPlacementCss("tabs_item_alignment", css, props);
    return css;
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      layoutIds: {},
      orderClasses: null,
    };
  }

  render() {
    const { props } = this;

    return (
      <>
        <TabBody
          content={props.content}
          tabEffect={props.tab_hover_effect || "none"}
        />
        <div style={{ display: "none" }}>{props.content}</div>
      </>
    );
  }
}

export default NextAdvancedTab;
