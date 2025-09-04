// External Dependencies
import React, { Component } from "react";
import {
  applyBgCss,
  applyCss,
  applyCustomSpacing,
  Button,
  getAlignment,
  Icon,
  Image,
  Title
} from "../base/common";
// Internal Dependencies
class NextImageAccordionItem extends Component {
  static slug = "dnxte_image_accordion_item";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      [
        "dnxte_imga_icon_margin",
        "%%order_class%% .dnxte-imageacdion-social",
        "margin",
      ],
      [
        "dnxte_imga_icon_padding",
        "%%order_class%% .dnxte-imageacdion-social",
        "padding",
      ],
      [
        "dnxte_imga_img_margin",
        "%%order_class%% .dnxte-accordion-image-image",
        "margin",
      ],
      [
        "dnxte_imga_img_padding",
        "%%order_class%% .dnxte-accordion-image-image",
        "padding",
      ],
      [
        "dnxte_imga_title_margin",
        "%%order_class%% .dnxte-accordion-title",
        "margin",
      ],
      [
        "dnxte_imga_title_padding",
        "%%order_class%% .dnxte-accordion-title",
        "padding",
      ],
      [
        "dnxte_imga_desc_margin",
        "%%order_class%% .dnxte-accordion-description",
        "margin",
      ],
      [
        "dnxte_imga_desc_padding",
        "%%order_class%% .dnxte-accordion-description",
        "padding",
      ],
      [
        "dnxte_imga_btn_margin",
        "%%order_class%% .dnxte-accordion-button-wrap",
        "margin",
      ],
      [
        "dnxte_imga_btn_padding",
        "%%order_class%% .dnxte_accordion_button",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleBgCss = [
      // Button Bg Color
      {
        slug: "btn_bg_color",
        use_color_gradient_slug: props.btn_bg_use_color_gradient,
        gradient: {
          type: "btn_bg_color_gradient_type",
          direction: "btn_bg_color_gradient_direction",
          radial: "btn_bg_color_gradient_direction_radial",
          start: "btn_bg_color_gradient_start",
          end: "btn_bg_color_gradient_end",
          start_position: "btn_bg_color_gradient_start_position",
          end_position: "btn_bg_color_gradient_end_position",
          overlays_image: "btn_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte_accordion_button",
          hover: "%%order_class%% .dnxte_accordion_button:hover",
        },
      },
      // Icon Bg Color
      {
        slug: "icon_bg_color",
        use_color_gradient_slug: props.icon_bg_use_color_gradient,
        gradient: {
          type: "icon_bg_color_gradient_type",
          direction: "icon_bg_color_gradient_direction",
          radial: "icon_bg_color_gradient_direction_radial",
          start: "icon_bg_color_gradient_start",
          end: "icon_bg_color_gradient_end",
          start_position: "icon_bg_color_gradient_start_position",
          end_position: "icon_bg_color_gradient_end_position",
          overlays_image: "icon_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-imageacdion-social",
          hover: "%%order_class%% .dnxte-imageacdion-social:hover",
        },
      },
      // overlay color
      {
        slug: "accordion_overlay_color",
        use_color_gradient_slug: props.accordion_overlay_use_color_gradient,
        gradient: {
          type: "accordion_overlay_color_gradient_type",
          direction: "accordion_overlay_color_gradient_direction",
          radial: "accordion_overlay_color_gradient_direction_radial",
          start: "accordion_overlay_color_gradient_start",
          end: "accordion_overlay_color_gradient_end",
          start_position: "accordion_overlay_color_gradient_start_position",
          end_position: "accordion_overlay_color_gradient_end_position",
          overlays_image: "accordion_overlay_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte_image_accordion_bg",
          hover: "%%order_class%% .dnxte_image_accordion_bg_hover",
        },
      },
      // Hover overlay color
      {
        slug: "accordion_hover_overlay_color",
        use_color_gradient_slug:
          props.accordion_hover_overlay_use_color_gradient,
        gradient: {
          type: "accordion_hover_overlay_color_gradient_type",
          direction: "accordion_hover_overlay_color_gradient_direction",
          radial: "accordion_hover_overlay_color_gradient_direction_radial",
          start: "accordion_hover_overlay_color_gradient_start",
          end: "accordion_hover_overlay_color_gradient_end",
          start_position:
            "accordion_hover_overlay_color_gradient_start_position",
          end_position: "accordion_hover_overlay_color_gradient_end_position",
          overlays_image:
            "accordion_hover_overlay_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%%.dnxte-active .dnxte_image_accordion_bg, %%order_class%% .dnxte_image_accordion_bg_hover",
        },
      },
    ];

    moduleBgCss.forEach((element) => applyBgCss(css, props, element));

    const moduleCss = [
      // Icon size
      [
        {
          desktop: `font-size: ${props.dnxte_icon_size || "40px"};`,
          tablet: `font-size: ${props.dnxte_icon_size_tablet};`,
          phone: `font-size: ${props.dnxte_icon_size_phone};`,
          hover: `font-size: ${props.dnxte_icon_size__hover};`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-accordion-image-icon .dnxte-imageacdion-social",
          hover:
            "%%order_class%% .dnxte-accordion-image-icon .dnxte-imageacdion-social:hover",
        },
        props.dnxte_icon_size_last_edited,
        props.dnxte_icon_size__hover_enabled,
      ],
      // Image size
      [
        {
          desktop: `width: ${props.dnxte_imga_img_size};`,
          tablet: `width: ${props.dnxte_imga_img_size_tablet};`,
          phone: `width: ${props.dnxte_imga_img_size_phone};`,
          hover: `width: ${props.dnxte_imga_img_size__hover};`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-accordion-image-image .dnxte-icon-image",
          hover:
            "%%order_class%% .dnxte-accordion-image-image .dnxte-icon-image:hover",
        },
        props.dnxte_imga_img_size_last_edited,
        props.dnxte_imga_img_size__hover_enabled,
      ],
      // Icon color
      [
        {
          desktop: `color: ${props.dnxte_imga_icon_color || "#8056ee"};`,
          tablet: `color: ${props.dnxte_imga_icon_color_tablet};`,
          phone: `color: ${props.dnxte_imga_icon_color_phone};`,
          hover: `color: ${props.dnxte_imga_icon_color__hover};`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-accordion-image-icon .dnxte-imageacdion-social",
          hover:
            "%%order_class%% .dnxte-accordion-image-icon .dnxte-imageacdion-social:hover",
        },
        props.dnxte_imga_icon_color_last_edited,
        props.dnxte_imga_icon_color__hover_enabled,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    css.push([
      {
        selector: "%%order_class%%",
        declaration: `background-image: url(${props.dnxte_bg_img}) !important;`,
      },
    ]);

    return css;
  }

  render() {
    const { props } = this;
    const utils = window.ET_Builder.API.Utils;
    const accordionExpand = props.dnxte_accordion_expand;
    const onLoad =
      props.dnxte_accordion_expand && "none" !== props.dnxte_accordion_expand
        ? "1"
        : "";
    const alignHorizontal = props.dnxte_accordion_align_horizontal;
    const alignVertical = props.dnxte_accordion_align_vertical;
    let dnxte_imga_icon_alignment_classes = getAlignment(
      "dnxte_imga_icon_alignment",
      props
    );

    let dnxte_imga_img_alignment_classes = getAlignment(
      "dnxte_imga_img_alignment",
      props
    );

    // Description Dynamic Content
    const dnxteimgaDescription = props.dynamic.dnxte_imga_des;
    let dnxteimgaDescriptionComponent = dnxteimgaDescription.render();

    return (
      <div id={props.css_id} className={props.css_classes}>
        <div className="dnxte_image_accordion_bg" />
        <div className="dnxte_image_accordion_bg_hover" />
        <div
          className={`dnxte_image_accordion_child_content_wrapper dnxte-align-horizontal-${alignHorizontal} dnxte-align-vertical-${alignVertical}`}
        >
          <div
            className="dnxte-accordion-content"
            data-active-on-load={onLoad}
            data-accordion-expand={accordionExpand}
          >
            {"off" !== props.dnxte_use_icon && (
              <div
                className={`dnxte-accordion-image-icon ${dnxte_imga_icon_alignment_classes}`}
              >
                <Icon
                  utils={utils}
                  icon={props.dnxte_font_icon || "$"}
                  classes="et-pb-icon social_twitter dnxte-imageacdion-social"
                />
              </div>
            )}
            {"off" !== props.dnxte_use_icon_img && (
              <div
                className={`dnxte-icon-image-wrapper dnxte-accordion-image-image ${dnxte_imga_img_alignment_classes}`}
              >
                <Image
                  dynamicImg={props.dynamic.dnxte_icon_img}
                  lastEdited={props.dnxte_icon_img_last_edited}
                  hoverEnabled={props.dnxte_icon_img__hover_enabled}
                  imageTablet={props.dnxte_icon_img_tablet}
                  imagePhone={props.dnxte_icon_img_phone}
                  imageHover={props.dnxte_icon_img__hover}
                  imgAlt={props.dynamic.dnxte_icon_alt}
                  classes="dnxte-icon-image"
                />
              </div>
            )}
            <Title
              title={props.dnxte_imga_title}
              dynamicTitle={props.dynamic.dnxte_imga_title}
              tag={props.header_level || "h2"}
              classes="dnxte-accordion-title"
            />
            <div className="dnxte-accordion-description">
              {dnxteimgaDescriptionComponent}
            </div>
            {"off" !== props.dnxte_btn_show_hide && (
              <div className="dnxte-accordion-button-wrap">
                <Button
                  text={props.button_text}
                  dynamicText={props.dynamic.button_text}
                  link={props.button_link}
                  linkTarget={props.button_link_new_window || "_self"}
                  classes="dnxte_accordion_button"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NextImageAccordionItem;
