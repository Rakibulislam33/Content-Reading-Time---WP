// External Dependencies
import { Component } from "react";
import { applyAllBgCss, applyCustomSpacing } from "../base/common";
// Internal Dependencies
import "../base/get_responsive_css";
import "./style.css";

class DiviNextThumbsGalleryChild extends Component {
  static slug = "dnxte_thumbs_gallery_child";

  static css(props) {
    const css = [];

    
    if ('on' === props.use_dnxte_custom_button_style ) {
      
      const buttonIcon = props.dnxte_thumbs_button_icon ? props.dnxte_thumbs_button_icon.split("||") : "";
      const buttonIconTablet = props.dnxte_thumbs_button_icon_tablet ? props.dnxte_thumbs_button_icon_tablet.split("||") : "";
      const buttonIconPhone = props.dnxte_thumbs_button_icon_phone ? props.dnxte_thumbs_button_icon_phone.split("||") : "";
      
      
      const fontAwesomeIcon = 'fa' === buttonIcon[1] ? `font-family: FontAwesome; font-weight:` + buttonIcon[2] + `;content: attr(data-icon);` : "";
      const fontAwesomeIconTablet = 'fa' === buttonIconTablet[1] ? `font-family: FontAwesome; font-weight:` + buttonIconTablet[2] + `;content: attr(data-icon-tablet);` : "";
      const fontAwesomeIconPhone =  'fa' === buttonIconPhone[1] ? 'font-family: FontAwesome; font-weight:' + buttonIconPhone[2] + `;content: attr(data-icon-phone);` : "";
      
      const fontDiviIcon = 'divi' === buttonIcon[1] ? `font-family: ETmodules; font-weight:400;content: attr(data-icon);` : "";
      const fontDiviIconTablet = 'divi' === buttonIconTablet[1] ? `font-family: ETmodules; font-weight:400;content: attr(data-icon-tablet);` : "";
      const fontDiviIconPhone = 'divi' === buttonIconPhone[1] ? `font-family: ETmodules; font-weight:400;content: attr(data-icon-phone);` : "";
      
      
      if (props.use_dnxte_button_icon && "on" === props.use_dnxte_button_icon) {
        css.push([
          {
            selector: `%%order_class%% .dnxte-button:before, %%order_class%% .dnxte-button:after`,
            declaration: 'fa' === buttonIcon[1] ? fontAwesomeIcon : fontDiviIcon,
          },
        ]);
        css.push([
          {
            selector: `%%order_class%% .dnxte-button:before, %%order_class%% .dnxte-button:after`,
            declaration: 'fa' === buttonIconTablet[1] ? fontAwesomeIconTablet : fontDiviIconTablet,
          },
        ]);
        css.push([
          {
            selector: `%%order_class%% .dnxte-button:before, %%order_class%% .dnxte-button:after`,
            declaration: 'fa' === fontAwesomeIconPhone[1] ? fontAwesomeIconPhone : fontDiviIconPhone,
          },
        ]);
      }

      // Button Icon Placement for Before
      if ( "left" === props.dnxte_thumbs_btn_icon_placement ) {
        css.push([
          {
            selector: `%%order_class%% .dnxte-button:after`,
            declaration: `display: none;`,
          },
        ]);
        if ("off" === props.dnxte_thumbs_btn_on_hover) { 
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:before`,
              declaration: `opacity: 1;margin-left: -1.3em;right: auto;`,
            },
          ]);
          css.push([
            {
              selector: `.dnxte-button%%order_class%%`,
              declaration: `padding-right: 0.7em; padding-left: 2em;`,
            },
          ]);
        }else if ("on" === props.use_dnxte_button_icon) { 
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:hover`,
              declaration: `padding-right: 0.7em; padding-left: 2em;`,
            },
          ]);
        }else if ("off" === props.use_dnxte_button_icon) { 
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:hover`,
              declaration: `border: 2px solid transparent;background-color: rgba(0,0,0,0.05);`,
            },
          ]);
        }else {
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:hover`,
              declaration: `padding-right: 0.7em; padding-left: 2em;`,
            },
          ]);
        }
      }else {
        css.push([
          {
            selector: `%%order_class%% .dnxte-button:before`,
            declaration: `display: none;`,
          },
        ]);
        if ( 'off' === props.dnxte_thumbs_btn_on_hover ) {
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:after`,
              declaration: `opacity: 1;margin-left: 0.3em;left: auto;`,
            },
          ]);
          css.push([
            {
              selector: `.dnxte-button%%order_class%%`,
              declaration: `padding-right: 2em;padding-left: 0.7em;`,
            },
          ]);
        }else if ("on" !== props.use_dnxte_button_icon) { 
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:hover`,
              declaration: `border: 2px solid transparent;background-color: rgba(0,0,0,0.05);`,
            },
          ]);
        } else {
          css.push([
            {
              selector: `.dnxte-button%%order_class%%:hover`,
              declaration: `padding-left: 0.7em; padding-right: 2em;`,
            },
          ]);
        }
      }
      
    }else {
      css.push([
        {
          selector: `%%order_class%% .dnxte-button:after,%%order_class%% .dnxte-button:before`,
          declaration: `display: none;`,
        },
      ]);
      css.push([
        {
          selector: `.dnxte-button%%order_class%%`,
          declaration: `padding: 0.3em 1em!important;`,
        },
      ]);
      css.push([
        {
          selector: `.dnxte-button%%order_class%%:hover`,
          declaration: `border: 2px solid transparent;background-color: rgba(0,0,0,0.05);`,
        },
      ]);
    }
    

    const customMarginPadding = [
      [
        "dnext_thumbs_gallery_content_margin",
        "%%order_class%% .dnxte_thumbs_gallery_content",
        "margin",
        true
      ],
      [
        "dnext_thumbs_gallery_content_padding",
        "%%order_class%% .dnxte_thumbs_gallery_content",
        "padding",
        true
      ],
      [
        "dnext_thumbs_gallery_title_margin",
        "%%order_class%% .dnxte_thumbs_gallery_title",
        "margin",
        true
      ],
      [
        "dnext_thumbs_gallery_title_padding",
        "%%order_class%% .dnxte_thumbs_gallery_title",
        "padding",
        true
      ],
      [
        "dnext_thumbs_gallery_desc_margin",
        "%%order_class%% .dnxte_thumbs_gallery_description",
        "margin",
        true
      ],
      [
        "dnext_thumbs_gallery_desc_padding",
        "%%order_class%% .dnxte_thumbs_gallery_description",
        "padding",
        true
      ],
      [
        "dnext_thumbs_button_margin",
        "%%order_class%% .dnxte-button",
        "margin",
        true
      ],
      [
        "dnext_thumbs_button_padding",
        "%%order_class%% .dnxte-button",
        "padding",
        true
      ],

    ];

    customMarginPadding.forEach((element) => {
      applyCustomSpacing(
        props,
        css,
        element[0],
        element[1],
        element[2],
        element[3]
      );
    });

    const moduleBgCss = {
      button_bg_color_: {
        desktop: "%%order_class%% .dnxte-button%%order_class%%",
        hover: "%%order_class%% .dnxte-button:hover",
      },
    };

    applyAllBgCss(css, props, moduleBgCss);

    return css;

  }


  
  render() {
    return null;
  }
}
export default DiviNextThumbsGalleryChild;
