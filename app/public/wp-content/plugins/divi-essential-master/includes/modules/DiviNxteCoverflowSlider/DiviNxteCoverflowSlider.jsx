// External Dependencies
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Swiper from "swiper";
import $ from "jquery";
import { getAlignment } from "../base/common";
import "../base/get_responsive_css";
import "../base/swiper.css";
import "../../../assets/css/magnific-popup.css";

// Internal Dependencies
import "./style.css";
class DiviNxteCoverflowSlider extends Component {
  static slug = "dnxte_coverflowslider_parent";

  static css(props) {
    const css = [];

    let arrow_width = +props.dnxte_coverflow_arrow_size - 15 + "px";

    if ("" !== props.dnxte_coverflow_arrow_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_coverflow_arrow_margin",
          "%%order_class%% .swiper-button-next,%%order_class%%  .swiper-button-prev",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxte_coverflow_arrow_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxte_coverflow_arrow_padding",
          "%%order_class%% .swiper-button-next,%%order_class%% .swiper-button-prev",
          "padding",
          true
        )
      );
    }

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev,%%order_class%% .swiper-button-next`,
        declaration: `color: ${props.dnxte_coverflow_arrow_color} !important;background-color: ${props.dnxte_coverflow_arrow_background_color} !important`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnxte-coverflowslider-active .swiper-pagination .swiper-pagination-bullet`,
        declaration: `background-color: ${props.dnxte_coverflow_dots_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnxte-coverflowslider-active .swiper-pagination .swiper-pagination-bullet-active`,
        declaration: `background-color: ${props.dnxte_coverflow_dots_active_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination-progressbar .swiper-pagination-progressbar-fill`,
        declaration: `background-color: ${props.dnxte_coverflow_progressbar_fill_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after,.swiper-button-next:after`,
        declaration: `font-size: ${props.dnxte_coverflow_arrow_size}px`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev, %%order_class%% .swiper-button-next`,
        declaration: `width: ${arrow_width}; height: ${arrow_width}`,
      },
    ]);

    // Image filter
    css.push([
      {
        selector: `%%order_class%% .img-fluid`,
        declaration: `filter: hue-rotate(${props.child_filter_hue_rotate}) saturate(${props.child_filter_saturate}) brightness(${props.child_filter_brightness}) contrast(${props.child_filter_contrast}) invert(${props.child_filter_invert}) sepia(${props.child_filter_sepia}) opacity(${props.child_filter_opacity}) blur(${props.child_filter_blur});mix-blend-mode: ${props.child_mix_blend_mode};`,
      },
    ]);
    // Image filter end

    // Slide shadows
    if (props.dnxte_coverflow_slide_shadows === "off") {
      css.push([
        {
          selector: `%%order_class%% .swiper-slide-shadow-left, %%order_class%% .swiper-slide-shadow-right`,
          declaration: `display: none;`,
        },
      ]);
    } else {
      css.push([
        {
          selector: `%%order_class%% .swiper-slide-shadow-left, %%order_class%% .swiper-slide-shadow-right`,
          declaration: `display: block;`,
        },
      ]);
    }

    // if ("off" !== props.dnxte_coverflow_equal_height) {
    css.push([
      {
        selector: `%%order_class%% .dnxte_coverflowslider_child`,
        declaration:
          "off" !== props.dnxte_coverflow_equal_height
            ? `height: auto !important;`
            : "height: 100% !important;",
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

    this.pause = "on" === this.props.dnxte_coverflow_pause_on_hover;
    this.pauseOnHover = false;

    this.coverflowSlider = new Swiper(this.refs.coverflowSlider, {});

    this.arrow = "on" === props.dnxte_coverflow_arrows;
    this.arrowPosition = this.props.dnxte_coverflow_arrow_position;

    this.positionContainer = null;
  }

  componentDidMount() {
    this.coverflowSlider = new Swiper(this.refs.coverflowSlider, {
      autoplay: {
        enabled: "on" === this.props.dnxte_coverflow_autoplay_show_hide,
        delay: this.props.dnxte_coverflow_autoplay_delay
          ? parseInt(this.props.dnxte_coverflow_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      centeredSlides: "on" === this.props.dnxte_coverflow_centered_slides,
      autoHeight: "on" === this.props.dnxte_coverflow_auto_height,
      effect: "coverflow",
      coverflowEffect: {
        slideShadows: "on" === this.props.dnxte_coverflow_slide_shadows,
        rotate: parseInt(this.props.dnxte_coverflow_slide_rotate),
        stretch: parseInt(this.props.dnxte_coverflow_slide_stretch),
        depth: parseInt(this.props.dnxte_coverflow_slide_depth),
      },
      direction: "horizontal",
      speed: parseInt(this.props.dnxte_coverflow_speed),
      spaceBetween: parseInt(this.props.dnxte_coverflow_spacebetween),
      grabCursor: "on" === this.props.dnxte_coverflow_grab,
      loop: "on" === this.props.dnxte_coverflow_loop,
      slidesPerView: parseInt(this.props.dnxte_coverflow_breakpoint_desktop),
      breakpoints: {
        1024: {
          slidesPerView: parseInt(
            this.props.dnxte_coverflow_breakpoint_desktop
          ),
        },
        768: {
          slidesPerView: this.props.dnxte_coverflow_breakpoint_desktop_tablet
            ? parseInt(this.props.dnxte_coverflow_breakpoint_desktop_tablet)
            : this.coverflowSlider.params.slidesPerView,
        },
        479: {
          slidesPerView: this.props.dnxte_coverflow_breakpoint_desktop_phone
            ? parseInt(this.props.dnxte_coverflow_breakpoint_desktop_phone)
            : 1,
        },
        200: {
          slidesPerView: this.props.dnxte_coverflow_breakpoint_desktop_phone
            ? parseInt(this.props.dnxte_coverflow_breakpoint_desktop_phone)
            : 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: "on" === this.props.dnxte_coverflow_pagination_bullets,
        clickable: true,
        type: this.props.dnxte_coverflow_pagination_type,
      },
      keyboard: {
        enabled: "on" === this.props.dnxte_coverflow_keyboard_enable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === this.props.dnxte_coverflow_mousewheel_enable,
        invert: true,
      },
      observer: true,
      observeParents: true,
    });
    this.pause = "on" === this.props.dnxte_coverflow_pause_on_hover;
    this.pauseOnHover = false;

    this.arrow = "on" === this.props.dnxte_coverflow_arrows;
    this.arrowPosition = this.props.dnxte_coverflow_arrow_position;

    this.arrowPositionFunc(this.props);
    if ("on" === this.props.lightbox_showhide) {
      this.magnificSettings();
    }
  }

  magnificSettings() {
    const image = findDOMNode(this.refs.coverflowImage);

    if (!image) return;

    // if ("none" !== this.props.dnxte_choose_lightbox) {
    $(".dnxte-coverflowslider-active .swiper-wrapper").magnificPopup({
      delegate: "a.dnxte-coverflow-image-link",
      type: "image",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      // disableOn: function() {
      //   return isLightboxOn;
      // },
      zoom: {
        enabled: true,
        duration: 500,
        opener: function(element) {
          return element.find("img");
        },
      },
      image: {
        markup:
          `<div class="mfp-figure dnxte-coverflow-mfp-config ${this.props.moduleInfo.orderClassName}">` +
          '<div class="mfp-close"></div>' +
          '<div class="mfp-img"></div>' +
          '<div class="mfp-bottom-bar">' +
          '<div class="mfp-title"></div>' +
          '<div class="mfp-counter"></div>' +
          "</div>" +
          "</div>",
        titleSrc: function(item) {
          const caption = item.el.attr("data-caption") || "";
          return item.el.attr("data-title") + caption;
        },
      },
    });
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.content !== nextProps.content ||
      this.props.dnxte_coverflow_slide_shadows !==
        nextProps.dnxte_coverflow_slide_shadows
    )
      return true;
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.pause = "on" === nextProps.dnxte_coverflow_pause_on_hover;

    if (
      this.props.dnxte_coverflow_breakpoint_desktop !==
        nextProps.dnxte_coverflow_breakpoint_desktop ||
      this.props.dnxte_coverflow_breakpoint_desktop_tablet !==
        nextProps.dnxte_coverflow_breakpoint_desktop_tablet ||
      this.props.dnxte_coverflow_breakpoint_desktop_phone !==
        nextProps.dnxte_coverflow_breakpoint_desktop_phone
    ) {
      this.coverflowSlider.params.breakpoints[
        "1024"
      ].slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop;
      this.coverflowSlider.params.slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop;
      if (
        "on|tablet" ===
          nextProps.dnxte_coverflow_breakpoint_desktop_last_edited &&
        nextProps.dnxte_coverflow_breakpoint_desktop_tablet
      ) {
        this.coverflowSlider.params.breakpoints[
          "768"
        ].slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop_tablet;
        this.coverflowSlider.params.slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop_tablet;
      } else if (
        "on|phone" ===
          nextProps.dnxte_coverflow_breakpoint_desktop_last_edited &&
        nextProps.dnxte_coverflow_breakpoint_desktop_phone
      ) {
        this.coverflowSlider.params.breakpoints[
          "479"
        ].slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop_phone;
        this.coverflowSlider.params.slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop_phone;

        this.coverflowSlider.params.breakpoints[
          "200"
        ].slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop_phone;
        this.coverflowSlider.params.slidesPerView = +nextProps.dnxte_coverflow_breakpoint_desktop_phone;
      }
    }

    if ("off" !== nextProps.dnxte_coverflow_autoplay_show_hide) {
      this.coverflowSlider.autoplay.start();
      this.coverflowSlider.params.autoplay.delay = nextProps.dnxte_coverflow_autoplay_delay
        ? parseInt(nextProps.dnxte_coverflow_autoplay_delay)
        : 0;
    } else {
      this.coverflowSlider.autoplay.stop();
    }

    if ("off" !== nextProps.dnxte_coverflow_autoplay_show_hide) {
      if (this.pause && this.pauseOnHover) {
        this.coverflowSlider.autoplay.stop();
      } else if (this.pauseOnHover === false) {
        this.coverflowSlider.autoplay.start();
      }
    }

    if ("on" === nextProps.dnxte_coverflow_loop) {
      this.coverflowSlider.params.loop = true;
      this.coverflowSlider.loopCreate();
    } else {
      this.coverflowSlider.params.loop = false;
      this.coverflowSlider.loopDestroy();
    }

    this.coverflowSlider.params.centeredSlides =
      "on" === nextProps.dnxte_coverflow_centered_slides;

    if (Array.isArray(nextProps.content) && nextProps.content.length > 1)
      this.coverflowSlider.params.autoHeight =
        "on" === nextProps.dnxte_coverflow_auto_height;
    else this.coverflowSlider.params.autoHeight = false;

    if (
      this.props.dnxte_coverflow_keyboard_enable !==
        nextProps.dnxte_coverflow_keyboard_enable ||
      this.props.dnxte_coverflow_mousewheel_enable !==
        nextProps.dnxte_coverflow_mousewheel_enable
    ) {
      "on" === nextProps.dnxte_coverflow_keyboard_enable
        ? this.coverflowSlider.keyboard.enable()
        : this.coverflowSlider.keyboard.disable();

      "on" === nextProps.dnxte_coverflow_mousewheel_enable
        ? this.coverflowSlider.mousewheel.enable()
        : this.coverflowSlider.mousewheel.disable();
    }

    this.coverflowSlider.params.coverflowEffect.slideShadows =
      "on" === nextProps.dnxte_coverflow_slide_shadows;

    this.coverflowSlider.params.coverflowEffect.rotate = parseInt(
      nextProps.dnxte_coverflow_slide_rotate
    );

    this.coverflowSlider.params.coverflowEffect.stretch = parseInt(
      nextProps.dnxte_coverflow_slide_stretch
    );

    this.coverflowSlider.params.coverflowEffect.depth = parseInt(
      nextProps.dnxte_coverflow_slide_depth
    );

    this.coverflowSlider.params.speed = parseInt(
      nextProps.dnxte_coverflow_speed
    );
    this.coverflowSlider.params.spaceBetween = parseInt(
      nextProps.dnxte_coverflow_spacebetween
    );
    this.coverflowSlider.params.pagination.type =
      nextProps.dnxte_coverflow_pagination_type;
    this.coverflowSlider.params.pagination.dynamicBullets =
      "on" === nextProps.dnxte_coverflow_pagination_bullets;

    if (
      this.props.dnxte_coverflow_arrow_position !==
      nextProps.dnxte_coverflow_arrow_position
    ) {
      this.arrowPositionFunc(nextProps);
    }

    this.arrow = "on" === nextProps.dnxte_coverflow_arrows;
    this.arrowPosition = nextProps.dnxte_coverflow_arrow_position;
    this.coverflowSlider.pagination.render();
    this.coverflowSlider.update(true);
  }

  arrowPositionFunc = (props) => {
    const positionArr = [
      "top-right",
      "top-center",
      "top-left",
      "bottom-right",
      "bottom-center",
      "bottom-left",
    ];

    this.positionContainer = positionArr.includes(
      props.dnxte_coverflow_arrow_position
    )
      ? "multi-position-container"
      : "";
    this.positionButtonContainer = positionArr.includes(
      props.dnxte_coverflow_arrow_position
    )
      ? "multi-position-button-container"
      : "";
    this.positionButton = positionArr.includes(
      props.dnxte_coverflow_arrow_position
    )
      ? "multi-position-button"
      : "";

    if (positionArr.includes(props.dnxte_coverflow_arrow_position)) {
      this.arrowTopOrBottom = props.dnxte_coverflow_arrow_position.startsWith(
        "top"
      )
        ? "arrow-position-top"
        : "arrow-position-bottom";

      if (props.dnxte_coverflow_arrow_position.endsWith("left")) {
        this.arrowRightLeftCenter = "multi-position-button-left";
      } else if (props.dnxte_coverflow_arrow_position.endsWith("center")) {
        this.arrowRightLeftCenter = "multi-position-button-center";
      } else if (props.dnxte_coverflow_arrow_position.endsWith("right")) {
        this.arrowRightLeftCenter = "multi-position-button-right";
      }
    }
  };

  arrowClass = () => {
    const arrowPositionArr = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ];
    if (this.arrowPosition === "inner") return "dnxte_coverflow_arrows_inner";
    if (this.arrowPosition === "outer") return "dnxte_coverflow_arrows_outer";
    if (arrowPositionArr.includes(this.arrowPosition))
      return `coverflow-${this.arrowPosition}`;
    return "dnxte_coverflow_arrows_default";
  };

  paginationClass = () => {
    if (this.props.dnxte_coverflow_pagination_type === "none")
      return "swiper-pagination swiper-pagination-none";
    if (
      this.props.dnxte_coverflow_pagination_type === "bullets" &&
      this.props.dnxte_coverflow_pagination_bullets === "on"
    )
      return "swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic mt-10";

    if (this.props.dnxte_coverflow_pagination_type === "bullets")
      return "swiper-pagination swiper-pagination-clickable swiper-pagination-bullets mt-10";

    if (this.props.dnxte_coverflow_pagination_type === "fraction")
      return "swiper-pagination swiper-pagination-fraction";
    if (this.props.dnxte_coverflow_pagination_type === "progressbar")
      return "swiper-pagination swiper-pagination-progressbar";
  };
  mouseenter = () => {
    this.pauseOnHover = this.pause ? true : false;
  };
  mouseleave = () => {
    this.pauseOnHover = false;
  };
  render() {
    const SlideImage = ({ slug, altSlug, classes, props }) => {
      const lastEdited = props[`${slug}_last_edited`],
        imageTablet = props[`${slug}_tablet`],
        imagePhone = props[`${slug}_phone`],
        img = props[slug],
        imgAlt = props[altSlug];

      if ("on|tablet" === lastEdited) {
        return (
          <img
            src={imageTablet ? imageTablet : img}
            alt={imgAlt}
            className={classes}
          />
        );
      }
      if ("on|phone" === lastEdited) {
        return (
          <img
            src={imagePhone ? imagePhone : imageTablet ? imageTablet : img}
            alt={imgAlt}
            className={classes}
          />
        );
      } else {
        return <img src={img} alt={imgAlt} className={classes} />;
      }
    };
    return (
      <div
        className={`coverflow-container ${this.positionContainer} ${this.arrowTopOrBottom}`}
      >
        <div
          ref="coverflowSlider"
          className={`swiper-container dnxte-coverflowslider-active ${this.props
            .dnxte_coverflow_pagination_type === "none" && "mb-30"}`}
          style={{
            cursor:
              this.props.dnxte_coverflow_grab === "on" ? "grab" : "default",
          }}
          onMouseEnter={() => this.mouseenter()}
          onMouseLeave={() => this.mouseleave()}
        >
          <div className="swiper-wrapper">
            {this.props.content &&
              Array.isArray(this.props.content) &&
              this.props.content.map((item) => {
                const props = item.props.attrs;
                let classNames = [
                  "swiper-slide",
                  "dnxte_coverflowslider_child",
                  item.key,
                  `${item.props.type}_${item.props.shortcode_index}`,
                ];
                const HeaderTag = props.header_level || "h3";
                const coverflowslider_button_alignment_classes = getAlignment(
                  "coverflowslider_button_alignment",
                  props
                );
                const imageAndContentPosition = () =>
                  ["left-image", "right-image"].includes(
                    props.coverflowslider_layouts
                  );

                const lightboxHref = () => {
                  if ("on" === this.props.lightbox_showhide) {
                    return {
                      href: props.coverflowslider_image || "/#",
                    };
                  }
                  return {
                    href: props.link_option_url || "/#",
                    target:
                      "on" === props.link_option_url_new_window
                        ? "_blank"
                        : "_self",
                  };
                };

                return (
                  <div key={item.key} className={classNames.join(" ")}>
                    <div
                      className={`et_pb_module_inner dnxte-coverflowslider-item ${
                        imageAndContentPosition()
                          ? `dnxte-coverflow-carousel-${props.coverflowslider_layouts}`
                          : ""
                      }`}
                    >
                      {props.coverflowslider_layouts !== "text" && (
                        <div className="dnxte-coverflow-image-container">
                          <a
                            ref="coverflowImage"
                            className="dnxte-coverflow-image-link"
                            data-title={props.coverflowslider_text || ""}
                            {...lightboxHref()}
                          >
                            <div className="dnxte-coverflow-overlay-color" />
                            <div className="dnxte-coverflow-overlay-color-hover" />
                            <SlideImage
                              slug="coverflowslider_image"
                              altSlug="coverflowslider_alt"
                              classes="img-fluid"
                              props={props}
                            />
                          </a>
                        </div>
                      )}
                      {props.coverflowslider_layouts &&
                        props.coverflowslider_layouts !== "image" && (
                          <div
                            className={`dnxte-coverflow-multitext ${props.coverflowslider_layouts ===
                              "inside-image" &&
                              "dnxte-coverflow-inside-image"}`}
                          >
                            {props.coverflowslider_text && (
                              <HeaderTag className="dnxte-coverflow-heading">
                                {props.coverflowslider_text}
                              </HeaderTag>
                            )}
                            {props.coverflowslider_content && (
                              <div
                                className="dnxte-coverflow-pra"
                                dangerouslySetInnerHTML={{
                                  __html: props.coverflowslider_content,
                                }}
                              />
                            )}
                            {props.dnxte_coverflow_button_text &&
                              "" !== props.dnxte_coverflow_button_text && (
                                <div
                                  className={`dnxte-coverflow-button-wrapper ${coverflowslider_button_alignment_classes}`}
                                >
                                  <a
                                    href={
                                      props.dnxte_coverflow_button_link || "/#"
                                    }
                                    target={props.dnxte_coverflow_button_target}
                                    className="dnxte-coverflow-button"
                                  >
                                    {props.dnxte_coverflow_button_text}
                                  </a>
                                </div>
                              )}
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
            <div style={{ display: "none" }}>{this.props.content}</div>
          </div>
          <div className={this.paginationClass()}></div>
        </div>
        {this.arrow ? (
          <div
            className={`swiper-button-container ${this.arrowClass()} ${
              this.positionButtonContainer
            } ${this.arrowRightLeftCenter}`}
          >
            <div
              className={`swiper-button-prev ${this.positionButton}`}
              data-icon="4"
              onClick={() => this.coverflowSlider.slidePrev()}
            ></div>
            <div
              className={`swiper-button-next ${this.positionButton}`}
              data-icon="5"
              onClick={() => this.coverflowSlider.slideNext()}
            ></div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default DiviNxteCoverflowSlider;
