// External Dependencies
import React, { Component } from "react";
import "../base/get_responsive_css";
import { VanillaTilt } from "./scripts/vanillaTilt";
// Internal Dependencies
import "./style.css";

function tilt_animation(params, values, element) {
  switch (params) {
    case "init":
      VanillaTilt.init(element, { ...values });
      break;
    case "destroy":
      if (element) {
        try {
          if (element.vanillaTilt) {
            element.vanillaTilt.destroy();
          }
        } catch (err) {
          console.log("err", err);
        }
      }
      break;
    default:
      break;
  }
}

class NextTextTilt extends Component {
  static slug = "dnxte_text_tilt";

  constructor(props) {
    super(props);
    this.tilt = React.createRef();
    this.tiltUpdate = null;
  }

  static css(props) {
    const additionalCss = [];
    if ("off" !== props.dnxt_tilt_text_3d) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-txt-parallax-effect-3d",
          declaration: `transform: translateZ(${props.dnxt_tilt_text_3d_transform})`,
        },
      ]);
    }

    // Tilt Content Background
    let tilt_content_bg = "";
    let tilt_content_gradient_apply = "";
    let tilt_content_gradient_color_one = "";
    let tilt_content_gradient_color_two = "";
    let tilt_content_gradient_type = "";
    let tilt_content_gl = "";
    let tilt_content_gr = "";
    let tilt_content_gradient_start_position = "";
    let tilt_content_gradient_end_position = "";

    // Content BG color
    if ("" !== props.tilt_content_bg) {
      tilt_content_bg = props.tilt_content_bg;
    }

    // checking gradient type
    if ("" !== props.tilt_content_gradient_type) {
      tilt_content_gradient_type = props.tilt_content_gradient_type;
    }

    // Content Linear Gradient Direction
    if ("" !== props.tilt_content_gradient_type_linear_direction) {
      tilt_content_gl = props.tilt_content_gradient_type_linear_direction;
    }

    // Content Radial Gradient Direction
    if ("" !== props.tilt_content_gradient_type_radial_direction) {
      tilt_content_gr = props.tilt_content_gradient_type_radial_direction;
    }

    // Apply gradient direcion
    if ("radial-gradient" === props.tilt_content_gradient_type) {
      tilt_content_gradient_apply = `${tilt_content_gr}`;
    } else if ("linear-gradient" === props.tilt_content_gradient_type) {
      tilt_content_gradient_apply = `${tilt_content_gl}`;
    }

    // Gradient color one for content
    if ("" !== props.tilt_content_gradient_color_one) {
      tilt_content_gradient_color_one = props.tilt_content_gradient_color_one;
    }

    // Gradient color two for content
    if ("" !== props.tilt_content_gradient_color_two) {
      tilt_content_gradient_color_two = props.tilt_content_gradient_color_two;
    }

    // Content Gradient color start position
    if ("" !== props.tilt_content_gradient_start_position) {
      tilt_content_gradient_start_position =
        props.tilt_content_gradient_start_position;
    }

    // Content Gradient color end position
    if ("" !== props.tilt_content_gradient_end_position) {
      tilt_content_gradient_end_position =
        props.tilt_content_gradient_end_position;
    }

    if ("on" === props.tilt_content_bg_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-txt-parallax-effect-3d",
          declaration: `background: ${tilt_content_bg}`,
        },
      ]);
    }
    if ("on" === props.tilt_content_gradient_show_hide) {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnxt-txt-parallax-effect-3d",
          declaration: `background: ${tilt_content_gradient_type}(${tilt_content_gradient_apply},${tilt_content_gradient_color_one} ${tilt_content_gradient_start_position}, ${tilt_content_gradient_color_two} ${tilt_content_gradient_end_position});`,
        },
      ]);
    }

    /**
     * Custom Padding Margin Output
     *
     */
    if ("" !== props.tilt_text) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tilt_content_margin",
          "%%order_class%% .dnxt-txt-parallax-effect-3d",
          "margin"
        )
      );
    }

    if ("" !== props.tilt_text) {
      additionalCss.push(
        window.DndhCommon.get_responsive_css(
          props,
          "tilt_content_padding",
          "%%order_class%% .dnxt-txt-parallax-effect-3d",
          "padding"
        )
      );
    }
    return additionalCss;
  }

  componentDidMount() {
    const props = this.props;
    const tilt = this.tilt.current;
    tilt_animation(
      "init",
      {
        reverse: "on" === props.dnxt_tilt_text_reverse,
        max: props.dnxt_tilt_text_max ? parseInt(props.dnxt_tilt_text_max) : 0,
        speed: props.dnxt_tilt_text_speed
          ? parseInt(props.dnxt_tilt_text_speed)
          : 0,
        startX: props.dnxt_tilt_text_startx
          ? parseInt(props.dnxt_tilt_text_startx)
          : 0,
        startY: props.dnxt_tilt_text_starty
          ? parseInt(props.dnxt_tilt_text_starty)
          : 0,
        scale: props.dnxt_tilt_text_scale
          ? parseInt(props.dnxt_tilt_text_scale)
          : 1,
        glare: false,
        perspective: parseInt(props.dnxt_tilt_text_perspective),
        gyroscope: false,
      },
      tilt
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;
    //Tilt Effect
    const tilt = this.tilt.current;
    tilt_animation(
      "init",
      {
        reverse: false,
        max: props.dnxt_tilt_text_max ? parseInt(props.dnxt_tilt_text_max) : 0,
        speed: props.dnxt_tilt_text_speed
          ? parseInt(props.dnxt_tilt_text_speed)
          : 0,
        startX: props.dnxt_tilt_text_startx
          ? parseInt(props.dnxt_tilt_text_startx)
          : 0,
        startY: props.dnxt_tilt_text_starty
          ? parseInt(props.dnxt_tilt_text_starty)
          : 0,
        scale: props.dnxt_tilt_text_scale
          ? parseInt(props.dnxt_tilt_text_scale)
          : 1,
        glare: false,
        perspective: parseInt(props.dnxt_tilt_text_perspective),
        gyroscope: false,
      },
      tilt
    );
    if ("off" !== props.dnxt_tilt_text_glare) {
      this.tiltUpdate = tilt;
      tilt_animation("destroy", {}, tilt);
      tilt_animation(
        "init",
        {
          reverse: false,
          max: props.dnxt_tilt_text_max
            ? parseInt(props.dnxt_tilt_text_max)
            : 0,
          speed: props.dnxt_tilt_text_speed
            ? parseInt(props.dnxt_tilt_text_speed)
            : 0,
          startX: props.dnxt_tilt_text_startx
            ? parseInt(props.dnxt_tilt_text_startx)
            : 0,
          startY: props.dnxt_tilt_text_starty
            ? parseInt(props.dnxt_tilt_text_starty)
            : 0,
          scale: props.dnxt_tilt_text_scale
            ? parseInt(props.dnxt_tilt_text_scale)
            : 1,
          perspective: parseInt(props.dnxt_tilt_text_perspective),
          glare: true,
          "max-glare": parseInt(props.dnxt_tilt_text_max_glare),
          gyroscope: false,
        },
        tilt
      );
    }

    if ("off" === props.dnxt_tilt_text_glare) {
      tilt_animation("destroy", {}, tilt);
      tilt_animation(
        "init",
        {
          reverse: false,
          max: props.dnxt_tilt_text_max
            ? parseInt(props.dnxt_tilt_text_max)
            : 0,
          speed: props.dnxt_tilt_text_speed
            ? parseInt(props.dnxt_tilt_text_speed)
            : 0,
          startX: props.dnxt_tilt_text_startx
            ? parseInt(props.dnxt_tilt_text_startx)
            : 0,
          startY: props.dnxt_tilt_text_starty
            ? parseInt(props.dnxt_tilt_text_starty)
            : 0,
          scale: props.dnxt_tilt_text_scale
            ? parseInt(props.dnxt_tilt_text_scale)
            : 1,
          perspective: parseInt(props.dnxt_tilt_text_perspective),
          glare: false,
          gyroscope: false,
        },
        tilt
      );
    }
    if ("off" !== props.dnxt_tilt_text_reverse) {
      tilt_animation("destroy", {}, tilt);
      tilt_animation(
        "init",
        {
          reverse: true,
          max: props.dnxt_tilt_text_max
            ? parseInt(props.dnxt_tilt_text_max)
            : 0,
          speed: props.dnxt_tilt_text_speed
            ? parseInt(props.dnxt_tilt_text_speed)
            : 0,
          startX: props.dnxt_tilt_text_startx
            ? parseInt(props.dnxt_tilt_text_startx)
            : 0,
          startY: props.dnxt_tilt_text_starty
            ? parseInt(props.dnxt_tilt_text_starty)
            : 0,
          scale: props.dnxt_tilt_text_scale
            ? parseInt(props.dnxt_tilt_text_scale)
            : 1,
          perspective: parseInt(props.dnxt_tilt_text_perspective),
          glare: props.dnxt_tilt_text_glare === "on" ? true : false,
          "max-glare": parseInt(props.dnxt_tilt_text_max_glare),
          gyroscope: false,
        },
        tilt
      );
    }
    if ("off" === props.dnxt_tilt_text_reverse) {
      tilt_animation("destroy", {}, tilt);
      tilt_animation(
        "init",
        {
          reverse: false,
          max: props.dnxt_tilt_text_max
            ? parseInt(props.dnxt_tilt_text_max)
            : 0,
          speed: props.dnxt_tilt_text_speed
            ? parseInt(props.dnxt_tilt_text_speed)
            : 0,
          startX: props.dnxt_tilt_text_startx
            ? parseInt(props.dnxt_tilt_text_startx)
            : 0,
          startY: props.dnxt_tilt_text_starty
            ? parseInt(props.dnxt_tilt_text_starty)
            : 0,
          scale: props.dnxt_tilt_text_scale
            ? parseInt(props.dnxt_tilt_text_scale)
            : 1,
          perspective: parseInt(props.dnxt_tilt_text_perspective),
          glare: props.dnxt_tilt_text_glare === "on" ? true : false,
          "max-glare": parseInt(props.dnxt_tilt_text_max_glare),
          gyroscope: false,
        },
        tilt
      );
    }
  }

  render() {
    const props = this.props;

    // Tilt Text Dynamic Content
    let headingTag = props.heading_tag;
    const tilt_text = {
      headingTag,
      printTiltText() {
        let tiltText = props.dynamic.tilt_text;
        let tiltTextComponent = tiltText.render();
        if (tiltText.loading) {
          // Let Divi render the loading placeholder.
          return tiltTextComponent;
        }
        return (
          <this.headingTag className="dnxt-txt-parallax-mini-heading">
            {tiltTextComponent}
          </this.headingTag>
        );
      },
    };

    // Description Dynamic Content
    const tiltDescription = props.dynamic.tilt_body;
    let tiltDescriptionComponent = tiltDescription.render();
    if (tiltDescription.loading) {
      // Let Divi render the loading placeholder.
      return tiltDescriptionComponent;
    }

    return (
      <div ref={this.tilt} className="dnxt-txt-parallax-effect" data-tilt>
        <div className="dnxt-text-parallax-effect-image">
          <div className="dnxt-txt-parallax-effect-3d">
            {tilt_text.printTiltText()}
            {"off" !== props.body_switch ? tiltDescriptionComponent : null}
          </div>
        </div>
      </div>
    );
  }
}

export default NextTextTilt;
