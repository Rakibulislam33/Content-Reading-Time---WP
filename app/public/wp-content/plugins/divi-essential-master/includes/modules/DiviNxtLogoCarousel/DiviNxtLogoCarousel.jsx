// External Dependencies
import React, { Component } from "react";
import { findDOMNode } from 'react-dom';
import Swiper from "swiper";
import { paginationClass, SliderArrow } from "../base/common";
import "../base/get_responsive_css";
import "../base/swiper.css";
// Internal Dependencies
import "./style.css";

class DiviNxtLogoCarousel extends Component {
  static slug = "dnxte_logo_carousel_parent";

  static css(props) {
    const css = [];
    let arrow_width = +props.dnxt_carousel_arrow_size - 15 + "px";

    if ("" !== props.dnxt_carousel_arrow_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_carousel_arrow_margin",
          "%%order_class%% .swiper-button-next,%%order_class%%  .swiper-button-prev",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxt_carousel_arrow_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_carousel_arrow_padding",
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
        declaration: `color: ${props.dnxt_carousel_arrow_color};background-color: ${props.dnxt_carousel_arrow_background_color}`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnext-logo-carosuel-active .swiper-pagination .swiper-pagination-bullet`,
        declaration: `background-color: ${props.dnxt_carousel_dots_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnext-logo-carosuel-active .swiper-pagination .swiper-pagination-bullet-active`,
        declaration: `background-color: ${props.dnxt_carousel_dots_active_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination-progressbar .swiper-pagination-progressbar-fill`,
        declaration: `background-color: ${props.dnxt_carousel_progressbar_fill_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after, %%order_class%% .swiper-button-next:after`,
        declaration: `font-size: ${props.dnxt_carousel_arrow_size}px`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev, %%order_class%% .swiper-button-next`,
        declaration: `width: ${arrow_width}; height: ${arrow_width}`,
      },
    ]);

    return css;
  }

  constructor(props) {
    super(props);

    this.pause = "on" === this.props.dnxt_carousel_pause_on_hover;
    this.pauseOnHover = false;

    this.logoSwiper = new Swiper(this.refs.logoSwiper, {});

    this.arrow = "on" === this.props.dnxt_carousel_arrows;
    this.arrowPosition = this.props.dnxt_carousel_arrow_position;
  }

  componentDidMount() {
    this.logoSwiper = new Swiper(this.refs.logoSwiper, {
      autoplay: {
        enabled: "on" === this.props.dnxt_carousel_autoplay_show_hide,
        delay: this.props.dnxt_carousel_autoplay_delay
          ? parseInt(this.props.dnxt_carousel_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      direction: "horizontal",
      speed: parseInt(this.props.dnxt_carousel_speed),
      spaceBetween: parseInt(this.props.dnxt_carousel_spacebetween),
      grabCursor: "on" === this.props.dnxt_carousel_grab,
      loop: "on" === this.props.dnxt_carousel_loop,
      slidesPerView: parseInt(this.props.dnxt_carousel_breakpoint_desktop),
      centeredSlides: "on" === this.props.dnxt_carousel_centered_slides,
      breakpoints: {
        1024: {
          slidesPerView: parseInt(this.props.dnxt_carousel_breakpoint_desktop),
        },
        768: {
          slidesPerView: this.props.dnxt_carousel_breakpoint_desktop_tablet
            ? parseInt(this.props.dnxt_carousel_breakpoint_desktop_tablet)
            : this.logoSwiper.params.slidesPerView,
        },
        479: {
          slidesPerView: this.props.dnxt_carousel_breakpoint_desktop_phone
            ? parseInt(this.props.dnxt_carousel_breakpoint_desktop_phone)
            : 1,
        },
        200: {
          slidesPerView: this.props.dnxt_carousel_breakpoint_desktop_phone
            ? parseInt(this.props.dnxt_carousel_breakpoint_desktop_phone)
            : 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: "on" === this.props.dnxt_carousel_pagination_bullets,
        clickable: true,
        type: this.props.dnxt_carousel_pagination_type,
      },
      navigation: {
        nextEl: ".swiper-button-container .swiper-button-next",
        prevEl: ".swiper-button-container .swiper-button-prev",
      },
      keyboard: {
        enabled: "on" === this.props.dnxt_carousel_keyboard_enable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === this.props.dnxt_carousel_mousewheel_enable,
        invert: true,
      },
      observer: true,
      observeParents: true,
    });

    this.arrow = "on" === this.props.dnxt_carousel_arrows;
    this.arrowPosition = this.props.dnxt_carousel_arrow_position;
    this.pause = "on" === this.props.dnxt_carousel_pause_on_hover;
    this.pauseOnHover = false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.content !== nextProps.content) return true;
    return false;
  }

  componentWillReceiveProps(nextProps) {
    const node = findDOMNode(this.refs.logoSwiper);
    if(this.props.dnxt_carousel_rtl !== nextProps.dnxt_carousel_rtl && nextProps.dnxt_carousel_rtl !== "on") {
      node.classList.contains("swiper-container-rtl") && node.classList.remove("swiper-container-rtl");
    }else if(this.props.dnxt_carousel_rtl !== nextProps.dnxt_carousel_rtl && nextProps.dnxt_carousel_rtl !== "off") {
      node.classList.contains("swiper-container-rtl") || node.classList.toggle("swiper-container-rtl", true);
    }

    this.pause = "on" === nextProps.dnxt_carousel_pause_on_hover;
    if (
      this.props.dnxt_carousel_breakpoint_desktop !==
        nextProps.dnxt_carousel_breakpoint_desktop ||
      this.props.dnxt_carousel_breakpoint_desktop_tablet !==
        nextProps.dnxt_carousel_breakpoint_desktop_tablet ||
      this.props.dnxt_carousel_breakpoint_desktop_phone !==
        nextProps.dnxt_carousel_breakpoint_desktop_phone
    ) {
      this.logoSwiper.params.breakpoints[
        "1024"
      ].slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop;
      this.logoSwiper.params.slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop;
      if (
        "on|tablet" ===
          nextProps.dnxt_carousel_breakpoint_desktop_last_edited &&
        nextProps.dnxt_carousel_breakpoint_desktop_tablet
      ) {
        this.logoSwiper.params.breakpoints[
          "768"
        ].slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop_tablet;
        this.logoSwiper.params.slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop_tablet;
      } else if (
        "on|phone" === nextProps.dnxt_carousel_breakpoint_desktop_last_edited &&
        nextProps.dnxt_carousel_breakpoint_desktop_phone
      ) {
        this.logoSwiper.params.breakpoints[
          "479"
        ].slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop_phone;
        this.logoSwiper.params.slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop_phone;

        this.logoSwiper.params.breakpoints[
          "200"
        ].slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop_phone;
        this.logoSwiper.params.slidesPerView = +nextProps.dnxt_carousel_breakpoint_desktop_phone;
      }
    }

    if ("off" !== nextProps.dnxt_carousel_autoplay_show_hide) {
      this.logoSwiper.autoplay.stop();
      this.logoSwiper.params.autoplay.delay = nextProps.dnxt_carousel_autoplay_delay
        ? parseInt(nextProps.dnxt_carousel_autoplay_delay)
        : 0;
    } else {
      this.logoSwiper.autoplay.stop();
    }

    if ("off" !== nextProps.dnxt_carousel_autoplay_show_hide) {
      if (this.pause && this.pauseOnHover) {
        this.logoSwiper.autoplay.stop();
      } else if (this.pauseOnHover === false) {
        this.logoSwiper.autoplay.start();
      }
    }

    if ("on" === nextProps.dnxt_carousel_loop) {
      this.logoSwiper.params.loop = true;
      this.logoSwiper.loopCreate();
    } else {
      this.logoSwiper.params.loop = false;
      this.logoSwiper.loopDestroy();
    }

    this.logoSwiper.params.centeredSlides =
      "on" === nextProps.dnxt_carousel_centered_slides;

    this.logoSwiper.params.speed = parseInt(nextProps.dnxt_carousel_speed);
    this.logoSwiper.params.spaceBetween = parseInt(
      nextProps.dnxt_carousel_spacebetween
    );

    if (
      this.props.dnxt_carousel_keyboard_enable !==
        nextProps.dnxt_carousel_keyboard_enable ||
      this.props.dnxt_carousel_mousewheel_enable !==
        nextProps.dnxt_carousel_mousewheel_enable
    ) {
      "on" === nextProps.dnxt_carousel_keyboard_enable
        ? this.logoSwiper.keyboard.enable()
        : this.logoSwiper.keyboard.disable();

      "on" === nextProps.dnxt_carousel_mousewheel_enable
        ? this.logoSwiper.mousewheel.enable()
        : this.logoSwiper.mousewheel.disable();
    }

    this.logoSwiper.params.pagination.type =
      nextProps.dnxt_carousel_pagination_type;
    this.logoSwiper.params.pagination.dynamicBullets =
      "on" === nextProps.dnxt_carousel_pagination_bullets;

    this.arrow = "on" === nextProps.dnxt_carousel_arrows;
    this.arrowPosition = nextProps.dnxt_carousel_arrow_position;

    this.logoSwiper.pagination.render();
    this.logoSwiper.update(true);
  }

  mouseenter = () => {
    this.pauseOnHover = this.pause;
  };

  mouseleave = () => {
    this.pauseOnHover = false;
  };

  rtlDirection = () => {
    return this.props.dnxt_carousel_rtl === "on" && {dir:'rtl'};
  };

  render() {
    const arrowClass = () => {
      if (this.arrowPosition === "inner")
        return "dnext_logo_carousel_arrows_inner";
      if (this.arrowPosition === "outer")
        return "dnext_logo_carousel_arrows_outer";
      return "dnext_logo_carousel_arrows_default";
    };
    return (
      <>
        <div
          ref="logoSwiper"
          className="swiper-container dnext-logo-carosuel-active"
          style={{
            cursor: this.props.dnxt_carousel_grab === "on" ? "grab" : "default",
          }}
          onMouseEnter={this.mouseenter}
          onMouseLeave={this.mouseleave}
          {...this.rtlDirection()}
        >
          <div className="swiper-wrapper">
            {this.props.content &&
              Array.isArray(this.props.content) &&
              this.props.content.map((item) => {
                const props = item.props.attrs;
                let classNames = [
                  "swiper-slide",
                  "dnext_logo_carousel_child",
                  item.key,
                  `${item.props.type}_${item.props.shortcode_index}`,
                ];

                return (
                  <div key={item.key} className={classNames.join(" ")}>
                    <div className="et_pb_module_inner dnext-logo-carosuel-item">
                      <img
                        className="img-fluid"
                        src={props.logo_carousel_image}
                        alt={
                          props.logo_carousel_alt ? props.logo_carousel_alt : ""
                        }
                      />
                    </div>
                  </div>
                );
              })}
            <div style={{ display: "none" }}>{this.props.content}</div>
          </div>
          <div
            className={paginationClass(
              this.props,
              "dnxt_carousel_pagination_type",
              "dnxt_carousel_pagination_bullets"
            )}
          />
        </div>
        {this.arrow && (
          <SliderArrow
            arrowClass={arrowClass}
            slidePrev={this.logoSwiper.slidePrev}
            slideNext={this.logoSwiper.slideNext}
          />
        )}
      </>
    );
  }
}
export default DiviNxtLogoCarousel;
