import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";

class NextFBShareButton extends Component {
  static slug = "dnxte_fb_share_button";

  static css(props) {
    const css = [];

    if (!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-share-button`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (
      props.dnxte_fb_share_url !== prevProps.dnxte_fb_share_url ||
      props.dnxte_fb_share_layout !== prevProps.dnxte_fb_share_layout ||
      props.dnxte_fb_share_size !== prevProps.dnxte_fb_share_size
    ) {
      parseSdk();
    }
  }

  render() {
    const { props } = this;
    return (
      <FacebookProvider>
        <div
          className="fb-share-button"
          data-href={props.dnxte_fb_share_url || ""}
          data-layout={props.dnxte_fb_share_layout || "button_count"}
          data-size={props.dnxte_fb_share_size || "small"}
        />
      </FacebookProvider>
    );
  }
}

export default NextFBShareButton;
