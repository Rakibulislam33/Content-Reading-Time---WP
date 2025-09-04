// External Dependencies
import React, { Component } from "react";
import Swiper from "swiper";
import { paginationClass, SliderArrow } from "../base/common";
import "../base/get_responsive_css";
import "../base/swiper.css";
// Internal Dependencies
import "./style.css";
class DiviNxte3dCubeSlider extends Component {
  static slug = "dnxte_3dcubeslider_parent";

  static css(props) {
    const css = [];
    let arrow_width = +props.dnxte_cubeslider_arrow_size + 5 + "px";

    if ("" !== props.dnxte_cubeslider_arrow_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_cubeslider_arrow_margin",
          "%%order_class%% .swiper-button-next,%%order_class%%  .swiper-button-prev",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxte_cubeslider_arrow_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_cubeslider_arrow_padding",
          "%%order_class%% .swiper-button-next,%%order_class%% .swiper-button-prev",
          "padding",
          true
        )
      );
    }
    // ARROW COLOR

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev,%%order_class%% .swiper-button-next`,
        declaration: `color: ${props.dnxte_cubeslider_arrow_color};background-color: ${props.dnxte_cubeslider_arrow_background_color}`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination .swiper-pagination-bullet`,
        declaration: `background-color: ${props.dnxte_cubeslider_dots_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination .swiper-pagination-bullet-active`,
        declaration: `background-color: ${props.dnxte_cubeslider_dots_active_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination-progressbar .swiper-pagination-progressbar-fill`,
        declaration: `background-color: ${props.dnxte_cubeslider_progressbar_fill_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after,.swiper-button-next:after`,
        declaration: `font-size: ${props.dnxte_cubeslider_arrow_size}px`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev, %%order_class%% .swiper-button-next`,
        declaration: `width: ${arrow_width}; height: ${arrow_width}`,
      },
    ]);

    if ("off" === props.dnxte_cubeslider_shadow) {
      css.push([
        {
          selector: `%%order_class%% .swiper-cube-shadow`,
          declaration: `display: none`,
        },
      ]);
    }
    if ("on" === props.dnxte_cubeslider_shadow) {
      css.push([
        {
          selector: `%%order_class%% .swiper-cube-shadow`,
          declaration: `background: ${props.dnxte_cubeslider_shadow_color}`,
        },
      ]);
    }

    return css;
  }

  constructor(props) {
    super(props);

    this.pause = "on" === this.props.dnxte_cubeslider_pause_on_hover;
    this.pauseOnHover = false;

    this.cubeSlider = new Swiper(this.refs.cubeSlider, {});

    this.arrow = "on" === this.props.dnxte_cubeslider_arrows;
    this.arrowPosition = this.props.dnxte_cubeslider_arrow_position;
  }

  componentDidMount() {
    this.cubeSlider = new Swiper(this.refs.cubeSlider, {
      autoplay: {
        enabled: "on" === this.props.dnxte_cubeslider_autoplay_show_hide,
        delay: this.props.dnxte_cubeslider_autoplay_delay
          ? parseInt(this.props.dnxte_cubeslider_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      effect: "cube",
      cubeEffect: {
        slideShadows: "on" === this.props.dnxte_cubeslider_slide_shadows,
        shadow: "on" === this.props.dnxte_cubeslider_shadow,
        shadowOffset:
          "on" === this.props.dnxte_cubeslider_shadow
            ? parseInt(this.props.dnxte_cubeslider_shadow_offset)
            : 0,
        shadowScale:
          "on" === this.props.dnxte_cubeslider_shadow
            ? parseFloat(this.props.dnxte_cubeslider_shadow_scale)
            : 0,
      },
      direction: "horizontal",
      speed: parseInt(this.props.dnxte_cubeslider_speed),
      grabCursor: "on" === this.props.dnxte_cubeslider_grab,
      loop: "on" === this.props.dnxte_cubeslider_loop,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: "on" === this.props.dnxte_cubeslider_pagination_bullets,
        clickable: true,
        type: this.props.dnxte_cubeslider_pagination_type,
      },
      keyboard: {
        enabled: "on" === this.props.dnxte_cubeslider_keyboard_enable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === this.props.dnxte_cubeslider_mousewheel_enable,
        invert: true,
      },
    });

    this.arrow = "on" === this.props.dnxte_cubeslider_arrows;
    this.arrowPosition = this.props.dnxte_cubeslider_arrow_position;
    this.pause = "on" === this.props.dnxte_cubeslider_pause_on_hover;
    this.pauseOnHover = false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.content !== nextProps.content) return true;
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.pause = "on" === nextProps.dnxte_cubeslider_pause_on_hover;

    if ("off" !== nextProps.dnxte_cubeslider_autoplay_show_hide) {
      this.cubeSlider.autoplay.stop();
      this.cubeSlider.params.autoplay.delay = nextProps.dnxte_cubeslider_autoplay_delay
        ? parseInt(nextProps.dnxte_cubeslider_autoplay_delay)
        : 0;
    } else {
      this.cubeSlider.autoplay.stop();
    }

    if ("off" !== nextProps.dnxte_cubeslider_autoplay_show_hide) {
      if (this.pause && this.pauseOnHover) {
        this.cubeSlider.autoplay.stop();
      } else if (this.pauseOnHover === false) {
        this.cubeSlider.autoplay.start();
      }
    }

    if ("on" === nextProps.dnxte_cubeslider_loop) {
      this.cubeSlider.params.loop = true;
      this.cubeSlider.loopCreate();
    } else {
      this.cubeSlider.params.loop = false;
      this.cubeSlider.loopDestroy();
    }

    this.cubeSlider.params.speed = parseInt(nextProps.dnxte_cubeslider_speed);
    this.cubeSlider.params.pagination.type =
      nextProps.dnxte_cubeslider_pagination_type;
    this.cubeSlider.params.pagination.dynamicBullets =
      "on" === nextProps.dnxte_cubeslider_pagination_bullets;

    this.cubeSlider.params.cubeEffect.slideShadows =
      "on" === nextProps.dnxte_cubeslider_slide_shadows;

    this.cubeSlider.params.cubeEffect.shadow =
      "on" === nextProps.dnxte_cubeslider_shadow;

    this.cubeSlider.params.cubeEffect.shadowOffset =
      "on" === nextProps.dnxte_cubeslider_shadow
        ? parseInt(nextProps.dnxte_cubeslider_shadow_offset)
        : 0;

    this.cubeSlider.params.cubeEffect.shadowScale =
      "on" === nextProps.dnxte_cubeslider_shadow
        ? parseFloat(nextProps.dnxte_cubeslider_shadow_scale)
        : 0;

    if (
      this.props.dnxte_cubeslider_keyboard_enable !==
        nextProps.dnxte_cubeslider_keyboard_enable ||
      this.props.dnxte_cubeslider_mousewheel_enable !==
        nextProps.dnxte_cubeslider_mousewheel_enable
    ) {
      "on" === nextProps.dnxte_cubeslider_keyboard_enable
        ? this.cubeSlider.keyboard.enable()
        : this.cubeSlider.keyboard.disable();

      "on" === nextProps.dnxte_cubeslider_mousewheel_enable
        ? this.cubeSlider.mousewheel.enable()
        : this.cubeSlider.mousewheel.disable();
    }

    this.arrow = "on" === nextProps.dnxte_cubeslider_arrows;
    this.arrowPosition = nextProps.dnxte_cubeslider_arrow_position;

    this.cubeSlider.pagination.render();
    this.cubeSlider.update(true);
  }

  mouseenter = () => {
    this.pauseOnHover = this.pause;
  };

  mouseleave = () => {
    this.pauseOnHover = false;
  };

  render() {
    const arrowClass = () => {
      if (this.arrowPosition === "inner")
        return "dnexte_cubeslider_arrows_inner";
      if (this.arrowPosition === "outer")
        return "dnexte_cubeslider_arrows_outer";
      return "dnexte_cubeslider_arrows_default";
    };

    return (
      <>
        <div
          ref="cubeSlider"
          className="swiper-container dnxte-3dcubeslider-active"
          style={{
            cursor:
              this.props.dnxte_cubeslider_grab === "on" ? "grab" : "default",
          }}
          onMouseEnter={this.mouseenter}
          onMouseLeave={this.mouseleave}
        >
          <div className="swiper-wrapper">
            {this.props.content && Array.isArray(this.props.content)
              ? this.props.content.map((item) => {
                  const props = item.props.attrs;
                  let classNames = [
                    "swiper-slide",
                    "dnxte_3dcubeslider_child",
                    item.key,
                    `${item.props.type}_${item.props.shortcode_index}`,
                  ];
                  const HeadingTag = props.header_level || "h3";
                  return (
                    <div key={item.key} className={classNames.join(" ")}>
                      <div className="et_pb_module_inner dnxte-3dcubeslider-item">
                        <img
                          className="img-fluid swiper-lazy"
                          src={props.cubeslider_image}
                          alt={props.cubeslider_alt ? props.cubeslider_alt : ""}
                        />
                        <div className="dnxte-3dcubeslider-multitext">
                          <HeadingTag className="dnxte-3dcubeslider-heading">
                            {props.cubeslider_title}
                          </HeadingTag>
                          <div
                            className="dnxte-3dcubeslider-pra"
                            dangerouslySetInnerHTML={{
                              __html: props.cubeslider_content,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
            <div style={{ display: "none" }}>{this.props.content}</div>
          </div>
          <div
            className={paginationClass(
              this.props,
              "dnxte_cubeslider_pagination_type",
              "dnxte_cubeslider_pagination_bullets"
            )}
          />
        </div>
        {this.arrow && (
          <SliderArrow
            arrowClass={arrowClass}
            slidePrev={this.cubeSlider.slidePrev}
            slideNext={this.cubeSlider.slideNext}
          />
        )}
      </>
    );
  }
}
export default DiviNxte3dCubeSlider;
