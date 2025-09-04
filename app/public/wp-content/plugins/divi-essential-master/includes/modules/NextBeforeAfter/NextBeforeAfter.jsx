import $ from "jquery";
import React, { Component } from "react";
import "../../../assets/css/twentytwenty.css";
import { imageFunc } from "../base/common";
// Internal Dependencies
import "./style.css";

class NextBeforeAfter extends Component {
  static slug = "dnxte_before_after";

  static css(props) {
    const css = [];

    if ("on" === props.dnxte_show_labels) {
      css.push([
        {
          selector:
            "%%order_class%% .dnxtecomparisonslide .twentytwenty-overlay .twentytwenty-before-label, %%order_class%% .dnxtecomparisonslide .twentytwenty-overlay .twentytwenty-after-label",
          declaration: "opacity: 1 !important;",
        },
      ]);
    }

    if ("on|tablet" === props.dnxte_before_label_bg_color_last_edited) {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-before-label:before, .twentytwenty-before-label:before",
          declaration: `background: ${props.dnxte_before_label_bg_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_before_label_bg_color_last_edited) {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-before-label:before, .twentytwenty-before-label:before",
          declaration: `background: ${props.dnxte_before_label_bg_color_phone};`,
          device: "phone",
        },
      ]);
    } else if (
      "on|hover" === props.dnxte_before_label_bg_color__hover_enabled
    ) {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-before-label:before, .twentytwenty-before-label:before:hover",
          declaration: `background: ${props.dnxte_before_label_bg_color__hover}`,
        },
      ]);
    } else {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-before-label:before, .twentytwenty-before-label:before",
          declaration: `background: ${props.dnxte_before_label_bg_color};`,
        },
      ]);
    }

    if ("on|tablet" === props.dnxte_after_label_bg_color_last_edited) {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-after-label:before, .twentytwenty-after-label:before",
          declaration: `background: ${props.dnxte_after_label_bg_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxte_after_label_bg_color_last_edited) {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-after-label:before, .twentytwenty-after-label:before",
          declaration: `background: ${props.dnxte_after_label_bg_color_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.dnxte_after_label_bg_color__hover_enabled) {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-after-label:before, .twentytwenty-after-label:before:hover",
          declaration: `background: ${props.dnxte_after_label_bg_color__hover}`,
        },
      ]);
    } else {
      css.push([
        {
          selector:
            "%%order_class%% .twentytwenty-after-label:before, .twentytwenty-after-label:before",
          declaration: `background: ${props.dnxte_after_label_bg_color};`,
        },
      ]);
    }

    // Overlay
    if ("on" === props.dnxte_enable_overlay) {
      css.push([
        {
          selector: "%%order_class%% .twentytwenty-overlay:hover",
          declaration: `background: ${props.dnxte_overlay_color};`,
        },
      ]);
    }
    // Slider Color
    css.push([
      {
        selector:
          "%%order_class%% .twentytwenty-handle:before, %%order_class%% .twentytwenty-handle:after",
        declaration: `background: ${props.dnxte_slider_color};`,
      },
    ]);

    // Slider Handle Color
    css.push([
      {
        selector:
          "%%order_class%% .twentytwenty-horizontal .twentytwenty-handle:before",
        declaration: `-webkit-box-shadow: 0 3px 0 ${props.dnxte_slider_handle_color}, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow: 0 3px 0 ${props.dnxte_slider_handle_color}, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow: 0 3px 0 ${props.dnxte_slider_handle_color}, 0px 0px 12px rgba(51, 51, 51, 0.5)`,
      },
    ]);

    css.push([
      {
        selector:
          "%%order_class%% .twentytwenty-horizontal .twentytwenty-handle:after",
        declaration: `-webkit-box-shadow: 0 3px 0 ${props.dnxte_slider_handle_color}, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow: 0 3px 0 ${props.dnxte_slider_handle_color}, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow: 0 3px 0 ${props.dnxte_slider_handle_color}, 0px 0px 12px rgba(51, 51, 51, 0.5)`,
      },
    ]);

    css.push([
      {
        selector: "%%order_class%% .twentytwenty-handle",
        declaration: `border-color: ${props.dnxte_slider_handle_color};background: ${props.dnxte_slider_handle_bg_color};`,
      },
    ]);

    //Arrow of handle
    if (props.dnxte_orientation === "horizontal") {
      css.push([
        {
          selector: "%%order_class%% .twentytwenty-left-arrow",
          declaration: `border-right-color: ${props.dnxte_slider_handle_icon_color};`,
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .twentytwenty-right-arrow",
          declaration: `border-left-color: ${props.dnxte_slider_handle_icon_color};`,
        },
      ]);
    } else if (props.dnxte_orientation === "vertical") {
      css.push([
        {
          selector: "%%order_class%% .twentytwenty-down-arrow",
          declaration: `border-top-color: ${props.dnxte_slider_handle_icon_color};`,
        },
      ]);
      css.push([
        {
          selector: "%%order_class%% .twentytwenty-up-arrow",
          declaration: `border-bottom-color: ${props.dnxte_slider_handle_icon_color};`,
        },
      ]);
    }

    return css;
  }

  componentDidMount() {
    this.updateBeforeAfter();
  }

  componentDidUpdate() {
    this.updateBeforeAfter();
  }

  updateBeforeAfter = () => {
    const container = $(this.refs.innerWrapper),
      beforeImage = $(this.refs.beforeImage),
      afterImage = $(this.refs.afterImage),
      beforeLabel = $(this.refs.beforeLabel),
      afterLabel = $(this.refs.afterLabel),
      slider = $(this.refs.slider);

    if (beforeImage.length) {
      container.height(
        Math.floor(beforeImage[0].getBoundingClientRect().height)
      );
      const offset = this.props.dnxte_offset || 0.7;
      const width = Math.ceil(beforeImage[0].getBoundingClientRect().width);

      const height = Math.ceil(beforeImage[0].getBoundingClientRect().height);
      const sliderObj = {
        w: width + "px",
        h: height + "px",
        cw: Math.ceil(offset * width) + "px",
        ch: Math.ceil(offset * height) + "px",
      };

      if ("vertical" === this.props.dnxte_orientation) {
        return (
          beforeImage.css(
            "clip",
            "rect(0, ".concat(sliderObj.w, ", ").concat(sliderObj.ch, ", 0)")
          ),
          afterImage.css(
            "clip",
            "rect("
              .concat(sliderObj.ch, ", ")
              .concat(sliderObj.w, ", ")
              .concat(sliderObj.h, ", 0)")
          ),
          beforeLabel.css(
            "clip",
            "rect(0, ".concat(sliderObj.w, ", ").concat(sliderObj.ch, ", 0)")
          ),
          afterLabel.css(
            "clip",
            "rect("
              .concat(sliderObj.ch, ", ")
              .concat(sliderObj.w, ", ")
              .concat(sliderObj.h, ", 0)")
          ),
          slider.css("top", sliderObj.ch),
          slider.css("left", "")
        );
      } else {
        return (
          beforeImage.css(
            "clip",
            "rect(0, ".concat(sliderObj.cw, ", ").concat(sliderObj.h, ", 0)")
          ),
          afterImage.css(
            "clip",
            "rect(0, "
              .concat(sliderObj.w, ", ")
              .concat(sliderObj.h, ", ")
              .concat(sliderObj.cw, ")")
          ),
          beforeLabel.css(
            "clip",
            "rect(0, ".concat(sliderObj.cw, ", ").concat(sliderObj.h, ", 0)")
          ),
          afterLabel.css(
            "clip",
            "rect(0, "
              .concat(sliderObj.w, ", ")
              .concat(sliderObj.h, ", ")
              .concat(sliderObj.cw, ")")
          ),
          slider.css("left", sliderObj.cw),
          slider.css("top", "")
        );
      }
    }
  };
  render() {
    const { props } = this;
    return (
      <div
        className="dnxtecomparisonslide twentytwenty-container"
        ref="container"
      >
        <div
          className={`twentytwenty-wrapper twentytwenty-${props.dnxte_orientation ||
            "horizontal"}`}
          ref="innerWrapper"
        >
          {imageFunc(
            props,
            "dnxte_before_image",
            "dnxte_before_image_alt",
            "beforeImage twentytwenty-before",
            "beforeImage"
          )}
          {imageFunc(
            props,
            "dnxte_after_image",
            "dnxte_after_image_alt",
            "afterImage twentytwenty-after",
            "afterImage"
          )}
          {"on" === props.dnxte_enable_overlay && (
            <div className="twentytwenty-overlay">
              <div
                className="before-label twentytwenty-before-label"
                ref="beforeLabel"
                data-content={props.dnxte_before_label}
              />
              <div
                className="after-label twentytwenty-after-label"
                ref="afterLabel"
                data-content={props.dnxte_after_label}
              />
            </div>
          )}
          {props.dnxte_orientation === "horizontal" && (
            <div className="slider-handle twentytwenty-handle" ref="slider">
              <span className="twentytwenty-left-arrow" />
              <span className="twentytwenty-right-arrow" />
            </div>
          )}

          {props.dnxte_orientation === "vertical" && (
            <div className="slider-handle twentytwenty-handle" ref="slider">
              <span className="twentytwenty-up-arrow" />
              <span className="twentytwenty-down-arrow" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NextBeforeAfter;
