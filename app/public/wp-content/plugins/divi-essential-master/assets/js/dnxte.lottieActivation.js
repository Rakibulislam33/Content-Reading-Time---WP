jQuery(document).ready(function($) {
  $(".dnxte-lottie").length &&
    $(".dnxte-lottie").each(function() {
      const lottieData = $(this).data();

      const lottie = bodymovin.loadAnimation({
        wrapper: this,
        animType: "svg",
        loop: lottieData.loop === "on",
        path: lottieData.path,
        autoplay: lottieData.autoplay === "on",
      });

      lottie.setSpeed(parseFloat(lottieData.speed));
      lottie.setDirection(parseInt(lottieData.direction));

      if (lottieData.autoplay === "off" && lottieData.playHover === "on") {
        lottie.goToAndStop(parseInt(lottieData.startFrame), true);
      }

      $(this).on("mouseenter", function() {
        if (lottieData.autoplay === "off" && lottieData.playHover === "on") {
          lottie.play();
        } else if (
          lottieData.autoplay === "on" &&
          lottieData.stopHover === "on"
        ) {
          lottie.pause();
        }
      });

      $(this).on("mouseleave", function() {
        if (lottieData.autoplay === "off" && lottieData.playHover === "on") {
          lottie.pause();
        } else if (
          lottieData.autoplay === "on" &&
          lottieData.stopHover === "on"
        ) {
          lottie.play();
        }
      });
    });
});
