import React, { Component } from "react";
import { findDOMNode } from "react-dom";

class NextTwitterFollow extends Component {
  static slug = "dnxte_twitter_follow";

  componentDidMount() {
    const { props } = this;
    (function(d, s, id) {
      var t,
        js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      return (
        window.twttr ||
        (t = {
          _e: [],
          ready: function(f) {
            t._e.push(f);
          },
        })
      );
    })(document, "script", "twitter-wjs");

    if (window.twttr && props.twitter_follow_username !== "") {
      window.twttr.widgets.createFollowButton(
        props.twitter_follow_username,
        this.refs.twitterFollow,
        {
          showScreenName: "on" === props.twitter_follow_show_screen_name,
          showCount: "on" === props.twitter_follow_show_count,
          size: props.twitter_button_size || "large",
          lang: props.twitter_button_lang || "en",
        }
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (
      props.twitter_follow_username !== prevProps.twitter_follow_username ||
      props.twitter_follow_show_screen_name !==
        prevProps.twitter_follow_show_screen_name ||
      props.twitter_follow_show_count !== prevProps.twitter_follow_show_count ||
      props.twitter_button_size !== prevProps.twitter_button_size ||
      props.twitter_button_lang !== prevProps.twitter_button_lang
    ) {
      const twitterFollow = findDOMNode(this.refs.twitterFollow);
      if (twitterFollow.children[0]) {
        this.refs.twitterFollow.removeChild(twitterFollow.children[0]);
      }

      if (window.twttr && props.twitter_follow_username !== "") {
        window.twttr.widgets.createFollowButton(
          props.twitter_follow_username,
          this.refs.twitterFollow,
          {
            showScreenName: "on" === props.twitter_follow_show_screen_name,
            showCount: "on" === props.twitter_follow_show_count,
            size: props.twitter_button_size || "large",
            lang: props.twitter_button_lang || "en",
          }
        );
      }
    }
  }

  render() {
    return <div ref="twitterFollow" />;
  }
}

export default NextTwitterFollow;
