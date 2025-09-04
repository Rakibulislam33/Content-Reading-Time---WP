// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';
import '../base/get_responsive_css';

class NextTextHoverHighlight extends Component {

  static slug = 'dnxte_text_hover_highlight';

	static css(props) {
		const additionalCss = [];
	/**
     * Custom Padding Margin Output
     *
     */
    if ( "" !== props.thh_hht_margin ) {
		additionalCss.push(
		  window.DndhCommon.get_responsive_css(
			props,
			"thh_hht_margin",
			"%%order_class%% .dnxt-thh-wrapper",
			"margin"
		  )
		);
	  }
  
	  if ( "" !== props.thh_hht_padding  ) {
		additionalCss.push(
		  window.DndhCommon.get_responsive_css(
			props,
			"thh_hht_padding",
			"%%order_class%% .dnxt-thh-wrapper",
			"padding"
		  )
		);
	  }

		// Highlighted Single Color    
		let highlightSingleColor 			= "";
		let selectedGradientType 			= "";
		let linearDirection 				= "";
		let radialDirection 				= "";
		let selectedGradientApply 			= "";
		let highlightGradientColorOne 		= "";
		let highlightGradientColorTwo 		= "";
		let highlightGradientStartPosition 	= "";
		let highlightGradientEndPosition 	= "";
		let highlightTextAlignment 			= "";

		// check single color is selected or not
		if (props.thh_highlight_color) {
			highlightSingleColor = props.thh_highlight_color;
		}
		// check gradient type
		if (props.thh_gradient_type) {
			selectedGradientType = props.thh_gradient_type;
		}
		// Linear Gradient Direction
		if (props.thh_gradient_type_linear_direction) {
			linearDirection = props.thh_gradient_type_linear_direction;
		}
		// Radial Gradient Direction
		if (props.thh_gradient_type_radial_direction) {
			radialDirection = props.thh_gradient_type_radial_direction;
		}
		// Apply gradient type
		if ('radial-gradient' === props.thh_gradient_type) {
			selectedGradientApply = `${radialDirection}`;
		} else if ('linear-gradient' === props.thh_gradient_type) {
			selectedGradientApply = `${linearDirection}`;
		}
		// Gradient color one for hover effects
		if (props.thh_gradient_color_one) {
			highlightGradientColorOne = props.thh_gradient_color_one;
		}
		// Gradient color two for hover effects
		if (props.thh_gradient_color_two) {
			highlightGradientColorTwo = props.thh_gradient_color_two;
		}
		// Gradient color start position
		if (props.thh_gradient_start_position) {
			highlightGradientStartPosition = props.thh_gradient_start_position;
		}
		// Gradient color end position
		if (props.thh_gradient_end_position) {
			highlightGradientEndPosition = props.thh_gradient_end_position;
		}
		// select single color enable
		if ('off' !== props.thh_highlight_color_enable) {
			additionalCss.push([
				{
					selector	: `%%order_class%% .${props.thh_hover_effect}:hover:before, %%order_class%% .${props.thh_hover_effect}:hover:after`,
					declaration	: `background-color: ${highlightSingleColor};`,
				},
			]);
		}
		// select gradient color enable
		if ('on' === props.thh_highlight_gradient_enable) {
			additionalCss.push([
				{
					selector	: `%%order_class%% .${props.thh_hover_effect}:hover:before, %%order_class%% .${props.thh_hover_effect}:hover:after`,
					declaration	: `background: ${selectedGradientType}(${selectedGradientApply},${highlightGradientColorOne} ${highlightGradientStartPosition}, ${highlightGradientColorTwo} ${highlightGradientEndPosition});`,
				},
			]);
		}
		// Highlight Height
		if (props.thh_highlight_hight){
			additionalCss.push([
				{
					'selector'    : "%%order_class%% .dnxt-thh-highlight-text:hover:after, %%order_class%% .dnxt-thh-highlight-text:hover:before",
					'declaration' : `height: ${props.thh_highlight_hight}; z-index: -1;`,
				}
			]);
		}
		
		// Highlight Text Alignment
		if (props.thh_text_alignment) {
			highlightTextAlignment = props.thh_text_alignment;
		}
		switch (props.thh_text_alignment) {
			case 'left': {
					additionalCss.push([
					{
						selector	: "%%order_class%% .dnxt-thh-wrapper-inner",
						declaration	: `text-align: ${highlightTextAlignment};`,
					},
				]);
				break;
			}
			case 'center': {
				additionalCss.push([
					{
						selector	: "%%order_class%% .dnxt-thh-wrapper-inner",
						declaration	: `text-align: ${highlightTextAlignment};`,
					},
				]);
				break;
			}			
			case 'right': {
				additionalCss.push([
					{
						selector	: "%%order_class%% .dnxt-thh-wrapper-inner",
						declaration	: `text-align: ${highlightTextAlignment};`,
					},
				]);
				break;
			}				
			case 'justify': {
				additionalCss.push([
					{
						selector	: "%%order_class%% .dnxt-thh-wrapper-inner",
						declaration	: `text-align: ${highlightTextAlignment};`,
					},
				]);	
				break;
			}		
			default: {
				additionalCss.push([
					{
						selector	: "%%order_class%% .dnxt-thh-wrapper-inner",
						declaration	: `text-align: ${highlightTextAlignment};`,
					},
				]);
				break;
			}
		}

		// Hover Highlight Text Background Color & Gradient
		let bgForSingleColor			= '';
		let bgGradientType	   	 		= '';
		let bgGradientLinearDirection   = '';
		let bgGradientRadialDirection  	= '';
		let bgGradientApply      		= '';
		let bgGradientColorOne 	 		= '';
		let bgGradientColorTwo 	 		= '';
		let bgGradientStartPosition		= '';
		let bgGradientEndPosition  		= '';

		// Highlight BG Single Color
		if (props.thh_hht_color) {
			bgForSingleColor = props.thh_hht_color;
		}
		if ('off' !== props.thh_hht_bg_color_enable){
			additionalCss.push([
				{
					'selector'    : "%%order_class%% .dnxt-thh-wrapper",
					'declaration' : `background-color: ${bgForSingleColor};`,
				}
			]);
		}
		// Highlight BG Gradient Color
		// Gradient Type
		if (props.thh_hht_gradient_type) {
			bgGradientType = props.thh_hht_gradient_type;
		}
		// Linear Gradient Direction
		if (props.thh_hht_gradient_type_linear_direction) {
			bgGradientLinearDirection = props.thh_gradient_type_linear_direction;
		}
		// Radial Gradient Direction
		if (props.thh_hht_gradient_type_radial_direction) {
			bgGradientRadialDirection = props.thh_hht_gradient_type_radial_direction;
		}
		// Apply gradient direcion
		if ('radial-gradient' === props.thh_hht_gradient_type) {
			bgGradientApply = `${bgGradientRadialDirection}`;
		} else if ('linear-gradient' === props.thh_gradient_type) {
			bgGradientApply = `${bgGradientLinearDirection}`;
		}
		// Gradient color one for content
		if (props.thh_hht_gradient_color_one) {
			bgGradientColorOne = props.thh_hht_gradient_color_one;
		}
		// Gradient color two for content 
		if (props.thh_hht_gradient_color_two) {
			bgGradientColorTwo = props.thh_hht_gradient_color_two;
		}
		// Gradient color start position 
		if (props.thh_hht_gradient_start_position) {
			bgGradientStartPosition = props.thh_hht_gradient_start_position;
		}
		// Gradient color end position
		if (props.thh_hht_gradient_end_position) {
			bgGradientEndPosition = props.thh_hht_gradient_end_position;
		}
		// Gradient setting up
		if ('off' !== props.thh_hht_gradient_enable){
			additionalCss.push([
				{
					selector	: "%%order_class%% .dnxt-thh-wrapper",
					declaration	: `background: ${bgGradientType}(${bgGradientApply}, ${bgGradientColorOne} ${bgGradientStartPosition}, ${bgGradientColorTwo} ${bgGradientEndPosition});`,
				},
			]);
		}
		return additionalCss;
	}

	render() {
		const props			= this.props;
		const HeadingTag 	= props.thh_heading_tag;
		let hoverEffect 	= '';

		// Hover Effects:
		if (props.thh_hover_effect) {
			hoverEffect = props.thh_hover_effect;
		}

		// Before Text Dynamic
		const thh_before_text = {
			thhBeforeText() {
				if ('off' !== props.thh_before_text_switch) {
					let thhBeforeText = props.dynamic.thh_before_text;
					let thhBeforeTextComponent = thhBeforeText.render();
					if (thhBeforeText.loading) {
						// Let Divi render the loading placeholder.
						return thhBeforeTextComponent;
					}
					return (
						<span className="dnxt-thh-plain-text dnxt-underline-hover-before-text">
							{thhBeforeTextComponent}
						</span>
					);
				}
			},
		};

		let highlightTarget = 'off' !== props.thh_link_target ? '_blank' : '_self';
		let thhLinkUrl = props.thh_link_url;
		// Highlight Text Dynamic
		const thh_highlight_text = {
			thhHighlightText() {
				let thhHighlightText = props.dynamic.thh_highlight_text;
				let thhHighlightTextComponent = thhHighlightText.render();
				if (thhHighlightText.loading) {
					// Let Divi render the loading placeholder.
					return thhHighlightTextComponent;
				}
				if (props.thh_link_url) {
					return <a className={`dnxt-thh-highlight-text ${hoverEffect}`} href={thhLinkUrl} target= {highlightTarget}>{thhHighlightTextComponent}</a>
				}
				return <span className= {`dnxt-thh-highlight-text ${hoverEffect}`}>{thhHighlightTextComponent}</span>
			},
		};
		
		// After Text Dynamic
		const thh_after_text = {
			thhAfterText() {
				if ('off' !== props.thh_after_text_switch) {
					let thhAfterText = props.dynamic.thh_after_text;
					let thhAfterTextComponent = thhAfterText.render();
					if (thhAfterText.loading) {
						// Let Divi render the loading placeholder.
						return thhAfterTextComponent;
					}
					return (
						<span className="dnxt-thh-plain-text dnxt-underline-hover-after-text">
							{thhAfterTextComponent}
						</span>
					);
				}
			},
		};
		return (
			<div className="dnxt-thh-wrapper-inner">
				<HeadingTag className="dnxt-thh-wrapper">
					{thh_before_text.thhBeforeText()}
					{thh_highlight_text.thhHighlightText()}
					{thh_after_text.thhAfterText()}
				</HeadingTag>
			</div>
		);
	}
}

export default NextTextHoverHighlight;
