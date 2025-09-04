import $ from "jquery";
import React, { Component } from "react";
import Swiper from "swiper";
import {
  applyBgCss,
  applyCss,
  applyCustomSpacing, getAlignment, Icon,
  paginationClass
} from "../base/common";
import "../base/swiper.css";
import LayoutOne from "./layouts/LayoutOne";
import LayoutTwo from "./layouts/LayoutTwo";
import "./style.css";

class NextBlogSlider extends Component {
  isMounted = false;
  static slug = "dnxte_blog_slider";

  static css(props) {
    const css = [];
    let arrow_width = +props.dnxte_blogslider_arrow_size + 10 + "px";

    // Custom Padding margin
    const customMarginPadding = [
      [
        "dnxte_blogslider_title_margin",
        "%%order_class%% .dnxte-entry-title",
        "margin",
      ],
      [
        "dnxte_blogslider_title_padding",
        "%%order_class%% .dnxte-entry-title",
        "padding",
      ],
      [
        "dnxte_blogslider_content_wrapper_margin",
        "%%order_class%% .dnxte-content-wrapper",
        "margin",
      ],
      [
        "dnxte_blogslider_content_wrapper_padding",
        "%%order_class%% .dnxte-content-wrapper",
        "padding",
      ],
      [
        "dnxte_blogslider_content_margin",
        "%%order_class%% .dnxte-blog-post-content",
        "margin",
      ],
      [
        "dnxte_blogslider_content_padding",
        "%%order_class%% .dnxte-blog-post-content",
        "padding",
      ],
      [
        "dnxte_blogslider_img_margin",
        "%%order_class%% .dnxte-post-thumb",
        "margin",
      ],
      [
        "dnxte_blogslider_img_padding",
        "%%order_class%% .dnxte-post-thumb",
        "padding",
      ],
      [
        "dnxte_blogslider_auth_margin",
        "%%order_class%% .dnxte-authovcard",
        "margin",
      ],
      [
        "dnxte_blogslider_auth_padding",
        "%%order_class%% .dnxte-authovcard",
        "padding",
      ],
      [
        "dnxte_blogslider_date_margin",
        "%%order_class%% .dnxte-blog-published",
        "margin",
      ],
      [
        "dnxte_blogslider_date_padding",
        "%%order_class%% .dnxte-blog-published",
        "padding",
      ],
      [
        "dnxte_blogslider_categories_margin",
        "%%order_class%% .dnxte-blog-post-categories a:not(first-of-type), %%order_class%% .dnxte-blog-post-categories span.dnxte-blogslider-content-icon",
        "margin",
        false,
      ],
      [
        "dnxte_blogslider_categories_padding",
        "%%order_class%% .dnxte-blog-post-categories a, %%order_class%% .dnxte-blog-post-categories span.dnxte-blogslider-content-icon",
        "padding",
      ],
      [
        "dnxte_blogslider_arrow_margin",
        "%%order_class%% .swiper-button-next,%%order_class%% .swiper-button-prev",
        "margin",
      ],
      [
        "dnxte_blogslider_arrow_padding",
        "%%order_class%% .swiper-button-next,%%order_class%% .swiper-button-prev",
        "padding",
      ],
    ];
    customMarginPadding.forEach((element) => {
      applyCustomSpacing(
        props,
        css,
        element[0],
        element[1],
        element[2],
        element[3]
      );
    });

    const moduleCss = [
      // Slider button alignment
      [
        {
          desktop: `text-align: ${props.button_alignment} !important;`,
          tablet: `text-align: ${props.button_alignment_tablet} !important;`,
          phone: `text-align: ${props.button_alignment_phone} !important;`,
          hover: `text-align: ${props.button_alignment__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-readmorewrapper",
        },
        props.button_alignment_last_edited,
      ],
      // dots color
      [
        {
          desktop: `background-color: ${props.dnxte_blogslider_dots_color} !important;`,
          tablet: `background-color: ${props.dnxte_blogslider_dots_color_tablet} !important;`,
          phone: `background-color: ${props.dnxte_blogslider_dots_color_phone} !important;`,
        },
        {
          desktop:
            "%%order_class%% .swiper-pagination .swiper-pagination-bullet",
        },
        props.dnxte_blogslider_dots_color_last_edited,
      ],
      // active dots color
      [
        {
          desktop: `background-color: ${props.dnxte_blogslider_dots_active_color} !important;`,
          tablet: `background-color: ${props.dnxte_blogslider_dots_active_color_tablet} !important;`,
          phone: `background-color: ${props.dnxte_blogslider_dots_active_color_phone} !important;`,
        },
        {
          desktop:
            "%%order_class%% .swiper-pagination .swiper-pagination-bullet-active",
        },
        props.dnxte_blogslider_dots_active_color_last_edited,
      ],
      // item image width
      [
        {
          desktop: `width: ${props.dnxte_blogslider_image_width} !important;`,
          tablet: `width: ${props.dnxte_blogslider_image_width_tablet} !important;`,
          phone: `width: ${props.dnxte_blogslider_image_width_phone} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-blog-featured-image",
        },
        props.dnxte_blogslider_image_width_last_edited,
      ],
      // progressbar color
      [
        {
          desktop: `background-color: ${props.dnxte_blogslider_progressbar_fill_color};`,
          tablet: `background-color: ${props.dnxte_blogslider_progressbar_fill_color_tablet};`,
          phone: `background-color: ${props.dnxte_blogslider_progressbar_fill_color_phone};`,
        },
        {
          desktop:
            "%%order_class%% .swiper-pagination-progressbar .swiper-pagination-progressbar-fill",
        },
        props.dnxte_blogslider_progressbar_fill_color_last_edited,
      ],
      // date icon color
      [
        {
          desktop: `color: ${props.dnxte_blogslider_date_icon_color};`,
          tablet: `color: ${props.dnxte_blogslider_date_icon_color_tablet};`,
          phone: `color: ${props.dnxte_blogslider_date_icon_color_phone};`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-blog-published .dnxte-blogslider-content-icon",
        },
        props.dnxte_blogslider_date_icon_color_last_edited,
      ],
      // category icon color
      [
        {
          desktop: `color: ${props.dnxte_blogslider_category_icon_color};`,
          tablet: `color: ${props.dnxte_blogslider_category_icon_color_tablet};`,
          phone: `color: ${props.dnxte_blogslider_category_icon_color_phone};`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-blog-post-categories .dnxte-blogslider-content-icon",
        },
        props.dnxte_blogslider_category_icon_color_last_edited,
      ],
    ];

    const moduleImageHeight = [
      {
        desktop: `height: ${props.dnxte_blogslider_image_height} !important;`,
        tablet: `height: ${props.dnxte_blogslider_image_height_tablet} !important;`,
        phone: `height: ${props.dnxte_blogslider_image_height_phone} !important;`,
      },
      {
        desktop:
          "%%order_class%% .dnxte-blog-featured-image, %%order_class%% .blog-wrap-no-image",
      },
      props.dnxte_blogslider_image_height_last_edited,
    ];

    const layoutSixImageHeight = [
      [
        {
          desktop: `height: ${props.dnxte_blogslider_image_height} !important;`,
          tablet: `height: ${props.dnxte_blogslider_image_height_tablet} !important;`,
          phone: `height: ${props.dnxte_blogslider_image_height_phone} !important;`,
        },
        {
          desktop:
            "%%order_class%% .dnxte-post-thumb, %%order_class%% .blog-wrap-no-image",
        },
        props.dnxte_blogslider_image_height_last_edited,
      ],
      [
        {
          desktop: `top: ${props.dnxte_blogslider_image_height} !important;`,
          tablet: `top: ${props.dnxte_blogslider_image_height_tablet} !important;`,
          phone: `top: ${props.dnxte_blogslider_image_height_phone} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-author-avatar",
        },
        props.dnxte_blogslider_image_height_last_edited,
      ],
    ];

    if (
      ["two", "three", "four", "five"].includes(props.blogslider_layouts) ===
      false
    ) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-readmorewrapper",
          declaration: `margin-left: 20px;`,
        },
      ]);
    }

    if ("eight" === props.blogslider_layouts) {
      css.push([
        {
          selector: "%%order_class%% .swiper-slide .dnxte-blog-carousel-wrap",
          declaration:
            "flex-direction: row-reverse;-ms-flex-direction:row-reverse;",
        },
      ]);
    }

    /// Content Position Only Show Layout Three, Four, Five
    if ('bottom' === props.conditinal_content_position) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-blog-carousel-layout-three .dnxte-content-wrapper, %%order_class%% .dnxte-blog-carousel-layout-four .dnxte-content-wrapper, %%order_class%% .dnxte-blog-carousel-layout-five .dnxte-content-wrapper",
          declaration:"top: 100%;transform: translateY(-100%);",
        },
      ]);
    } else if ('top' === props.conditinal_content_position) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-blog-carousel-layout-three .dnxte-content-wrapper, %%order_class%% .dnxte-blog-carousel-layout-four .dnxte-content-wrapper, %%order_class%% .dnxte-blog-carousel-layout-five .dnxte-content-wrapper",
          declaration:"top: 0%;transform: translateY(0%);",
        },
      ]);
    } else if ('center' === props.conditinal_content_position) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-blog-carousel-layout-three .dnxte-content-wrapper, %%order_class%% .dnxte-blog-carousel-layout-four .dnxte-content-wrapper, %%order_class%% .dnxte-blog-carousel-layout-five .dnxte-content-wrapper",
          declaration:"top: 50%;transform: translateY(-50%);",
        },
      ]);
    }

    if (
      ["seven", "eight", "nine"].includes(props.blogslider_layouts) === false
    ) {
      if ("six" !== props.blogslider_layouts) {
        applyCss(
          moduleImageHeight[0],
          css,
          moduleImageHeight[1],
          moduleImageHeight[2],
          moduleImageHeight[3]
        );
      } else {
        layoutSixImageHeight.forEach((element) => {
          applyCss(element[0], css, element[1], element[2], element[3]);
        });
      }
    }

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    const moduleBgCss = [
      {
        slug: "item_bg_color",
        use_color_gradient_slug: props.item_bg_use_color_gradient,
        gradient: {
          type: "item_bg_color_gradient_type",
          direction: "item_bg_color_gradient_direction",
          radial: "item_bg_color_gradient_direction_radial",
          start: "item_bg_color_gradient_start",
          end: "item_bg_color_gradient_end",
          start_position: "item_bg_color_gradient_start_position",
          end_position: "item_bg_color_gradient_end_position",
          overlays_image: "item_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .swiper-slide",
          hover: "%%order_class%% .swiper-slide:hover",
        },
      },
      // category bg color
      {
        slug: "dnxte_blogslider_category_bg_color",
        use_color_gradient_slug:
          props.dnxte_blogslider_category_bg_use_color_gradient,
        gradient: {
          type: "dnxte_blogslider_category_bg_color_gradient_type",
          direction: "dnxte_blogslider_category_bg_color_gradient_direction",
          radial:
            "dnxte_blogslider_category_bg_color_gradient_direction_radial",
          start: "dnxte_blogslider_category_bg_color_gradient_start",
          end: "dnxte_blogslider_category_bg_color_gradient_end",
          start_position:
            "dnxte_blogslider_category_bg_color_gradient_start_position",
          end_position:
            "dnxte_blogslider_category_bg_color_gradient_end_position",
          overlays_image:
            "dnxte_blogslider_category_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-blog-post-categories a",
          hover: "%%order_class%% .dnxte-blog-post-categories a:hover",
        },
      },
      // author bg color
      {
        slug: "dnxte_blogslider_author_bg_color",
        use_color_gradient_slug:
          props.dnxte_blogslider_author_bg_use_color_gradient,
        gradient: {
          type: "dnxte_blogslider_author_bg_color_gradient_type",
          direction: "dnxte_blogslider_author_bg_color_gradient_direction",
          radial: "dnxte_blogslider_author_bg_color_gradient_direction_radial",
          start: "dnxte_blogslider_author_bg_color_gradient_start",
          end: "dnxte_blogslider_author_bg_color_gradient_end",
          start_position:
            "dnxte_blogslider_author_bg_color_gradient_start_position",
          end_position:
            "dnxte_blogslider_author_bg_color_gradient_end_position",
          overlays_image:
            "dnxte_blogslider_author_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-authovcard",
          hover: "%%order_class%% .dnxte-authovcard:hover",
        },
      },
      // date bg color
      {
        slug: "dnxte_blogslider_date_bg_color",
        use_color_gradient_slug:
          props.dnxte_blogslider_date_bg_use_color_gradient,
        gradient: {
          type: "dnxte_blogslider_date_bg_color_gradient_type",
          direction: "dnxte_blogslider_date_bg_color_gradient_direction",
          radial: "dnxte_blogslider_date_bg_color_gradient_direction_radial",
          start: "dnxte_blogslider_date_bg_color_gradient_start",
          end: "dnxte_blogslider_date_bg_color_gradient_end",
          start_position:
            "dnxte_blogslider_date_bg_color_gradient_start_position",
          end_position: "dnxte_blogslider_date_bg_color_gradient_end_position",
          overlays_image:
            "dnxte_blogslider_date_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte-blog-published, %%order_class%% .dnxte-blog-post-date",
          hover:
            "%%order_class%% .dnxte-blog-published:hover, %%order_class%% .dnxte-blog-post-date:hover",
        },
      },
      // content wrapper bg color
      {
        slug: "content_wrapper_bg_color",
        use_color_gradient_slug: props.content_wrapper_bg_use_color_gradient,
        gradient: {
          type: "content_wrapper_bg_color_gradient_type",
          direction: "content_wrapper_bg_color_gradient_direction",
          radial: "content_wrapper_bg_color_gradient_direction_radial",
          start: "content_wrapper_bg_color_gradient_start",
          end: "content_wrapper_bg_color_gradient_end",
          start_position: "content_wrapper_bg_color_gradient_start_position",
          end_position: "content_wrapper_bg_color_gradient_end_position",
          overlays_image: "content_wrapper_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .swiper-slide .dnxte-content-wrapper",
          hover: "%%order_class%% .swiper-slide .dnxte-content-wrapper:hover",
        },
      },
      // image overlay bg color
      {
        slug: "image_overlay_bg_color",
        use_color_gradient_slug: props.image_overlay_bg_use_color_gradient,
        gradient: {
          type: "image_overlay_bg_color_gradient_type",
          direction: "image_overlay_bg_color_gradient_direction",
          radial: "image_overlay_bg_color_gradient_direction_radial",
          start: "image_overlay_bg_color_gradient_start",
          end: "image_overlay_bg_color_gradient_end",
          start_position: "image_overlay_bg_color_gradient_start_position",
          end_position: "image_overlay_bg_color_gradient_end_position",
          overlays_image: "image_overlay_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-post-thumb a:hover::after",
        },
      },
    ];
    moduleBgCss.forEach((element) => applyBgCss(css, props, element));

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after,%%order_class%% .swiper-button-next:after`,
        declaration: `color: ${props.dnxte_blogslide_arrow_color} !important;`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev,%%order_class%% .swiper-button-next`,
        declaration: `background-color: ${props.dnxte_blogslide_arrow_bg_color} !important;`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev:after,%%order_class%% .swiper-button-next:after`,
        declaration: `font-size: ${props.dnxte_blogslider_arrow_size}px;`,
      },
    ]);

    css.push([
      {
        selector: `%%order_class%% .swiper-button-prev, %%order_class%% .swiper-button-next`,
        declaration: `width: ${arrow_width}; height: ${arrow_width};`,
      },
    ]);

    // Slide shadows
    if (props.dnxte_blogslider_slide_shadows === "off") {
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

    if ("off" !== props.show_underline_on_title_hover) {
      css.push([
        {
          selector: `%%order_class%% .swiper-slide:hover .dnxte-entry-title a`,
          declaration: "background-size: 100% 2px;",
        },
      ]);
    }

    return css;
  }

  constructor(props) {
    super(props);

    this.pause = "on" === props.dnxte_blogslider_pause_on_hover;
    this.pauseOnHover = false;

    this.state = {
      isLoaded: false,
      result: [],
      error: null,
      arrow: "on" === props.dnxte_blogslider_arrows,
      arrowPosition: props.dnxte_blogslider_arrow_position,
      positionContainer: "",
      positionButtonContainer: "",
      positionButton: "",
      arrowTopOrBottom: "",
      arrowRightLeftCenter: "",
      header_level: props.header_level ? props.header_level : "h2",
    };

    this.dnxteBlogSlider = new Swiper(this.refs.dnxteBlogSlider, {});

    this.blogSliderArgs = {
      post_type: props.post_type,
      post_count: props.posts_number,
      posts_offset: props.posts_offset || 0,
      category: props.include_categories,
      excerpt_length: +props.excerpt_length || 70,
      order_by: props.order_by,
      sorted_by: props.order,
      image_size_type: props.dnxte_feaimage_thumb_size,
      image_height: props.thumb_height,
      image_width: props.thumb_width,
      meta_date: props.meta_date,
    };
  }

  getPosts(blogSliderArgs) {
    const {
      post_type,
      post_count,
      posts_offset,
      category: cat_ids,
      excerpt_length,
      order_by,
      sorted_by,
      image_size_type,
      image_height,
      image_width,
      meta_date,
    } = blogSliderArgs;


    const component = this;
    component.isMounted = true;
    $.ajax({
      url: window.et_fb_options.ajaxurl,
      type: "POST",
      data: {
        action: "get_all_posts",
        cat_ids,
        post_type,
        post_count,
        posts_offset,
        excerpt_length,
        order_by,
        sorted_by,
        image_size_type,
        image_height,
        image_width,
        meta_date,
      },
      success: function (res) {
        if (component.isMounted) {
          component.setState({
            isLoaded: true,
            result: res,
          });
        }
      },
      error: function() {
        component.setState({
          isLoaded: true,
          error: "There is an error",
        });
      },
    });
  }

  renderSlider(props) {
    this.dnxteBlogSlider = new Swiper(this.refs.dnxteBlogSlider, {
      autoplay: {
        enabled: "on" === props.dnxte_blogslider_autoplay_show_hide,
        delay: +props.dnxte_blogslider_autoplay_delay || 5000,
        disableOnInteraction: !1,
      },
      centeredSlides: "on" === props.dnxte_blogslider_centered_slides,
      effect: "coverflow",
      coverflowEffect: {
        slideShadows: "on" === props.dnxte_blogslider_slide_shadows,
        rotate: parseInt(props.dnxte_blogslider_slide_rotate),
        stretch: parseInt(props.dnxte_blogslider_slide_stretch),
        depth: parseInt(props.dnxte_blogslider_slide_depth),
      },
      direction: "horizontal",
      speed: +props.dnxte_blogslider_speed,
      spaceBetween: +props.dnxte_blogslider_spacebetween,
      grabCursor: "on" === props.dnxte_blogslider_grab,
      loop: "on" === props.dnxte_blogslider_loop,
      slidesPerView: +props.dnxte_blogslider_breakpoint_desktop,
      breakpoints: {
        1024: {
          slidesPerView: +props.dnxte_blogslider_breakpoint_desktop,
        },
        768: {
          slidesPerView:
            +props.dnxte_blogslider_breakpoint_desktop_tablet ||
            this.dnxteBlogSlider.params.slidesPerView,
        },
        479: {
          slidesPerView: +props.dnxte_blogslider_breakpoint_desktop_phone || 1,
        },
        200: {
          slidesPerView: +props.dnxte_blogslider_breakpoint_desktop_phone || 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: "on" === props.dnxte_blogslider_pagination_bullets,
        clickable: "on" === props.dnxte_blogslider_pagination_clickable,
        type: props.dnxte_blogslider_pagination_type,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: "on" === props.dnxte_blogslider_keyboard_enable,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: "on" === props.dnxte_blogslider_mousewheel_enable,
        invert: true,
      },
      observer: true,
      observeParents: true,
    });
  }

  componentDidMount() {
    const { props } = this;
    this.getPosts(this.blogSliderArgs);
    this.arrowPositionFunc(props);
    this.renderSlider(props);
    this.pause = "on" === props.dnxte_blogslider_pause_on_hover;
    this.pauseOnHover = false;
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  componentWillReceiveProps(nextProps) {
    const { props } = this;

    if (props.post_type !== nextProps.post_type) {
      this.blogSliderArgs.post_type = nextProps.post_type;
      this.getPosts(this.blogSliderArgs);
    }
    if (
      props.dnxte_blogslider_arrow_position !==
      nextProps.dnxte_blogslider_arrow_position
    ) {
      this.arrowPositionFunc(nextProps);
    }
    // swiper settings update
    if (Array.isArray(nextProps.content) && nextProps.content.length > 1)
      this.dnxteBlogSlider.params.autoHeight =
        "on" === nextProps.dnxte_blogslider_auto_height;
    else this.dnxteBlogSlider.params.autoHeight = false;

    if (
      props.dnxte_blogslider_breakpoint_desktop !==
        nextProps.dnxte_blogslider_breakpoint_desktop ||
      props.dnxte_blogslider_breakpoint_desktop_tablet !==
        nextProps.dnxte_blogslider_breakpoint_desktop_tablet ||
      props.dnxte_blogslider_breakpoint_desktop_phone !==
        nextProps.dnxte_blogslider_breakpoint_desktop_phone
    ) {
      this.dnxteBlogSlider.params.breakpoints[
        "1024"
      ].slidesPerView = this.dnxteBlogSlider.params.slidesPerView = +nextProps.dnxte_blogslider_breakpoint_desktop;

      if (
        "on|tablet" ===
          nextProps.dnxte_blogslider_breakpoint_desktop_last_edited &&
        nextProps.dnxte_blogslider_breakpoint_desktop_tablet
      ) {
        this.dnxteBlogSlider.params.breakpoints[
          "768"
        ].slidesPerView = this.dnxteBlogSlider.params.slidesPerView = +nextProps.dnxte_blogslider_breakpoint_desktop_tablet;
      } else if (
        "on|phone" ===
          nextProps.dnxte_blogslider_breakpoint_desktop_last_edited &&
        nextProps.dnxte_blogslider_breakpoint_desktop_phone
      ) {
        this.dnxteBlogSlider.params.breakpoints[
          "479"
        ].slidesPerView = this.dnxteBlogSlider.params.breakpoints[
          "200"
        ].slidesPerView = this.dnxteBlogSlider.params.slidesPerView = +nextProps.dnxte_blogslider_breakpoint_desktop_phone;
      }
    }

    if (
      props.dnxte_blogslider_autoplay_show_hide !==
        nextProps.dnxte_blogslider_autoplay_show_hide ||
      props.dnxte_blogslider_autoplay_delay !==
        nextProps.dnxte_blogslider_autoplay_delay
    ) {
      if ("off" !== nextProps.dnxte_blogslider_autoplay_show_hide) {
        this.dnxteBlogSlider.autoplay.stop();
        this.dnxteBlogSlider.params.autoplay.delay = +nextProps.dnxte_blogslider_autoplay_delay;
      } else {
        this.dnxteBlogSlider.autoplay.stop();
      }
    }
    // responsible for pause on hover
    if ("off" !== nextProps.dnxte_blogslider_autoplay_show_hide) {
      if (this.pause && this.pauseOnHover) {
        this.dnxteBlogSlider.autoplay.stop();
      } else if (this.pauseOnHover === false) {
        this.dnxteBlogSlider.autoplay.start();
      }
    }

    if (props.dnxte_blogslider_loop !== nextProps.dnxte_blogslider_loop) {
      if ("on" === nextProps.dnxte_blogslider_loop) {
        this.dnxteBlogSlider.params.loop = true;
        this.dnxteBlogSlider.loopCreate();
      } else {
        this.dnxteBlogSlider.params.loop = false;
        this.dnxteBlogSlider.loopDestroy();
      }
    }

    if (
      props.dnxte_blogslider_centered_slides !==
      nextProps.dnxte_blogslider_centered_slides
    )
      this.dnxteBlogSlider.params.centeredSlides =
        "on" === nextProps.dnxte_blogslider_centered_slides;

    if (props.dnxte_blogslider_speed !== nextProps.dnxte_blogslider_speed)
      this.dnxteBlogSlider.params.speed = +nextProps.dnxte_blogslider_speed;

    if (
      props.dnxte_blogslider_spacebetween !==
      nextProps.dnxte_blogslider_spacebetween
    )
      this.dnxteBlogSlider.params.spaceBetween = +nextProps.dnxte_blogslider_spacebetween;

    if (
      props.dnxte_blogslider_keyboard_enable !==
        nextProps.dnxte_blogslider_keyboard_enable ||
      props.dnxte_blogslider_mousewheel_enable !==
        nextProps.dnxte_blogslider_mousewheel_enable
    ) {
      "on" === nextProps.dnxte_blogslider_keyboard_enable
        ? this.dnxteBlogSlider.keyboard.enable()
        : this.dnxteBlogSlider.keyboard.disable();

      "on" === nextProps.dnxte_blogslider_mousewheel_enable
        ? this.dnxteBlogSlider.mousewheel.enable()
        : this.dnxteBlogSlider.mousewheel.disable();
    }

    if (
      props.dnxte_blogslider_pagination_clickable !==
      nextProps.dnxte_blogslider_pagination_clickable
    )
      this.dnxteBlogSlider.params.pagination.clickable =
        "on" === nextProps.dnxte_blogslider_pagination_clickable;

    this.dnxteBlogSlider.params.coverflowEffect.slideShadows =
      "on" === nextProps.dnxte_blogslider_slide_shadows;

    this.dnxteBlogSlider.params.coverflowEffect.rotate = parseInt(
      nextProps.dnxte_blogslider_slide_rotate
    );

    this.dnxteBlogSlider.params.coverflowEffect.stretch = parseInt(
      nextProps.dnxte_blogslider_slide_stretch
    );

    this.dnxteBlogSlider.params.coverflowEffect.depth = parseInt(
      nextProps.dnxte_blogslider_slide_depth
    );

    if (
      props.dnxte_blogslider_pagination_type !==
        nextProps.dnxte_blogslider_pagination_type ||
      props.dnxte_blogslider_pagination_bullets !==
        nextProps.dnxte_blogslider_pagination_bullets
    ) {
      this.dnxteBlogSlider.params.pagination.type =
        nextProps.dnxte_blogslider_pagination_type;

      this.dnxteBlogSlider.params.pagination.dynamicBullets =
        "on" === nextProps.dnxte_blogslider_pagination_bullets;
      this.dnxteBlogSlider.pagination.render();
    }

    this.dnxteBlogSlider.update(true);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    this.pause = "on" === props.dnxte_blogslider_pause_on_hover;

    if (
      props.dnxte_blogslider_arrows !== prevProps.dnxte_blogslider_arrows ||
      props.dnxte_blogslider_arrow_position !==
        prevProps.dnxte_blogslider_arrow_position
    ) {
      this.setState({
        ...this.state,
        arrow: "on" === props.dnxte_blogslider_arrows,
        arrowPosition: props.dnxte_blogslider_arrow_position,
      });
    }
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
      props.dnxte_blogslider_arrow_position
    )
      ? "multi-position-container"
      : "";
    this.positionButtonContainer = positionArr.includes(
      props.dnxte_blogslider_arrow_position
    )
      ? "multi-position-button-container"
      : "";
    this.positionButton = positionArr.includes(
      props.dnxte_blogslider_arrow_position
    )
      ? "multi-position-button"
      : "";

    if (positionArr.includes(props.dnxte_blogslider_arrow_position)) {
      this.arrowTopOrBottom = props.dnxte_blogslider_arrow_position.startsWith(
        "top"
      )
        ? "arrow-position-top"
        : "arrow-position-bottom";

      if (props.dnxte_blogslider_arrow_position.endsWith("left")) {
        this.arrowRightLeftCenter = "multi-position-button-left";
      } else if (props.dnxte_blogslider_arrow_position.endsWith("center")) {
        this.arrowRightLeftCenter = "multi-position-button-center";
      } else if (props.dnxte_blogslider_arrow_position.endsWith("right")) {
        this.arrowRightLeftCenter = "multi-position-button-right";
      }
    }

    this.setState({
      ...this.state,
      positionContainer: this.positionContainer,
      positionButtonContainer: this.positionButtonContainer,
      positionButton: this.positionButton,
      arrowTopOrBottom: this.arrowTopOrBottom,
      arrowRightLeftCenter: this.arrowRightLeftCenter,
    });
  };

  render() {
    const {
      result: posts,
      arrow,
      arrowPosition,
      positionContainer,
      positionButtonContainer,
      positionButton,
      arrowTopOrBottom,
      arrowRightLeftCenter,
    } = this.state;

    
    const result = posts["all_posts"];
    const { props } = this;
    
    
    const utils = window.ET_Builder.API.Utils;

    const button_icon = utils.processFontIcon(props.button_icon || "");

    const arrowClass = (arrowPosition) => {
      // dnxte_blogslider_arrows_default_left
      const arrowPositionArr = [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ];
      if (arrowPosition === "inner") return "dnxte_blogslider_arrows_inner";
      if (arrowPosition === "outer") return "dnxte_blogslider_arrows_outer";
      if (arrowPositionArr.includes(arrowPosition))
        return `blogslider-${arrowPosition}`;
      return "dnxte_blogslider_arrows_default";
    };

    const mouseenter = () => (this.pauseOnHover = this.pause);

    const mouseleave = () => (this.pauseOnHover = false);

    const customBtnCss = (isBtnOn) =>
      "on" === isBtnOn ? `et_pb_button et_pb_custom_button_icon` : "";


    const ChooseLayout = (props) => {
      const { date, user, item, category, rest, header_level } = props;

      function DynamicHeading({ header_level,className, children }) {
        const HeadingTag = `${header_level}`;

        return <HeadingTag className={className}>{children}</HeadingTag>;
      }

      const { day, month, year } = date;
      
      const meta_alignment_class = getAlignment("dnxte_meta_alignment", rest);

      if ("six" === rest.blogslider_layouts) {
        return <LayoutOne header_level={header_level} alignClass={meta_alignment_class} {...props} />;
      } else if (["seven", "eight"].includes(rest.blogslider_layouts)) {
        return <LayoutTwo header_level={header_level} alignClass={meta_alignment_class} {...props} />;
      } else {
        return (
          <>
            {"top" === rest.date_position && (
              <div className="dnxte-blog-post-date">
                <span className="dnxte-month">{month}</span>
                <span className="dnxte-month">{day}</span>
                <span className="dnxte-month">{year}</span>
              </div>
            )}
            <div className="dnxte-content-wrapper">
              <DynamicHeading header_level={header_level} className={'dnxte-entry-title'}>
                <a href={item.guid || "/"}>{item.post_title}</a>
              </DynamicHeading>

              <div className={`dnxte-post-meta ${meta_alignment_class}`}>
                {"on" === rest.show_author && (
                  <span className="dnxte-authovcard">
                    <span className="author vcard">
                      <img src={user.avatar_url} alt={user.display_name} />{" "}
                      <a
                        href={user.author_url}
                        title={`Posts by ${user.display_name}`}
                      >
                        {user.display_name}
                      </a>
                    </span>
                  </span>
                )}

                {"bottom" === rest.date_position && (
                  <span className="dnxte-blog-published">
                    {" "}
                    <Icon
                      utils={utils}
                      icon="}"
                      classes="dnxte-blogslider-content-icon"
                    />{" "}
                    {item.meta_date}{" "}
                  </span>
                )}
                {"on" === rest.show_categories && (
                  <span className="dnxte-blog-post-categories">
                    <Icon
                      utils={utils}
                      icon=""
                      classes="dnxte-blogslider-content-icon"
                    />{" "}
                    {category.map((element, index) => {
                      return (
                        <a key={element.cat_ID} href={element.cat_url || "/"}>
                          {element.cat_name}
                          {category.length === index + 1 ? "" : ","}
                        </a>
                      );
                    })}
                  </span>
                )}
              </div>
              {"on" === rest.show_excerpt && "" !== item.post_excerpt && (
                <div
                  className="dnxte-blog-post-content"
                  dangerouslySetInnerHTML={{
                    __html: item.post_excerpt,
                  }}
                />
              )}
              {/* {"one" !== rest.blogslider_layouts && "on" === rest.show_more && (
                <div className="dnxte-readmorewrapper">
                  <a
                    className={`${customBtnCss(
                      rest.custom_button
                    )} dnxte-readmore-link`}
                    href={item.guid || "/"}
                    data-icon={button_icon}
                  >
                    {rest.show_more_text}
                  </a>
                </div>
              )} */}
            </div>
            {rest.blogslider_layouts &&
              "one" === rest.blogslider_layouts &&
              "on" === rest.show_more && (
                <div className="dnxte-readmorewrapper">
                  <a
                    className={`${customBtnCss(
                      rest.custom_button
                    )} dnxte-readmore-link`}
                    href={item.guid || "/"}
                    data-icon={button_icon}
                  >
                    {rest.show_more_text}
                  </a>
                </div>
              )}
          </>
        );
      }
    };

    const layoutName = (layout) => {
      return ["seven", "eight"].includes(layout) ? "seven" : layout;
    };

    return (
      <div
        className={`dnxte_blog_slider_container ${positionContainer} ${arrowTopOrBottom}`}
      >
        <div
          ref="dnxteBlogSlider"
          className={`swiper-container dnxte-blog-carousel-slide-active is_equal_height_${props.is_equal_height}`}
          style={{
            cursor: props.dnxte_blogslider_grab === "on" ? "grab" : "default",
          }}
          onMouseEnter={mouseenter}
          onMouseLeave={mouseleave}
        >
          <div
            className={`swiper-wrapper mb-30 dnxte-blog-carousel-layout-${layoutName(
              props.blogslider_layouts
            )}`}
          >
            {result && Array.isArray(result)
              ? result.map((item) => {
                  const { user, category } = item;
                  // const category = cat[0];
                  let date = new Date(item.post_date);
                  let day = date.getDate();
                  let month = date.toLocaleDateString("en-us", {
                    month: "short",
                  });
                  let year = date.getFullYear();
                
                  return (
                    <div key={item.ID} className="swiper-slide">
                      <div className="dnxte-blog-carousel-wrap">
                        {"on" === props.show_thumbnail && (
                          <div
                            className={`blog-wrap${
                              !item.thumbnail ? "-no-image" : ""
                            }`}
                          >
                            <div className="dnxte-post-thumb">
                              <div className="dnxte-blog-imgoverlay" />
                              <a
                                href={item.guid || "/"}
                                dangerouslySetInnerHTML={{
                                  __html: item.thumbnail || "",
                                }}
                              ></a>
                            </div>
                          </div>
                        )}
                        <ChooseLayout
                          user={user}
                          item={item}
                          date={{ day, month, year }}
                          category={category}
                          rest={props}
                          header_level={this.state.header_level}
                        />
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div
            className={paginationClass(
              this.props,
              "dnxte_blogslider_pagination_type",
              "dnxte_blogslider_pagination_bullets",
              "dnxte_blogslider_pagination_clickable"
            )}
          />
        </div>
        {arrow ? (
          <div
            className={`swiper-button-container ${arrowClass(
              arrowPosition
            )} ${positionButtonContainer} ${arrowRightLeftCenter}`}
          >
            <div
              className={`swiper-button-prev ${positionButton}`}
              data-icon="prev"
              onClick={() => this.dnxteBlogSlider.slidePrev()}
            ></div>
            <div
              className={`swiper-button-next ${positionButton}`}
              data-icon="next"
              onClick={() => this.dnxteBlogSlider.slideNext()}
            ></div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NextBlogSlider;
