import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./style.css";

class NextTwitterTweet extends Component {
  static slug = "dnxte_twitter_tweet";

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

    if (window.twttr && this.props.dnxte_twitter_id !== "") {
      window.twttr.widgets.createTweet(
        this.props.dnxte_twitter_id,
        this.refs.twitterTweet,
        {
          theme: this.props.dnxte_twitter_theme,
          cards: this.props.dnxte_twitter_show_cards === "on" ? "" : "hidden",
          conversation:
            this.props.dnxte_twitter_show_conversation === "on" ? "" : "none",
          width: this.props.dnxte_twitter_width || 325,
          align: this.props.dnxte_twitter_align || "center",
          lang: this.props.dnxte_twitter_lang || "en",
        }
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dnxte_twitter_id !== prevProps.dnxte_twitter_id ||
      this.props.dnxte_twitter_theme !== prevProps.dnxte_twitter_theme ||
      this.props.dnxte_twitter_show_cards !==
        prevProps.dnxte_twitter_show_cards ||
      this.props.dnxte_twitter_show_conversation !==
        prevProps.dnxte_twitter_show_conversation ||
      this.props.dnxte_twitter_width !== prevProps.dnxte_twitter_width ||
      this.props.dnxte_twitter_align !== prevProps.dnxte_twitter_align ||
      this.props.dnxte_twitter_lang !== prevProps.dnxte_twitter_lang
    ) {
      const tweet = findDOMNode(this.refs.twitterTweet);
      if (tweet.children[0]) {
        this.refs.twitterTweet.removeChild(tweet.children[0]);
      }
      if (window.twttr && this.props.dnxte_twitter_id !== "") {
        window.twttr.widgets.createTweet(
          this.props.dnxte_twitter_id,
          this.refs.twitterTweet,
          {
            theme: this.props.dnxte_twitter_theme,
            cards: this.props.dnxte_twitter_show_cards === "on" ? "" : "hidden",
            conversation:
              this.props.dnxte_twitter_show_conversation === "on" ? "" : "none",
            width: this.props.dnxte_twitter_width || 325,
            align: this.props.dnxte_twitter_align || "center",
            lang: this.props.dnxte_twitter_lang || "en",
          }
        );
      }
    }
  }

  render() {
    return <div ref="twitterTweet" />;
  }
}

export default NextTwitterTweet;
