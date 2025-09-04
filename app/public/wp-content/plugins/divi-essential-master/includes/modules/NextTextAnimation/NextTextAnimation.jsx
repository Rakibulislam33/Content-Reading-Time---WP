// External Dependencies
import React, { Component } from "react";
import { initializeAnimatinText } from "./scripts/dnxtAnimation";
// Internal Dependencies
import "./style.css";

class NextTextAnimation extends Component {
  static slug = "dnxte_text_animation";

  constructor(props) {
    super(props);
    this.initializeAnimatinText = initializeAnimatinText.bind(this);
  }

  static css(props) {

    const additionalCss = [];
    let dnxte_text_animation_speed = parseInt(props.dnxte_text_animation_speed.replace('ms',''))/1000;
    let dnxte_text_animation_delay = parseInt(props.dnxte_text_animation_delay.replace('ms',''))/1000;

    // Display stacked
    if ("on" === props.display_type_select) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-text-heading",
          declaration: `display: block;`,
        },
      ]);

    }
    // Loading Bar Display stacked
    if (
      "on" === props.display_type_select &&
      "loading-bar" === props.dnxt_text_animation_effect
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-headline.loading-bar span",
          declaration: `display: block;`,
        },
      ]);
    }
    // Loading Bar, Slide & Clip spacing only back-end used
    if (
      ("loading-bar" === props.dnxt_text_animation_effect ||
        "clip" === props.dnxt_text_animation_effect ||
        "slide" === props.dnxt_text_animation_effect) &&
      "off" === props.display_type_select
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-animation-b-text",
          declaration: `margin-right: 8px;`,
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-animation-a-text",
          declaration: `margin-left: 8px;`,
        },
      ]);
    }
    // Clip Bar Display stacked
    if (
      "on" === props.display_type_select &&
      "clip" === props.dnxt_text_animation_effect
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-headline.clip span",
          declaration: `display: block;`,
        },
      ]);
    }
    // Slide Bar Display stacked
    if (
      "on" === props.display_type_select &&
      "slide" === props.dnxt_text_animation_effect
    ) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-headline.slide span",
          declaration: `display: block;`,
        },
      ]);
    }
    // Loading Bar Options
    let loading_bar_color = props.loading_bar_color;
    let loading_bar_height = props.loading_bar_height;

    if ("loading-bar" === props.dnxt_text_animation_effect) {
      // Loading Bar Color
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-headline.loading-bar .dnxt-words-wrapper::after",
          declaration: `background: ${loading_bar_color}`,
        },
      ]);
      // Loading Bar Height
      additionalCss.push([
        {
          selector:
            "%%order_class%% .dnxt-headline.loading-bar .dnxt-words-wrapper::after",
          declaration: `height: ${loading_bar_height};`,
        },
      ]);
      additionalCss.push([
        {
          selector:
              "%%order_class%% .dnxt-headline.loading-bar .dnxt-words-wrapper::after",
          declaration: `transition: width ${dnxte_text_animation_speed}s;`,
        },
      ]);
    }

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.rotate-1 b.is-visible",
        declaration: `animation: dnxt-rotate-1-in ${dnxte_text_animation_speed}s;`,
      },
    ]);

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.rotate-1 b.is-hidden",
        declaration: `animation: dnxt-rotate-1-out ${dnxte_text_animation_delay}s;`,
      },
    ]);

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.rotate-2 i.in",
        declaration: `animation: dnxt-rotate-2-in ${dnxte_text_animation_speed}s forwards;`,
      },
    ]);

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.rotate-2 i.out",
        declaration: `animation: dnxt-rotate-2-out ${dnxte_text_animation_speed}s forwards;`,
      },
    ]);

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.loading-bar b",
        declaration: `transition: opacity ${dnxte_text_animation_speed}s forwards;`,
      },
    ]);
    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.slide b.is-hidden",
        declaration: `animation: slide-out ${dnxte_text_animation_speed}s;`,
      },
    ]); 

    additionalCss.push([
      {
        selector: "%%order_class%% .dnxt-headline.slide b.is-visible",
        declaration: `animation: slide-in ${dnxte_text_animation_delay}s;`,
      },
    ]);


    return additionalCss;
  }

  componentDidMount() {
    this.initializeAnimatinText();
  }

  componentDidUpdate() {
    this.initializeAnimatinText();
  }

  render() {
    const textAnimationJsonString = this.props.text_animation || "[]";
    const textAnimationJsonParse = JSON.parse(textAnimationJsonString);

    const HeadingTag = this.props.heading_tag;

    // Before Dynamic Content
    const beforeText = this.props.dynamic.before_text;
    let beforeTextComponent = beforeText.render();
    if (beforeText.loading) {
      // Let Divi render the loading placeholder.
      return beforeTextComponent;
    }
    // After Dynamic Content
    const afterText = this.props.dynamic.after_text;
    let afterTextComponent = afterText.render();
    if (afterText.loading) {
      // Let Divi render the loading placeholder.
      return afterTextComponent;
    }

    const AnimtaionApp = ({ tAnimations }) => (
      <HeadingTag
        className={`dnxt-headline ${this.props.dnxt_text_animation_effect}`}
      >
        <span className="dnxt-animation-b-text dnxt-text-heading">
          {beforeTextComponent}
        </span>{" "}
        <span className="dnxt-words-wrapper">
          {tAnimations.map((animation, i) => (
            <b
              className={
                i === 0
                  ? "dnxt-text-animation is-visible"
                  : "dnxt-text-animation "
              }
              key={i}
            >
              {animation.value}
            </b>
          ))}
        </span>
        <span className="dnxt-animation-a-text dnxt-text-heading">
          {afterTextComponent}
        </span>
      </HeadingTag>
    );
    
    return (
      <div className="dnxt-animation-intro">
        <AnimtaionApp tAnimations={textAnimationJsonParse} />
      </div>
    );
  }
}

export default NextTextAnimation;
