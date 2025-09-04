// External Dependencies
import React, { Component } from "react";
import { Image } from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";


class NextUltimateImageHover extends Component {
  static slug = "dnxte_ultimate_image_hover";

  static css(props) {
    const additionalCss = [];

    const contentBackground = ["effect-15", "effect-19"];
    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.dnxtiep_uih_heading_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_uih_heading_margin",
          "%%order_class%% .dnext-neip-uih-des-heading",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_uih_heading_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_uih_heading_padding",
          "%%order_class%% .dnext-neip-uih-des-heading",
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_uih_focus_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_uih_focus_padding",
          "%%order_class%% .dnext-neip-uih-focus-heading",
          "padding",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_uih_description_margin) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_uih_description_margin",
          "%%order_class%% .dnext-neip-uih-des-pra",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxtiep_uih_description_padding) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxtiep_uih_description_padding",
          "%%order_class%% .dnext-neip-uih-des-pra",
          "padding",
          true
        )
      );
    }

    if (props.dnxtiep_uih_image_hover_effect === "effect-3") {
      additionalCss.push([
        {
          selector: `%%order_class%% figure.dnext-neip-uih-effect-3 figcaption::before`,
          declaration: `background: ${props.dnxtiep_uih_bottom_bg};`,
        },
      ]);
    }

    // CONTENT BACKGROUND COLOR
    if (contentBackground.includes(props.dnxtiep_uih_image_hover_effect)) {
      if ("on|tablet" === props.dnxtiep_uih_content_bg_color_last_edited) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-heading, figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-pra, figure.dnext-neip-uih-effect-15 .dnext-neip-uih-des-pra`,
            declaration: `background: ${props.dnxtiep_uih_content_bg_color_tablet}`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.dnxtiep_uih_content_bg_color) {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-heading, figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-pra, figure.dnext-neip-uih-effect-15 .dnext-neip-uih-des-pra`,
            declaration: `background: ${props.dnxtiep_uih_content_bg_color_phone}`,
            device: "phone",
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-heading, figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-pra, figure.dnext-neip-uih-effect-15 .dnext-neip-uih-des-pra`,
            declaration: `background: ${props.dnxtiep_uih_content_bg_color}`,
          },
        ]);
      }
    }
    // CONTENT BACKGROUND COLOR END

    // CONTENT GRADIENT COLOR START
    const dnxtiep_uih_content_gradient_direction =
      props.dnxtiep_uih_content_gradient_type === "linear-gradient"
        ? props.dnxtiep_uih_content_gradient_type_linear_direction
        : props.dnxtiep_uih_content_gradient_type_radial_direction;

    if ("off" !== props.dnxtiep_uih_content_gradient_show_hide) {
      const dnxtiep_uih_content_gradient_color_style = `background: ${props.dnxtiep_uih_content_gradient_type}(${dnxtiep_uih_content_gradient_direction},${props.dnxtiep_uih_content_gradient_color_one} ${props.dnxtiep_uih_content_gradient_start_position}, ${props.dnxtiep_uih_content_gradient_color_two} ${props.dnxtiep_uih_content_gradient_end_position})`;

      additionalCss.push([
        {
          selector: `%%order_class%% figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-heading, figure.dnext-neip-uih-effect-19 .dnext-neip-uih-des-pra, figure.dnext-neip-uih-effect-15 .dnext-neip-uih-des-pra`,
          declaration: dnxtiep_uih_content_gradient_color_style,
        },
      ]);
    }
    // CONTENT GRADIENT COLOR END

    // BACKGROUND OVERLAY COLOR START
    if ("on|tablet" === props.dnxtiep_uih_bg_overlay_last_edited) {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-neip-uih-grid figure`,
          declaration: `background: ${props.dnxtiep_uih_bg_overlay_tablet}`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxtiep_uih_bg_overlay_last_edited) {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-neip-uih-grid figure`,
          declaration: `background: ${props.dnxtiep_uih_bg_overlay_phone}`,
          device: "phone",
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-neip-uih-grid figure`,
          declaration: `background: ${props.dnxtiep_uih_bg_overlay}`,
        },
      ]);
    }
    // BACKGROUND OVERLAY COLOR END

    // Focus text background color
    if ("on|tablet" === props.dnxtiep_uih_focus_bg_last_edited) {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-neip-uih-grid figure .dnext-neip-uih-focus-heading`,
          declaration: `background: ${props.dnxtiep_uih_focus_bg_tablet}`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxtiep_uih_focus_bg_last_edited) {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-neip-uih-grid figure .dnext-neip-uih-focus-heading`,
          declaration: `background: ${props.dnxtiep_uih_focus_bg_phone}`,
          device: "tablet",
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: `%%order_class%% .dnext-neip-uih-grid figure .dnext-neip-uih-focus-heading`,
          declaration: `background: ${props.dnxtiep_uih_focus_bg}`,
        },
      ]);
    }
    // Focus text background color end

    // Background overlay gradient color
    const dnxtiep_uih_bg_overlay_gradient_direction =
      props.dnxtiep_uih_bg_overlay_gradient_type === "linear-gradient"
        ? props.dnxtiep_uih_bg_overlay_gradient_type_linear_direction
        : props.dnxtiep_uih_bg_overlay_gradient_type_radial_direction;

    if ("off" !== props.dnxtiep_uih_bg_overlay_gradient_show_hide) {
      const dnxtiep_uih_bg_overlay_gradient_color_style = `background: ${props.dnxtiep_uih_bg_overlay_gradient_type}(${dnxtiep_uih_bg_overlay_gradient_direction},${props.dnxtiep_uih_bg_overlay_gradient_color_one} ${props.dnxtiep_uih_bg_overlay_gradient_start_position}, ${props.dnxtiep_uih_bg_overlay_gradient_color_two} ${props.dnxtiep_uih_bg_overlay_gradient_end_position})`;

      if (props.dnxtiep_uih_image_hover_effect === "effect-2") {
        additionalCss.push([
          {
            selector: `%%order_class%% figure.dnext-neip-uih-effect-2 figcaption::before`,
            declaration: dnxtiep_uih_bg_overlay_gradient_color_style,
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: `%%order_class%% .dnext-neip-uih-grid figure`,
            declaration: dnxtiep_uih_bg_overlay_gradient_color_style,
          },
        ]);
      }
    }

    // Opacity manage

    const dnxitep_uih_image_opacity_style = `opacity: ${props.dnxtiep_uih_image_opacity} !important`;

    additionalCss.push([
      {
        selector: `%%order_class%% .dnext-neip-uih-grid figure:hover img`,
        declaration: dnxitep_uih_image_opacity_style,
      },
    ]);

    return additionalCss;
  }

  render() {
    const props = this.props;

    const DnxtiepHeading = () => {
      const HeadingTag = props.dnxtiep_uih_heading_tag;

      if ("" === props.dnxtiep_uih_heading_text) return "";

      let dnxtiepHeadingText = props.dynamic.dnxtiep_uih_heading_text;
      let dnxtiepHeadingBold = props.dynamic.dnxtiep_uih_heading_bold;
      let dnxtiepHeadingHover = props.dynamic.dnxtiep_uih_heading_hover;
      let dnxtiepHeadingComponent = dnxtiepHeadingText.render();
      let dnxtiepHeadingBoldComponent = dnxtiepHeadingBold.render();

      if (dnxtiepHeadingText.loading) return dnxtiepHeadingComponent;
      if (dnxtiepHeadingBold.loading) return dnxtiepHeadingBoldComponent;

      if (props.dnxtiep_uih_image_hover_effect === "effect-3") {
        return (
          <HeadingTag className="dnext-neip-uih-des-heading">
            <span className="dnext-neip-uih-main-heading">
              {dnxtiepHeadingComponent}
            </span>{" "}
            <span className="dnext-neip-uih-focus-heading">
              {dnxtiepHeadingBoldComponent}
            </span>{" "}
            <i className="dnext-neip-uih-main-heading">
              {dnxtiepHeadingHover.render()}
            </i>
          </HeadingTag>
        );
      }
      return (
        <HeadingTag className="dnext-neip-uih-des-heading">
          <span className="dnext-neip-uih-main-heading">
            {dnxtiepHeadingComponent}
          </span>{" "}
          <span className="dnext-neip-uih-focus-heading">
            {dnxtiepHeadingBoldComponent}
          </span>
        </HeadingTag>
      );
    };

    // Description text
    const DnxtiepDescription = () => {
      if ("" === props.dnxtiep_uih_description)
        return "";

      let dnxtiepDescriptionText =
        props.dynamic.dnxtiep_uih_description;

      let finalDescription = props.dnxtiep_uih_image_hover_effect === "effect-15" 
          ? dnxtiepDescriptionText.value
                    .split("<p>")
                    .join("<p class='dnext-neip-uih-des-pra'>")
          : dnxtiepDescriptionText.value;

      finalDescription = finalDescription
        .split("</p>")
        .join("</p><br/>");

      let dnxtiepDescriptionComponent = dnxtiepDescriptionText.render();
      if (dnxtiepDescriptionText.loading)
        return dnxtiepDescriptionComponent;
      
      return (
        <div
          className={props.dnxtiep_uih_image_hover_effect ===
            "effect-15" ? "dnext-neip-uih-descwrap" : "dnext-neip-uih-des-pra"}
          dangerouslySetInnerHTML={{
            __html: finalDescription,
          }}
        />
      );
     
    };

    const Content = () => {
      if (props.dnxtiep_uih_image_hover_effect === "effect-1") {
        return (
          <figcaption>
            <div className="dnext-neip-uih-descwrap">
              <DnxtiepHeading />
              <DnxtiepDescription />
            </div>
          </figcaption>
        );
      }
      if (props.dnxtiep_uih_image_hover_effect === "effect-3") {
        return (
          <figcaption>
            <div className="dnext-neip-uih-descwrap">
              <DnxtiepHeading />
            </div>
          </figcaption>
        );
      }

      if (props.dnxtiep_uih_image_hover_effect === "effect-15") {
        return (
          <figcaption>
            <DnxtiepHeading />
            <DnxtiepDescription />
          </figcaption>
        );
      }

      return (
        <figcaption>
          <DnxtiepHeading />
          <DnxtiepDescription />
        </figcaption>
      );
    };

    const dnxtiepHoverClass = () => `dnext-neip-uih-${props.dnxtiep_uih_image_hover_effect}`;

    return (
      <div className="dnext-neip-uih-grid">
        <figure className={dnxtiepHoverClass()}>
          <Image
            imageTablet={props.dynamic.dnxtiep_uih_image_tablet}
            imagePhone={props.dynamic.dnxtiep_uih_image_phone}
            imageHover={props.dynamic.dnxtiep_uih_image__hover}
            dynamicImg={props.dynamic.dnxtiep_uih_image}
            lastEdited={props.dnxtiep_uih_image_last_edited}
            hoverEnabled={props.dnxtiep_uih_image__hover_enabled}
            imgAlt={props.dynamic.dnxtiep_uih_alt}
          />
          <Content />
        </figure>
      </div>
    );
  }
}

export default NextUltimateImageHover;
