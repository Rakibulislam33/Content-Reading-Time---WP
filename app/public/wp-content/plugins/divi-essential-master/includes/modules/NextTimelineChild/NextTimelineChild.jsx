import React, { Component } from "react";
import {
  applyBgCss,
  applyCss,
  applyCustomSpacing,
  Button,
  Icon,
  Image,
  Title
} from "../base/common";
import "../base/get_responsive_css";

class NextTimelineChild extends Component {
  static slug = "dnxte_timeline_child";

  static css(props) {
    const css = [];

    // Custom Padding margin
    const customMarginPadding = [
      [
        "timeline_title_margin",
        "%%order_class%% .dnxte-timline-heading",
        "margin",
      ],
      [
        "timeline_title_padding",
        "%%order_class%% .dnxte-timline-heading",
        "padding",
      ],
      ["timeline_desc_margin", "%%order_class%% .dnxte-timline-pra", "margin"],
      [
        "timeline_desc_padding",
        "%%order_class%% .dnxte-timline-pra",
        "padding",
      ],
      [
        "timeline_btn_margin",
        "%%order_class%% .dnxte-timline-btn-more",
        "margin",
      ],
      [
        "timeline_btn_padding",
        "%%order_class%% .dnxte-timline-btn-more",
        "padding",
      ],
      [
        "timeline_icon_padding",
        "%%order_class%% .dnxte-timline-img",
        "padding",
      ],
      [
        "timeline_identifier_margin",
        "%%order_class%% .dnxte-timline-date",
        "margin",
      ],
      [
        "timeline_identifier_padding",
        "%%order_class%% .dnxte-timline-date",
        "padding",
      ],
      [
        "timeline_main_image_margin",
        "%%order_class%% .dnxte-timline-image-section img",
        "margin",
      ],
      [
        "timeline_main_image_padding",
        "%%order_class%% .dnxte-timline-image-section img",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleCss = [
      // Timeline icon color
      [
        {
          desktop: props.timeline_icon_color
            ? `color: ${props.timeline_icon_color} !important;`
            : `color: #545454`,
          tablet: `color: ${props.timeline_icon_color_tablet} !important;`,
          phone: `color: ${props.timeline_icon_color_phone} !important;`,
          hover: `color: ${props.timeline_icon_color__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-timline-icon",
          hover: "%%order_class%% .dnxte-timline-icon:hover",
        },
        props.timeline_icon_color_last_edited,
        props.timeline_icon_color__hover_enabled,
      ],
      // Timeline icon size
      [
        {
          desktop: props.timeline_icon_size
            ? `font-size: ${props.timeline_icon_size} !important;`
            : `font-size: 16px`,
          tablet: `font-size: ${props.timeline_icon_size_tablet} !important;`,
          phone: `font-size: ${props.timeline_icon_size_phone} !important;`,
          hover: `font-size: ${props.timeline_icon_size__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-timline-icon",
          hover: "%%order_class%% .dnxte-timline-icon:hover",
        },
        props.timeline_icon_size_last_edited,
        props.timeline_icon_size__hover_enabled,
      ],
      // Icon position
      [
        {
          desktop: `margin-top: ${props.timeline_icon_position || "0px"};`,
          tablet: `margin-top: ${props.timeline_icon_position_tablet};`,
          phone: `margin-top: ${props.timeline_icon_position_phone};`,
          hover: `margin-top: ${props.timeline_icon_position__hover};`,
        },
        {
          desktop: "%%order_class%% .dnxte-timline-img",
          hover: "%%order_class%% .dnxte-timline-img:hover",
        },
        props.timeline_icon_position_last_edited,
        props.timeline_icon_position__hover_enabled,
      ],
      // Image Width
      [
        {
          desktop: `width: ${props.timeline_main_image_width || "100%"};`,
          tablet: `width: ${props.timeline_main_image_width_tablet};`,
          phone: `width: ${props.timeline_main_image_width_phone};`,
          hover: `width: ${props.timeline_main_image_width__hover};`,
        },
        {
          desktop: "%%order_class%% .dnxte-timline-image-section img",
          hover: "%%order_class%% .dnxte-timline-image-section img:hover",
        },
        props.timeline_main_image_width_last_edited,
        props.timeline_main_image_width__hover_enabled,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    const moduleBgCss = [
      {
        slug: "timeline_bg_color",
        use_color_gradient_slug: props.timeline_bg_use_color_gradient,
        gradient: {
          type: "timeline_bg_color_gradient_type",
          direction: "timeline_bg_color_gradient_direction",
          radial: "timeline_bg_color_gradient_direction_radial",
          start: "timeline_bg_color_gradient_start",
          end: "timeline_bg_color_gradient_end",
          start_position: "timeline_bg_color_gradient_start_position",
          end_position: "timeline_bg_color_gradient_end_position",
          overlays_image: "timeline_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-timline-content",
          hover: "%%order_class%% .dnxte-timline-content:hover",
        },
      },
      // Timeline icon background
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
          desktop: "%%order_class%% .dnxte-timline-img",
          hover: "%%order_class%% .dnxte-timline-img:hover",
        },
      },
      // Button background color
      {
        slug: "button_bg_color",
        use_color_gradient_slug: props.button_bg_use_color_gradient,
        gradient: {
          type: "button_bg_color_gradient_type",
          direction: "button_bg_color_gradient_direction",
          radial: "button_bg_color_gradient_direction_radial",
          start: "button_bg_color_gradient_start",
          end: "button_bg_color_gradient_end",
          start_position: "button_bg_color_gradient_start_position",
          end_position: "button_bg_color_gradient_end_position",
          overlays_image: "button_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-timline-btn-more",
          hover: "%%order_class%% .dnxte-timline-btn-more:hover",
        },
      },
    ];
    moduleBgCss.forEach((element) => applyBgCss(css, props, element));
    return css;
  }

  render() {
    const utils = window.ET_Builder.API.Utils;
    const { props } = this;

    const timelineCssId = props.timeline_css_id || "";
    const timelineCssClass = props.timeline_css_classes || "";

    let timeline_button_alignment = props.timeline_button_alignment
      ? "timeline_button_alignment_" + props.timeline_button_alignment
      : "";
    let timeline_button_alignment_tablet = props.timeline_button_alignment_tablet
      ? "timeline_button_alignment_tablet_" +
        props.timeline_button_alignment_tablet
      : "";
    let timeline_button_alignment_phone = props.timeline_button_alignment_phone
      ? "timeline_button_alignment_phone_" +
        props.timeline_button_alignment_phone
      : "";

    let timeline_main_image_alignment = props.timeline_main_image_alignment
      ? "timeline_main_image_alignment_" + props.timeline_main_image_alignment
      : "";
    let timeline_main_image_alignment_tablet = props.timeline_main_image_alignment_tablet
      ? "timeline_main_image_alignment_tablet_" +
        props.timeline_main_image_alignment_tablet
      : "";
    let timeline_main_image_alignment_phone = props.timeline_main_image_alignment_phone
      ? "timeline_main_image_alignment_phone_" +
        props.timeline_main_image_alignment_phone
      : "";
    
    // Description Dynamic Content
    const timelineDescription = props.dynamic.timeline_content;
    let timelineDescriptionComponent = timelineDescription.render();

    return (
      <div
        id={`${timelineCssId}`}
        className={`dnxte-timline-block ${timelineCssClass}`}
      >
        <div className="dnxte-timline-img dnxte-timeline-pic">
          {this.props.timeline_use_icon !== "on" && (
            <Image
              dynamicImg={this.props.dynamic.timeline_image}
              lastEdited={this.props.timeline_image_last_edited}
              hoverEnabled={this.props.timeline_image__hover_enabled}
              imageTablet={this.props.timeline_image_tablet}
              imagePhone={this.props.timeline_image_phone}
              imageHover={this.props.timeline_image__hover}
              imgAlt={{ value: "timeline" }}
            />
          )}
          {this.props.timeline_use_icon !== "off" && (
            <Icon
              utils={utils}
              icon={this.props.timeline_icon || "N"}
              classes="et-pb-icon dnxte-timline-icon"
            />
          )}
        </div>
        <div className="dnxte-timline-content">
          {"off" !== this.props.timeline_use_image &&
            "" !== this.props.timeline_main_image && (
              <div
                className={`dnxte-timline-image-section ${timeline_main_image_alignment} ${timeline_main_image_alignment_tablet} ${timeline_main_image_alignment_tablet} ${timeline_main_image_alignment_phone}`}
              >
                <Image
                  dynamicImg={this.props.dynamic.timeline_main_image}
                  lastEdited={this.props.timeline_main_image_last_edited}
                  hoverEnabled={this.props.timeline_main_image__hover_enabled}
                  imageTablet={this.props.timeline_main_image_tablet}
                  imagePhone={this.props.timeline_main_image_phone}
                  imageHover={this.props.timeline_main_image__hover}
                  imgAlt={this.props.dynamic.timeline_main_image_alt}
                />
              </div>
            )}
          <Title
            title={this.props.timeline_title}
            dynamicTitle={this.props.dynamic.timeline_title}
            tag={this.props.header_level || "h2"}
            classes="dnxte-timline-heading"
          />
          <div className="dnxte-timline-pra">
            <p>{timelineDescriptionComponent }</p>
          </div>
            
          {this.props.timeline_use_button !== "off" &&
            this.props.timeline_button_text && (
              <div
                className={`dnxte-timline-btn-container ${timeline_button_alignment} ${timeline_button_alignment_tablet} ${timeline_button_alignment_phone}`}
              >
                <Button
                  text={this.props.timeline_button_text}
                  dynamicText={this.props.dynamic.timeline_button_text}
                  link={this.props.timeline_button_link || ""}
                  linkTarget={this.props.timeline_button_target}
                  classes="dnxte-timline-btn-more"
                />
              </div>
            )}
          <Title
            title={this.props.timeline_date}
            dynamicTitle={this.props.dynamic.timeline_date}
            tag="span"
            classes="dnxte-timline-date"
          />
        </div>
      </div>
    );
  }
}

export default NextTimelineChild;
