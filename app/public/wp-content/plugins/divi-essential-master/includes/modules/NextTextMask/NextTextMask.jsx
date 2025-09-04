// External Dependencies
import React, { Component } from 'react';
import "../base/hover-common.css";
// Internal Dependencies
import './style.css';


class NextTextMask extends Component {

  static slug = 'dnxte_text_mask';

  static css(props){
    let css = [];
    
    if ( '' !== props.thumbnail_image_mask ) {
      css.push([{
        selector: "%%order_class%% .dn-dtm-text-masking",
        declaration: `background-image: url(${props.thumbnail_image_mask})`
      }]);
    }

    if ( '' !== props.background_image_size ) {
      css.push([{
        selector: "%%order_class%% .dn-dtm-text-masking",
        declaration: `background-size: ${props.background_image_size}`
      }]);
    }

    if ( '' !== props.background_image_position ) {
      css.push([{
        selector: "%%order_class%% .dn-dtm-text-masking",
        declaration: `background-position: ${props.background_image_position}`
      }]);
    }

    if ( '' !== props.background_image_repeat ) {
      css.push([{
        selector: "%%order_class%% .dn-dtm-text-masking",
        declaration: `background-repeat: ${props.background_image_repeat}`
      }]);
    }

    return css;
  }

  render() {
    return this.headingOutput();
  }
  headingOutput() {
    
    const HeadingTag = this.props.heading_tag;
    // conditional background start
    let text_vertically = "";
    let text_switch = this.props.text_switch;
    let text_vertically_flip = this.props.text_vertically_flip;

    if (text_switch === "on" && text_vertically_flip === "off") {
      text_vertically = "dn-dtm-text-masking text_bg dnxt-text-writting-mode";
    }else if(text_switch === "on" && text_vertically_flip === "on"){
      text_vertically = "dn-dtm-text-masking text_bg dnxt-text-writting-mode dnxt-text-transform";
    } else {
      text_vertically = "dn-dtm-text-masking text_bg";
    }
    // Conditional Hover Effect 
    let hover_effect_enable = "";
    let dnxt_text_hover_effect_switch = this.props.dnxt_text_hover_effect_switch;
    
    if (dnxt_text_hover_effect_switch === "on") {
      hover_effect_enable = this.props.dnxt_text_hover_effect_select;
    } else {
      hover_effect_enable = "";
    }

    // Dynamic Content
    const textMask = this.props.dynamic.text_mask;
    let textMaskComponent = textMask.render();
    if (textMask.loading) {
      // Let Divi render the loading placeholder.
      return textMaskComponent;
    }
    return (
      <HeadingTag className={`${text_vertically} dnxt-hover-${hover_effect_enable}`}>
        {textMaskComponent}
      </HeadingTag>
    );
  }
}

export default NextTextMask;
