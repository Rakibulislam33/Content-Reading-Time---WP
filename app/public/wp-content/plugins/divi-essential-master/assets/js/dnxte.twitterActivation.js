jQuery(document).ready(function($) {
  $(".dnxte-twitter-tweet").length &&
    $(".dnxte-twitter-tweet").each(function(e) {
      const tweetData = $(this).data();

      window.twttr &&
        window.twttr.widgets.createTweet(tweetData.id, this, {
          theme: tweetData.themeName,
          cards: tweetData.showCards === "on" ? "" : "hidden",
          conversation: tweetData.showConversation === "on" ? "" : "none",
          width: tweetData.width || 325,
          align: tweetData.align || "center",
          lang: tweetData.lang || "en",
        });
    });

  $(".dnxte-twitter-follow").length &&
    $(".dnxte-twitter-follow").each(function(e) {
      const followData = $(this).data();

      if (window.twttr && followData.username !== "") {
        window.twttr.widgets.createFollowButton(followData.username, this, {
          showScreenName: "on" === followData.showScreenName,
          showCount: "on" === followData.showCount,
          size: followData.size || "large",
          lang: followData.lang || "en",
        });
      }
    });
});
