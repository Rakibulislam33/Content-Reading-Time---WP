import React, { Component } from "react";
import { findDOMNode } from "react-dom";
class NextTwitterShare extends Component {
  static slug = "dnxte_twitter_share"; // twitter tweet button

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

    if (window.twttr && this.props.twitter_tweet_text !== "") {
      window.twttr.widgets.createShareButton(
        this.props.twitter_tweet_url,
        this.refs.twitterShare,
        {
          size: this.props.twitter_button_size || "large",
          text: this.props.twitter_tweet_text || "",
          hashtags: this.props.twitter_tweet_hashtags || "",
          via: this.props.twitter_tweet_via || "",
          related: this.props.twitter_tweet_related || "",
          lang: this.props.twitter_button_lang || "en",
        }
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.twitter_tweet_text !== prevProps.twitter_tweet_text ||
      this.props.twitter_tweet_url !== prevProps.twitter_tweet_url ||
      this.props.twitter_tweet_hashtags !== prevProps.twitter_tweet_hashtags ||
      this.props.twitter_tweet_via !== prevProps.twitter_tweet_via ||
      this.props.twitter_tweet_related !== prevProps.twitter_tweet_related ||
      this.props.twitter_button_size !== prevProps.twitter_button_size ||
      this.props.twitter_button_lang !== prevProps.twitter_button_lang
    ) {
      const twitterShare = findDOMNode(this.refs.twitterShare);
      if (twitterShare.children[0]) {
        this.refs.twitterShare.removeChild(twitterShare.children[0]);
      }

      if (window.twttr && this.props.twitter_tweet_text !== "") {
        window.twttr.widgets.createShareButton(
          this.props.twitter_tweet_url,
          this.refs.twitterShare,
          {
            size: this.props.twitter_button_size || "large",
            text: this.props.twitter_tweet_text || "",
            hashtags: this.props.twitter_tweet_hashtags || "",
            via: this.props.twitter_tweet_via || "",
            related: this.props.twitter_tweet_related || "",
            lang: this.props.twitter_button_lang || "en",
          }
        );
      }
    }
  }

  render() {
    return <div ref="twitterShare" className="dnxte-twitter-tweet-share" />;
  }
}

export default NextTwitterShare;
