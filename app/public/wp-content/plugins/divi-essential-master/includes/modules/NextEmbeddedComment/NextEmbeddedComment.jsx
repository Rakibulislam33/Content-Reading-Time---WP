import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";

class NextEmbeddedComment extends Component {
  static slug = "dnxte_embedded_comment";

  static css(props) {
    const css = [];

    if (!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-comment-embed`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dnxte_embed_comment_url !==
        prevProps.dnxte_embed_comment_url ||
      this.props.dnxte_embed_comment_parent !==
        prevProps.dnxte_embed_comment_parent ||
      this.props.dnxte_embed_comment_lazy !==
        prevProps.dnxte_embed_comment_lazy ||
      this.props.dnxte_embed_comment_width !==
        prevProps.dnxte_embed_comment_width
    ) {
      parseSdk();
    }
  }

  render() {
    return (
      <FacebookProvider>
        <div
          className="fb-comment-embed"
          data-href={this.props.dnxte_embed_comment_url || ""}
          data-lazy={
            this.props.dnxte_embed_comment_lazy ||
            this.props.dnxte_embed_comment_lazy === "on"
          }
          data-include-parent={
            this.props.dnxte_embed_comment_parent ||
            this.props.dnxte_embed_comment_parent === "on"
          }
          data-width={this.props.dnxte_embed_comment_width || "550"}
        />
      </FacebookProvider>
    );
  }
}

export default NextEmbeddedComment;
