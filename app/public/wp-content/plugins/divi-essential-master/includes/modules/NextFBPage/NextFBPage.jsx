import React, { Component } from "react";
import { FacebookProvider, parseSdk } from "../base/FacebookProvider";

class NextFBPage extends Component {
  static slug = "dnxte_fb_page";

  static css(props) {
    const css = [];

    if (!props.border_style_all) {
      css.push([
        {
          selector: `%%order_class%% .fb-page`,
          declaration: `border-style: solid !important;`,
        },
      ]);
    }

    return css;
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (
      props.dnxte_fb_page_url !== prevProps.dnxte_fb_page_url ||
      props.dnxte_fb_page_tabs !== prevProps.dnxte_fb_page_tabs ||
      props.dnxte_fb_page_width !== prevProps.dnxte_fb_page_width ||
      props.dnxte_fb_page_height !== prevProps.dnxte_fb_page_height ||
      props.dnxte_fb_page_small_header !==
        prevProps.dnxte_fb_page_small_header ||
      props.dnxte_fb_page_container_width !==
        prevProps.dnxte_fb_page_container_width ||
      props.dnxte_fb_page_hide_cover !== prevProps.dnxte_fb_page_hide_cover ||
      props.dnxte_fb_page_facepile !== prevProps.dnxte_fb_page_facepile
    ) {
      parseSdk();
    }
  }

  render() {
    const { props } = this;
    return (
      <FacebookProvider>
        <div
          className="fb-page"
          data-href={props.dnxte_fb_page_url || ""}
          data-tabs={props.dnxte_fb_page_tabs || "timeline"}
          data-width={props.dnxte_fb_page_width || 340}
          data-height={props.dnxte_fb_page_height || 500}
          data-small-header={
            props.dnxte_fb_page_small_header ||
            props.dnxte_fb_page_small_header === "on"
          }
          data-adapt-container-width={
            props.dnxte_fb_page_container_width ||
            props.dnxte_fb_page_container_width === "on"
          }
          data-hide-cover={
            props.dnxte_fb_page_hide_cover ||
            props.dnxte_fb_page_hide_cover === "on"
          }
          data-show-facepile={
            props.dnxte_fb_page_facepile ||
            props.dnxte_fb_page_facepile === "on"
          }
        >
          <blockquote
            cite={props.dnxte_fb_page_url || ""}
            className="fb-xfbml-parse-ignore"
          />
        </div>
      </FacebookProvider>
    );
  }
}

export default NextFBPage;
