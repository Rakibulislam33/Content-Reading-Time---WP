import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";

class NextLikeButton extends Component {
  static slug = "dnxte_like_button";

  static css(props) {
    const css = [];

    if (!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-like`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dnxte_embed_like_url !== prevProps.dnxte_embed_like_url ||
      this.props.dnxte_embed_like_width !== prevProps.dnxte_embed_like_width ||
      this.props.dnxte_embed_like_layout !==
        prevProps.dnxte_embed_like_layout ||
      this.props.dnxte_embed_like_action !==
        prevProps.dnxte_embed_like_action ||
      this.props.dnxte_embed_like_size !== prevProps.dnxte_embed_like_size ||
      this.props.dnxte_embed_like_include_share !==
        prevProps.dnxte_embed_like_include_share
    ) {
      parseSdk();
    }
  }

  render() {
    return (
      <FacebookProvider>
        <div
          className="fb-like"
          data-href={this.props.dnxte_embed_like_url || ""}
          data-width={this.props.dnxte_embed_like_width || 550}
          data-layout={this.props.dnxte_embed_like_layout || "standard"}
          data-action={this.props.dnxte_embed_like_action || "like"}
          data-size={this.props.dnxte_embed_like_size || "small"}
          data-share={
            this.props.dnxte_embed_like_include_share ||
            this.props.dnxte_embed_like_include_share === "on"
          }
        />
      </FacebookProvider>
    );
  }
}

export default NextLikeButton;
