import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";
import "./style.css";

class NextComment extends Component {
  static slug = "dnxte_comment";

  static css(props) {
    const css = [];

    if (!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-comments`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dnxte_comment_url !== prevProps.dnxte_comment_url ||
      this.props.dnxte_comment_number_post !==
        prevProps.dnxte_comment_number_post ||
      this.props.dnxte_comment_orderby !== prevProps.dnxte_comment_orderby ||
      this.props.dnxte_comment_width !== prevProps.dnxte_comment_width
    ) {
      parseSdk();
    }
  }

  render() {
    return (
      <FacebookProvider>
        <div
          className="fb-comments"
          data-href={this.props.dnxte_comment_url || ""}
          data-numposts={+this.props.dnxte_comment_number_post || 5}
          data-order-by={this.props.dnxte_comment_orderby || "social"}
          data-width={this.props.dnxte_comment_width || 550}
        />
      </FacebookProvider>
    );
  }
}

export default NextComment;
