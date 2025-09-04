import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";
import "./style.css";
class NextEmbeddedPost extends Component {
  static slug = "dnxte_embedded_post";

  static css(props) {
    const css = [];

    if(!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-post iframe`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dnxte_embed_post_url !== prevProps.dnxte_embed_post_url ||
      this.props.dnxte_embed_post_include_text !==
        prevProps.dnxte_embed_post_include_text ||
      this.props.dnxte_embed_post_width !== prevProps.dnxte_embed_post_width
    ) {
      parseSdk();
    }
  }

  render() {
    return (
      <FacebookProvider>
        <div
          className="fb-post"
          data-href={this.props.dnxte_embed_post_url || ""}
          data-show-text={
            this.props.dnxte_embed_post_include_text ||
            this.props.dnxte_embed_post_include_text === "on"
          }
          data-width={this.props.dnxte_embed_post_width || "750"}
        >
          <blockquote
            cite={this.props.dnxte_embed_post_url || ""}
            className="fb-xfbml-parse-ignore"
          />
        </div>
      </FacebookProvider>
    );
  }
}

export default NextEmbeddedPost;
