import React, { Component } from "react";
import { getAlignment, Icon } from "../base/common";
import "../base/get_responsive_css";
import "./style.css";

class DiviNxteFeatureList extends Component {
  static slug = "dnxte_feature_list_parent";

  static css(props) {
    const css = [];
    if ("" !== props.dnxte_feature_list_item_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_feature_list_item_margin",
          "%%order_class%% .dnxte_feature_list_child",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxte_feature_list_item_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_feature_list_item_padding",
          "%%order_class%% .dnxte_feature_list_child",
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxte_feature_list_icon_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_feature_list_icon_padding",
          "%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb",
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxte_feature_list_image_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_feature_list_image_padding",
          "%%order_class%% .dnxte-feature-list-img img",
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxte_feature_list_title_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_feature_list_title_padding",
          "%%order_class%% .dnxte-feature-list-content",
          "padding",
          true
        )
      );
    }

    // Icon color
    css.push([
      {
        selector: `%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb`,
        declaration: `color: ${props.dnxte_feature_list_icon_color};`,
      },
    ]);

    if ("on|tablet" === props.dnxte_feature_list_icon_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i , %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb`,
          declaration: `color: ${props.dnxte_feature_list_icon_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_feature_list_icon_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb`,
          declaration: `color: ${props.dnxte_feature_list_icon_color_phone};`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_feature_list_icon_color__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i:hover, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb:hover`,
          declaration: `color: ${props.dnxte_feature_list_icon_color__hover};`,
        },
      ]);
    }
    // Icon color end

    // Icon background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb`,
        declaration: `background-color: ${props.dnxte_feature_list_icon_bg_color};`,
      },
    ]);

    if ("on|tablet" === props.dnxte_feature_list_icon_bg_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb`,
          declaration: `background-color: ${props.dnxte_feature_list_icon_bg_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.dnxte_feature_list_icon_bg_color_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb`,
          declaration: `background-color: ${props.dnxte_feature_list_icon_bg_color_phone};`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_feature_list_icon_bg_color__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i:hover, %%order_class%% .dnxte-feature-list-img .dnxte-feature-list-numb:hover`,
          declaration: `background-color: ${props.dnxte_feature_list_icon_bg_color__hover};`,
        },
      ]);
    }
    // Icon background color end

    // Icon size
    css.push([
      {
        selector: `%%order_class%% .dnxte-feature-list-img i`,
        declaration: `font-size: ${props.dnxte_feature_list_icon_size} !important;`,
      },
    ]);

    if ("on|tablet" === props.dnxte_feature_list_icon_size_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i`,
          declaration: `font-size: ${props.dnxte_feature_list_icon_size_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_feature_list_icon_size_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i`,
          declaration: `font-size: ${props.dnxte_feature_list_icon_size_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_feature_list_icon_size__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img i:hover`,
          declaration: `font-size: ${props.dnxte_feature_list_icon_size__hover} !important;`,
        },
      ]);
    }
    // Icon size end

    // Image filter
    css.push([
      {
        selector: `%%order_class%% .dnxte-feature-list-img img`,
        declaration: `filter: hue-rotate(${props.child_filter_hue_rotate}) saturate(${props.child_filter_saturate}) brightness(${props.child_filter_brightness}) contrast(${props.child_filter_contrast}) invert(${props.child_filter_invert}) sepia(${props.child_filter_sepia}) opacity(${props.child_filter_opacity}) blur(${props.child_filter_blur});mix-blend-mode: ${props.child_mix_blend_mode};`,
      },
    ]);
    // Image filter end

    // Image background color
    css.push([
      {
        selector: `%%order_class%% .dnxte-feature-list-img img`,
        declaration: `background-color: ${props.dnxte_feature_list_image_bg_color} !important;`,
      },
    ]);

    if ("on|tablet" === props.dnxte_feature_list_image_bg_color_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img img`,
          declaration: `background-color: ${props.dnxte_feature_list_image_bg_color_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.dnxte_feature_list_image_bg_color_last_edited
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img img`,
          declaration: `background-color: ${props.dnxte_feature_list_image_bg_color_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_feature_list_image_bg_color__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img img:hover`,
          declaration: `background-color: ${props.dnxte_feature_list_image_bg_color__hover} !important;`,
        },
      ]);
    }
    // Image background color end

    // Image size
    css.push([
      {
        selector: `%%order_class%% .dnxte-feature-list-img img`,
        declaration: `width: ${props.dnxte_feature_list_image_size} !important;`,
      },
    ]);

    if ("on|tablet" === props.dnxte_feature_list_image_size_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img img`,
          declaration: `width: ${props.dnxte_feature_list_image_size_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_feature_list_image_size_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img img`,
          declaration: `width: ${props.dnxte_feature_list_image_size_phone} !important;`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_feature_list_image_size__hover_enabled
    ) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-feature-list-img img:hover`,
          declaration: `width: ${props.dnxte_feature_list_image_size__hover} !important;`,
        },
      ]);
    }
    // Image size end

        // feature_grid_template_columns
        if ("off" !== props.dnxte_feature_list_style) {
          css.push([
            {
              selector: `%%order_class%% .et_pb_module_inner`,
              declaration: `grid-template-columns: repeat(${props.dnxte_feature_grid_template_columns}, 1fr);`,
            },
          ]);
    
          if ("on|tablet" === props.dnxte_feature_grid_template_columns_last_edited) {
            css.push([
              {
                selector: `%%order_class%% .et_pb_module_inner`,
                declaration: `grid-template-columns: repeat(${props.dnxte_feature_grid_template_columns_tablet}, 1fr);`,
                device: "tablet",
              },
            ]);
          } else if ("on|phone" === props.dnxte_feature_grid_template_columns_last_edited) {
            css.push([
              {
                selector: `%%order_class%% .et_pb_module_inner`,
                declaration: `grid-template-columns: repeat(${props.dnxte_feature_grid_template_columns_phone}, 1fr);`,
                device: "phone",
              },
            ]);
          }
    
          // feature_grid_template_row_gap
          css.push([
            {
              selector: `%%order_class%% .et_pb_module_inner`,
              declaration: `row-gap: ${props.dnxte_feature_grid_template_row_gap};`,
            },
          ]);
    
          if ("on|tablet" === props.dnxte_feature_grid_template_row_gap_last_edited) {
            css.push([
              {
                selector: `%%order_class%% .et_pb_module_inner`,
                declaration: `row-gap: ${props.dnxte_feature_grid_template_row_gap_tablet};`,
                device: "tablet",
              },
            ]);
          } else if ("on|phone" === props.dnxte_feature_grid_template_row_gap_last_edited) {
            css.push([
              {
                selector: `%%order_class%% .et_pb_module_inner`,
                declaration: `row-gap: ${props.dnxte_feature_grid_template_row_gap_phone};`,
                device: "phone",
              },
            ]);
          }
    
          // feature_grid_template_column_gap
          css.push([
            {
              selector: `%%order_class%% .et_pb_module_inner`,
              declaration: `column-gap: ${props.dnxte_feature_grid_template_column_gap};`,
            },
          ]);
    
          if ("on|tablet" === props.dnxte_feature_grid_template_row_gap_last_edited) {
            css.push([
              {
                selector: `%%order_class%% .et_pb_module_inner`,
                declaration: `column-gap: ${props.dnxte_feature_grid_template_row_gap_tablet};`,
                device: "tablet",
              },
            ]);
          } else if ("on|phone" === props.dnxte_feature_grid_template_row_gap_last_edited) {
            css.push([
              {
                selector: `%%order_class%% .et_pb_module_inner`,
                declaration: `column-gap: ${props.dnxte_feature_grid_template_row_gap_phone};`,
                device: "phone",
              },
            ]);
          }
    
        }
    
        // feature_grid_template_columns_end

    return css;
  }

  render() {
    // ICON
    const utils = window.ET_Builder.API.Utils;

    return (
      <>
        {this.props.content && Array.isArray(this.props.content)
          ? this.props.content.map((item) => {
              const props = item.props.attrs;
              const classes =
                this.props.dnxte_feature_list_icon_position || "left";
              const dnxte_feature_list_image_position_classes = getAlignment(
                "dnxte_feature_list_image_position",
                item.props.attrs
              );
              let classNames = [
                "dnxte-feature-list-wrap",
                "dnxte_feature_list_child",
                dnxte_feature_list_image_position_classes,
                classes,
                item.key,
                `${item.props.type}_${item.props.shortcode_index}`,
              ];
              const no_image =
                !props.dnxte_feature_list_use_image ||
                props.dnxte_feature_list_use_image === "off";
              const no_number =
                !props.dnxte_feature_list_use_number ||
                props.dnxte_feature_list_use_number === "off";

              const feature_text_alignment_classes = getAlignment(
                "dnxte_feature_list_text_alignment",
                item.props.attrs
              );
              const dnxte_feature_list_image_alignment_classes = getAlignment(
                "dnxte_feature_list_image_alignment",
                item.props.attrs
              );
              return (
                <div key={item.key} className={classNames.join(" ")}>
                  <div
                    className={`dnxte-feature-list-img ${dnxte_feature_list_image_alignment_classes}`}
                  >
                    {no_image && no_number && (
                      <Icon
                        utils={utils}
                        tag="i"
                        icon={props.dnxte_feature_list_icon || "N"}
                        classes="dnxte-feature-list-icon"
                      />
                    )}

                    {!no_image && (
                      <img
                        className="img-fluid"
                        src={props.dnxte_feature_list_image}
                        alt={props.dnxte_feature_list_alt}
                      />
                    )}

                    {!no_number && (
                      <div className="dnxte-feature-list-numb">
                        {props.dnxte_feature_list_number}
                      </div>
                    )}
                  </div>
                  <div
                    className={`dnxte-feature-list-content ${feature_text_alignment_classes}`}
                  >
                    {props.dnxte_feature_list_title || ""}
                  </div>
                </div>
              );
            })
          : ""}
        <div style={{ display: "none" }}>{this.props.content}</div>
      </>
    );
  }
}

export default DiviNxteFeatureList;
