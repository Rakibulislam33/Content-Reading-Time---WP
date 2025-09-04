import React, { Component } from "react";
import bodymovin from "../../../assets/js/bodymovin.min";
import { Button, getAlignment, Title } from "../base/common";

class DiviNextLottie extends Component {
  static slug = "dnxte_lottie";

  static css(props) {
    const css = [];

    if ("" !== props.lottie_title_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "lottie_title_margin",
          "%%order_class%% .dnxte-lottie-heading",
          "margin"
        )
      );
    }

    if ("" !== props.lottie_title_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "lottie_title_padding",
          "%%order_class%% .dnxte-lottie-heading",
          "padding"
        )
      );
    }

    if ("" !== props.lottie_desc_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "lottie_desc_margin",
          "%%order_class%% .dnxte-lottie-content",
          "margin"
        )
      );
    }

    if ("" !== props.lottie_desc_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "lottie_desc_padding",
          "%%order_class%% .dnxte-lottie-content",
          "padding"
        )
      );
    }

    if ("" !== props.lottie_btn_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "lottie_btn_margin",
          "%%order_class%% .dnxte-lottie-button",
          "margin"
        )
      );
    }

    if ("" !== props.lottie_btn_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "lottie_btn_padding",
          "%%order_class%% .dnxte-lottie-button",
          "padding"
        )
      );
    }

    // Lottie Width
    css.push([
      {
        selector: `%%order_class%% .dnxte-lottie`,
        declaration: `width: ${props.lottie_width};`,
      },
    ]);

    if ("on|tablet" === props.lottie_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-lottie",
          declaration: `width: ${props.lottie_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.lottie_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-lottie",
          declaration: `width: ${props.lottie_width_phone};`,
          device: "phone",
        },
      ]);
    }
    // Lotie Width

    return css;
  }

  constructor(props) {
    super(props);

    this.playOnHover = props.lottie_play_on_hover === "on";
    this.stopOnHover = props.lottie_stop_on_hover === "on";

    this.lottie = bodymovin.loadAnimation({
      wrapper: this.refs.dnxteLottie,
      animType: "svg",
      loop: props.lottie_loop === "on",
      path: props.lottie_upload,
      autoplay: props.lottie_autoplay === "on",
    });

    props.lottie_autoplay === "off" &&
      this.playOnHover &&
      this.lottie.goToAndStop(parseInt(props.lottie_start_frame), true);
  }

  componentDidMount() {
    this.playOnHover = this.props.lottie_play_on_hover === "on";
    this.stopOnHover = this.props.lottie_stop_on_hover === "on";

    this.lottie = bodymovin.loadAnimation({
      wrapper: this.refs.dnxteLottie,
      animType: "svg",
      loop: this.props.lottie_loop === "on",
      path: this.props.lottie_upload,
      autoplay: this.props.lottie_autoplay === "on",
    });

    // Set Speed
    this.lottie.setSpeed(parseFloat(this.props.lottie_speed));
    this.props.lottie_autoplay === "off" &&
      this.playOnHover &&
      this.lottie.goToAndStop(parseInt(this.props.lottie_start_frame), true);
    // Direction
    this.lottie.setDirection(parseInt(this.props.lottie_direction));
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.lottie_upload !== nextProps.lottie_upload ||
      this.props.lottie_loop !== nextProps.lottie_loop ||
      this.props.lottie_autoplay !== nextProps.lottie_autoplay
    ) {
      this.lottie.destroy();

      this.lottie = bodymovin.loadAnimation({
        wrapper: this.refs.dnxteLottie,
        path: nextProps.lottie_upload,
        loop: nextProps.lottie_loop === "on",
        autoplay: nextProps.lottie_autoplay === "on",
      });
    }
    this.lottie.setSpeed(parseFloat(nextProps.lottie_speed));

    this.lottie.setDirection(parseInt(nextProps.lottie_direction));

    this.playOnHover = nextProps.lottie_play_on_hover === "on";
    this.stopOnHover = nextProps.lottie_stop_on_hover === "on";

    if (nextProps.lottie_autoplay === "off" && this.playOnHover) {
      this.lottie.goToAndPlay(parseInt(nextProps.lottie_start_frame), true);
      this.lottie.pause();
    }
  }

  mouseenter = () => {
    if (this.props.lottie_autoplay === "off" && this.playOnHover) {
      this.lottie.play();
    } else if (this.props.lottie_autoplay === "on" && this.stopOnHover) {
      this.lottie.pause();
    }
  };

  mouseleave = () => {
    if (this.props.lottie_autoplay === "off" && this.playOnHover) {
      this.lottie.pause();
    } else if (this.props.lottie_autoplay === "on" && this.stopOnHover) {
      this.lottie.play();
    }
  };

  render() {
    const { props } = this;

    let lottie_alignment_classes = getAlignment(
      "lottie_alignment",
      props,
      "dnext"
    );

    let lottie_button_alignment_classes = getAlignment(
      "lottie_button_alignment",
      props
    );

    const lottieDescription = props.dynamic.lottie_content;
    let lottieDescriptionComponent = lottieDescription.render();


    return (
      <div>
        <div className={`dnext_lottie_wrapper ${lottie_alignment_classes}`}>
          <div
            onMouseEnter={() => this.mouseenter()}
            onMouseLeave={() => this.mouseleave()}
            ref="dnxteLottie"
            className="dnxte-lottie"
            height="400"
            width="300"
          />
        </div>
        <div className="dnxte-lottie-content-setion">
          <Title
            title={this.props.lottie_title}
            dynamicTitle={this.props.dynamic.lottie_title}
            tag={this.props.header_level || "h4"}
            classes="dnxte-lottie-heading"
          />
          <divi className="dnxte-lottie-content">
            {lottieDescriptionComponent}
          </divi>
    
          {this.props.lottie_use_button !== "off" && (
            <div
              className={`dnxte-lottie-button-container ${lottie_button_alignment_classes}`}
            >
              <Button
                text={this.props.lottie_button_text}
                dynamicText={this.props.dynamic.lottie_button_text}
                link={this.props.lottie_button_link}
                linkTarget={this.props.lottie_button_target}
                classes="dnxte-lottie-button"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DiviNextLottie;
