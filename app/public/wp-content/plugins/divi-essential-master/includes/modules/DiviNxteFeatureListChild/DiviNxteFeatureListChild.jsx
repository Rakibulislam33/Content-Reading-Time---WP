import { Component } from "react";
import { applyCss, applyCustomSpacing } from "../base/common";

class DiviNxteFeatureListChild extends Component {
  static slug = "dnxte_feature_list_child";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      [
        "dnxte_feature_list_icon_margin",
        "%%order_class%% .dnxte-feature-list-img .dnxte-feature-list-icon",
        "margin",
      ],
      [
        "dnxte_feature_list_icon_padding",
        "%%order_class%% .dnxte-feature-list-img .dnxte-feature-list-icon",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleCss = [
      //Icon color
      [
        {
          desktop: `color: ${props.dnxte_feature_list_icon_color} !important;`,
          tablet: `color: ${props.dnxte_feature_list_icon_color_tablet} !important;`,
          phone: `color: ${props.dnxte_feature_list_icon_color_phone} !important;`,
          hover: `color: ${props.dnxte_feature_list_icon_color__hover} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb",
          hover:
            "%%order_class%% .dnxte-feature-list-img i:hover, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb:hover",
        },
        props.dnxte_feature_list_icon_color_last_edited,
        props.dnxte_feature_list_icon_color__hover_enabled,
      ],
      //Icon background color
      [
        {
          desktop: `background-color: ${props.dnxte_feature_list_icon_bg_color} !important;`,
          tablet: `background-color: ${props.dnxte_feature_list_icon_bg_color_tablet} !important;`,
          phone: `background-color: ${props.dnxte_feature_list_icon_bg_color_phone} !important;`,
          hover: `background-color: ${props.dnxte_feature_list_icon_bg_color__hover} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb",
          hover:
            "%%order_class%% .dnxte-feature-list-img i:hover, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb:hover",
        },
        props.dnxte_feature_list_icon_bg_color_last_edited,
        props.dnxte_feature_list_icon_bg_color__hover_enabled,
      ],
      // Image Width
      [
        {
          desktop: `width: ${props.dnxte_feature_list_image_width};`,
          tablet: `width: ${props.dnxte_feature_list_image_width_tablet};`,
          phone: `width: ${props.dnxte_feature_list_image_width_phone};`,
          hover: `width: ${props.dnxte_feature_list_image_width__hover};`,
        },
        {
          desktop: "%%order_class%% .img-fluid",
          hover: "%%order_class%% .img-fluid:hover",
        },
        props.dnxte_feature_list_image_width_last_edited,
        props.dnxte_feature_list_image_width__hover_enabled,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    return css;
  }

  render() {
    return null;
  }
}

export default DiviNxteFeatureListChild;
