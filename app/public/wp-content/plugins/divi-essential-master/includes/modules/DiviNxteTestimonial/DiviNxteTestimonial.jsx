import React, { Component } from "react";
import Swiper from "swiper";
import { renderStars } from "../base/common";
import "../base/get_responsive_css";
import "../base/swiper.css";
import "./style.css";

class DiviNxteTestimonial extends Component {
  static slug = "dnxte_testimonial_parent";

  static css(props) {
    const css = [];
    let arrow_width = +props.dnxt_testimonial_arrow_size + 5 + "px";

    if ("" !== props.dnxt_testimonial_arrow_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_testimonial_arrow_margin",
          "%%order_class%% .swiper-button-next,%%order_class%% .swiper-button-prev",
          "margin",
          true
        )
      );
    }

    if ("" !== props.dnxt_testimonial_arrow_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "dnxt_testimonial_arrow_padding",
          "%%order_class%% .swiper-button-next,%%order_class%% .swiper-button-prev",
          "padding",
          true
        )
      );
    }

    css.push([
      {
        selector: `%%order_class%% .dnext-star-rating`,
        declaration: `background-color: ${props.dnxt_testimonial_rating_bg_color};width: ${props.dnxt_testimonial_rating_bg_color_width};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnext-star-rating i.divinext-star-full::before, %%order_class%% .dnext-star-rating i.divinext-star-1:before, %%order_class%% .dnext-star-rating i.divinext-star-2:before, %%order_class%% .dnext-star-rating i.divinext-star-3:before, %%order_class%% .dnext-star-rating i.divinext-star-4:before, %%order_class%% .dnext-star-rating i.divinext-star-5:before, %%order_class%% .dnext-star-rating i.divinext-star-6:before, %%order_class%% .dnext-star-rating i.divinext-star-7:before, %%order_class%% .dnext-star-rating i.divinext-star-8:before, %%order_class%% .dnext-star-rating i.divinext-star-9:before, %%order_class%% .dnext-star-rating i.divinext-star-10:before`,
        declaration: `color: ${props.dnxt_testimonial_rating_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnext-star-rating .et-pb-icon`,
        declaration: `font-size: ${props.dnxt_testimonial_star_size};`,
      },
    ]);

    // ARROW COLOR

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev,%%order_class%% .swiper-button-next`,
        declaration: `background-color: ${props.dnxt_testimonial_arrow_background_color}`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnxte-tstimonial-wrap .swiper-pagination .swiper-pagination-bullet`,
        declaration: `background-color: ${props.dnxt_testimonial_dots_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .dnxte-tstimonial-wrap .swiper-pagination .swiper-pagination-bullet-active`,
        declaration: `background-color: ${props.dnxt_testimonial_dots_active_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-pagination-progressbar .swiper-pagination-progressbar-fill`,
        declaration: `background-color: ${props.dnxt_testimonial_progressbar_fill_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after,%%order_class%% .swiper-button-next:after`,
        declaration: `font-size: ${props.dnxt_testimonial_arrow_size}px;color: ${props.dnxt_testimonial_arrow_color};`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev, %%order_class%% .swiper-button-next`,
        declaration: `width: ${arrow_width}; height: ${arrow_width}`,
      },
    ]);

    // Image width
    if ("on|tablet" === props.dnxt_testimonial_image_width_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-tstimonial-prfle-review`,
          declaration: `width: ${props.dnxt_testimonial_image_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.dnxt_testimonial_image_width_last_edited) {
      css.push([
        {
          selector: `%%order_class%% .dnxte-tstimonial-prfle-review`,
          declaration: `width: ${props.dnxt_testimonial_image_width_phone};`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: `%%order_class%% .dnxte-tstimonial-prfle-review`,
          declaration: `width: ${props.dnxt_testimonial_image_width};`,
        },
      ]);
    }

    if (props.dnxte_testimonial_use_icon !== "off") {
      css.push([
        {
          selector: `%%order_class%% .dnxte-tstimonial-item:before`,
          declaration: `content: url(${props.dnxte_testimonial_quote_icon});transform: rotate(0deg);transform: scale(${props.dnxt_testimonial_icon_width});`,
        },
      ]);
    }

    css.push([
      {
        selector: `%%order_class%% .dnxte-tstimonial-item:before`,
        declaration: `left: ${props.dnxt_testimonial_icon_horizontal}%;top: ${props.dnxt_testimonial_icon_vertical}%;font-size: ${props.dnxt_testimonial_icon_size};opacity: ${props.dnxt_testimonial_icon_opacity};`,
      },
    ]);

    return css;
  }

  constructor(props) {
    super(props);
    this.pause = "on" === this.props.dnxt_testimonial_pause_on_hover;
    this.pauseOnHover = false;

    this.testimonial = new Swiper(this.refs.testimonialSwiper, {
      loop: "on" === this.props.dnxt_testimonial_loop,
      autoplay: {
        enabled: "on" === this.props.dnxt_testimonial_autoplay_show_hide,
        delay: this.props.dnxt_testimonial_autoplay_delay
          ? parseInt(this.props.dnxt_testimonial_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      grabCursor: "on" === this.props.dnxt_testimonial_grab,
    });

    this.arrow = "on" === this.props.dnxt_testimonial_arrows;
    this.arrowPosition = this.props.dnxt_testimonial_arrow_position;
  }

  componentDidMount() {
    this.testimonial = new Swiper(this.refs.testimonialSwiper, {
      autoplay: {
        enabled: "on" === this.props.dnxt_testimonial_autoplay_show_hide,
        delay: this.props.dnxt_testimonial_autoplay_delay
          ? parseInt(this.props.dnxt_testimonial_autoplay_delay)
          : 1000,
        disableOnInteraction: !1,
      },
      spaceBetween: parseInt(this.props.dnxt_testimonial_spacebetween),
      slidesPerView: parseFloat(this.props.dnxt_testimonial_breakpoint_desktop),
      centeredSlides: "on" === this.props.dnxt_testimonial_centered_slides,
      breakpoints: {
        1024: {
          slidesPerView: parseFloat(
            this.props.dnxt_testimonial_breakpoint_desktop
          ),
        },
        768: {
          slidesPerView: this.props.dnxt_testimonial_breakpoint_desktop_tablet
            ? parseFloat(this.props.dnxt_testimonial_breakpoint_desktop_tablet)
            : this.testimonial.params.slidesPerView,
        },
        479: {
          slidesPerView: this.props.dnxt_testimonial_breakpoint_desktop_phone
            ? parseFloat(this.props.dnxt_testimonial_breakpoint_desktop_phone)
            : 1,
        },
        200: {
          slidesPerView: this.props.dnxt_testimonial_breakpoint_desktop_phone
            ? parseFloat(this.props.dnxt_testimonial_breakpoint_desktop_phone)
            : 1,
        },
      },
      direction: "horizontal",
      speed: parseInt(this.props.dnxt_testimonial_speed),
      grabCursor: "on" === this.props.dnxt_testimonial_grab,
      loop: "on" === this.props.dnxt_testimonial_loop,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: "on" === this.props.dnxt_testimonial_pagination_bullets,
        clickable: true,
        type: this.props.dnxt_testimonial_pagination_type,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: "on" === this.props.dnxt_testimonial_keyboard,
        onlyInViewport: true,
      },
      mousewheel: {
        enabled: "on" === this.props.dnxt_testimonial_mousewheel,
        invert: true,
      },
    });

    this.arrow = "on" === this.props.dnxt_testimonial_arrows;
    this.arrowPosition = this.props.dnxt_testimonial_arrow_position;
    this.pause = "on" === this.props.dnxt_testimonial_pause_on_hover;
    this.pauseOnHover = false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.content !== nextProps.content) return true;
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.pause = "on" === nextProps.dnxt_testimonial_pause_on_hover;

    if (
      this.props.dnxt_testimonial_breakpoint_desktop !==
        nextProps.dnxt_testimonial_breakpoint_desktop ||
      this.props.dnxt_testimonial_breakpoint_desktop_tablet !==
        nextProps.dnxt_testimonial_breakpoint_desktop_tablet ||
      this.props.dnxt_testimonial_breakpoint_desktop_phone !==
        nextProps.dnxt_testimonial_breakpoint_desktop_phone
    ) {
      this.testimonial.params.breakpoints[
        "1024"
      ].slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop;
      this.testimonial.params.slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop;
      if (
        "on|tablet" ===
          nextProps.dnxt_testimonial_breakpoint_desktop_last_edited &&
        nextProps.dnxt_testimonial_breakpoint_desktop_tablet
      ) {
        this.testimonial.params.breakpoints[
          "768"
        ].slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop_tablet;
        this.testimonial.params.slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop_tablet;
      } else if (
        "on|phone" ===
          nextProps.dnxt_testimonial_breakpoint_desktop_last_edited &&
        nextProps.dnxt_testimonial_breakpoint_desktop_phone
      ) {
        this.testimonial.params.breakpoints[
          "479"
        ].slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop_phone;
        this.testimonial.params.slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop_phone;

        this.testimonial.params.breakpoints[
          "200"
        ].slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop_phone;
        this.testimonial.params.slidesPerView = +nextProps.dnxt_testimonial_breakpoint_desktop_phone;
      }
    }

    if ("off" !== nextProps.dnxt_testimonial_autoplay_show_hide) {
      this.testimonial.autoplay.stop();
      this.testimonial.params.autoplay.delay = nextProps.dnxt_testimonial_autoplay_delay
        ? parseInt(nextProps.dnxt_testimonial_autoplay_delay)
        : 0;
    } else {
      this.testimonial.autoplay.stop();
    }

    if ("off" !== nextProps.dnxt_testimonial_autoplay_show_hide) {
      if (this.pause && this.pauseOnHover) {
        this.testimonial.autoplay.stop();
      } else if (this.pauseOnHover === false) {
        this.testimonial.autoplay.start();
      }
    }

    if ("on" === nextProps.dnxt_testimonial_loop) {
      this.testimonial.params.loop = true;
      this.testimonial.loopCreate();
    } else {
      this.testimonial.params.loop = false;
      this.testimonial.loopDestroy();
    }
    this.testimonial.params.centeredSlides =
      "on" === nextProps.dnxt_testimonial_centered_slides;

    this.testimonial.params.spaceBetween = parseInt(
      nextProps.dnxt_testimonial_spacebetween
    );

    this.testimonial.params.speed = parseInt(nextProps.dnxt_testimonial_speed);

    if (
      this.props.dnxt_testimonial_keyboard !==
        nextProps.dnxt_testimonial_keyboard ||
      this.props.dnxt_testimonial_mousewheel !==
        nextProps.dnxt_testimonial_mousewheel
    ) {
      "on" === nextProps.dnxt_testimonial_keyboard
        ? this.testimonial.keyboard.enable()
        : this.testimonial.keyboard.disable();

      "on" === nextProps.dnxt_testimonial_mousewheel
        ? this.testimonial.mousewheel.enable()
        : this.testimonial.mousewheel.disable();
    }

    this.testimonial.params.pagination.type =
      nextProps.dnxt_testimonial_pagination_type;
    this.testimonial.params.pagination.dynamicBullets =
      "on" === nextProps.dnxt_testimonial_pagination_bullets;

    this.arrow = "on" === nextProps.dnxt_testimonial_arrows;
    this.arrowPosition = nextProps.dnxt_testimonial_arrow_position;

    this.testimonial.pagination.render();
    this.testimonial.update(true);
  }

  render() {
    const paginationClass = () => {
      if (this.props.dnxt_testimonial_pagination_type === "none")
        return "swiper-pagination swiper-pagination-none";
      if (
        this.props.dnxt_testimonial_pagination_type === "bullets" &&
        this.props.dnxt_testimonial_pagination_bullets === "on"
      )
        return "swiper-pagination color-p swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic mt-10";

      if (this.props.dnxt_testimonial_pagination_type === "bullets")
        return "swiper-pagination color-p swiper-pagination-clickable swiper-pagination-bullets mt-10";

      if (this.props.dnxt_testimonial_pagination_type === "fraction")
        return "swiper-pagination color-p swiper-pagination-fraction";
      if (this.props.dnxt_testimonial_pagination_type === "progressbar")
        return "swiper-pagination color-p swiper-pagination-progressbar";
    };

    const arrowClass = () => {
      if (this.arrowPosition === "inner")
        return "dnxt_testimonial_arrows_inner";
      if (this.arrowPosition === "outer")
        return "dnxt_testimonial_arrows_outer";
      return "dnxt_testimonial_arrows_default";
    };

    const mouseenter = () => {
      this.pauseOnHover = this.pause ? true : false;
    };

    const mouseleave = () => {
      this.pauseOnHover = false;
    };

    return (
      <>
        <div
          ref="testimonialSwiper"
          className="swiper-container dnxte-tstimonial-wrap"
          style={{
            cursor:
              this.props.dnxt_testimonial_grab === "on" ? "grab" : "default",
          }}
          onMouseEnter={() => mouseenter()}
          onMouseLeave={() => mouseleave()}
        >
          <div className="swiper-wrapper">
            {this.props.content && Array.isArray(this.props.content)
              ? this.props.content.map((item) => {
                  const props = item.props.attrs;
                  let classNames = [
                    "swiper-slide",
                    "dnxte_testimonial_child",
                    item.key,
                    `${item.props.type}_${item.props.shortcode_index}`,
                  ];
                  return (
                    <div key={item.key} className={classNames.join(" ")}>
                      <div className="et_pb_module_inner dnxte-tstimonial-item">
                        <div className="dnxte-tstimonial-item-con">
                          {props.dnxte_testimonial_rating_position !== "none" &&
                            props.dnxte_testimonial_rating_position ===
                              "top" && (
                              <div
                                className="dnxte-rating-revstar dnext-star-rating"
                                dangerouslySetInnerHTML={renderStars(
                                  props.dnxte_testimonial_star_rating,
                                  props.dnxte_testimonial_star_scale || 5
                                )}
                              />
                            )}

                          <div
                            className="dnxte-itcont-des"
                            dangerouslySetInnerHTML={{
                              __html: props.dnxte_testimonial_description,
                            }}
                          />
                          {(!props.dnxte_testimonial_rating_position ||
                            (props.dnxte_testimonial_rating_position !==
                              "none" &&
                              props.dnxte_testimonial_rating_position ===
                                "bottom")) && (
                            <div
                              className="dnxte-rating-revstar dnext-star-rating"
                              dangerouslySetInnerHTML={renderStars(
                                props.dnxte_testimonial_star_rating,
                                props.dnxte_testimonial_star_scale
                                  ? props.dnxte_testimonial_star_scale
                                  : 5
                              )}
                            />
                          )}

                          <div className="dnxte-tstimonial-item-prfle">
                            <div className="dnxte-tstimonial-prfle-review">
                              <img
                                className="img-fluid"
                                src={props.dnxte_testimonial_logo}
                                alt={
                                  props.dnxte_testimonial_logo_alt
                                    ? props.dnxte_testimonial_logo_alt
                                    : ""
                                }
                              />
                            </div>

                            <div className="dnxte-tstimonial-prfle-des">
                              <div className="dnxte-tstimonial-prfle-des-name">
                                {props.text_level ? (
                                  <props.text_level className="dnxte-tstprfle-nam">
                                    {props.dnxte_testimonial_name
                                      ? props.dnxte_testimonial_name
                                      : ""}
                                  </props.text_level>
                                ) : (
                                  <h4 className="dnxte-tstprfle-nam">
                                    {props.dnxte_testimonial_name
                                      ? props.dnxte_testimonial_name
                                      : ""}
                                  </h4>
                                )}
                              </div>
                              <div className="dnxte-tstimonial-prfledeg">
                                <span className="dnxte-tst-prfledeg-des">
                                  {props.dnxte_testimonial_position
                                    ? props.dnxte_testimonial_position
                                    : ""}
                                </span>
                                {"" !== props.company_name && (
                                  <span>
                                    {" "}
                                    {"" !== props.company_link ? (
                                      <a
                                        href={props.company_link}
                                        className="dnxte-testimonial-company-name"
                                        target={
                                          "on" === props.company_link_new_window
                                            ? "_blank"
                                            : ""
                                        }
                                      >
                                        {props.company_name}
                                      </a>
                                    ) : (
                                      <span className="dnxte-testimonial-company-name">
                                        {props.company_name}
                                      </span>
                                    )}
                                  </span>
                                )}
                                <span className="dnxte-tst-prfleautr-design"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
            <div style={{ display: "none" }}>{this.props.content}</div>
          </div>
          <div className={paginationClass()}></div>
        </div>
        {this.arrow ? (
          <div className={`swiper-button-container ${arrowClass()}`}>
            <div
              className={`swiper-button-prev`}
              data-icon="4"
              onClick={() => this.testimonial.slidePrev()}
            ></div>
            <div
              className={`swiper-button-next`}
              data-icon="5"
              onClick={() => this.testimonial.slideNext()}
            ></div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default DiviNxteTestimonial;
