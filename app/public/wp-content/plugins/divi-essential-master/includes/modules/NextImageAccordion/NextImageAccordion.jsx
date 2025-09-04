// External Dependencies
import $ from "jquery";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { applyCss } from "../base/common";
// Internal Dependencies
import "./style.css";

class NextImageAccordion extends Component {
  isMounted = false;
  static slug = "dnxte_image_accordion";

  static css(props) {
    const css = [];

    const gutter_space_direction =
      props.dnxte_accordion_direction === "row" ? "right" : "top";

    const moduleCss = [
      // Accordion position
      [
        {
          desktop: `flex-direction: ${props.dnxte_accordion_direction} !important;`,
          tablet: `flex-direction: ${props.dnxte_accordion_direction_tablet} !important;`,
          phone: `flex-direction: ${props.dnxte_accordion_direction_phone ||
            props.dnxte_accordion_direction_tablet} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte_image_accordion_wrapper",
        },
        props.dnxte_accordion_direction_last_edited,
      ],
      // Accordion height
      [
        {
          desktop: `height: ${props.dnxte_accordion_height} !important;`,
          tablet: `height: ${props.dnxte_accordion_height_tablet} !important;`,
          phone: `height: ${props.dnxte_accordion_height_phone ||
            props.dnxte_accordion_height_tablet} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte_image_accordion_wrapper",
        },
        props.dnxte_accordion_height_last_edited,
      ],
      // Active Accordion width
      [
        {
          desktop: `flex: ${props.dnxte_active_image_width} 0 auto !important;`,
          tablet: `flex: ${props.dnxte_active_image_width_tablet} 0 auto !important;`,
          phone: `flex: ${props.dnxte_active_image_width_phone ||
            props.dnxte_active_image_width_tablet} 0 auto !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte_image_accordion_item.dnxte-active",
        },
        props.dnxte_active_image_width_last_edited,
      ],
      // Accordion gutter space
      [
        {
          desktop: `margin-${gutter_space_direction}: ${props.dnxte_gutter_space} !important;`,
          tablet: `margin-${gutter_space_direction}: ${props.dnxte_gutter_space_tablet} !important;`,
          phone: `margin-${gutter_space_direction}: ${props.dnxte_gutter_space_phone ||
            props.dnxte_gutter_space_tablet} !important;`,
        },
        {
          desktop: "%%order_class%% .dnxte_image_accordion_item",
        },
        props.dnxte_gutter_space_last_edited,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2])
    );

    return css;
  }

  componentDidMount() {
    this.accordionInit();
  }

  componentDidUpdate() {
    this.accordionInit();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  accordionInit = () => {
    const { props } = this;
    const loadAccordion = findDOMNode(this.refs.loadAccordion);

    if (loadAccordion) {
      this.isMounted = true;
      const accordionParent = $(".dnxte_image_accordion_wrapper").parents(
        ".dnxte_img_accordion"
      );

      let onloadOpen = accordionParent.find("[data-active-on-load=1]");
      let accordionExpand = accordionParent.find(
        "[data-accordion-expand=dafault]"
      );

      onloadOpen
        .parents(".dnxte_image_accordion_item")
        .addClass("dnxte-active");

      const accordionChild = $(".dnxte_image_accordion_wrapper").find(
        ".dnxte_image_accordion_item"
      );

      if (accordionChild) {
        if ("on_hover" === props.dnxte_accordion_style) {
          accordionChild.mouseenter(function() {
            $(accordionChild).removeClass("dnxte-active");
            $(this).addClass("dnxte-active");
          });

          props.dnxte_expand_last_item &&
            "off" === props.dnxte_expand_last_item &&
            accordionChild.mouseleave(function() {
              $(accordionChild).removeClass("dnxte-active");
              accordionExpand
                .parents(".dnxte_image_accordion_item")
                .addClass("dnxte-active");
            });
        } else if ("on_click" === props.dnxte_accordion_style) {
          accordionChild.click(function() {
            $(accordionChild).removeClass("dnxte-active");
            $(this).addClass("dnxte-active");
          });
        }
      }
    }
  };

  render() {
    const { props } = this;
    const imageAccordionItem = props.content;

    const clickableClass =
      "on_click" === props.dnxte_accordion_style ? "dnxte_clickable" : "";

    return (
      <div className={`dnxte_img_accordion ${clickableClass}`}>
        <div ref="loadAccordion" className="dnxte_image_accordion_wrapper">
          {imageAccordionItem}
        </div>
      </div>
    );
  }
}

export default NextImageAccordion;
