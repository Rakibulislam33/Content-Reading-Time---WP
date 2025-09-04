// External Dependencies
import React, { Component } from "react";
import {
  getAlignment,
  Image,
  renderStars,
  Title
} from "../base/common";
import "../base/get_responsive_css";
// Internal Dependencies
import "./style.css";

class NextReview extends Component {
  static slug = "dnxte_review";


  static css(props) {
    const css = [];

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.review_image_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_image_margin",
          "%%order_class%% .dnxte-review-img",
          "margin"
        )
      );
    }

    if ("" !== props.review_image_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_image_padding",
          "%%order_class%% .dnxte-review-img",
          "padding"
        )
      );
    }

    if ("" !== props.review_title_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_title_margin",
          "%%order_class%% .dnxte-review-header",
          "margin"
        )
      );
    }

    if ("" !== props.review_title_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_title_padding",
          "%%order_class%% .dnxte-review-header",
          "padding"
        )
      );
    }

    if ("" !== props.review_position_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_position_margin",
          "%%order_class%% .dnxte-review-pos",
          "margin"
        )
      );
    }

    if ("" !== props.review_position_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_position_padding",
          "%%order_class%% .dnxte-review-pos",
          "padding"
        )
      );
    }

    if ("" !== props.review_rating_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_rating_margin",
          "%%order_class%% .dnxte-review-social,%%order_class%% .dnxte-review-numb-des",
          "margin"
        )
      );
    }

    if ("" !== props.review_rating_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_rating_padding",
          "%%order_class%% .dnxte-review-social,%%order_class%% .dnxte-review-numb-des",
          "padding"
        )
      );
    }

    if ("" !== props.review_content_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_content_margin",
          "%%order_class%% .dnxte-review-details",
          "margin"
        )
      );
    }

    if ("" !== props.review_content_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          "review_content_padding",
          "%%order_class%% .dnxte-review-details",
          "padding"
        )
      );
    }

    css.push([
      {
        selector:
          "%%order_class%% .dnxte-review-numb-des i,%%order_class%% .dnext-star-rating i.divinext-star-full::before, %%order_class%% .dnext-star-rating i.divinext-star-1:before, %%order_class%% .dnext-star-rating i.divinext-star-2:before, %%order_class%% .dnext-star-rating i.divinext-star-3:before, %%order_class%% .dnext-star-rating i.divinext-star-4:before, %%order_class%% .dnext-star-rating i.divinext-star-5:before, %%order_class%% .dnext-star-rating i.divinext-star-6:before, %%order_class%% .dnext-star-rating i.divinext-star-7:before, %%order_class%% .dnext-star-rating i.divinext-star-8:before, %%order_class%% .dnext-star-rating i.divinext-star-9:before, %%order_class%% .dnext-star-rating i.divinext-star-10:before",
        declaration: `color: ${props.rating_color};`,
      },
    ]);

    css.push([
      {
        selector: "%%order_class%% .dnxte-review-numb-des",
        declaration: `color: ${props.rating_text_color};`,
      },
    ]);

    css.push([
      {
        selector: "%%order_class%% .dnxte-review-numb-des",
        declaration: `background-color: ${props.rating_bg_color};`,
      },
    ]);

    css.push([
      {
        selector: "%%order_class%% .dnxte-review-social",
        declaration: `background-color: ${props.rating_bg_color};`,
      },
    ]);

    if ("" !== props.star_size) {
      css.push([
        {
          selector:
            "%%order_class%% .dnxte-review-numb-des .et-pb-icon, %%order_class%% .dnxte-review-numb-des .review-num, %%order_class%% .dnext-star-rating .et-pb-icon",
          declaration: `font-size: ${props.star_size} !important;`,
        },
      ]);
    }
    if ("on|tablet" === props.star_size_last_edited) {
      css.push([
        {
          selector:
            "%%order_class%% .dnxte-review-numb-des .et-pb-icon, %%order_class%% .dnxte-review-numb-des .review-num, %%order_class%% .dnext-star-rating .et-pb-icon",
          declaration: `font-size: ${props.star_size_tablet} !important;`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.star_size_last_edited) {
      css.push([
        {
          selector:
            "%%order_class%% .dnxte-review-numb-des .et-pb-icon, %%order_class%% .dnxte-review-numb-des .review-num, %%order_class%% .dnext-star-rating .et-pb-icon",
          declaration: `font-size: ${props.star_size_phone} !important;`,
          device: "phone",
        },
      ]);
    }

    if ("" !== props.rating_bg_color_width) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-social",
          declaration: `max-width: ${props.rating_bg_color_width}!important;`,
        },
      ]);
    }
    if ("on|tablet" === props.rating_bg_color_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-social",
          declaration: `max-width: ${props.rating_bg_color_width_tablet}!important;`,
          device: "tablet",
        },
      ]);
    }
    if ("on|phone" === props.rating_bg_color_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-social",
          declaration: `max-width: ${props.rating_bg_color_width_phone}!important;`,
          device: "phone",
        },
      ]);
    }

    // Image Width
    if ("on|tablet" === props.reviewer_img_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-img img",
          declaration: `max-width: ${props.reviewer_img_width_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.reviewer_img_width_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-img img",
          declaration: `max-width: ${props.reviewer_img_width_phone};`,
          device: "phone",
        },
      ]);
    } else if ("on|hover" === props.reviewer_img_width__hover_enabled) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-img img",
          declaration: `max-width: ${props.reviewer_img_width__hover}`,
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-review-img img",
          declaration: `max-width: ${props.reviewer_img_width};`,
        },
      ]);
    }

    return css;
  }

  render() {
    const { props } = this;
    const review_rating_alignment_classes = getAlignment(
      "review_rating_alignment",
      props,
      "dnext"
    );
    
    let reviewTop = "",
      reviewLeft = "",
      reviewRight = '';
    if ("review-left" === props.reviewer_image_position) {
      reviewLeft = props.review_left;
    } else if ("review-right" === props.reviewer_image_position) {
      reviewRight = props.review_right;
    }else {
      reviewTop = props.review_top;
    }


    // Description Dynamic Content
    const reviewerDescription = props.dynamic.reviewer_description;
    let reviewerDescriptionComponent = reviewerDescription.render();

    return (
      <div className={`dnxte-review-wrap dnxte-review-${reviewLeft} dnxte-review-${reviewRight}`}>
        <div className={`dnxte-review-img dnxte-review-${reviewTop}`}>
          <Image
            dynamicImg={props.dynamic.reviewer_image}
            lastEdited={props.reviewer_image_last_edited}
            hoverEnabled={props.reviewer_image__hover_enabled}
            imageTablet={props.dynamic.reviewer_image_tablet}
            imagePhone={props.dynamic.reviewer_image_phone}
            imageHover={props.dynamic.reviewer_image__hover}
            imgAlt={props.dynamic.reviewer_name}
          />
        </div>
        <div className="dnxte-review-des">
          <div className="dnxte-review-wrapper">
            <Title
              title={props.reviewer_name}
              dynamicTitle={props.dynamic.reviewer_name}
              tag={props.header_level || "h4"}
              classes="dnxte-review-header"
            />
            <Title
              title={props.reviewer_position}
              dynamicTitle={props.dynamic.reviewer_position}
              tag="p"
              classes="dnxte-review-pos"
            />
          </div>
          <div
            className={`dnxte-review-star ${review_rating_alignment_classes}`}
          >
            {"num" === props.review_style ? (
              <div className="dnxte-review-numb-des">
                <span className="review-num">{props.star_rating} </span>
                <i className="divinext-star-full et-pb-icon"></i>
              </div>
            ) : (
              <div
                className="dnxte-review-social dnext-star-rating"
                dangerouslySetInnerHTML={renderStars(
                  props.star_rating,
                  props.star_scale || 5
                )}
              />
            )}
          </div>
          <div className="dnxte-review-content">
            <div className="dnxte-review-pra">
              {reviewerDescriptionComponent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NextReview;
