// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class NextTextGlitch extends Component {

  static slug = 'dnxte_text_glitch';

	static css(props) {
		
		const additionalCss = [];
		let glitch_color_text_one = '';
		let glitch_color_text_two = '';
		let glitch_position_left = '';
		let glitch_position_right = '';
		let glitch_position_top = '';

		// Text color
		if ('' !== props.glitch_text_color) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxt-glitch-text_heading',
					declaration: `color: ${props.glitch_text_color};`,
				},
			]);
		}
		// Glitch Color
		if ('' !== props.glitch_color_text_one || '' !== props.glitch_color_text_two) {
			glitch_color_text_one = props.glitch_color_text_one;
			glitch_color_text_two = props.glitch_color_text_two;
			switch (props.glitch_style) {
				case '1':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-1 > *::after',
							declaration: `color: ${glitch_color_text_two};`,
						},
					]);
					break;
				case '2':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-2 > *:before',
							declaration: `color: ${glitch_color_text_one};`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-2 > *:after',
							declaration: `color: ${glitch_color_text_two};`,
						},
					]);
					break;
				case '3':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-3 > *:before',
							declaration: `color: ${glitch_color_text_one};`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-3 > *:after',
							declaration: `color: ${glitch_color_text_two};`,
						},
					]);
					break;
				case '4':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-4 > *:before',
							declaration: `text-shadow: -4px 0 0.02em ${glitch_color_text_one}, -8px 0 0.02em ${glitch_color_text_two};`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-4 > *:after',
							declaration: `text-shadow: -4px 0 0.02em ${glitch_color_text_one}, -8px 0 0.02em ${glitch_color_text_two};`,
						},
					]);
					break;
				case '5':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-5 > *:before',
							declaration: `color: ${glitch_color_text_one};`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-5 > *:after',
							declaration: `color: ${glitch_color_text_two};`,
						},
					]);
					break;
				case '6':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-6 > *:before',
							declaration: `color: ${glitch_color_text_one};`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-6 > *:after',
							declaration: `color: ${glitch_color_text_two};`,
						},
					]);
					break;
				case '7':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-7 > *:before',
							declaration: `color: ${glitch_color_text_one};`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-7 > *:after',
							declaration: `color: ${glitch_color_text_two};`,
						},
					]);
					break;
				default:
					break;
			}
		}
		// Glitch Position
		if (
			'' !== props.glitch_position_left ||
			'' !== props.glitch_position_right ||
			'' !== props.glitch_position_top
		) {
			glitch_position_left = props.glitch_position_left;
			glitch_position_right = props.glitch_position_right;
			glitch_position_top = props.glitch_position_top;
			switch (props.glitch_style) {
				case '2':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-2 > *:before',
							declaration: `left: ${glitch_position_left}; top: ${glitch_position_top}`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-2 > *:after',
							declaration: `left: ${glitch_position_right}; top: ${glitch_position_top}`,
						},
					]);

					break;
				case '3':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-3 > *:before',
							declaration: `left: ${glitch_position_left}; top: ${glitch_position_top}`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-3 > *:after',
							declaration: `left: ${glitch_position_right}; top: ${glitch_position_top}`,
						},
					]);
					break;
				case '4':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-4 > *:before',
							declaration: `left: ${glitch_position_left}; top: ${glitch_position_top}`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-4 > *:after',
							declaration: `left: ${glitch_position_right}; top: ${glitch_position_top}`,
						},
					]);
					break;
				case '5':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-5 > *:before',
							declaration: `left: ${glitch_position_left}; top: ${glitch_position_top}`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-5 > *:after',
							declaration: `left: ${glitch_position_right}; top: ${glitch_position_top}`,
						},
					]);
					break;
				case '6':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-6 > *:before',
							declaration: `left: ${glitch_position_left}; top: ${glitch_position_top}`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-6 > *:after',
							declaration: `left: ${glitch_position_right}; top: ${glitch_position_top}`,
						},
					]);
					break;
				case '7':
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-7 > *:before',
							declaration: `left: ${glitch_position_left}; top: ${glitch_position_top}`,
						},
					]);
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-glitch-animation-7 > *:after',
							declaration: `left: ${glitch_position_right}; top: ${glitch_position_top}`,
						},
					]);
					break;
				default:
					break;
			}
		}

		return additionalCss;
	}
	render() {
		const props = this.props;

		// Animation Style Changes
		let animationStyle = 'dnxt-glitch-text dnxt-glitch-animation';
		switch (props.glitch_style) {
			case '1':
				animationStyle += '-1';
				break;
			case '2':
				animationStyle += '-2';
				break;
			case '3':
				animationStyle += '-3';
				break;
			case '4':
				animationStyle += '-4';
				break;
			case '5':
				animationStyle += '-5';
				break;
			case '6':
				animationStyle += '-6';
				break;
			case '7':
				animationStyle += '-7';
				break;
			default:
				animationStyle += '-1';
				break;
		}
		// Pre Heading Dynamic Content
		let headingTag = props.heading_tag;
		const heading = {
			headingTag,
			printHeading() {
				let glitchText = props.dynamic.glitch_text;
				let headingComponent = glitchText.render();
				if (glitchText.loading) {
					// Let Divi render the loading placeholder.
					return headingComponent;
				}
				return (
					<div className={animationStyle}>
						<this.headingTag className="dnxt-glitch-text_heading" data-text={props.glitch_text}>
							{headingComponent}
						</this.headingTag>
					</div>
				);
			},
		};
		return <div className="dnxt-txt-glitch-wrap">{heading.printHeading()}</div>;
	}
}

export default NextTextGlitch;
