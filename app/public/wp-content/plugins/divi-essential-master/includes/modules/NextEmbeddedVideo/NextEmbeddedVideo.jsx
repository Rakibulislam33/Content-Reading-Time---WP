import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";
import "./style.css";

class NextEmbeddedVideo extends Component {
  static slug = "dnxte_embedded_video";

  static css(props) {
    const css = [];

    if (!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-video iframe`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dnxte_embed_video_url !== prevProps.dnxte_embed_video_url ||
      this.props.dnxte_embed_video_include_text !==
        prevProps.dnxte_embed_video_include_text ||
      this.props.dnxte_embed_video_width !==
        prevProps.dnxte_embed_video_width ||
      this.props.dnxte_embed_video_fullscreen !==
        prevProps.dnxte_embed_video_fullscreen ||
      this.props.dnxte_embed_video_autoplay !==
        prevProps.dnxte_embed_video_autoplay ||
      this.props.dnxte_embed_video_show_captions !==
        prevProps.dnxte_embed_video_show_captions
    ) {
      parseSdk();
    }
  }

  render() {
    return (
      <FacebookProvider>
        <div
          className="fb-video"
          data-href={this.props.dnxte_embed_video_url || ""}
          data-show-text={
            this.props.dnxte_embed_video_include_text ||
            this.props.dnxte_embed_video_include_text === "on"
          }
          data-width={this.props.dnxte_embed_video_width || "auto"}
          data-allowfullscreen={
            this.props.dnxte_embed_video_fullscreen ||
            this.props.dnxte_embed_video_fullscreen === "on"
          }
          data-autoplay={
            this.props.dnxte_embed_video_autoplay ||
            this.props.dnxte_embed_video_autoplay === "on"
          }
          data-show-captions={
            this.props.dnxte_embed_video_show_captions ||
            this.props.dnxte_embed_video_show_captions === "on"
          }
        >
          <blockquote
            cite={this.props.dnxte_embed_video_url || ""}
            className="fb-xfbml-parse-ignore"
          />
        </div>
      </FacebookProvider>
    );
  }
}

export default NextEmbeddedVideo;
