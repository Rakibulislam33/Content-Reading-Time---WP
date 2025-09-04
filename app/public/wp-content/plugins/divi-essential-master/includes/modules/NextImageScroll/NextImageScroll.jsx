// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import '../base/get_responsive_css';
import './style.css';

class NextImageScroll extends Component {

  static slug = 'dnxte_image_scroll';

  static css(props) {
    const additionalCss = [];
    
  
      /**
       * Custom Padding Margin Output
       *
       */
      if ('' !== props.dnxt_image) {
        additionalCss.push(
          window.DndhCommon.get_responsive_css(
            props,
            'dnxt_button_margin',
            '%%order_class%% .dnext-neip-ise-button-item',
            'margin'
          )
        );
      }
  
      if ('' !== props.dnxt_image) {
        additionalCss.push(
          window.DndhCommon.get_responsive_css(
            props,
            'dnxt_button_padding',
            '%%order_class%% .dnext-neip-ise-button-item',
            'padding'
          )
        );
      }
  
  
    let dnxtnis_image			    = props.dnxtnis_image;
    let dnxtnis_image_tablet	= props.dnxtnis_image_tablet;
    let dnxtnis_image_phone		= props.dnxtnis_image_phone;
    let dnxtnis_image_hover		= props.dnxtnis_image__hover;
      
  
      if ( 'on|tablet' === props.dnxtnis_image_last_edited ) {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
            declaration: `background-image: url(${dnxtnis_image_tablet ? dnxtnis_image_tablet : dnxtnis_image})`,
          },
        ]);
      }  else if ( 'on|phone' === props.dnxtnis_image_last_edited ) {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
            declaration: `background-image: url(${dnxtnis_image_phone ? dnxtnis_image_phone : (dnxtnis_image_tablet ? dnxtnis_image_tablet : dnxtnis_image)})`,
          },
        ]);
      } else if ( 'on|hover' === props.dnxtnis_image__hover_enabled ) {
      additionalCss.push([
        {
        selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image:hover',
        declaration: `background-image: url(${dnxtnis_image_hover ? dnxtnis_image_hover : dnxtnis_image})`,
        },
      ]);
      } else {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
            declaration: `background-image: url(${dnxtnis_image})`,
          },
        ]);
      }
  
      // Image Width
      if ( 'on|tablet' === props.dnxtnis_image_max_width_last_edited ) {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnext-neip-ise-wrapper',
            declaration: `width: ${props.dnxtnis_image_max_width_tablet};`,
            device: 'tablet',
          },
        ]);
      } else if ( 'on|phone' === props.dnxtnis_image_max_width_last_edited ) {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnext-neip-ise-wrapper',
            declaration: `width: ${props.dnxtnis_image_max_width_phone};`,
            device: 'phone',
          },
        ]);
      } else {
        additionalCss.push([
          {
            selector: '%%order_class%% .dnext-neip-ise-wrapper',
            declaration: `width: ${props.dnxtnis_image_max_width};`,
          },
        ]);
      }
      
      // Overlay Color
      if ( 'off' !== props.use_overlay ) {
        if ( 'on|tablet' === props.dnxtnis_overlay_color_last_edited ) {
          additionalCss.push([
            {
              selector: '%%order_class%% .dnext-neip-ise-overlay',
              declaration: `background-color: ${props.dnxtnis_overlay_color_tablet};`,
              device: 'tablet',
            },
          ]);
        } else if ( 'on|phone' === props.dnxtnis_overlay_color_last_edited ) {
          additionalCss.push([
            {
              selector: '%%order_class%% .dnext-neip-ise-overlay',
              declaration: `background-color: ${props.dnxtnis_overlay_color_phone};`,
              device: 'phone',
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: '%%order_class%% .dnext-neip-ise-overlay',
              declaration: `background-color: ${props.dnxtnis_overlay_color};`,
            },
          ]);
        }
    }
    
      // Image Animation Duration
      if ( '' !== props.image_animation_duration ) {
        if ( 'on|tablet' === props.image_animation_duration_last_edited ) {
          additionalCss.push([
            {
              selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
              declaration: `transition: background-position ${props.image_animation_duration_tablet}s ease-in-out 0ms;`,
              device: 'tablet',
            },
          ]);
        } else if ( 'on|phone' === props.image_animation_duration_last_edited ) {
          additionalCss.push([
            {
              selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
              declaration: `transition: background-position ${props.image_animation_duration_phone}s ease-in-out 0ms;`,
              device: 'phone',
            },
          ]);
        } else {
          additionalCss.push([
            {
              selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
              declaration: `transition: background-position ${props.image_animation_duration}s ease-in-out 0ms;`,
            },
          ]);
        }
      }
      
      // Overlay Gradient 
      if( 'off' !== props.dnxtnis_gradient_show_hide ) {
  
          let dnxtnisGradientDirection      = props.dnxtnis_gradient_type === 'linear-gradient' ? props.dnxtnis_gradient_type_linear_direction : props.dnxtnis_gradient_type_radial_direction;
          let dnxtnisGradientColorOne       = props.dnxtnis_gradient_color_one;
          let dnxtnisGradientColorTwo       = props.dnxtnis_gradient_color_two;
          let dnxtnisGradientStartPosition  = props.dnxtnis_gradient_start_position;
          let dnxtnisGradientEndPosition    = props.dnxtnis_gradient_end_position;
  
          let gradnxtnisOverlayGradientdient = `background: ${props.dnxtnis_gradient_type}(${dnxtnisGradientDirection}, ${dnxtnisGradientColorOne} ${dnxtnisGradientStartPosition}, ${dnxtnisGradientColorTwo} ${dnxtnisGradientEndPosition});`;
  
  
          additionalCss.push([{
            selector: `%%order_class%% .dnext-neip-ise-overlay`,
            declaration: gradnxtnisOverlayGradientdient,
          }]);
      }
    
    if ( 'bottom-to-top' === props.dnxtnis_background_position ) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image',
          declaration: "background-position: center 100%;",
        },
      ]);
      additionalCss.push([
        {
          selector: '%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image:hover',
          declaration: "background-position: center 0 !important;",
        },
      ]);
    } else {
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image",
          declaration: "background-position: center 0;",
        },
      ]);
      additionalCss.push([
        {
          selector: "%%order_class%% .dnext-neip-ise-wrapper .dnext-neip-ise-bg-image:hover",
          declaration: "background-position: center 100%;",
        },
      ]);
    }
  
    if ( 'on' === props.btn_show_hide ) {
      additionalCss.push([
        {
          selector: '%%order_class%% .dnext-neip-ise-button-item',
          declaration: `background: ${props.button_bg}`,
        },
      ]);
    }
  
    // Button Gradient 
    if( 'off' !== props.btn_gradient_show_hide ) {
  
      let btnGradientDirection      = props.btn_gradient_type === 'linear-gradient' ? props.btn_gradient_type_linear_direction : props.btn_gradient_type_radial_direction;
      let btnGradientColorOne       = props.btn_gradient_color_one;
      let btnGradientColorTwo       = props.btn_gradient_color_two;
      let btnGradientStartPosition  = props.btn_gradient_start_position;
      let btnGradientEndPosition    = props.btn_gradient_end_position;
  
      let btnGradientdient = `background: ${props.btn_gradient_type}(${btnGradientDirection}, ${btnGradientColorOne} ${btnGradientStartPosition}, ${btnGradientColorTwo} ${btnGradientEndPosition});`;
  
  
      additionalCss.push([{
        selector: `%%order_class%% .dnext-neip-ise-button-item`,
        declaration: btnGradientdient,
      }]);
    }
  
      return additionalCss;
    }
    render() {
    const props = this.props;
    
    // Button Text Dynamic Content
    const btnText = props.dynamic.button_text;
    let btnTextComponent = btnText.render();
    if (btnText.loading) {
      // Let Divi render the loading placeholder.
      return btnTextComponent;
    }
    
    const buttonTarget = 'on' === props.button_link_new_window ? '_blank' : '_self';
    const buttonPosition = props.dnxtnis_btn_position;
      return (
          <div className="dnext-neip-ise-wrapper">
        <div className="dnext-neip-ise-bg-image">
          <div className="dnext-neip-ise-overlay"></div>
          { 'off' !== props.dnxtnis_btn_show_hide  ? (
          <a href={props.button_link} className={`dnext-neip-ise-button-item dnext_neip_ise_button_${buttonPosition}`} target={buttonTarget}>{btnTextComponent}</a>
          ): null}	
          </div>
      </div>
      );
    }
}

export default NextImageScroll;
