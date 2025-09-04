import $ from "jquery";
import React, { Component } from "react";
import "../../../assets/js/magnify.min";
import "../../../assets/css/magnify.min.css";
import "./style.css";

class DiviNextImageMagnifier extends Component {
  static slug = "dnxte_image_magnifier";

  static css(props) {
    const css = [];

    // Image Width
    if ("on|tablet" === props.magnifier_lens_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .magnify-lens",
          declaration: `width: ${props.magnifier_lens_width_tablet} !important;height: ${props.magnifier_lens_width_tablet} !important;`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.magnifier_lens_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .magnify-lens",
          declaration: `width: ${props.magnifier_lens_width_phone} !important;height: ${props.magnifier_lens_width_phone} !important;`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .magnify-lens",
          declaration: `width: ${props.magnifier_lens_width} !important;height: ${props.magnifier_lens_width} !important;`,
        },
      ]);
    }
    // Image width end

    return css;
  }

  componentDidMount() {
    $(".dnxte-magnifier img").magnify({
      speed: +this.props.magnifier_speed,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.magnifier_speed !== nextProps.magnifier_speed ||
      this.props.magnifier_limit_boundary !== nextProps.magnifier_limit_boundary
    ) {
      $(".dnxte-magnifier img").magnify({
        speed: +nextProps.magnifier_speed,
        limitBounds: nextProps.magnifier_limit_boundary === "on",
        // finalWidth: 500,
        // finalHeight: 500,
      });
    }
  }

  render() {
    return (
      <div className="dnxte-magnifier">
        <img
          src={this.props.magnifier_upload}
          data-magnify-src={this.props.magnifier_upload}
          alt={this.props.image_alt || "magnifier"}
          className="dnxte-magnifier-zoom"
        />
      </div>
    );
  }
}

export default DiviNextImageMagnifier;
