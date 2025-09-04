import $ from "jquery";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
// eslint-disable-next-line
import "../../../assets/css/msnary-filterbar.css";
import "../../../assets/css/msnary-hvr-css.css";
import "../../../assets/css/magnific-popup.css";
import {
  applyBgCss,
  applyCss,
  applyCustomSpacing,
  applyPsuedoIconCss,
} from "../base/common";
import "./style.css";
import IsotopeGallery from "./IsotopeGallery";

class NextMasonary extends Component {
  isMounted = false;
  static slug = "dnxte_masonary";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      [
        "dnxtemasonary_title_margin",
        "%%order_class%% .dnxte-msnary-heading",
        "margin",
      ],
      [
        "dnxtemasonary_title_padding",
        "%%order_class%% .dnxte-msnary-heading",
        "padding",
      ],
      [
        "dnxtemasonary_caption_margin",
        "%%order_class%% .dnxte-msnary-pra",
        "margin",
      ],
      [
        "dnxtemasonary_caption_padding",
        "%%order_class%% .dnxte-msnary-pra",
        "padding",
      ],
      [
        "dnxtemasonary_icon_margin",
        "%%order_class%% .dnxte_ovl::before",
        "margin",
      ],
      [
        "dnxtemasonary_icon_padding",
        "%%order_class%% .dnxte_ovl::before",
        "padding",
      ],
      [
        "dnxtemasonary_filter_m_margin",
        "%%order_class%% .dnxte-msnary-filter-items",
        "margin",
      ],
      [
        "dnxtemasonary_filter_m_padding",
        "%%order_class%% .dnxte-msnary-filter-items",
        "padding",
      ],
      [
        "dnxtemasonary_filter_mi_margin",
        "%%order_class%% .dnxte-msnary-filter-item",
        "margin",
      ],
      [
        "dnxtemasonary_filter_mi_padding",
        "%%order_class%% .dnxte-msnary-filter-item",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleCss = [
      [
        {
          desktop: `color: ${props.dnxte_filter_active_text_color} !important;`,
          tablet: `color: ${props.dnxte_filter_active_text_color_tablet} !important;`,
          phone: `color: ${props.dnxte_filter_active_text_color_phone} !important;`,
          hover: `color: ${props.dnxte_filter_active_text_color__hover} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte-msnary-filter-items li.active",
          hover: "%%order_class%% .dnxte-msnary-filter-items li.active:hover",
        },
        props.dnxte_filter_active_text_color_last_edited,
        props.dnxte_filter_active_text_color__hover_enabled,
      ],
      // arrow color
      [
        {
          desktop: `color: ${props.dnxte_lightbox_arrow_color} !important;`,
          tablet: `color: ${props.dnxte_lightbox_arrow_color_tablet} !important;`,
          phone: `color: ${props.dnxte_lightbox_arrow_color_phone} !important;`,
          hover: `color: ${props.dnxte_lightbox_arrow_color__hover} !important;`,
        },
        {
          desktop: ".mfp-arrow:after",
          hover: ".mfp-arrow:hover::after",
        },
        props.dnxte_lightbox_arrow_color_last_edited,
        props.dnxte_lightbox_arrow_color__hover_enabled,
      ],
      // lightbox close btn color
      [
        {
          desktop: `color: ${props.dnxte_lightbox_close_btn_color} !important;`,
          tablet: `color: ${props.dnxte_lightbox_close_btn_color_tablet} !important;`,
          phone: `color: ${props.dnxte_lightbox_close_btn_color_phone} !important;`,
          hover: `color: ${props.dnxte_lightbox_close_btn_color__hover} !important;`,
        },
        {
          desktop: ".dnxte-msnary-mfp-config .mfp-close",
          hover: ".dnxte-msnary-mfp-config .mfp-close:hover",
        },
        props.dnxte_lightbox_close_btn_color_last_edited,
        props.dnxte_lightbox_close_btn_color__hover_enabled,
      ],
      // columns and gutter
      [
        {
          desktop: `width: calc((100% - (${props.dnxte_columns} - 1) * ${props.dnxte_gutter}px) / ${props.dnxte_columns})`,
          tablet: `width: calc((100% - (${props.dnxte_columns_tablet} - 1) * ${props.dnxte_gutter_tablet}px) / ${props.dnxte_columns_tablet})`,
          phone: `width: calc((100% - (${props.dnxte_columns_phone} - 1) * ${props.dnxte_gutter_phone}px) / ${props.dnxte_columns_phone})`,
        },
        {
          desktop:
            "%%order_class%% .grid-sizer, %%order_class%% .dnxte-msnary-item",
        },
        props.dnxte_columns_last_edited,
      ],
      // margin bottom of masonry item
      [
        {
          desktop: `margin-bottom: ${props.dnxte_gutter}px;`,
          tablet: `margin-bottom: ${props.dnxte_gutter_tablet}px;`,
          phone: `margin-bottom: ${props.dnxte_gutter_phone}px;`,
        },
        {
          desktop: "%%order_class%% .dnxte-msnary-item",
        },
        props.dnxte_gutter_last_edited,
      ],
    ];

    moduleCss.forEach((element) => {
      applyCss(element[0], css, element[1], element[2], element[3]);
    });

    // Overlay Settings.
    if ("off" !== props.use_overlay) {
      // Icon Color.
      if ("on|tablet" === props.overlay_icon_color_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte_ovl.et_overlay:before",
            declaration: `color: ${props.overlay_icon_color_tablet};`,
            device: "tablet",
          },
        ]);
      } else if ("on|phone" === props.overlay_icon_color_last_edited) {
        css.push([
          {
            selector: "%%order_class%% .dnxte_ovl.et_overlay:before",
            declaration: `color: ${props.overlay_icon_color_phone};`,
            device: "phone",
          },
        ]);
      } else {
        css.push([
          {
            selector: "%%order_class%% .dnxte_ovl.et_overlay:before",
            declaration: `color: ${props.overlay_icon_color};`,
          },
        ]);
      }
    }

    if ("on|tablet" === props.dnxte_gutter_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-column",
          declaration: `margin-left: ${props.dnxte_gutter_tablet}px;`,
        },
      ]);

      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-column > div",
          declaration: `margin-bottom: ${props.dnxte_gutter_tablet}px !important;`,
        },
      ]);
    } else if ("on|phone" === props.dnxte_gutter_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-column",
          declaration: `margin-left: ${props.dnxte_gutter_phone}px;`,
        },
      ]);

      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-column > div",
          declaration: `margin-bottom: ${props.dnxte_gutter_phone}px !important;`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-column",
          declaration: `margin-left: ${props.dnxte_gutter}px;`,
        },
      ]);

      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-column > div",
          declaration: `margin-bottom: ${props.dnxte_gutter}px !important;`,
        },
      ]);
    }

    // hover icon size
    const iconSize = +props.dnxte_icon_size;
    // const iconArea = iconSize + 8;
    const iconSizeLastEdit = props.dnxte_icon_size_last_edited;
    const iconSizeTablet =
      "on|tablet" === iconSizeLastEdit && +props.dnxte_icon_size_tablet;
    // const iconAreaTablet =
    // "on|tablet" === iconSizeLastEdit && +props.dnxte_icon_size_tablet + 8;
    const iconSizePhone =
      "on|phone" === iconSizeLastEdit && +props.dnxte_icon_size_phone;
    // const iconAreaPhone =
    //   "on|phone" === iconSizeLastEdit && +props.dnxte_icon_size_phone + 8;

    if ("on|tablet" === iconSizeLastEdit) {
      css.push([
        {
          selector: "%%order_class%% .dnxte_ovl:before",
          declaration: `font-size: ${iconSizeTablet}px;`,
        },
      ]);
    } else if ("on|phone" === iconSizeLastEdit) {
      css.push([
        {
          selector: "%%order_class%% .dnxte_ovl:before",
          declaration: `font-size: ${iconSizePhone}px;`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte_ovl:before",
          declaration: `font-size: ${iconSize}px;`,
        },
      ]);
    }
    // hover icon size end

    if ("off" !== props.use_overlay) {
      const selector = "%%order_class%% .dnxte_ovl.et_overlay::before";
      applyPsuedoIconCss("hover_icon", selector, props, css);
    }

    const customBgColor = [
      {
        slug: "filter_bg_color",
        use_color_gradient_slug: props.filter_bg_use_color_gradient,
        gradient: {
          type: "filter_bg_color_gradient_type",
          direction: "filter_bg_color_gradient_direction",
          radial: "filter_bg_color_gradient_direction_radial",
          start: "filter_bg_color_gradient_start",
          end: "filter_bg_color_gradient_end",
          start_position: "filter_bg_color_gradient_start_position",
          end_position: "filter_bg_color_gradient_end_position",
          overlays_image: "filter_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-msnary-filter-item",
          hover: "%%order_class%% .dnxte-msnary-filter-item:hover",
        },
      },
      // filter active bg color
      {
        slug: "dnxte_msnary_filter_active_bg_color",
        use_color_gradient_slug:
          props.dnxte_msnary_filter_active_bg_use_color_gradient,
        gradient: {
          type: "dnxte_msnary_filter_active_bg_color_gradient_type",
          direction: "dnxte_msnary_filter_active_bg_color_gradient_direction",
          radial:
            "dnxte_msnary_filter_active_bg_color_gradient_direction_radial",
          start: "dnxte_msnary_filter_active_bg_color_gradient_start",
          end: "dnxte_msnary_filter_active_bg_color_gradient_end",
          start_position:
            "dnxte_msnary_filter_active_bg_color_gradient_start_position",
          end_position:
            "dnxte_msnary_filter_active_bg_color_gradient_end_position",
          overlays_image:
            "dnxte_msnary_filter_active_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte-msnary-filter-items li.active, %%order_class%% .dnxte-msnary-filter-items li:hover",
          hover: "%%order_class%% .dnxte-msnary-filter-items li:hover.active",
        },
      },
      // Overlay Background Color
      {
        slug: "dnxte_msnary_overlay_bg_color",
        use_color_gradient_slug:
          props.dnxte_msnary_overlay_bg_use_color_gradient,
        gradient: {
          type: "dnxte_msnary_overlay_bg_color_gradient_type",
          direction: "dnxte_msnary_overlay_bg_color_gradient_direction",
          radial: "dnxte_msnary_overlay_bg_color_gradient_direction_radial",
          start: "dnxte_msnary_overlay_bg_color_gradient_start",
          end: "dnxte_msnary_overlay_bg_color_gradient_end",
          start_position:
            "dnxte_msnary_overlay_bg_color_gradient_start_position",
          end_position: "dnxte_msnary_overlay_bg_color_gradient_end_position",
          overlays_image:
            "dnxte_msnary_overlay_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte_ovl.et_overlay, %%order_class%% .imghve-color:before,%%order_class%% .imghve-color:after",
          hover: "%%order_class%% .dnxte_ovl.et_overlay:hover",
        },
      },
      // Icon Background Color
      {
        slug: "dnxte_msnary_icon_bg_color",
        use_color_gradient_slug: props.dnxte_msnary_icon_bg_use_color_gradient,
        gradient: {
          type: "dnxte_msnary_icon_bg_color_gradient_type",
          direction: "dnxte_msnary_icon_bg_color_gradient_direction",
          radial: "dnxte_msnary_icon_bg_color_gradient_direction_radial",
          start: "dnxte_msnary_icon_bg_color_gradient_start",
          end: "dnxte_msnary_icon_bg_color_gradient_end",
          start_position: "dnxte_msnary_icon_bg_color_gradient_start_position",
          end_position: "dnxte_msnary_icon_bg_color_gradient_end_position",
          overlays_image: "dnxte_msnary_icon_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte_ovl.et_overlay:before",
          hover: "%%order_class%% .dnxte_ovl.et_overlay:hover::before",
        },
      },
      // Lightbox Overlay Background color
      {
        slug: "dnxte_lightbox_overlay_bg_color",
        use_color_gradient_slug:
          props.dnxte_lightbox_overlay_bg_use_color_gradient,
        gradient: {
          type: "dnxte_lightbox_overlay_bg_color_gradient_type",
          direction: "dnxte_lightbox_overlay_bg_color_gradient_direction",
          radial: "dnxte_lightbox_overlay_bg_color_gradient_direction_radial",
          start: "dnxte_lightbox_overlay_bg_color_gradient_start",
          end: "dnxte_lightbox_overlay_bg_color_gradient_end",
          start_position:
            "dnxte_lightbox_overlay_bg_color_gradient_start_position",
          end_position: "dnxte_lightbox_overlay_bg_color_gradient_end_position",
          overlays_image:
            "dnxte_lightbox_overlay_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: ".mfp-bg",
          hover: ".mfp-bg:hover",
        },
      },
    ];

    customBgColor.forEach((element) => applyBgCss(css, props, element));

    const detailsPositionOnLightbox =
      props.dnxte_details_position_on_lightbox &&
      "on_image" === props.dnxte_details_position_on_lightbox
        ? "position:absolute;"
        : "position:relative";

    css.push([
      {
        selector: ".dnxte-msnary-mfp-config .mfp-bottom-bar .mfp-title",
        declaration: detailsPositionOnLightbox,
      },
    ]);

    if ("none" === props.dnxte_choose_lightbox) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-msnary-item a img",
          declaration: `cursor: default;`,
        },
      ]);
    }

    return css;
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      result: null,
      gallery_categories: null,
      error: null,
      column: props.dnxte_columns || 4,
    };
  }

  getImages(imagesId, orderby) {
    const component = this;
    component.isMounted = true;
    $.ajax({
      url: window.et_fb_options.ajaxurl,
      type: "POST",
      data: {
        action: "dnxte_get_images",
        images_id: imagesId,
      },
      success: function(res) {
        if (component.isMounted) {
          const { images, gallery_categories } = res;
          component.setState({
            isLoaded: true,
            result:
              orderby === "rand"
                ? images.sort(() => Math.random() - 0.5)
                : images,
            gallery_categories,
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

  componentDidMount() {
    const { props } = this;
    this.getImages(props.gallery_ids, props.gallery_orderby);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  componentDidUpdate() {
    const image = findDOMNode(this.refs.image);

    if (!image) return;
    const isLightboxOn = this.props.dnxte_choose_lightbox !== "link";

    if ("none" !== this.props.dnxte_choose_lightbox) {
      $(".dnxte_masonary .dnxte-msnary-item").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: 'dnxte-masonary-background-custom',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
        },
        disableOn: function() {
          return isLightboxOn;
        },
        zoom: {
          enabled: !isLightboxOn,
          duration: 500,
          opener: function(element) {
            return element.find("img");
          },
        },
        image: {
          markup:
            '<div class="mfp-figure dnxte-msnary-mfp-config">' +
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
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (
      this.props.gallery_ids !== nextProps.gallery_ids ||
      this.props.gallery_orderby !== nextProps.gallery_orderby
    ) {
      this.setState({
        isLoaded: false,
        result: null,
        error: null,
      });

      this.getImages(nextProps.gallery_ids, nextProps.gallery_orderby);
    }

    if (this.state.result !== nextState.result) {
      this.getImages(nextProps.gallery_ids, nextProps.gallery_orderby);
    }

    if (
      nextProps.dnxte_columns !== this.props.dnxte_columns ||
      nextProps.dnxte_columns_tablet !== this.props.dnxte_columns_tablet ||
      nextProps.dnxte_columns_phone !== this.props.dnxte_columns_phone
    ) {
      this.setState((state) => {
        return {
          ...state,
          column: nextProps.dnxte_columns || 4,
        };
      });
    }
  }

  showCaptionOnLightBox = (props, data) => {
    return "both" === props.dnxte_caption_position ||
      "lightbox" === props.dnxte_caption_position
      ? `<small class="dnxte-mfe-caption">${data[2]}</small>`
      : "";
  };

  filterCategory = () => {
    if (
      Array.isArray(this.state.result) &&
      Array.isArray(this.state.gallery_categories)
    ) {
      const allImageTerm =
        Array.isArray(this.state.result) &&
        this.state.result.map((item) => item[3]);

      let termArr = [];
      allImageTerm.forEach((image) => {
        if (image) {
          image.forEach((i) => {
            this.state.gallery_categories.forEach((term) => {
              if (term.slug === i.slug && !termArr.includes(term)) {
                termArr.push(term);
              }
            });
          });
        }
      });
      return termArr;
    }
  };
  getFirstCategory = (categories) => {
    return categories && Array.isArray(categories) ? categories[0] : null;
  };

  render() {
    const { props, state } = this;
    const PrintOverlayOutput = (props) => {
      const { props: prop, data } = props;
      let utils = window.ET_Builder.API.Utils;

      let oldIcon = prop.hover_icon ? prop.hover_icon.split("||") : "";
      let oldIconTablet = prop.hover_icon_tablet
        ? prop.hover_icon_tablet.split("||")
        : "";
      let oldIconPhone = prop.hover_icon_phone
        ? prop.hover_icon_phone.split("||")
        : "";

      let hoverIcon = oldIcon[0] ? utils.processFontIcon(oldIcon[0]) : "";
      let hoverIconTablet = oldIconTablet[0]
        ? utils.processFontIcon(oldIconTablet[0])
        : hoverIcon;
      let hoverIconPhone = oldIconPhone[0]
        ? utils.processFontIcon(oldIconPhone[0])
        : hoverIconTablet;

      return (
        <span
          className="dnxte_ovl et_overlay et_pb_inline_icon"
          data-icon={hoverIcon}
          data-icon-tablet={hoverIconTablet}
          data-icon-phone={hoverIconPhone}
        >
          <MasonryDetails data={data} />
        </span>
      );
    };

    const MasonryDetails = ({ data }) => {
      return "off" !== props.dnxte_show_title ||
        "off" !== props.dnxte_show_caption ? (
        <div className="dnxte-msnary-details">
          {"off" !== props.dnxte_show_title && (
            <props.title_level className="dnxte-msnary-heading">
              {data[1]}
            </props.title_level>
          )}
          {"off" !== props.dnxte_show_caption &&
            ("both" === props.dnxte_caption_position ||
              "gallery" === props.dnxte_caption_position) && (
              <p className="dnxte-msnary-pra">{data[2]}</p>
            )}
        </div>
      ) : (
        ""
      );
    };

    const filterCat =
      "off" !== this.props.dnxte_gallery_bar ? this.filterCategory() : false;
    const firstCategory = this.getFirstCategory(filterCat);

    if (!state.result) return "";

    // console.log({ result: state.result, firstCategory });
    return (
      <IsotopeGallery
        filter={filterCat}
        columns={state.column || 4}
        gutter={props.dnxte_gutter || 10}
        filterLayout={props.dnxte_masonry_filter_effect}
        filterAllText={props.dnxte_filtering_text_all}
        hideAllButton={props.hide_all_button || "on"}
      >
        {props.gallery_ids &&
          state.result &&
          state.result
            .filter((item) => {
              if ("off" === props.hide_all_button && firstCategory) {
                return item[3][0].term_id === firstCategory.term_id && item;
              }
              return item;
            })
            .map((data, index) => {
              const isLightboxOrLink = () => {
                return "none" !== props.dnxte_choose_lightbox;
              };

              const lightboxHref = () => {
                if (isLightboxOrLink()) {
                  return { href: isLightBoxOn || "/#" };
                }
              };

              const isLightBoxOn =
                props.dnxte_choose_lightbox !== "link" ? data[0] : data[4];
              const isLightBoxOnTarget = isLightboxOrLink() &&
                props.dnxte_choose_lightbox !== "lightbox" && {
                  target: `${data[5]}`,
                };

              const categoryClass = () => {
                return Array.isArray(data["3"]) ? data[3][0].slug : "";
              };
              return (
                <div
                  key={index}
                  className={`dnxte-msnary-item et_pb_gallery_image ${categoryClass()}`}
                >
                  <a
                    ref="image"
                    data-title={
                      "off" !== props.dnxte_show_title
                        ? `<div class="dnxte-mfe-title">${data[1]}</div>`
                        : ""
                    }
                    data-caption={this.showCaptionOnLightBox(props, data)}
                    className={`image-link imghvr-msnary-${props.dnxte_masonry_hvr_effect} imghve-color`}
                    {...lightboxHref()}
                    {...isLightBoxOnTarget}
                  >
                    <img src={data[0] || ""} alt={data[1] || ""} />
                    {"off" !== props.use_overlay && (
                      <PrintOverlayOutput data={data} props={props} />
                    )}
                  </a>
                </div>
              );
            })}
      </IsotopeGallery>
    );
  }
}

export default NextMasonary;
