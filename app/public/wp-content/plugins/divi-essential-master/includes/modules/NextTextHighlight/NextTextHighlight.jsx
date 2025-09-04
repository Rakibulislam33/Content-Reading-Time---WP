// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class NextTextHighlight extends Component {

  static slug = 'dnxte_text_highlight';

	static css(props) {
		const additionalCss = [];

		// Stroke Color
		if ( 'on|tablet' === props.stroke_color_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
					declaration: `stroke: ${props.stroke_color_tablet}`,
					device: 'tablet',
				},
			]);
		} else if ( 'on|phone' === props.stroke_color_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
					declaration: `stroke: ${props.stroke_color_phone}`,
					device: 'phone',
				},
			]);
		} else if ( 'on|hover' === props.stroke_color__hover_enabled ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg:hover path',
					declaration: `stroke: ${props.stroke_color__hover}`,
				},
			]);
		} else {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
					declaration: `stroke: ${props.stroke_color}`,
				},
			]);
		}
		
		// Stroke Width
		if ( 'on|tablet' === props.stroke_width_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
					declaration: `stroke-width: ${props.stroke_width_tablet}`,
					device: 'tablet',
				},
			]);
		} else if ( 'on|phone' === props.stroke_width_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
					declaration: `stroke-width: ${props.stroke_width_phone}`,
					device: 'phone',
				},
			]);
		} else if ( 'on|hover' === props.stroke_width__hover_enabled ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg:hover path',
					declaration: `stroke-width: ${props.stroke_width__hover}`,
				},
			]);
		} else {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
					declaration: `stroke-width: ${props.stroke_width}`,
				},
			]);
		}

		// Stroke Animation Delay Setting
		let animation_delay = '';

		if ('' !== props.highlight_animation_delay) {
			animation_delay = props.highlight_animation_delay;
		}
		additionalCss.push([
			{
				selector: '%%order_class%% .dnxt-text-highlight-animated-wrapper svg path',
				declaration: `-webkit-animation-delay: ${animation_delay};animation-delay: ${animation_delay}`,
			},
		]);

		let display_type;

		if ('on' === props.display_type_select) {
			display_type = 'block';
		} else {
			display_type = 'inline';
		}
		// Display stacked
		additionalCss.push([
			{
				selector: '%%order_class%% .dnxt-text-heading',
				declaration: `display: ${display_type};`,
			},
		]);

		return additionalCss;
	}

	render() {
		const HeadingTag = this.props.heading_tag;

		let svgprint;
		switch (this.props.dnxt_svg_select) {
			case 'delete':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"></path><path d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"></path></svg>';
				break;
			case 'curly-line':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path></svg>';
				break;
			case 'circle':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path></svg>';
				break;
			case 'diagonal':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M13.5,15.5c131,13.7,289.3,55.5,475,125.5"></path></svg>';
				break;
			case 'double':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2"></path><path d="M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8"></path></svg>';
				break;
			case 'double-line':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path><path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path></svg>';
				break;
			case 'strikethrough':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M3,75h493.5"></path></svg>';
				break;
			case 'zigzag':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg>';
				break;
			case 'wave':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466.33 50.26"><defs><style>.cls-1{fill:red;}</style></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,40.46S116.21-9.15,131.26,9.53a6.89,6.89,0,0,1,1.3,5.28c-1.17,8.33-5.06,46.64,24.79,32.25,0,0,86.54-42.66,93.38-45.08,0,0,20.18-12,19.55,23.17a15.72,15.72,0,0,0,14.78,16.07c13.44.76,38.11-3.54,82.8-24.34,0,0,19-8.57,13.76,12.7a8.55,8.55,0,0,0,9.57,10.47c12.95-1.94,36.34-7.28,75.14-21.66"/></g></g></svg>';
				break;
			case 'spiral':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.38 67.12"><defs><style>.cls-1{fill:#00828c;}</style></defs><title>Asset 6</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,50.34s42-.2,51.8-34.16c9-31.13-62.37,5.62-12.62,42.42A31,31,0,0,0,88.29,39.52a71.59,71.59,0,0,0,1.13-14.69C88.6-21,29.72,70.55,103.51,67c0,0,25.16-2.33,33.33-46.43S66.37,70.33,146,66.42c0,0,19.42-.55,31.31-42,10-34.76-46,2.39-14.18,27.27,20.15,15.76,50.17,9.74,62.52-12.68a62.5,62.5,0,0,0,5.48-13.71c7.45-27.17-30.26-8.58-15.54,17.6,11.71,20.84,41.15,21.5,55.42,2.32a47.54,47.54,0,0,0,9.64-28.76c.11-33.22-38,39.48,1.09,44.6a31.7,31.7,0,0,0,18.79-3.62c11-5.82,30.24-19.6,32.22-45.73,2.3-30.22-39,4.93-17.08,26.71,14,13.94,38,10.31,47.58-7a42.23,42.23,0,0,0,5.08-18.55c1.39-26.53-35.11-3.51-11.12,25.88a20.43,20.43,0,0,0,34.41-4.09c2.54-5.34,4.4-12.51,4.89-22.14,2-39.37-54.24,26.19,2.09,40.83,0,0,27.71,6.33,31.8-5.86"/></g></g></svg>';
				break;
			case 'brush':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.5 24.47"><title>Asset 10</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,3.26c227.45-3.42,228.55-5.19,495.5,0L0,20.31s398.26,6.42,495.5,3.32"/></g></g></svg>';
				break;
			case 'splash':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.14 73.08"><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.53,23.05S-7,58,34.51,69C120.17,91.75,198.87,12,215.66,7c102.8-30.83,248.87,50.48,263.48,54.77"/></g></g></svg>';
				break;
			case 'brick-wall':
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470.31 23.83"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_1-2-2" data-name="Layer 1-2"><path d="M470.31,0V23.83l-58.82-1.21V0H356.72V23.23H293.47L292.74,0H230.22l.49,23.23H164.79L164.55,0H99V23.23H37.2L37.56,0H0V23.23"/></g></g></g></svg>';
				break;
			default:
				svgprint =
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path></svg>';
				break;
		}

		// Conditional Hover Effect
		let hover_effect_enable = '';
		let dnxt_text_hover_effect_switch = this.props.dnxt_text_hover_effect_switch;

		if ('on' === dnxt_text_hover_effect_switch) {
			hover_effect_enable = this.props.dnxt_text_hover_effect_select;
		} else {
			hover_effect_enable = '';
		}
		// Before Dynamic Content
		const beforeText = this.props.dynamic.before_text;
		let beforeTextComponent = beforeText.render();
		if (beforeText.loading) {
			// Let Divi render the loading placeholder.
			return beforeTextComponent;
		}
		// Heading Dynamic Content
		const highlightText = this.props.dynamic.highlight_text;
		let highlightTextComponent = highlightText.render();
		if (highlightText.loading) {
			// Let Divi render the loading placeholder.
			return highlightTextComponent;
		}
		// After Dynamic Content
		const afterText = this.props.dynamic.after_text;
		let afterTextComponent = afterText.render();
		if (afterText.loading) {
			// Let Divi render the loading placeholder.
			return afterTextComponent;
		}

		let highlight_alignment         = this.props.highlight_alignment ? "dnext_highlight_alignment_" + this.props.highlight_alignment : "",
			highlight_alignment_tablet  = this.props.highlight_alignment_tablet ? "dnext_highlight_alignment_tablet_" + this.props.highlight_alignment_tablet : "",
			highlight_alignment_phone   = this.props.highlight_alignment_phone ? "dnext_highlight_alignment_phone_" + this.props.highlight_alignment_phone : "";   
  
		return (
			<HeadingTag className={`dnxt-highlight-intro ${hover_effect_enable} ${highlight_alignment} ${highlight_alignment_tablet} ${highlight_alignment_phone}`}>
				<span className="dnxt-highlight-Btext dnxt-text-heading">{beforeTextComponent}</span>
				<span className="dnxt-text-highlight-animated-wrapper">
					<span className="dnxt-text-highlight dnxt-text-highlight-animated-text">
						{highlightTextComponent}
					</span>
					<span dangerouslySetInnerHTML={{ __html: svgprint }} />
				</span>
				<span className="dnxt-highlight-Atext dnxt-text-heading">{afterTextComponent}</span>
			</HeadingTag>
		);
	}
}

export default NextTextHighlight;
