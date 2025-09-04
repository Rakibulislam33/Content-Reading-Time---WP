// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class NextTextDivider extends Component {

  static slug = 'dnxte_text_divider';

  static css(props) {
    const additionalCss = [];
    
      // Text Divider Style
    if ('' !== props.text_divider_style) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnxt-text-divider',
          declaration: `border-top-style: ${props.text_divider_style};`,
        },
      ]);
      }
      // Text Divider Color
    if ('' !== props.text_divider_color) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnxt-text-divider',
          declaration: `border-top-color: ${props.text_divider_color};`,
        },
      ]);
      }
      // Text Divider Weight
    if ('' !== props.text_divider_weight) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnxt-text-divider',
          declaration: `border-top-width: ${props.text_divider_weight};`,
        },
      ]);
      }
      // Text Divider Gap
    if ('' !== props.text_divider_gap) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnxt-text-divider',
          declaration: `margin: ${props.text_divider_gap};`,
        },
      ]);
      }
    // Divider Text Background
      let divider_text_bg = '';
      let text_gradient_apply = '';
    let text_gradient_color_one = '';
    let text_gradient_color_two = '';
    let text_gradient_type = '';
    let text_gl = '';
    let text_gr = '';
    let text_gradient_start_position = '';
      let text_gradient_end_position = '';
      
      // Text BG color
      if ('' !== props.divider_text_bg) {
        divider_text_bg = props.divider_text_bg;
      }
      // checking gradient type
      if ('' !== props.text_gradient_type) {
        text_gradient_type = props.text_gradient_type;
      }
  
      // Text Linear Gradient Direction
      if ('' !== props.text_gradient_type_linear_direction) {
        text_gl = props.text_gradient_type_linear_direction;
      }
  
      // Text Radial Gradient Direction
      if ('' !== props.text_gradient_type_radial_direction) {
        text_gr = props.text_gradient_type_radial_direction;
      }
  
      // Apply gradient direcion
      if ('radial-gradient' === props.text_gradient_type) {
        text_gradient_apply = `${text_gr}`;
      } else if ('linear-gradient' === props.text_gradient_type) {
        text_gradient_apply = `${text_gl}`;
      }
  
      // Gradient color one for text
      if ('' !== props.text_gradient_color_one) {
        text_gradient_color_one = props.text_gradient_color_one;
      }
  
      // Gradient color two for content
      if ('' !== props.text_gradient_color_two) {
        text_gradient_color_two = props.text_gradient_color_two;
      }
  
      // Text Gradient color start position
      if ('' !== props.text_gradient_start_position) {
        text_gradient_start_position = props.text_gradient_start_position;
      }
  
      // Text Gradient color end position
      if ('' !== props.text_gradient_end_position) {
        text_gradient_end_position = props.text_gradient_end_position;
      }
        if ('off' !== props.text_bg_show_hide) {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnxt-text-divider-spacing',
            declaration: `background: ${divider_text_bg}`,
          },
        ]);
      }
      if ('off' !== props.text_gradient_show_hide) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnxt-text-divider-spacing',
          declaration: `background: ${text_gradient_type}(${text_gradient_apply},${text_gradient_color_one} ${text_gradient_start_position}, ${text_gradient_color_two} ${text_gradient_end_position});`,
        },
      ]);
      }
      return additionalCss;
    }
  
    render() {
      const props = this.props;
  
      // Post Heading Dynamic Content
      let headingTag = props.heading_tag;
      const divider_text = {
        headingTag,
        dividerText() {
          let dividerText = props.dynamic.dnxt_divider_text;
          let dividerTextComponent = dividerText.render();
          if (dividerText.loading) {
              // Let Divi render the loading placeholder.
              return dividerTextComponent;
          }
          return (
              <this.headingTag className="dnxt-text-divider-spacing">
                  {dividerTextComponent}
              </this.headingTag>
          );
        },
      };
      
      let divider_text_aligment = " ";		
      switch (props.divider_text_aligment) {
        case 'left':
          divider_text_aligment +="dnxt-text-divider-alignment-left";
          break;
        case 'right':
          divider_text_aligment +="dnxt-text-divider-alignment-right";				
          break;
        default:
        divider_text_aligment = ' ';
          break;
      }
  
      return (
        <div className={`dnxt-text-divider-wrapper ${divider_text_aligment}`}>
          <div className="dnxt-text-divider-before dnxt-text-divider"></div>
          {divider_text.dividerText()}
          <div className="dnxt-text-divider-after dnxt-text-divider"></div>
        </div>
      );
    }
}

export default NextTextDivider;
