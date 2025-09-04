// External Dependencies
import React, { Component } from "react";
import { Icon, Image } from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class NextImageIcon extends Component {
  static slug = "dnxte_image_icon";

  static css(props) {
    const additionalCss = [];
    const hover_effect = props.dnxtiep_iie_image_hover_effect;
    const icon_background_effect = ["terry", "kira"];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.dnxtiep_iie_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_iie_heading_margin",
          "%%order_class%% .dnext-neip-iie-des-heading,%%order_class%%  .dnext-neip-iie-heading",
          "margin"
        )
      );
    }

    if ("" !== props.dnxtiep_iie_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_iie_heading_padding",
          "%%order_class%% .dnext-neip-iie-des-heading,%%order_class%%  .dnext-neip-iie-heading",
          "padding"
        )
      );
    }

    if ("" !== props.dnxtiep_iie_focus_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_iie_focus_padding",
          "%%order_class%% .dnext-neip-focus-text",
          "padding"
        )
      );
    }

    if ("" !== props.dnxtiep_iie_icon_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_iie_icon_margin",
          "%%order_class%% figcaption p a i,%%order_class%%  figcaption p a span",
          "margin"
        )
      );
    }

    if ("" !== props.dnxtiep_iie_icon_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_iie_icon_padding",
          "%%order_class%% figcaption p a i,%%order_class%%  figcaption p a span",
          "padding"
        )
      );
    }

    // BOTTOM BACKGROUN COLOR START
    if (hover_effect === "zoe") {
      additionalCss.push([
        {
          selector: `%%order_class%% figure figcaption`,
          declaration: `background: ${props.dnxtiep_iie_bottom_bg} !important;`,
        },
      ]);
      if ("on|tablet" === props.dnxtiep_iie_bottom_bg_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure figcaption`,
            declaration: `background: ${props.dnxtiep_iie_bottom_bg_tablet} !important;`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_iie_bottom_bg_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure figcaption`,
            declaration: `background: ${props.dnxtiep_iie_bottom_bg_phone} !important;`,
            device: "phone",
          },
        ]);
      }
    }
    // BOTTOM BACKGROUND COLOR END

    // BOTTOM BACKGROUND GRADIENT COLOR START
    const dnxtiep_iie_bottom_bg_gradient_direction =
      props.dnxtiep_iie_bottom_bg_gradient_type === "linear-gradient"
        ? props.dnxtiep_iie_bottom_bg_gradient_type_linear_direction
        : props.dnxtiep_iie_bottom_bg_gradient_type_radial_direction;

    if (
      hover_effect === "zoe" &&
      "off" !== props.dnxtiep_iie_bottom_bg_gradient_show_hide
    ) {
      const dnxtiep_iie_bottom_bg_gradient_color_style = `background: ${props.dnxtiep_iie_bottom_bg_gradient_type}(${dnxtiep_iie_bottom_bg_gradient_direction},${props.dnxtiep_iie_bottom_bg_gradient_color_one} ${props.dnxtiep_iie_bottom_bg_gradient_start_position}, ${props.dnxtiep_iie_bottom_bg_gradient_color_two} ${props.dnxtiep_iie_bottom_bg_gradient_end_position}) !important;`;

      additionalCss.push([
        {
          selector: `%%order_class%% figure figcaption`,
          declaration: dnxtiep_iie_bottom_bg_gradient_color_style,
        },
      ]);
    }
    // BOTTOM BACKGROUND GRADIENT COLOR END

    // ICON BACKGROUND START
    if (hover_effect === "terry") {
      additionalCss.push([
        {
          selector: `%%order_class%% figure.effect-terry figcaption::before,%%order_class%% figure.effect-terry figcaption::after`,
          declaration: `border-color: ${props.dnxtiep_iie_icon_bg} !important;`,
        },
      ]);
      if ("on|tablet" === props.dnxtiep_iie_icon_bg_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.effect-terry figcaption::before,%%order_class%% figure.effect-terry figcaption::after`,
            declaration: `border-color: ${props.dnxtiep_iie_icon_bg_tablet} !important;`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_iie_icon_bg_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.effect-terry figcaption::before,%%order_class%% figure.effect-terry figcaption::after`,
            declaration: `border-color: ${props.dnxtiep_iie_icon_bg_phone} !important;`,
            device: "phone",
          },
        ]);
      }
    }
    if (hover_effect === "kira") {
      additionalCss.push([
        {
          selector: `%%order_class%% figure.effect-kira figcaption::before`,
          declaration: `background: ${props.dnxtiep_iie_icon_bg} !important;`,
        },
      ]);

      // IF RESPONSIVE
      if ("on|tablet" === props.dnxtiep_iie_icon_bg_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.effect-kira figcaption::before`,
            declaration: `background: ${props.dnxtiep_iie_icon_bg_tablet} !important;`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_iie_icon_bg_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.effect-kira figcaption::before`,
            declaration: `background: ${props.dnxtiep_iie_icon_bg_phone} !important;`,
            device: "phone",
          },
        ]);
      }
    }
    // ICON BACKGROUND COLOR END

    // ICON BACKGROUND GRADIENT COLOR START
    const dnxtiep_iie_icon_bg_gradient_direction =
      props.dnxtiep_iie_icon_bg_gradient_type === "linear-gradient"
        ? props.dnxtiep_iie_icon_bg_gradient_type_linear_direction
        : props.dnxtiep_iie_icon_bg_gradient_type_radial_direction;

    if (
      "off" !== props.dnxtiep_iie_icon_bg_gradient_show_hide &&
      icon_background_effect.includes(hover_effect)
    ) {
      if (hover_effect === "terry") {
        const dnxtiep_iie_icon_bg_gradient_color_style = `border-image-source: ${props.dnxtiep_iie_icon_bg_gradient_type}(${dnxtiep_iie_icon_bg_gradient_direction},${props.dnxtiep_iie_icon_bg_gradient_color_one} ${props.dnxtiep_iie_icon_bg_gradient_start_position}, ${props.dnxtiep_iie_icon_bg_gradient_color_two} ${props.dnxtiep_iie_icon_bg_gradient_end_position}); border-image-slice:1 !important;`;

        additionalCss.push([
          {
            selector: `%%order_class%% figure.effect-terry figcaption::before, %%order_class%% figure.effect-terry figcaption::after`,
            declaration: dnxtiep_iie_icon_bg_gradient_color_style,
          },
        ]);
      }
      if (hover_effect === "kira") {
        const dnxtiep_iie_icon_bg_gradient_color_style = `background: ${props.dnxtiep_iie_icon_bg_gradient_type}(${dnxtiep_iie_icon_bg_gradient_direction},${props.dnxtiep_iie_icon_bg_gradient_color_one} ${props.dnxtiep_iie_icon_bg_gradient_start_position}, ${props.dnxtiep_iie_icon_bg_gradient_color_two} ${props.dnxtiep_iie_icon_bg_gradient_end_position}) !important;`;

        additionalCss.push([
          {
            selector: `%%order_class%% figure.effect-kira figcaption::before`,
            declaration: dnxtiep_iie_icon_bg_gradient_color_style,
          },
        ]);
      }
    }

    // ICON COLOR START

    if ("" !== props.dnxtiep_iie_icon_color_one) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon1",
          declaration: `color: ${props.dnxtiep_iie_icon_color_one};`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxtiep_iie_icon_color_one_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon1",
          declaration: `color: ${props.dnxtiep_iie_icon_color_one_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxtiep_iie_icon_color_one_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon1",
          declaration: `color: ${props.dnxtiep_iie_icon_color_one_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxtiep_iie_icon_color_one__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon1:hover",
          declaration: `color: ${props.dnxtiep_iie_icon_color_one__hover};`,
        },
      ]);
    }

    if ("" !== props.dnxtiep_iie_icon_color_two) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon2",
          declaration: `color: ${props.dnxtiep_iie_icon_color_two};`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxtiep_iie_icon_color_two_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon2",
          declaration: `color: ${props.dnxtiep_iie_icon_color_two_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxtiep_iie_icon_color_two_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon2",
          declaration: `color: ${props.dnxtiep_iie_icon_color_two_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxtiep_iie_icon_color_two__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon2:hover",
          declaration: `color: ${props.dnxtiep_iie_icon_color_two__hover};`,
        },
      ]);
    }

    if ("" !== props.dnxtiep_iie_icon_color_three) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon3",
          declaration: `color: ${props.dnxtiep_iie_icon_color_three};`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxtiep_iie_icon_color_three_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon3",
          declaration: `color: ${props.dnxtiep_iie_icon_color_three_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxtiep_iie_icon_color_three_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon3",
          declaration: `color: ${props.dnxtiep_iie_icon_color_three_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxtiep_iie_icon_color_three__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon3:hover",
          declaration: `color: ${props.dnxtiep_iie_icon_color_three__hover};`,
        },
      ]);
    }

    if ("" !== props.dnxtiep_iie_icon_color_four) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon4",
          declaration: `color: ${props.dnxtiep_iie_icon_color_four};`,
        },
      ]);
    }
    if ("on|tablet" === props.dnxtiep_iie_icon_color_four_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon4",
          declaration: `color: ${props.dnxtiep_iie_icon_color_four_tablet};`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.dnxtiep_iie_icon_color_four_last_edited) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon4",
          declaration: `color: ${props.dnxtiep_iie_icon_color_four_phone};`,
          device: "phone",
        },
      ]);
    }
    if ("on|hover" === props.dnxtiep_iie_icon_color_four__hover_enabled) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxtiep_iie_icon4:hover",
          declaration: `color: ${props.dnxtiep_iie_icon_color_four__hover}`,
        },
      ]);
    }

    //  ICON FONT SETTINGS START

    additionalCss.push([
      {
        selector: `%%order_class%% .et-pb-icon`,
        declaration: `font-size: ${props.dnxtiep_iie_icon_font_size} !important; letter-spacing: ${props.dnxtiep_iie_icon_letter_spacing} !important; line-height: ${props.dnxtiep_iie_icon_line_height} !important;`,
      },
    ]);

    if (
      "on|tablet" === props.dnxtiep_iie_icon_font_size_last_edited ||
      "on|tablet" === props.dnxtiep_iie_icon_letter_spacing_last_edited ||
      "on|tablet" === props.dnxtiep_iie_icon_line_height_last_edited
    ) {
      additionalCss.push([
        {
          selector: `%%order_class%% .et-pb-icon`,
          declaration: `font-size: ${props.dnxtiep_iie_icon_font_size_tablet} !important; letter-spacing: ${props.dnxtiep_iie_icon_letter_spacing_tablet} !important; line-height: ${props.dnxtiep_iie_icon_line_height_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if (
      "on|phone" === props.dnxtiep_iie_icon_font_size_last_edited ||
      "on|phone" === props.dnxtiep_iie_icon_letter_spacing_last_edited ||
      "on|phone" === props.dnxtiep_iie_icon_line_height_last_edited
    ) {
      additionalCss.push([
        {
          selector: `%%order_class%% .et-pb-icon`,
          declaration: `font-size: ${props.dnxtiep_iie_icon_font_size_phone} !important; letter-spacing: ${props.dnxtiep_iie_icon_letter_spacing_phone} !important; line-height: ${props.dnxtiep_iie_icon_line_height_phone} !important;`,
          device: "phone",
        },
      ]);
    }
    // ICON FONT SETTINGS END

    // ICON BACKGROUND COLOR START

    if ("off" !== props.dnxtiep_iie_icon_background_show_hide) {
      additionalCss.push([
        {
          selector: `%%order_class%% .et-pb-icon`,
          declaration: `background-color: ${props.dnxtiep_iie_icon_background}`,
        },
      ]);

      if ("on|tablet" === props.dnxtiep_iie_icon_background_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% .et-pb-icon`,
            declaration: `background-color: ${props.dnxtiep_iie_icon_background_tablet}`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_iie_icon_background_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% .et-pb-icon`,
            declaration: `background-color: ${props.dnxtiep_iie_icon_background_phone}`,
            device: "phone",
          },
        ]);
      }
    }

    // ICON BACKGROUND COLOR END

    return additionalCss;
  }

  render() {
    const props = this.props;

    // ICON
    const utils = window.ET_Builder.API.Utils;

    const DnxtiepHeading = () => {
      const HeadingTag = props.dnxtiep_iie_heading_tag;

      if ("" === props.dnxtiep_iie_heading_text) return "";

      let dnxtiepHeadingText = props.dynamic.dnxtiep_iie_heading_text;
      let dnxtiepHeadingBold = props.dynamic.dnxtiep_iie_heading_bold;
      let dnxtiepHeadingComponent = dnxtiepHeadingText.render();
      let dnxtiepHeadingBoldComponent = dnxtiepHeadingBold.render();

      if (dnxtiepHeadingText.loading) return dnxtiepHeadingComponent;
      if (dnxtiepHeadingBold.loading) return dnxtiepHeadingBoldComponent;

      if (props.dnxtiep_iie_image_hover_effect === "zoe") {
        return (
          <HeadingTag className="dnext-neip-iie-des-heading">
            <span className="dnext-neip-main-heading">
              {dnxtiepHeadingComponent}
            </span>{" "}
            <span className="dnext-neip-focus-text">
              {dnxtiepHeadingBoldComponent}
            </span>
          </HeadingTag>
        );
      }

      return (
        <HeadingTag className="dnext-neip-iie-heading">
          <span className="dnext-neip-main-heading">
            {dnxtiepHeadingComponent}
          </span>{" "}
          <span className="dnext-neip-focus-text">
            {dnxtiepHeadingBoldComponent}
          </span>
        </HeadingTag>
      );
    };

    const DnxtiepIcon = () => {
      const validURL = (str) => {
        const pattern = /^((http|https|ftp):\/\/)/;
        if (!pattern.test(str)) return `http://${str}`;
        return str;
      };

      // Icon Link
      const link_one = validURL(props.dnxtiep_iie_icon_image_link_one);
      const link_two = validURL(props.dnxtiep_iie_icon_image_link_two);
      const link_three = validURL(props.dnxtiep_iie_icon_image_link_three);
      const link_four = validURL(props.dnxtiep_iie_icon_image_link_four);

      // Icon Target
      const linkTargetOne = props.dnxtiep_iie_icon_image_link_target_one;
      const linkTargetTwo = props.dnxtiep_iie_icon_image_link_target_two;
      const linkTargetThree = props.dnxtiep_iie_icon_image_link_target_three;
      const linkTargetFour = props.dnxtiep_iie_icon_image_link_target_four;

      const isEffectZoe =
        props.dnxtiep_iie_image_hover_effect === "zoe" ? "icon-links" : "";

      return (
        <p className={isEffectZoe}>
          {"off" !== props.dnxtiep_iie_icon_show_hide_one && (
            <a href={link_one} target={linkTargetOne}>
              <Icon
                utils={utils}
                icon={props.dnxtiep_iie_icon_image_select_one}
                classes="et-pb-icon dnxtiep_iie_icon dnxtiep_iie_icon1"
              />
            </a>
          )}
          {"off" !== props.dnxtiep_iie_icon_show_hide_two && (
            <a href={link_two} target={linkTargetTwo}>
              <Icon
                utils={utils}
                icon={props.dnxtiep_iie_icon_image_select_two}
                classes="et-pb-icon dnxtiep_iie_icon dnxtiep_iie_icon2"
              />
            </a>
          )}
          {"off" !== props.dnxtiep_iie_icon_show_hide_three && (
            <a href={link_three} target={linkTargetThree}>
              <Icon
                utils={utils}
                icon={props.dnxtiep_iie_icon_image_select_three}
                classes="et-pb-icon dnxtiep_iie_icon dnxtiep_iie_icon3"
              />
            </a>
          )}
          {"off" !== props.dnxtiep_iie_icon_show_hide_four && (
            <a href={link_four} target={linkTargetFour}>
              <Icon
                utils={utils}
                icon={props.dnxtiep_iie_icon_image_select_four}
                classes="et-pb-icon dnxtiep_iie_icon dnxtiep_iie_icon4"
              />
            </a>
          )}
        </p>
      );
    };

    return (
      <div className="dnext-neip-iie-grid">
        <figure className={`effect-${props.dnxtiep_iie_image_hover_effect}`}>
          <Image
            imageTablet={this.props.dynamic.dnxtiep_iie_image_tablet}
            imagePhone={this.props.dynamic.dnxtiep_iie_image_phone}
            imageHover={this.props.dynamic.dnxtiep_iie_image__hover}
            dynamicImg={this.props.dynamic.dnxtiep_iie_image}
            lastEdited={this.props.dnxtiep_iie_image_last_edited}
            hoverEnabled={this.props.dnxtiep_iie_image__hover_enabled}
            imgAlt={this.props.dynamic.dnxtiep_iie_alt}
          />
          <figcaption>
            <DnxtiepHeading />
            <DnxtiepIcon />
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default NextImageIcon;
