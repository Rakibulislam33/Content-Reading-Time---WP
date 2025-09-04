// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class NextTextColorMotion extends Component {

  static slug = 'dnxte_text_color_motion';

	static css(props) {
		const additionalCss = [];		
		switch (props.text_color_motion_style) {
			case 'dnxt-grdnt-text-animation':
				// Color Motion Color
				if ('linear-gradient' === props.color_motion_type) {
					if (
						'' !== props.color_motion_color_one ||
						'' !== props.color_motion_color_two ||
						'' !== props.color_motion_color_three ||
						'' !== props.color_motion_color_four
					) {
						additionalCss.push([
							{
								selector: '%%order_class%% .dnxt-grdnt-text-animation',
								declaration: `background: linear-gradient(${props.color_motion_type_linear_direction},${props.color_motion_color_one} ${props.color_motion_color_one_position},${props.color_motion_color_two} ${props.color_motion_color_two_position},${props.color_motion_color_three} ${props.color_motion_color_three_position},${props.color_motion_color_four} ${props.color_motion_color_four_position});
								background-size: 300% 300%;
								color: transparent;
								background-clip: text;
								-webkit-background-clip: text;
								 -webkit-text-fill-color: transparent;
								 animation: dnxtgradient ${props.color_motion_text_duration} ease-in-out infinite;
								-webkit-animation: dnxtgradient ${props.color_motion_text_duration} ease-in-out infinite;
								 `,
							},
						]);
					}
				}
				if ('radial-gradient' === props.color_motion_type) {
					if (
						'' !== props.color_motion_color_one ||
						'' !== props.color_motion_color_two ||
						'' !== props.color_motion_color_three ||
						'' !== props.color_motion_color_four
					) {
						additionalCss.push([
							{
								selector: '%%order_class%% .dnxt-grdnt-text-animation',
								declaration: `background: radial-gradient(${props.color_motion_type_radial_direction},${props.color_motion_color_one} ${props.color_motion_color_one_position},${props.color_motion_color_two} ${props.color_motion_color_two_position},${props.color_motion_color_three} ${props.color_motion_color_three_position},${props.color_motion_color_four} ${props.color_motion_color_four_position});
							background-size: 300% 300%;
							color: transparent;
							background-clip: text;
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
							animation: dnxtgradient ${props.color_motion_text_duration} ease-in-out infinite;
							-webkit-animation: dnxtgradient ${props.color_motion_text_duration} ease-in-out infinite;
							 `,
							},
						]);
					}
				}
				break;
			case 'dnxt-grdnt-text-animation-2':
				if ('linear-gradient' === props.color_motion_type) {
					if (
						'' !== props.color_motion_color_one ||
						'' !== props.color_motion_color_two ||
						'' !== props.color_motion_color_three ||
						'' !== props.color_motion_color_four
					) {
						additionalCss.push([
							{
								selector: '%%order_class%% .dnxt-grdnt-text-animation-2',
								declaration: `background: linear-gradient(${props.color_motion_type_linear_direction},${props.color_motion_color_one} ${props.color_motion_color_one_position},${props.color_motion_color_two} ${props.color_motion_color_two_position},${props.color_motion_color_three} ${props.color_motion_color_three_position},${props.color_motion_color_four} ${props.color_motion_color_four_position});
								color: transparent;
								background-size: 200% auto;
								background-clip: text;
								-webkit-background-clip: text;
								-webkit-text-fill-color: transparent;
								-webkit-animation: textclip ${props.color_motion_text_duration} linear infinite;
								animation: textclip ${props.color_motion_text_duration} linear infinite;
								 `,
							},
						]);
					}
				}
				if ('radial-gradient' === props.color_motion_type) {
					if (
						'' !== props.color_motion_color_one ||
						'' !== props.color_motion_color_two ||
						'' !== props.color_motion_color_three ||
						'' !== props.color_motion_color_four
					){
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-grdnt-text-animation-2',
							declaration: `background: radial-gradient(${props.color_motion_type_radial_direction},${props.color_motion_color_one} ${props.color_motion_color_one_position},${props.color_motion_color_two} ${props.color_motion_color_two_position},${props.color_motion_color_three} ${props.color_motion_color_three_position},${props.color_motion_color_four} ${props.color_motion_color_four_position});
							color: transparent;
							background-size: 200% auto;
							background-clip: text;
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
							-webkit-animation: textclip ${props.color_motion_text_duration} linear infinite;
							animation: textclip ${props.color_motion_text_duration} linear infinite;
							 `,
						},
					]);
				}
				}
				break;
			default:
				if (
					'' !== props.color_motion_color_one ||
					'' !== props.color_motion_color_two ||
					'' !== props.color_motion_color_three ||
					'' !== props.color_motion_color_four
				) {
					additionalCss.push([
						{
							selector: '%%order_class%% .dnxt-grdnt-text-animation',
							declaration: `background: linear-gradient(${props.color_motion_type_linear_direction},${props.color_motion_color_one} ${props.color_motion_color_one_position},${props.color_motion_color_two} ${props.color_motion_color_two_position},${props.color_motion_color_three} ${props.color_motion_color_three_position},${props.color_motion_color_four} ${props.color_motion_color_four_position});
							background-size: 300% 300%;
							color: transparent;
							background-clip: text;
							-webkit-background-clip: text;
							 -webkit-text-fill-color: transparent;
							 animation: dnxtgradient ${props.color_motion_text_duration} ease-in-out infinite;
							-webkit-animation: dnxtgradient ${props.color_motion_text_duration} ease-in-out infinite;
							 `,
						},
					]);
				}
				break;
		}

		return additionalCss;
	}
	render() {
		const props = this.props;		
		// Pre Heading Dynamic Content
		let headingTag = props.heading_tag;
		const heading = {
			headingTag,
			printHeading() {
				const text_color_motion = props.dynamic.text_color_motion;
				let headingComponent = text_color_motion.render();
				if (text_color_motion.loading) {
					// Let Divi render the loading placeholder.				
					return headingComponent;
				}
				return (
					<this.headingTag
						className={'dnxt-grdnt-text-animation_font ' + props.text_color_motion_style}
					>
						{headingComponent}
					</this.headingTag>
				);
			},
		};
		return <div>{heading.printHeading()}</div>;
	}
}

export default NextTextColorMotion;
