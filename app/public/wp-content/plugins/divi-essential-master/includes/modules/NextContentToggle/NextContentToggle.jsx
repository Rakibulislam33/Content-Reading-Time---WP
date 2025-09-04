import $ from "jquery";
import React, { Component } from "react";
import {
  applyBgCss,
  applyCss,
  applyCustomSpacing,
  getAlignment
} from "../base/common";
// Internal Dependencies
import "./style.css";

class NextContentToggle extends Component {
  isMounted = false;
  static slug = "dnxte_content_toggle";

  static css(props) {
    const css = [];

    const customMarginPadding = [
      [
        "content_margin_left",
        "%%order_class%% .dnxte-content-toggle-front",
        "margin",
      ],
      [
        "content_padding_left",
        "%%order_class%% .dnxte-content-toggle-front",
        "padding",
      ],
      [
        "content_margin_right",
        "%%order_class%% .dnxte-content-toggle-back",
        "margin",
      ],
      [
        "content_padding_right",
        "%%order_class%% .dnxte-content-toggle-back",
        "padding",
      ],
    ];

    customMarginPadding.forEach((element) =>
      applyCustomSpacing(props, css, element[0], element[1], element[2])
    );

    const moduleCss = [
      // Switch Size
      [
        {
          desktop: `font-size: ${props.switcher_size};`,
          tablet: `font-size: ${props.switcher_size_tablet};`,
          phone: `font-size: ${props.switcher_size_phone};`,
          hover: `font-size: ${props.switcher_size__hover};`,
        },
        {
          desktop: "%%order_class%% .dnxte-toggle-btn",
          hover: "%%order_class%% .dnxte-toggle-btn:hover",
        },
        props.switcher_size_last_edited,
        props.switcher_size__hover_enabled,
      ],
    ];

    moduleCss.forEach((element) =>
      applyCss(element[0], css, element[1], element[2], element[3])
    );

    const moduleBgCss = [
      {
        slug: "switch_primary_bg_color",
        use_color_gradient_slug: props.switch_primary_bg_use_color_gradient,
        gradient: {
          type: "switch_primary_bg_color_gradient_type",
          direction: "switch_primary_bg_color_gradient_direction",
          radial: "switch_primary_bg_color_gradient_direction_radial",
          start: "switch_primary_bg_color_gradient_start",
          end: "switch_primary_bg_color_gradient_end",
          start_position: "switch_primary_bg_color_gradient_start_position",
          end_position: "switch_primary_bg_color_gradient_end_position",
          overlays_image: "switch_primary_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop: "%%order_class%% .dnxte-content-toggle .dnxte-switch-inner",
          hover:
            "%%order_class%% .dnxte-content-toggle .dnxte-switch-inner:hover",
        },
      },
      {
        slug: "switch_inner_bg_color",
        use_color_gradient_slug: props.switch_inner_bg_use_color_gradient,
        gradient: {
          type: "switch_inner_bg_color_gradient_type",
          direction: "switch_inner_bg_color_gradient_direction",
          radial: "switch_inner_bg_color_gradient_direction_radial",
          start: "switch_inner_bg_color_gradient_start",
          end: "switch_inner_bg_color_gradient_end",
          start_position: "switch_inner_bg_color_gradient_start_position",
          end_position: "switch_inner_bg_color_gradient_end_position",
          overlays_image: "switch_inner_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte-content-toggle .dnxte-toggle-switch:checked+.dnxte-switch-inner",
          hover:
            "%%order_class%% .dnxte-content-toggle .dnxte-toggle-switch:checked+.dnxte-switch-inner:hover",
        },
      },
      {
        slug: "switch_round_btn_bg_color",
        use_color_gradient_slug: props.switch_round_btn_bg_use_color_gradient,
        gradient: {
          type: "switch_round_btn_bg_color_gradient_type",
          direction: "switch_round_btn_bg_color_gradient_direction",
          radial: "switch_round_btn_bg_color_gradient_direction_radial",
          start: "switch_round_btn_bg_color_gradient_start",
          end: "switch_round_btn_bg_color_gradient_end",
          start_position: "switch_round_btn_bg_color_gradient_start_position",
          end_position: "switch_round_btn_bg_color_gradient_end_position",
          overlays_image: "switch_round_btn_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte-content-toggle .dnxte-switch-inner::before",
          hover:
            "%%order_class%% .dnxte-content-toggle .dnxte-switch-inner:hover::before",
        },
      },
      {
        slug: "content_left_bg_color",
        use_color_gradient_slug: props.content_left_bg_use_color_gradient,
        gradient: {
          type: "content_left_bg_color_gradient_type",
          direction: "content_left_bg_color_gradient_direction",
          radial: "content_left_bg_color_gradient_direction_radial",
          start: "content_left_bg_color_gradient_start",
          end: "content_left_bg_color_gradient_end",
          start_position: "content_left_bg_color_gradient_start_position",
          end_position: "content_left_bg_color_gradient_end_position",
          overlays_image: "content_left_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte-content-toggle-front, %%order_class%% .dnxte-content-toggle-front > div",
          hover:
            "%%order_class%% .dnxte-content-toggle-front:hover, %%order_class%% .dnxte-content-toggle-front:hover > div",
        },
      },
      {
        slug: "content_right_bg_color",
        use_color_gradient_slug: props.content_right_bg_use_color_gradient,
        gradient: {
          type: "content_right_bg_color_gradient_type",
          direction: "content_right_bg_color_gradient_direction",
          radial: "content_right_bg_color_gradient_direction_radial",
          start: "content_right_bg_color_gradient_start",
          end: "content_right_bg_color_gradient_end",
          start_position: "content_right_bg_color_gradient_start_position",
          end_position: "content_right_bg_color_gradient_end_position",
          overlays_image: "content_right_bg_color_gradient_overlays_image",
        },
        css_property: {
          desktop:
            "%%order_class%% .dnxte-content-toggle-back, %%order_class%% .dnxte-content-toggle-back > div",
          hover:
            "%%order_class%% .dnxte-content-toggle-back:hover, %%order_class%% .dnxte-content-toggle-back:hover > div",
        },
      },
    ];
    moduleBgCss.forEach((element) => applyBgCss(css, props, element));

    return css;
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      leftLayout: null,
      rightLayout: null,
      error: null,
      checked: false,
    };
  }

  getDnxteContentlayouts(layoutId, direction) {
    const component = this;
    component.isMounted = true;

    $.ajax({
      url: window.et_fb_options.ajaxurl,
      type: "POST",
      data: {
        action: "dnxte_get_divi_library_options",
        layoutId,
      },
      success: function(res) {
        if (component.isMounted) {
          if (direction === "left") {
            component.setState({
              isLoaded: true,
              leftLayout: res,
            });
          } else if (direction === "right") {
            component.setState({
              isLoaded: true,
              rightLayout: res,
            });
          }
        }
      },
      error: function() {
        component.setState({
          isLoaded: true,
          error: "There is an error",
        });
      },
    });
  }

  componentDidMount() {
    const { props } = this;
    if ("content" !== props.content_type_left)
      this.getDnxteContentlayouts(+this.props.library_id_left, "left");
    if ("content" !== props.content_type_right)
      this.getDnxteContentlayouts(+this.props.library_id_right, "right");
  }

  componentWillReceiveProps(nextProps) {
    const { props } = this;
    if (props.library_id_left !== nextProps.library_id_left) {
      this.getDnxteContentlayouts(+nextProps.library_id_left, "left");
    } else if (props.library_id_right !== nextProps.library_id_right) {
      this.getDnxteContentlayouts(+nextProps.library_id_right, "right");
    }
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  handleCheck = () => {
    this.setState({
      ...this.state,
      checked: !this.state.checked,
    });
  };

  render() {
    const { props } = this;
    const orderClass = props.moduleInfo.orderClassName;
    const { leftLayout, rightLayout } = this.state;
    const switchAlignmentClasses = getAlignment(
      "switch_alignment",
      props,
      "dnxte"
    );

    // Description Dynamic Content
    const contentrightDescription = props.dynamic.custom_content_right;
    let contentrightDescriptionComponent = contentrightDescription.render();

    const contentleftDescription = props.dynamic.custom_content_left;
    let contentleftDescriptionComponent = contentleftDescription.render();

    return (
      <div className="dnxte-content-toggle">
        <div className="dnxte-content-toggle-header">
          <div className={`dnxte-toggle ${switchAlignmentClasses}`}>
            <div className="dnxte-toggle-left">
              <div className="dnxte-toggle-head-one">
                <label htmlFor={`dnxte-input-${orderClass}`}>
                  {props.dnxte_heading_left || ""}
                </label>
              </div>
            </div>
            <div className="dnxte-toggle-btn">
              <label
                className="dnxte-switch-label"
                htmlFor={`dnxte-input-${orderClass}`}
              >
                <input
                  onChange={this.handleCheck}
                  id={`dnxte-input-${orderClass}`}
                  className="dnxte-input dnxte-toggle-switch"
                  type="checkbox"
                  checked={this.state.checked}
                />
                <span className="dnxte-switch-inner"></span>
              </label>
            </div>
            <div className="dnxte-toggle-right">
              <div className="dnxte-toggle-head-two">
                <label htmlFor={`dnxte-input-${orderClass}`}>
                  {props.dnxte_heading_right || ""}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="dnxte-content-toggle-body">
          {"library" === props.content_type_left &&
            leftLayout &&
            !this.state.checked && (
              <div
                className="dnxte-content-toggle-front"
                dangerouslySetInnerHTML={{
                  __html: `${leftLayout.post_content_html}`,
                }}
              ></div>
            )}
          {"content" === props.content_type_left && !this.state.checked && (
            <div className="dnxte-content-toggle-front">
              {contentleftDescriptionComponent}
            </div>
          )}

          {"library" === props.content_type_right &&
            rightLayout &&
            this.state.checked && (
              <div
                className="dnxte-content-toggle-back"
                dangerouslySetInnerHTML={{
                  __html: `${rightLayout.post_content_html}`,
                }}
              ></div>
            )}
          {"content" === props.content_type_right && this.state.checked && (
            <div className="dnxte-content-toggle-back">
              {contentrightDescriptionComponent}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NextContentToggle;
