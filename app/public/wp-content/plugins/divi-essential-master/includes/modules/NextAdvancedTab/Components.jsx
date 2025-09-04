import React, { Component } from "react";
import { getAlignment, Icon } from "../base/common";
import Tabs from "react-responsive-tabs";

class LayoutDivi extends Component {
  // layout = null;
  state = {
    item: this.props.item,
    divi_library: this.props.item.props.attrs.divi_library,
  };
  componentDidMount() {
    this.setState({
      item: this.props.item,
      divi_library: this.props.item.props.attrs.divi_library,
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.item.props.attrs.divi_library !==
      this.props.item.props.attrs.divi_library
    ) {
      this.setState({
        item: nextProps.item,
        divi_library: nextProps.item.props.attrs.divi_library,
      });
    }
  }

  render() {
    const { item } = this.state;
    const child_module_order_class = `${item.props.type}_${item.props.shortcode_index}`;

    const panelClassName = [
      // activeClass,
      item.key,
      "et_pb_module",
      "dnxte_tab_content",
      "dnxte_tab_content",
      "dnxte_advanced_tab_item",
      child_module_order_class,
    ];
    return (
      <div
        style={{ display: "block" }}
        key={item.key}
        className={panelClassName.join(" ")}
      >
        {item}
      </div>
    );
  }
}

const PanelBody = ({ props, utils, item }) => {
  if ("on" === props.use_divi_library && "" !== props.divi_library) {
    return item ? <LayoutDivi item={item} /> : null;
  }
  let iconHtml;
  let rightItag;
  let leftItag;
  if ("on" === props.button_use_icon) {
    iconHtml = (
      <Icon
        utils={utils}
        icon={props.button_icon || ""}
        classes={`${
          !props.button_on_hover || "off" === props.button_on_hover
            ? ""
            : "ad_button_icon_hover"
        }`}
      />
    );
    rightItag =
      !props.button_icon_placement || "right" === props.button_icon_placement
        ? iconHtml
        : "";
    leftItag = "left" === props.button_icon_placement ? iconHtml : "";
  }
  const buttonAlignmentClasses = getAlignment(
    "button_alignment",
    props,
    "dnxte_body"
  );
  return (
    <>
      {"none" !== props.body_use_image_or_icon &&
        (props.body_image || props.body_icon) && (
          <div
            className={`dnxte_tab_content_slidebar_one ${
              "icon" === props.body_use_image_or_icon
                ? "dnxte_tab_content_icon_wrapper"
                : ""
            }`}
          >
            {"image" === props.body_use_image_or_icon && (
              <img src={props.body_image} alt={props.body_title || ""} />
            )}
            {"icon" === props.body_use_image_or_icon && (
              <Icon
                utils={utils}
                icon={props.body_icon || "#"}
                classes="dnxte_tab_content_icon"
              />
            )}
          </div>
        )}
      {(props.body_title ||
        props.body_description ||
        props.button_text ||
        rightItag ||
        leftItag) && (
        <div className="dnxte_tab_content_slidebar_two">
          {"" !== props.body_title && (
            <div className="dnxte_tab_content_title">{props.body_title}</div>
          )}
          {"" !== props.body_description && (
            <div
              className="dnxte_tab_content_pra dnxte_tab_layout_eight_pra"
              dangerouslySetInnerHTML={{
                __html: props.body_description,
              }}
            />
          )}
          {props.button_text && "" !== props.button_text && (
            <div
              className={`dnxte_tab_content_button_wrap ${buttonAlignmentClasses}`}
            >
              <a
                href={props.button_link || "/#"}
                target={props.button_target || "_self"}
                className="et_pb_button dnxte_tab_content_btn"
              >
                {leftItag} {props.button_text} {rightItag}
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const TabHeader = ({ props, title, subtitle, utils, tabEffectClassName }) => (
  <>
    {"icon" === props.tab_use_icon_or_image && "" !== props.tab_icon && (
      <Icon
        utils={utils}
        icon={props.tab_icon || ""}
        classes="dnxte_tab_nav_icon"
      />
    )}
    {"icon" === props.tab_use_icon_or_image &&
    "on" === props.use_different_icon_image &&
    "" !== props.tab_icon_active ? (
      <Icon
        utils={utils}
        icon={props.tab_icon_active || ""}
        classes="dnxte_tab_nav_icon_active"
      />
    ) : (
      "icon" === props.tab_use_icon_or_image && (
        <Icon
          utils={utils}
          icon={props.tab_icon || ""}
          classes="dnxte_tab_nav_icon_active"
        />
      )
    )}
    {"image" === props.tab_use_icon_or_image && "" !== props.tab_image && (
      <div className="dnxte_tab_nav_image">
        <img src={props.tab_image} alt="" />
      </div>
    )}
    {"image" === props.tab_use_icon_or_image && (
      <div className="dnxte_tab_nav_image_active">
        <img
          src={
            "on" === props.use_different_icon_image &&
            "" !== props.tab_image_active
              ? props.tab_image_active
              : props.tab_image
          }
          alt=""
        />
      </div>
    )}
    <span className="dnxte_tab_nav_content">
      {"" !== title && <div className="dnxte_tab_nav_title">{title}</div>}
      {"" !== subtitle && <p className="dnxte_tab_nav_pra">{subtitle}</p>}
    </span>
  </>
);

const TabBody = ({ content, tabEffect }) => {
  function getTabs(content, tabEffect) {
    const utils = window.ET_Builder.API.Utils;
    return (
      Array.isArray(content) &&
      content.map((item) => {
        const props = item.props.attrs;
        const child_module_order_class = `${item.props.type}_${item.props.shortcode_index}`;
        return {
          title: (
            <TabHeader
              props={props}
              title={props.tab_title}
              subtitle={props.tab_subtitle}
              utils={utils}
              tabEffectClassName={tabEffect}
            />
          ),
          // onClick: (e) => {},
          getContent: () => (
            <PanelBody props={props} utils={utils} item={item} />
          ),
          /* Optional parameters */
          key: item.key,
          tabClassName: `dnxte_advanced_tab_item dnxte-ad-tab ${child_module_order_class}`,
          panelClassName: `dnxte_advanced_tab_item dnxte-ad-panel ${
            "on" === props.use_divi_library ? "dnxte_tab_content_layout" : ""
          } ${child_module_order_class}`,
        };
      })
    );
  }
  return content ? (
    <Tabs
      items={getTabs(content, tabEffect)}
      showMore={false}
      transformWidth={0}
      // selected={`RRT__tab--selected dnxt-hover-ad-${tabEffect}--active`}
    />
  ) : null;
};

const applyCompositTabsWrap = (slug, props, css) => {
  const ulSelector = "%%order_class%% .RRT__tabs";
  const liSelector = "%%order_class%% .RRT__tabs .dnxte-ad-tab";
  const ulCss =
    "on" === props[slug] ? "flex-wrap: wrap;" : "flex-wrap:initial;";
  const liCss = "on" === props[slug] ? "width: auto;" : "width: 100%;";
  const ulCssTablet =
    "on" === props[slug + "_tablet"]
      ? "flex-wrap: wrap;"
      : "flex-wrap:initial;";
  const liCssTablet =
    "on" === props[slug + "_tablet"] ? "width: auto;" : "width: 100%;";
  const ulCssPhone =
    "on" === props[slug + "_phone"] ? "flex-wrap: wrap;" : "flex-wrap:initial;";
  const liCssPhone =
    "on" === props[slug + "_phone"] ? "width: auto;" : "width: 100%;";

  css.push([
    {
      selector: ulSelector,
      declaration: ulCss,
    },
  ]);
  css.push([
    {
      selector: liSelector,
      declaration: liCss,
    },
  ]);
  css.push([
    {
      selector: ulSelector,
      declaration: ulCssTablet,
      device: "tablet",
    },
  ]);
  css.push([
    {
      selector: liSelector,
      declaration: liCssTablet,
      device: "tablet",
    },
  ]);
  css.push([
    {
      selector: ulSelector,
      declaration: ulCssPhone,
      device: "phone",
    },
  ]);
  css.push([
    {
      selector: liSelector,
      declaration: liCssPhone,
      device: "phone",
    },
  ]);
  return;
};
const applyCompositWidthCss = (
  minSlug,
  maxSlug,
  useFullWidthSlug,
  css,
  props
) => {
  const MIN_DEFAULT_SIZE = "100px";
  const MAX_DEFAULT_SIZE = "200px";
  const selector = "%%order_class%% .RRT__tabs .dnxte-ad-tab";
  // Desktop size code starts
  const tabsMinWidth = props[minSlug] || MIN_DEFAULT_SIZE;
  const tabsMaxWidth = props[maxSlug] || MAX_DEFAULT_SIZE;
  const useTabsFullWidth =
    "on" === props[useFullWidthSlug] ? "100%" : tabsMinWidth;

  if ("off" === props[useFullWidthSlug]) {
    css.push([
      {
        selector,
        declaration: `max-width: ${tabsMaxWidth}; width: ${useTabsFullWidth};`,
      },
    ]);
  }
  // Desktop size code ends

  // Tablet size code starts
  const tabsMinWidthTablet = props[`${minSlug}_tablet`] || MIN_DEFAULT_SIZE;
  const tabsMaxWidthTablet = props[`${maxSlug}_tablet`] || MAX_DEFAULT_SIZE;
  const useTabsFullWidthTablet =
    "on" === props[`${useFullWidthSlug}_tablet`] ? "100%" : tabsMinWidthTablet;

  if ("off" === props[`${useFullWidthSlug}_tablet`]) {
    css.push([
      {
        selector,
        declaration: `max-width: ${tabsMaxWidthTablet}; width: ${useTabsFullWidthTablet};`,
        device: "tablet",
      },
    ]);
  }
  // Tablet size code ends

  // Phone size code starts
  const tabsMinWidthPhone = props[`${minSlug}_phone`] || MIN_DEFAULT_SIZE;
  const tabsMaxWidthPhone = props[`${maxSlug}_phone`] || MAX_DEFAULT_SIZE;
  const useTabsFullWidthPhone =
    "on" === props[`${useFullWidthSlug}_phone`] ? "100%" : tabsMinWidthPhone;

  if ("off" === props[`${useFullWidthSlug}_phone`]) {
    css.push([
      {
        selector,
        declaration: `max-width: ${tabsMaxWidthPhone}; width: ${useTabsFullWidthPhone};`,
        device: "phone",
      },
    ]);
  }
  // Phone size code ends

  return;
};

const applyCompositPlacementCss = (slug, css, props) => {
  const selector = "%%order_class%% .RRT__tabs:has(.dnxte-ad-tab)";
  const value = props[slug] || "flex-start";
  const valueTablet = props[`${slug}_tablet`] || "flex-start";
  const valuePhone = props[`${slug}_phone`] || "flex-start";

  css.push([
    {
      selector,
      declaration: `justify-content: ${value};`,
    },
  ]);
  css.push([
    {
      selector,
      declaration: `justify-content: ${valueTablet};`,
      device: "tablet",
    },
  ]);
  css.push([
    {
      selector,
      declaration: `justify-content: ${valuePhone};`,
      device: "phone",
    },
  ]);
  return;
};

export {
  TabBody,
  applyCompositTabsWrap,
  applyCompositWidthCss,
  applyCompositPlacementCss,
};
