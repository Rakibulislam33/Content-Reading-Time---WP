// External Dependencies
import React, { Component } from 'react';
import { applyBgCss } from '../base/common';
import '../base/get_responsive_css';
// Internal Dependencies
import './style.css';


class NextTeamOverlay extends Component {

  static slug = 'dnxte_team_overlay';

  static css(props) {
	
	  const css = [];
	  
	if ('' !== props.teamovl_title_margin) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_title_margin',
				'%%order_class%% .dnxte-teamovlay-name',
				'margin'
			)
		);
	}

	if ('' !== props.teamovl_title_padding) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_title_padding',
				'%%order_class%% .dnxte-teamovlay-name',
				'padding'
			)
		);
  	}

  	if ('' !== props.teamovl_position_margin) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_position_margin',
				'%%order_class%% .dnxte-teamovlay-pos',
				'margin'
			)
		);
	}

	if ('' !== props.teamovl_position_padding) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_position_padding',
				'%%order_class%% .dnxte-teamovlay-pos',
				'padding'
			)
		);
  	}
	
	if ('' !== props.teamovl_content_margin) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_content_margin',
				'%%order_class%% .dnxte-teamovlay-title',
				'margin'
			)
		);
	}

	if ('' !== props.teamovl_content_padding) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_content_padding',
				'%%order_class%% .dnxte-teamovlay-title',
				'padding'
			)
		);
  	}
	
	// Image Width
	if ('on|tablet' === props.teamovl_img_width_last_edited) {
		css.push([
			{
				selector: '%%order_class%% .dnxte-teamovlay-img img',
				declaration: `max-width: ${props.teamovl_img_width_tablet};`,
				device: 'tablet',
			},
		]);
	} else if ('on|phone' === props.teamovl_img_width_last_edited) {
		css.push([
			{
				selector: '%%order_class%% .dnxte-teamovlay-img img',
				declaration: `max-width: ${props.teamovl_img_width_phone};`,
				device: 'phone',
			},
		]);
	} else if ( 'on|hover' === props.teamovl_img_width__hover_enabled ) {
		css.push([
			{
				selector    : "%%order_class%% .dnxte-teamovlay-img img",
				declaration : `max-width: ${props.teamovl_img_width__hover}`,
			},
		]);
	} else {
		css.push([
			{
				selector: '%%order_class%% .dnxte-teamovlay-img img',
				declaration: `max-width: ${props.teamovl_img_width};`,
			},
		]);
	}

	const imageOverlayBg = {
		slug: "teamovl_hover_overlay_bg_color",
		use_color_gradient_slug: props.teamovl_hover_overlay_bg_use_color_gradient,
		gradient: {
		type: "teamovl_hover_overlay_bg_color_gradient_type",
		direction: "teamovl_hover_overlay_bg_color_gradient_direction",
		radial: "teamovl_hover_overlay_bg_color_gradient_direction_radial",
		start: "teamovl_hover_overlay_bg_color_gradient_start",
		end: "teamovl_hover_overlay_bg_color_gradient_end",
		start_position: "teamovl_hover_overlay_bg_color_gradient_start_position",
		end_position: "teamovl_hover_overlay_bg_color_gradient_end_position",
		overlays_image: "teamovl_hover_overlay_bg_color_gradient_overlays_image",
		},
		css_property: {
		desktop: "%%order_class%% .dnxte-teamovlay-info",
		},
	};


	applyBgCss(css, props, imageOverlayBg);

	// if ( 'on|tablet' === props.teamovl_hover_overlay_last_edited ) {
	// 	css.push([
	// 		{
	// 			selector: '%%order_class%% .dnxte-teamovlay-info',
	// 			declaration: `background: ${props.teamovl_hover_overlay_tablet};`,
	// 			device: 'tablet',
	// 		},
	// 	]);
	// } else if ( 'on|phone' === props.teamovl_hover_overlay_last_edited ) {
	// 	css.push([
	// 		{
	// 			selector: '%%order_class%% .dnxte-teamovlay-info',
	// 			declaration: `background: ${props.teamovl_hover_overlay_phone};`,
	// 			device: 'phone',
	// 		},
	// 	]);
	// } else {
	// 	css.push([
	// 		{
	// 			selector: '%%order_class%% .dnxte-teamovlay-info',
	// 			declaration: `background: ${props.teamovl_hover_overlay};`,
	// 		},
	// 	]);
	// }
	
	return css;
}

  _teamoverlay_description(){
	const props 	= this.props;

	//Team Name
	let teamoverlayName = props.dynamic.teamoverlay_name;
	let teamoverlayNameComponent = teamoverlayName.render();
	if ( teamoverlayName.loading ) return teamoverlayNameComponent;
  
	//Team Position
	let  teamoverlayPosition = props.dynamic.teamoverlay_position;
	let teamoverlayPositionComponent = teamoverlayPosition.render();
	if ( teamoverlayPosition.loading ) return teamoverlayPositionComponent;
  
	return (
	<div className="dnxte-teamovlay-title">
		<props.header_level className="dnxte-teamovlay-name">{teamoverlayNameComponent}</props.header_level>
		<p className="dnxte-teamovlay-pos">{teamoverlayPositionComponent}</p>
	</div>
	)
	}

  render() {
             const props = this.props;
             const socialItemContent = props.content;

             // Dynamic Image
             const DnxtTeamoverlayImage = {
               printImage() {
                 let dynamicImg = props.dynamic.teamoverlay_image;
                 let dynamicImgTablet = props.dynamic.teamoverlay_image_tablet;
                 let dynamicImgPhone = props.dynamic.teamoverlay_image_phone;
                 let dynamicImgHover = props.dynamic.teamoverlay_image__hover;
                 let dynamiImgAlt = props.dynamic.teamoverlay_name;

                 // Let Divi render the loading placeholder.
                 if (dynamicImg.loading) return dynamicImg.render();

                 if ("" !== dynamicImg.value) {
                   if ("on|tablet" === props.teamoverlay_image_last_edited) {
                     return (
                       <img
                         src={
                           dynamicImgTablet.value
                             ? dynamicImgTablet.value
                             : dynamicImg.value
                         }
                         alt={dynamiImgAlt.value}
                       />
                     );
                   } else if (
                     "on|phone" === props.teamoverlay_image_last_edited
                   ) {
                     return (
                       <img
                         src={
                           dynamicImgPhone.value
                             ? dynamicImgPhone.value
                             : dynamicImgTablet.value
                             ? dynamicImgTablet.value
                             : dynamicImg.value
                         }
                         alt={dynamiImgAlt.value}
                       />
                     );
                   } else if (
                     "on|hover" === props.teamoverlay_image__hover_enabled
                   ) {
                     return (
                       <img
                         src={
                           dynamicImgHover.value
                             ? dynamicImgHover.value
                             : dynamicImg.value
                         }
                         alt={dynamiImgAlt.value}
                       />
                     );
                   }
                   return (
                     <img src={dynamicImg.value} alt={dynamiImgAlt.value} />
                   );
                 }
               },
             };

             let social_item_alignment = props.teamovl_alignment
               ? "dnext_teamovl_social_alignment_" + props.teamovl_alignment
               : "";
             let social_item_alignment_tablet = props.teamovl_alignment_tablet
               ? "dnext_teamovl_social_alignment_tablet_" +
                 props.teamovl_alignment_tablet
               : "";
             let social_item_alignment_phone = props.teamovl_alignment_phone
               ? "dnext_teamovl_social_alignment_phone_" +
                 props.teamovl_alignment_phone
               : "";

             return (
               <div className="dnxte-teamovlay-wrap">
                 <div className="dnxte-teamovlay-img">
                   {DnxtTeamoverlayImage.printImage()}
                 </div>
                 <div className="dnxte-teamovlay-info">
                   <div className="dnxte-teamovlay-info-inner">
                     {this._teamoverlay_description()}
                     <div className="dnxte-teamovlay-social">
                       <ul
                         className={`dnxte-teamovlay-so-item ${social_item_alignment} ${social_item_alignment_tablet} ${social_item_alignment_phone}`}
                       >
                         {socialItemContent}
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             );
           }
}

export default NextTeamOverlay;
