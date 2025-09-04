// External Dependencies
import $ from "jquery";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Swiper from "swiper";
import "../../../assets/css/magnific-popup.css";
import {
  ButtonText,
  HeadTitle,
  paginationClass,
  SliderArrow,
} from "../base/common";
import "../base/get_responsive_css";
import "../base/swiper.css";
// Internal Dependencies
import "./style.css";

const galleryThumbs = (context) => {
  return (
    <div
      ref="galleryThumbs"
      className="swiper-container gallery-thumbs dnext-thumbs-gallery-bottom"
      style={{
        cursor:
          context.dnext_thumbs_gallery_bottom_grab === "on"
            ? "grab"
            : "default",
      }}
      onMouseEnter={this.mouseenter}
      onMouseLeave={this.mouseleave}
    >
      <div className="swiper-wrapper dnext-thumbs-gallery-active">
        {context.content &&
          Array.isArray(context.content) &&
          context.content.map((item) => {
            const props = item.props.attrs;
            let classNames = [
              "swiper-slide",
              "dnxte_thumbs_gallery_child",
              item.key,
              `${item.props.type}_${item.props.shortcode_index}`,
            ];

            return (
              <div key={item.key} className={classNames.join(" ")}>
                <div className="et_pb_module_inner dnext-thumbs-gallery-item">
                  <img
                    className="img-fluid"
                    src={props.thumbs_gallery_top_image}
                    alt={
                      props.thumbs_gallery_top_alt
                        ? props.thumbs_gallery_top_alt
                        : ""
                    }
                  />
                </div>
              </div>
            );
          })}
        <div style={{ display: "none" }}>{context.content}</div>
      </div>
    </div>
  );
};
const galleryTop = (context) => {
  const arrowClassTop = () => {
    if (context.arrowPositionTop === "inner")
      return "dnext_thumbs_gallery_arrows_inner";
    if (context.arrowPositionTop === "outer")
      return "dnext_thumbs_gallery_arrows_outer";
    return "dnext_thumbs_gallery_arrows_default";
  };
  return (
    <>
      <div
        ref="galleryTop"
        className="swiper-container gallery-top dnext-thumbs-gallery-top"
        style={{
          cursor:
            context.props.dnext_thumbs_gallery_grab === "on"
              ? "grab"
              : "default",
        }}
        onMouseEnter={context.mouseenter}
        onMouseLeave={context.mouseleave}
      >
        <div className="swiper-wrapper dnext-thumbs-gallery-active">
          {context.props.content && Array.isArray(context.props.content)
            ? context.props.content.map((item) => {
                const props = item.props.attrs;
                let classNames = [
                  "swiper-slide",
                  "dnext_thumbs_gallery_child",
                  item.key,
                  `${item.props.type}_${item.props.shortcode_index}`,
                ];
                const LightboxTag =
                  "on" === context.props.lightbox_showhide ? "a" : "div";
                const lightboxHref = () => {
                  if ("on" === context.props.lightbox_showhide) {
                    return { href: props.thumbs_gallery_top_image || "/#" };
                  }

                  return null;
                };
              const utils = window.ET_Builder.API.Utils;
              
                return (
                  <div key={item.key} className={classNames.join(" ")}>
                    <div className="et_pb_module_inner dnext-thumbs-gallery-item">
                      <LightboxTag
                        ref="thumbsImage"
                        data-title={props.thumbs_gallery_top_alt || "Logo Item"}
                        className="dnxte-thumbs-gallery-image-link"
                        {...lightboxHref()}
                      >
                        <img
                          className="img-fluid"
                          src={props.thumbs_gallery_top_image}
                          alt={props.thumbs_gallery_top_alt || ""}
                        />
                      </LightboxTag>
                      <div className="dnxte_thumbs_gallery_content">
                        <HeadTitle
                          tag={props.header_level}
                          title={props.dnxte_thumbs_gallery_title}
                          classes="dnxte_thumbs_gallery_title"
                        />
                        <div
                          className="dnxte_thumbs_gallery_description"
                          dangerouslySetInnerHTML={{
                            __html: props.dnxte_thumbs_gallery_content,
                          }}
                        />
                        
                        {props.dnxte_thumbs_gallery_button_text &&
                          "" !== props.dnxte_thumbs_gallery_button_text && (
                            <ButtonText
                              text={props.dnxte_thumbs_gallery_button_text}
                              classes={`dnxte-button ${item.props.type}_${item.props.shortcode_index}`}
                              hasWrapper={true}
                              utils={utils}
                              iconSlug={
                                props.use_dnxte_button_icon &&
                                "on" === props.use_dnxte_button_icon
                                  ? "dnxte_thumbs_button_icon"
                                  : ""
                              }
                              defaultIcon={
                                props.use_dnxte_button_icon &&
                                "on" === props.use_dnxte_button_icon
                                  ? "5"
                                  : ""
                              }
                              props={props}
                            />
                          )}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
          <div style={{ display: "none" }}>{context.props.content}</div>
        </div>
        <div
          className={paginationClass(
            context.props,
            "dnext_thumbs_gallery_pagination_type",
            "dnext_thumbs_gallery_pagination_bullets"
          )}
        />
      </div>
      {context.arrowTop && (
        <SliderArrow
          arrowClass={arrowClassTop}
          slidePrev={context.galleryTop.slidePrev}
          slideNext={context.galleryTop.slideNext}
        />
      )}
    </>
  );
};
class DiviNextThumbsGallery extends Component {
  static slug = "dnxte_thumbs_gallery_parent";

  static css(props) {
    const css = [];
    let arrow_width = +props.dnext_thumbs_gallery_arrow_size + 10 + "px";

    if ("" !== props.dnext_thumbs_gallery_arrow_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnext_thumbs_gallery_arrow_margin",
          // "%%order_class%% .swiper-button-next,%%order_class%%  .swiper-button-prev",
          "%%order_class%%.dnxte_thumbs_gallery_parent .swiper-button-next, %%order_class%%.dnxte_thumbs_gallery_parent .swiper-button-prev",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnext_thumbs_gallery_arrow_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnext_thumbs_gallery_arrow_padding",
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
        declaration: `color: ${props.dnext_thumbs_gallery_arrow_color};background-color: ${props.dnext_thumbs_gallery_arrow_background_color}`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .gallery-top .swiper-pagination .swiper-pagination-bullet`,
        declaration: `background-color: ${props.dnext_thumbs_gallery_dots_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .gallery-top .swiper-pagination .swiper-pagination-bullet-active`,
        declaration: `background-color: ${props.dnext_thumbs_gallery_dots_active_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination-progressbar .swiper-pagination-progressbar-fill`,
        declaration: `background-color: ${props.dnext_thumbs_gallery_progressbar_fill_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after,%%order_class%% .swiper-button-next:after`,
        declaration: `font-size: ${props.dnext_thumbs_gallery_arrow_size}px;`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev, %%order_class%% .swiper-button-next`,
        declaration: `width: ${arrow_width}; height: ${arrow_width}`,
      },
    ]);
    // Lightbox Arrow color
    css.push([
      {
        selector: `.mfp-arrow:after`,
        declaration: `color: ${props.lightbox_arrow_color} !important;`,
      },
    ]);
    // Lightbox Close Button Color
    css.push([
      {
        selector: `%%order_class%% .mfp-close`,
        declaration: `color: ${props.lightbox_close_btn_color} !important;`,
      },
    ]);
    // Lightbox Overlay Color
    css.push([
      {
        selector: `.mfp-bg.mfp-ready`,
        declaration: `background: ${props.lightbox_overlay_color} !important;`,
      },
    ]);

    return css;
  }

  constructor(props) {
    super(props);

    this.pauseTop = "on" === props.dnext_thumbs_gallery_pause_on_hover;
    this.pauseBottom =
      "on" === props.dnext_thumbs_gallery_bottom_pause_on_hover;
    this.pauseOnHoverTop = false;
    this.pauseOnHoverBottom = false;

    this.galleryThumbs = new Swiper(this.refs.galleryThumbs, {});

    this.galleryTop = new Swiper(this.refs.galleryTop, {});

    this.arrowTop = "on" === props.dnext_thumbs_gallery_arrows;
    this.arrowPositionTop = props.dnext_thumbs_gallery_arrow_position;
  }

  componentDidMount() {
    // Gallery Thumbs
    this.galleryThumbs = new Swiper(this.refs.galleryThumbs, {
      // freemode: true,
      autoplay: {
        enabled:
          "on" === this.props.dnext_thumbs_gallery_bottom_autoplay_show_hide,
        delay: this.props.dnext_thumbs_gallery_bottom_autoplay_delay
          ? parseInt(this.props.dnext_thumbs_gallery_bottom_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      slidesPerView: parseInt(
        this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop
      ),
      centeredSlides:
        "on" === this.props.dnext_thumbs_gallery_bottom_centered_slides,
      breakpoints: {
        1024: {
          slidesPerView: parseInt(
            this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop
          ),
        },
        768: {
          slidesPerView:
            parseInt(
              this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop_tablet
            ) || this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop,
        },
        479: {
          slidesPerView:
            parseInt(
              this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop_phone
            ) || this.galleryTop.params.slidesPerView,
        },
      },
      direction: "horizontal",
      speed: parseInt(this.props.dnext_thumbs_gallery_bottom_speed),
      grabCursor: "on" === this.props.dnext_thumbs_gallery_bottom_grab,
      loop: "on" === this.props.dnext_thumbs_gallery_bottom_loop,
      keyboard: {
        enabled:
          "on" === this.props.dnext_thumbs_gallery_bottom_keyboard_enable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === this.props.dnxt_bottom_gallery_mousewheel,
        invert: true,
      },
    });
    // Gallery top
    this.galleryTop = new Swiper(this.refs.galleryTop, {
      autoplay: {
        enabled: "on" === this.props.dnext_thumbs_gallery_autoplay_show_hide,
        delay: this.props.dnext_thumbs_gallery_autoplay_delay
          ? parseInt(this.props.dnext_thumbs_gallery_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      slidesPerView: parseInt(
        this.props.dnext_thumbs_gallery_breakpoints_desktop
      ),
      centeredSlides: "on" === this.props.dnext_thumbs_gallery_centered_slides,
      breakpoints: {
        1024: {
          slidesPerView: parseInt(
            this.props.dnext_thumbs_gallery_breakpoints_desktop
          ),
        },
        768: {
          slidesPerView: this.props
            .dnext_thumbs_gallery_breakpoints_desktop_tablet
            ? parseInt(
                this.props.dnext_thumbs_gallery_breakpoints_desktop_tablet
              )
            : this.galleryTop.params.slidesPerView,
        },
        479: {
          slidesPerView: this.props
            .dnext_thumbs_gallery_breakpoints_desktop_phone
            ? parseInt(
                this.props.dnext_thumbs_gallery_breakpoints_desktop_phone
              )
            : 1,
        },
        200: {
          slidesPerView: this.props
            .dnext_thumbs_gallery_breakpoints_desktop_phone
            ? parseInt(
                this.props.dnext_thumbs_gallery_breakpoints_desktop_phone
              )
            : 1,
        },
      },
      direction: "horizontal",
      speed: parseInt(this.props.dnext_thumbs_gallery_speed),
      grabCursor: "on" === this.props.dnext_thumbs_gallery_grab,
      loop: "on" === this.props.dnext_thumbs_gallery_loop,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets:
          "on" === this.props.dnext_thumbs_gallery_pagination_bullets,
        clickable: true,
        type: this.props.dnext_thumbs_gallery_pagination_type,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: "on" === this.props.dnext_thumbs_gallery_keyboard_enable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === this.props.dnxt_top_gallery_mousewheel,
        invert: true,
      },
      thumbs: {
        swiper: this.galleryThumbs,
      },
    });

    this.pauseTop = "on" === this.props.dnext_thumbs_gallery_pause_on_hover;
    this.pauseBottom =
      "on" === this.props.dnext_thumbs_gallery_bottom_pause_on_hover;
    this.pauseOnHoverTop = false;
    this.pauseOnHoverBottom = false;
    this.arrowTop = "on" === this.props.dnext_thumbs_gallery_arrows;
    this.arrowPositionTop = this.props.dnext_thumbs_gallery_arrow_position;

    if ("on" === this.props.lightbox_showhide) {
      this.magnificSettings();
    }
  }

  magnificSettings() {
    const image = findDOMNode(this.refs.thumbsImage);

    if (!image) return;

    $(".dnext-thumbs-gallery-top .swiper-wrapper").magnificPopup({
      delegate: "a.dnxte-thumbs-gallery-image-link",
      type: "image",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      zoom: {
        enabled: true,
        duration: 500,
        opener: function(element) {
          return element.find("img");
        },
      },
      image: {
        markup:
          `<div class="mfp-figure dnxte-thumbs-gallery-mfp-config ${this.props.moduleInfo.orderClassName}">` +
          '<div class="mfp-close"></div>' +
          '<div class="mfp-img"></div>' +
          '<div class="mfp-bottom-bar">' +
          '<div class="mfp-title"></div>' +
          '<div class="mfp-counter"></div>' +
          "</div>" +
          "</div>",
        titleSrc: function(item) {
          return item.el.attr("data-title");
        },
      },
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.content !== nextProps.content) return true;

    return false;
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.pauseTop = "on" === nextProps.dnext_thumbs_gallery_pause_on_hover;
    this.pauseBottom =
      "on" === nextProps.dnext_thumbs_gallery_bottom_pause_on_hover;
    // Top gallery settings
    if (
      this.props.dnext_thumbs_gallery_breakpoints_desktop !==
        nextProps.dnext_thumbs_gallery_breakpoints_desktop ||
      this.props.dnext_thumbs_gallery_breakpoints_desktop_tablet !==
        nextProps.dnext_thumbs_gallery_breakpoints_desktop_tablet ||
      this.props.dnext_thumbs_gallery_breakpoints_desktop_phone !==
        nextProps.dnext_thumbs_gallery_breakpoints_desktop_phone
    ) {
      this.galleryTop.params.breakpoints[
        "1024"
      ].slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop;
      this.galleryTop.params.slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop;
      if (
        "on|tablet" ===
          nextProps.dnext_thumbs_gallery_breakpoints_desktop_last_edited &&
        nextProps.dnext_thumbs_gallery_breakpoints_desktop_tablet
      ) {
        this.galleryTop.params.breakpoints[
          "768"
        ].slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop_tablet;
        this.galleryTop.params.slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop_tablet;
      } else if (
        "on|phone" ===
          nextProps.dnext_thumbs_gallery_breakpoints_desktop_last_edited &&
        nextProps.dnext_thumbs_gallery_breakpoints_desktop_phone
      ) {
        this.galleryTop.params.breakpoints[
          "479"
        ].slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop_phone;
        this.galleryTop.params.slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop_phone;

        this.galleryTop.params.breakpoints[
          "200"
        ].slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop_phone;
        this.galleryTop.params.slidesPerView = +nextProps.dnext_thumbs_gallery_breakpoints_desktop_phone;
      }
    }

    if ("off" !== nextProps.dnext_thumbs_gallery_autoplay_show_hide) {
      this.galleryTop.autoplay.stop();
      this.galleryTop.params.autoplay.delay = nextProps.dnext_thumbs_gallery_autoplay_delay
        ? parseInt(nextProps.dnext_thumbs_gallery_autoplay_delay)
        : 0;
    } else {
      this.galleryTop.autoplay.stop();
    }

    if ("off" !== nextProps.dnext_thumbs_gallery_autoplay_show_hide) {
      if (this.pauseTop && this.pauseOnHoverTop) {
        this.galleryTop.autoplay.stop();
      } else if (this.pauseOnHoverTop === false) {
        this.galleryTop.autoplay.start();
      }
    }

    if ("on" === nextProps.dnext_thumbs_gallery_loop) {
      this.galleryTop.params.loop = true;
      this.galleryTop.loopCreate();
    } else {
      this.galleryTop.params.loop = false;
      this.galleryTop.loopDestroy();
    }

    this.galleryTop.params.centeredSlides =
      "on" === nextProps.dnext_thumbs_gallery_centered_slides;

    this.galleryTop.params.speed = parseInt(
      nextProps.dnext_thumbs_gallery_speed
    );
    this.galleryTop.params.spaceBetween = parseInt(
      nextProps.dnext_thumbs_gallery_spacebetween
    );

    if (
      this.props.dnext_thumbs_gallery_keyboard_enable !==
        nextProps.dnext_thumbs_gallery_keyboard_enable ||
      this.props.dnxt_top_gallery_mousewheel !==
        nextProps.dnxt_top_gallery_mousewheel
    ) {
      "on" === nextProps.dnext_thumbs_gallery_keyboard_enable
        ? this.galleryTop.keyboard.enable()
        : this.galleryTop.keyboard.disable();

      "on" === nextProps.dnxt_top_gallery_mousewheel
        ? this.galleryTop.mousewheel.enable()
        : this.galleryTop.mousewheel.disable();
    }

    this.galleryTop.params.pagination.type =
      nextProps.dnext_thumbs_gallery_pagination_type;
    this.galleryTop.params.pagination.dynamicBullets =
      "on" === nextProps.dnext_thumbs_gallery_pagination_bullets;

    this.arrowTop = "on" === nextProps.dnext_thumbs_gallery_arrows;
    this.arrowPositionTop = nextProps.dnext_thumbs_gallery_arrow_position;
    this.galleryTop.pagination.render();
    this.galleryTop.update(true);
    // Bottom gallery settings
    if (
      this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop !==
        nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop ||
      this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop_tablet !==
        nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_tablet ||
      this.props.dnext_thumbs_gallery_bottom_breakpoints_desktop_phone !==
        nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_phone
    ) {
      this.galleryThumbs.params.breakpoints[
        "1024"
      ].slidesPerView = +nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop;
      this.galleryThumbs.params.slidesPerView = +nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop;
      if (
        "on|tablet" ===
          nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_last_edited &&
        nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_tablet
      ) {
        this.galleryThumbs.params.breakpoints[
          "768"
        ].slidesPerView = +nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_tablet;
        this.galleryThumbs.params.slidesPerView = +nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_tablet;
      } else if (
        "on|phone" ===
          nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_last_edited &&
        nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_phone
      ) {
        this.galleryThumbs.params.breakpoints[
          "479"
        ].slidesPerView = +nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_phone;
        this.galleryThumbs.params.slidesPerView = +nextProps.dnext_thumbs_gallery_bottom_breakpoints_desktop_phone;
      }
    }

    if ("off" !== nextProps.dnext_thumbs_gallery_bottom_autoplay_show_hide) {
      this.galleryThumbs.autoplay.stop();
      this.galleryThumbs.params.autoplay.delay = nextProps.dnext_thumbs_gallery_bottom_autoplay_delay
        ? parseInt(nextProps.dnext_thumbs_gallery_bottom_autoplay_delay)
        : 0;
    } else {
      this.galleryThumbs.autoplay.stop();
    }

    if ("off" !== nextProps.dnext_thumbs_gallery_bottom_autoplay_show_hide) {
      if (this.pauseBottom && this.pauseOnHoverBottom) {
        this.galleryThumbs.autoplay.stop();
      } else if (this.pauseOnHoverBottom === false) {
        this.galleryThumbs.autoplay.start();
      }
    }

    if ("on" === nextProps.dnext_thumbs_gallery_bottom_loop) {
      this.galleryThumbs.params.loop = true;
      this.galleryThumbs.loopCreate();
    } else {
      this.galleryThumbs.params.loop = false;
      this.galleryThumbs.loopDestroy();
    }

    this.galleryThumbs.params.centeredSlides =
      "on" === nextProps.dnext_thumbs_gallery_bottom_centered_slides;

    this.galleryThumbs.params.speed = parseInt(
      nextProps.dnext_thumbs_gallery_bottom_speed
    );
    this.galleryThumbs.params.spaceBetween = parseInt(
      nextProps.dnext_thumbs_gallery_bottom_spacebetween
    );

    if (
      this.props.dnext_thumbs_gallery_bottom_keyboard_enable !==
        nextProps.dnext_thumbs_gallery_bottom_keyboard_enable ||
      this.props.dnxt_bottom_gallery_mousewheel !==
        nextProps.dnxt_bottom_gallery_mousewheel
    ) {
      "on" === nextProps.dnext_thumbs_gallery_bottom_keyboard_enable
        ? this.galleryThumbs.keyboard.enable()
        : this.galleryThumbs.keyboard.disable();

      "on" === nextProps.dnxt_bottom_gallery_mousewheel
        ? this.galleryThumbs.mousewheel.enable()
        : this.galleryThumbs.mousewheel.disable();
    }

    this.galleryThumbs.pagination.render();
    this.galleryThumbs.update(true);
  }

  mouseenter = () => {
    this.pauseOnHoverTop = this.pauseTop;
    this.pauseOnHoverBottom = this.pauseBottom;
  };

  mouseleave = () => {
    this.pauseOnHoverTop = false;
    this.pauseOnHoverBottom = false;
  };

  render() {
    return (
      <>
        {galleryTop(this)}
        {galleryThumbs(this.props)}
      </>
    );
  }
}
export default DiviNextThumbsGallery;
