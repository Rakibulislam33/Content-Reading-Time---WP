import React, { Component } from "react";
import $ from "jquery";
import { applyAllBgCss, applyCss, applyCustomSpacing } from "../base/common";
class NextAdvancedTabItem extends Component {
  isMounted = false;
  static slug = "dnxte_advanced_tab_item";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      ["tab_item_margin", "%%order_class%%.dnxte-ad-tab", "margin"],
      ["tab_item_padding", "%%order_class%%.dnxte-ad-tab", "padding"],
      ["tab_title_margin", "%%order_class%% .dnxte_tab_nav_title", "margin"],
      ["tab_title_padding", "%%order_class%% .dnxte_tab_nav_title", "padding"],
      ["tab_subtitle_margin", "%%order_class%% .dnxte_tab_nav_pra", "margin"],
      ["tab_subtitle_padding", "%%order_class%% .dnxte_tab_nav_pra", "padding"],
      [
        "tab_icon_margin",
        "%%order_class%% .dnxte_tab_nav_icon,%%order_class%% .dnxte_tab_nav_image",
        "margin",
      ],
      [
        "tab_icon_padding",
        "%%order_class%% .dnxte_tab_nav_icon,%%order_class%% .dnxte_tab_nav_image",
        "padding",
      ],
      [
        "tab_icon_active_margin",
        "%%order_class%% .dnxte_tab_nav_icon_active,%%order_class%% .dnxte_tab_nav_image_active",
        "margin",
      ],
      [
        "tab_icon_active_padding",
        "%%order_class%% .dnxte_tab_nav_icon_active,%%order_class%% .dnxte_tab_nav_image_active",
        "padding",
      ],
      ["body_item_margin", "%%order_class%%.dnxte-ad-panel", "margin"],
      ["body_item_padding", "%%order_class%%.dnxte-ad-panel", "padding"],
      [
        "body_title_margin",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_title",
        "margin",
      ],
      [
        "body_title_padding",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_title",
        "padding",
      ],
      [
        "body_description_margin",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_pra",
        "margin",
      ],
      [
        "body_description_padding",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_pra",
        "padding",
      ],
      [
        "body_image_margin",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_slidebar_one img",
        "margin",
      ],
      [
        "body_image_padding",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_slidebar_one img",
        "padding",
      ],
      [
        "body_icon_margin",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_slidebar_one span.dnxte_tab_content_icon",
        "margin",
      ],
      [
        "body_icon_padding",
        "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_slidebar_one span.dnxte_tab_content_icon",
        "padding",
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

    const flexDirectionObj = {
      center: "column",
      bottom: "column-reverse",
      left: "row",
      right: "row-reverse",
    };
    const itemJustifyContent = (placement) =>
      "left" === placement ? "initial" : "space-between";
    const iconJustifyContent = (placement) =>
      ["bottom", "right"].includes(placement) ? "flex-end" : "initial";

    const iconAlignment = {
      left: "flex-start",
      center: "center",
      right: "flex-end",
    };
    const moduleCss = [
      // tab icon placement
      [
        {
          desktop: `flex-direction:  ${flexDirectionObj[
            props.tab_icon_placement
          ] || "column"} !important;justify-content: ${iconJustifyContent(
            props.tab_icon_placement || "center"
          )};`,
          tablet: `flex-direction:  ${
            flexDirectionObj[props.tab_icon_placement_tablet]
          } !important;justify-content: ${iconJustifyContent(
            props.tab_icon_placement_tablet || "center"
          )}`,
          phone: `flex-direction:  ${
            flexDirectionObj[props.tab_icon_placement_phone]
          } !important;justify-content: ${iconJustifyContent(
            props.tab_icon_placement_phone || "center"
          )}`,
        },
        {
          desktop: "%%order_class%%.dnxte-ad-tab",
        },
        props.tab_icon_placement_last_edited,
      ],
      [
        {
          desktop: `flex-direction:  ${flexDirectionObj[
            props.body_image_placement
          ] || "column"} !important;justify-content: ${itemJustifyContent(
            props.body_image_placement || "center"
          )};`,
          tablet: `flex-direction:  ${
            flexDirectionObj[props.body_image_placement_tablet]
          } !important;justify-content: ${itemJustifyContent(
            props.body_image_placement_tablet || "center"
          )}`,
          phone: `flex-direction:  ${
            flexDirectionObj[props.body_image_placement_phone]
          } !important;justify-content: ${itemJustifyContent(
            props.body_image_placement_phone || "center"
          )}`,
        },
        {
          desktop: "%%order_class%%.dnxte-ad-panel",
        },
        props.body_image_placement_last_edited,
      ],
      [
        {
          desktop: `${
            "icon" === props.tab_use_icon_or_image ? "font-size" : "width"
          }: ${props.tabs_icon_width} !important;`,
          tablet: `${
            "icon" === props.tab_use_icon_or_image_tablet
              ? "font-size"
              : "width"
          }:  ${props.tabs_icon_width_tablet} !important;`,
          phone: `${
            "icon" === props.tab_use_icon_or_image_phone ? "font-size" : "width"
          }:  ${props.tabs_icon_width_phone} !important;`,
        },
        {
          desktop:
            "icon" === props.tab_use_icon_or_image
              ? "%%order_class%% span.dnxte_tab_nav_icon,%%order_class%% span.dnxte_tab_nav_icon_active"
              : "%%order_class%% .dnxte_tab_nav_image img,%%order_class%% .dnxte_tab_nav_image_active img",
        },
        props.tabs_icon_width_last_edited,
      ],
      [
        {
          desktop: `color: ${props.tab_icon_color} !important;`,
          tablet: `color:  ${props.tab_icon_color_tablet} !important;`,
          phone: `color:  ${props.tab_icon_color_phone} !important;`,
        },
        {
          desktop: "%%order_class%% span.dnxte_tab_nav_icon",
          hover: "%%order_class%%:hover span.dnxte_tab_nav_icon",
        },
        props.tab_icon_color_last_edited,
      ],
      [
        {
          desktop: `font-size: ${props.body_icon_size} !important;`,
          tablet: `font-size:  ${props.body_icon_size_tablet} !important;`,
          phone: `font-size:  ${props.body_icon_size_phone} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte_tab_content_slidebar_one .dnxte_tab_content_icon",
        },
        props.body_icon_size_last_edited,
      ],
      [
        {
          desktop: `color: ${props.body_icon_color} !important;`,
          tablet: `color:  ${props.body_icon_color_tablet} !important;`,
          phone: `color:  ${props.body_icon_color_phone} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte_tab_content_slidebar_one .dnxte_tab_content_icon",
        },
        props.body_icon_color_last_edited,
      ],
      [
        {
          desktop: `width: ${props.body_image_width ||
            "auto"};flex: 0 0 ${props.body_image_width || "50%"};`,
          tablet: `width:  ${
            props.body_image_width_tablet
          };flex: 0 0 ${props.body_image_width_tablet || "50%"};`,
          phone: `width:  ${
            props.body_image_width_phone
          };flex: 0 0 ${props.body_image_width_phone || "50%"};`,
        },
        {
          desktop: "%%order_class%% .dnxte_tab_content_slidebar_one",
        },
        props.body_image_width_last_edited,
      ],
      [
        {
          desktop: `max-width: ${props.body_image_max_width || "100%"};`,
          tablet: `max-width:  ${props.body_image_max_width_tablet};`,
          phone: `max-width:  ${props.body_image_max_width_phone}`,
        },
        {
          desktop: "%%order_class%% .dnxte_tab_content_slidebar_one",
        },
        props.body_image_max_width_last_edited,
      ],
      [
        {
          desktop: `align-self: ${iconAlignment[props.tabs_icon_alignment] ||
            "center"};`,
          tablet: `align-self:  ${
            iconAlignment[props.tabs_icon_alignment_tablet]
          };`,
          phone: `align-self:  ${
            iconAlignment[props.tabs_icon_alignment_phone]
          }`,
        },
        {
          desktop:
            "%%order_class%% span.dnxte_tab_nav_icon,%%order_class%% .dnxte_tab_nav_image,%%order_class%% span.dnxte_tab_nav_icon_active,%%order_class%% .dnxte_tab_nav_image_active",
        },
        props.tabs_icon_alignment_last_edited,
      ],
      [
        {
          desktop: `justify-content: ${iconAlignment[
            props.body_icon_alignment
          ] || "center"};width: 100%;`,
          tablet: `justify-content:  ${
            iconAlignment[props.body_icon_alignment_tablet]
          };width: 100%;`,
          phone: `justify-content:  ${
            iconAlignment[props.body_icon_alignment_phone]
          };width: 100%;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte_tab_content_slidebar_one.dnxte_tab_content_icon_wrapper",
        },
        props.body_icon_alignment_last_edited,
      ],
      [
        {
          desktop: `align-self: ${iconAlignment[props.body_image_alignment] ||
            "center"};`,
          tablet: `align-self:  ${
            iconAlignment[props.body_image_alignment_tablet]
          };`,
          phone: `align-self:  ${
            iconAlignment[props.body_image_alignment_phone]
          }`,
        },
        {
          desktop:
            "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_slidebar_one",
        },
        props.body_image_alignment_last_edited,
      ],
      [
        {
          desktop: `color: ${props.button_icon_color};`,
          tablet: `color:  ${props.button_icon_color_tablet}`,
          phone: `color:  ${props.button_icon_color_phone}`,
        },
        {
          desktop: "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_btn span",
        },
        props.button_icon_color_last_edited,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );
    const moduleBgCss = {
      tab_: {
        desktop: "%%order_class%%.dnxte-ad-tab",
        hover: "%%order_class%%.dnxte-ad-tab:hover",
      },
      content_: {
        desktop: "%%order_class%%.dnxte-ad-panel",
        hover: "%%order_class%%.dnxte-ad-panel:hover",
      },
    };
    applyAllBgCss(css, props, moduleBgCss);

    // Image filter
    css.push([
      {
        selector: "%%order_class%% .dnxte_tab_content_slidebar_one img",
        declaration: `filter: hue-rotate(${props.child_filter_hue_rotate ||
          "0deg"}) saturate(${props.child_filter_saturate ||
          "100%"}) brightness(${props.child_filter_brightness ||
          "100%"}) contrast(${props.child_filter_contrast ||
          "100%"}) invert(${props.child_filter_invert ||
          "0%"}) sepia(${props.child_filter_sepia ||
          "0%"}) opacity(${props.child_filter_opacity ||
          "100%"}) blur(${props.child_filter_blur ||
          "0px"});mix-blend-mode: ${props.child_mix_blend_mode || "normal"};`,
      },
    ]);
    // Image filter end

    // remove margin right from image, when image placement is top or bottom

    const body_image_placement = props.body_image_placement || "center";
    const body_image_placement_tablet = props.body_image_placement_tablet || "";
    const body_image_placement_phone = props.body_image_placement_phone || "";
    const body_image_placement_selector =
      "%%order_class%%.dnxte-ad-panel .dnxte_tab_content_slidebar_one";
    const updatePlacement = ["center", "bottom"];

    if (updatePlacement.includes(body_image_placement)) {
      css.push([
        {
          selector: body_image_placement_selector,
          declaration: "margin-right: 0;",
        },
      ]);
    }
    if (updatePlacement.includes(body_image_placement_tablet)) {
      css.push([
        {
          selector: body_image_placement_selector,
          declaration: "margin-right: 0;",
          device: "tablet",
        },
      ]);
    }
    if (updatePlacement.includes(body_image_placement_phone)) {
      css.push([
        {
          selector: body_image_placement_selector,
          declaration: "margin-right: 0;",
          device: "phone",
        },
      ]);
    }

    return css;
  }

  constructor(props) {
    super(props);

    this.state = {
      layout: null,
      isLoaded: false,
      error: null,
      divi_library: props.divi_library,
    };
  }

  componentDidMount() {
    const { props } = this;

    if ("on" === props.use_divi_library) this.getLayouts(+props.divi_library);
  }

  getLayouts = (layoutId) => {
    const component = this;
    component.isMounted = true;
    let getLayout = null;

    if (getLayout) getLayout.abort();
    getLayout = $.ajax({
      url: window.et_fb_options.ajaxurl,
      type: "POST",
      data: {
        action: "dnxte_get_divi_library_options",
        layoutId,
        et_admin_load_nonce: window.et_fb_options.et_admin_load_nonce,
      },
      success: function(res) {
        if (component.isMounted) {
          component.setState({
            isLoaded: true,
            layout: res,
          });
        }
      },
      error: function() {
        component.setState({
          isLoaded: true,
          error: "There is an error",
        });
      },
    });
  };
  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const { layout, divi_library } = this.state;

    return "on" === this.props.use_divi_library &&
      "" !== divi_library &&
      null !== layout ? (
      <div
        dangerouslySetInnerHTML={{
          __html: layout.post_content_html,
        }}
      />
    ) : null;
  }
}

export default NextAdvancedTabItem;
