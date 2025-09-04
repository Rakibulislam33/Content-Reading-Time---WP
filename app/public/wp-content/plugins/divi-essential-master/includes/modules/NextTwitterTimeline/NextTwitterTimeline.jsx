import React, { Component } from "react";
import { findDOMNode } from "react-dom";

class NextTwitterTimeline extends Component {
  static slug = "dnxte_twitter_timeline";

  componentDidMount() {
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

    if (window.twttr && this.props.dnxte_twitter_screenname !== "") {
      window.twttr.widgets.createTimeline(
        {
          sourceType: "profile",
          screenName: this.props.twitter_timeline_screenname || "divi_next",
        },
        this.refs.twitterTimeline,
        {
          theme: this.props.twitter_timeline_theme || "light",
          showReplies:
            this.props.twitter_timeline_show_replies ||
            "on" === this.props.twitter_timeline_show_replies,
          tweetLimit:
            "off" !== this.props.twitter_timeline_limit &&
            this.props.twitter_timeline_tweet_number,
          height: this.props.twitter_timeline_height || 600,
          chrome: `${this.props.twitter_timeline_use_header !== "on" &&
            "noheader"} ${this.props.twitter_timeline_use_footer !== "on" &&
            "nofooter"} ${this.props.twitter_timeline_use_borders !== "on" &&
            "noborders"} ${this.props.twitter_timeline_transparent !== "off" &&
            "transparent"} ${this.props.twitter_timeline_show_scrollbar !==
            "on" && "noscrollbar"}`,
          borderColor: this.props.twitter_timeline_border_color || "#a80000",
        }
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.twitter_timeline_screenname !==
        prevProps.twitter_timeline_screenname ||
      this.props.twitter_timeline_show_replies !==
        prevProps.twitter_timeline_show_replies ||
      this.props.twitter_timeline_limit !== prevProps.twitter_timeline_limit ||
      this.props.twitter_timeline_tweet_number !==
        prevProps.twitter_timeline_tweet_number ||
      this.props.twitter_timeline_height !==
        prevProps.twitter_timeline_height ||
      this.props.twitter_timeline_use_header !==
        prevProps.twitter_timeline_use_header ||
      this.props.twitter_timeline_use_footer !==
        prevProps.twitter_timeline_use_footer ||
      this.props.twitter_timeline_use_borders !==
        prevProps.twitter_timeline_use_borders ||
      this.props.twitter_timeline_transparent !==
        prevProps.twitter_timeline_transparent ||
      this.props.twitter_timeline_show_scrollbar !==
        prevProps.twitter_timeline_show_scrollbar ||
      this.props.twitter_timeline_border_color !==
        prevProps.twitter_timeline_border_color ||
      this.props.twitter_timeline_theme !== prevProps.twitter_timeline_theme
    ) {
      const tweetTimeline = findDOMNode(this.refs.twitterTimeline);
      if (tweetTimeline.children[0]) {
        this.refs.twitterTimeline.removeChild(tweetTimeline.children[0]);
      }

      if (window.twttr && this.props.dnxte_twitter_screenname !== "") {
        window.twttr.widgets.createTimeline(
          {
            sourceType: "profile",
            screenName: this.props.twitter_timeline_screenname || "divi_next",
          },
          this.refs.twitterTimeline,
          {
            theme: this.props.twitter_timeline_theme || "light",
            showReplies:
              this.props.twitter_timeline_show_replies ||
              "on" === this.props.twitter_timeline_show_replies,
            tweetLimit:
              "off" !== this.props.twitter_timeline_limit &&
              this.props.twitter_timeline_tweet_number,
            height: this.props.twitter_timeline_height || 600,
            chrome: `${this.props.twitter_timeline_use_header !== "on" &&
              "noheader"} ${this.props.twitter_timeline_use_footer !== "on" &&
              "nofooter"} ${this.props.twitter_timeline_use_borders !== "on" &&
              "noborders"} ${this.props.twitter_timeline_transparent !==
              "off" && "transparent"} ${this.props
              .twitter_timeline_show_scrollbar !== "on" && "noscrollbar"}`,
            borderColor: this.props.twitter_timeline_border_color || "#a80000",
          }
        );
      }
    }
  }

  render() {
    return <div ref="twitterTimeline" />;
  }
}

export default NextTwitterTimeline;
