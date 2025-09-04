// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';
import '../base/get_responsive_css';


class NextTeamSocialReveal extends Component {

  static slug = 'dnxte_team_social_reveal';

  static css(props) {
    const additionalCss = [];

    /**
	 * Custom Padding Margin Output
	 *
	 */
	if ('' !== props.teamsorev_image_margin) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_image_margin',
				'%%order_class%% .dnxte-teamsorev-mem-img',
				'margin'
			)
		);
	}

	if ('' !== props.teamsorev_image_padding) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_image_padding',
				'%%order_class%% .dnxte-teamsorev-mem-img',
				'padding'
			)
		);
  	}
  
	if ('' !== props.teamsorev_content_margin) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_content_margin',
				'%%order_class%% .dnxte-teamsorev-mem-des',
				'margin'
			)
		);
	}

	if ('' !== props.teamsorev_content_padding) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_content_padding',
				'%%order_class%% .dnxte-teamsorev-mem-des',
				'padding'
			)
		);
  	}
  
	if ('' !== props.teamsorev_title_margin) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_title_margin',
				'%%order_class%% .dnxte-teamsorev-team-header',
				'margin'
			)
		);
	}

	if ('' !== props.teamsorev_title_padding) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_title_padding',
				'%%order_class%% .dnxte-teamsorev-team-header',
				'padding'
			)
		);
  }
  
	if ('' !== props.teamsorev_position_margin) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_position_margin',
				'%%order_class%% .dnxte-teamsorev-team-pos',
				'margin'
			)
		);
	}

	if ('' !== props.teamsorev_position_padding) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_position_padding',
				'%%order_class%% .dnxte-teamsorev-team-pos',
				'padding'
			)
		);
  	}
  
	if ('' !== props.teamsorev_body_margin) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_body_margin',
				'%%order_class%% .dnxte-teamsorev-team-detals p',
				'margin'
			)
		);
	}

	if ('' !== props.teamsorev_body_padding) {
		additionalCss.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamsorev_body_padding',
				'%%order_class%% .dnxte-teamsorev-team-detals p',
				'padding'
			)
		);
	}

    // Image Width
	if ('on|tablet' === props.teamsorev_img_width_last_edited) {
		additionalCss.push([
			{
				selector: '%%order_class%% .dnxte-teamsorev-mem-img img',
				declaration: `max-width: ${props.teamsorev_img_width_tablet};`,
				device: 'tablet',
			},
		]);
	} else if ('on|phone' === props.teamsorev_img_width_last_edited) {
		additionalCss.push([
			{
				selector: '%%order_class%% .dnxte-teamsorev-mem-img img',
				declaration: `max-width: ${props.teamsorev_img_width_phone};`,
				device: 'phone',
			},
		]);
	} else if ( 'on|hover' === props.teamsorev_img_width__hover_enabled ) {
		additionalCss.push([
			{
				selector    : "%%order_class%% .dnxte-teamsorev-mem-img img",
				declaration : `max-width: ${props.teamsorev_img_width__hover}`,
			},
		]);
	} else {
		additionalCss.push([
			{
				selector: '%%order_class%% .dnxte-teamsorev-mem-img img',
				declaration: `max-width: ${props.teamsorev_img_width};`,
			},
		]);
    }

    // Image BG Color
	if ( 'off' !== props.teamsorev_image_bgc_show_hide ) {
		if ( 'on|tablet' === props.teamsorev_img_bgc_color_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxte-teamsorev-mem-img',
					declaration: `background: ${props.teamsorev_img_bgc_color_tablet};`,
					device: 'tablet',
				},
			]);
		} else if ( 'on|phone' === props.teamsorev_img_bgc_color_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxte-teamsorev-mem-img',
					declaration: `background: ${props.teamsorev_img_bgc_color_phone};`,
					device: 'phone',
				},
			]);
		} else {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxte-teamsorev-mem-img',
					declaration: `background: ${props.teamsorev_img_bgc_color};`,
				},
			]);
		}
  	}
	
	// Image Gradient 
	if( 'off' !== props.teamsorev_img_gradient_show_hide ) {

		let teamsorevImgGradientDirection      = props.teamsorev_img_gradient_type === 'linear-gradient' ? props.teamsorev_img_gradient_type_linear_direction : props.teamsorev_img_gradient_type_radial_direction;
		let teamsorevImgGradientColorOne       = props.teamsorev_img_gradient_color_one;
		let teamsorevImgGradientColorTwo       = props.teamsorev_img_gradient_color_two;
		let teamsorevImgGradientStartPosition  = props.teamsorev_img_gradient_start_position;
		let teamsorevImgGradientEndPosition    = props.teamsorev_img_gradient_end_position;

		let teamsorevImgGradientdient = `background: ${props.teamsorev_img_gradient_type}(${teamsorevImgGradientDirection}, ${teamsorevImgGradientColorOne} ${teamsorevImgGradientStartPosition}, ${teamsorevImgGradientColorTwo} ${teamsorevImgGradientEndPosition}) !important;`;


		additionalCss.push([{
			selector: `%%order_class%% .dnxte-teamsorev-mem-img`,
			declaration: teamsorevImgGradientdient,
		}]);
	}

	let teamsorev_img_bgi_image			= props.teamsorev_img_bgi_image;
	let teamsorev_img_bgi_image_tablet	= props.teamsorev_img_bgi_image_tablet;
	let teamsorev_img_bgi_image_phone	= props.teamsorev_img_bgi_image_phone;

	// Image Background
	if ( "off" !== props.teamsorev_img_bgi_show_hide ) {
		if ( 'on|tablet' === props.teamsorev_img_bgi_image_last_edited ) {
			additionalCss.push([
				{
				selector: '%%order_class%% .dnxte-teamsorev-mem-img',
				declaration: `background-image: url(${teamsorev_img_bgi_image_tablet ? teamsorev_img_bgi_image_tablet : teamsorev_img_bgi_image}) !important`,
				},
			]);
		}  else if ( 'on|phone' === props.teamsorev_img_bgi_image_last_edited ) {
			additionalCss.push([
				{
				selector: '%%order_class%% .dnxte-teamsorev-mem-img',
				declaration: `background-image: url(${teamsorev_img_bgi_image_phone ? teamsorev_img_bgi_image_phone : (teamsorev_img_bgi_image_tablet ? teamsorev_img_bgi_image_tablet : teamsorev_img_bgi_image)}) !important`,
				},
			]);
		} else {
			additionalCss.push([
				{
				selector: '%%order_class%% .dnxte-teamsorev-mem-img',
				declaration: `background-image: url(${teamsorev_img_bgi_image}) !important`,
				},
			]);
		}
	}

	// Content BG Color
	if ( 'off' !== props.teamsorev_bgc_show_hide ) {
		if ( 'on|tablet' === props.teamsorev_bgc_bgc_color_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxte-teamsorev-team-01 .dnxte-teamsorev-team-con-wrapper',
					declaration: `background: ${props.teamsorev_bgc_bgc_color_tablet};`,
					device: 'tablet',
				},
			]);
		} else if ( 'on|phone' === props.teamsorev_bgc_bgc_color_last_edited ) {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxte-teamsorev-team-01 .dnxte-teamsorev-team-con-wrapper',
					declaration: `background: ${props.teamsorev_bgc_bgc_color_phone};`,
					device: 'phone',
				},
			]);
		} else {
			additionalCss.push([
				{
					selector: '%%order_class%% .dnxte-teamsorev-team-01 .dnxte-teamsorev-team-con-wrapper',
					declaration: `background: ${props.teamsorev_bgc_bgc_color};`,
				},
			]);
		}
  	}
  
  	// Content Gradient 
	if( 'off' !== props.teamsorev_gradient_show_hide ) {

		let teamsorevGradientDirection      = props.teamsorev_gradient_type === 'linear-gradient' ? props.teamsorev_gradient_type_linear_direction : props.teamsorev_gradient_type_radial_direction;
		let teamsorevGradientColorOne       = props.teamsorev_gradient_color_one;
		let teamsorevGradientColorTwo       = props.teamsorev_gradient_color_two;
		let teamsorevGradientStartPosition  = props.teamsorev_gradient_start_position;
		let teamsorevGradientEndPosition    = props.teamsorev_gradient_end_position;

		let teamsorevGradientdient = `background: ${props.teamsorev_gradient_type}(${teamsorevGradientDirection}, ${teamsorevGradientColorOne} ${teamsorevGradientStartPosition}, ${teamsorevGradientColorTwo} ${teamsorevGradientEndPosition}) !important;`;


		additionalCss.push([{
			selector: `%%order_class%% .dnxte-teamsorev-team-01 .dnxte-teamsorev-team-con-wrapper`,
			declaration: teamsorevGradientdient,
		}]);
	}
    
    return additionalCss;
  }

  _member_description(){
    const props 	= this.props;
    //Team Name
		let teamsorevName = props.dynamic.teamsorev_name;
		let teamsorevNameComponent = teamsorevName.render();
    if ( teamsorevName.loading ) return teamsorevNameComponent;
    
    //Team Position
		let  teamsorevPosition = props.dynamic.teamsorev_position;
		let teamsorevPositionComponent = teamsorevPosition.render();
    if ( teamsorevPosition.loading ) return teamsorevPositionComponent;
    
		// Description Dynamic Content
		const teamsorevContent = props.dynamic.teamsorev_content;
		let teamsorevContentComponent = teamsorevContent.render();
		if ( teamsorevContent.loading ) return teamsorevContentComponent;
    return (
      <div className="dnxte-teamsorev-team-con-wrapper">
        <props.header_level className="dnxte-teamsorev-team-header">{teamsorevNameComponent}</props.header_level>
        <p className="dnxte-teamsorev-team-pos">{teamsorevPositionComponent}</p>
        {teamsorevContentComponent}
      </div>
    )
  }

  render() {
    const props = this.props;
    const socialItems = this.props.content;

    // Dynamic Image
    const DnxtTeamsorevImage = {
		printImage(){
			let dynamicImg 			= props.dynamic.teamsorev_image;
			let dynamicImgTablet 	= props.dynamic.teamsorev_image_tablet;
			let dynamicImgPhone  	= props.dynamic.teamsorev_image_phone;
			let dynamicImgHover  	= props.dynamic.teamsorev_image__hover;
			let dynamiImgAlt     	= props.dynamic.teamsorev_name;
	  
			
			// Let Divi render the loading placeholder.
			if ( dynamicImg.loading ) return dynamicImg.render();
			// select image or icon
			if("" !== dynamicImg.value ) {
				if ( "on|tablet" === props.teamsorev_image_last_edited ) {
	  
					return <img src={dynamicImgTablet.value ? dynamicImgTablet.value : dynamicImg.value} alt={dynamiImgAlt.value} />
			
				  } else if ( "on|phone" === props.teamsorev_image_last_edited ) {
			
					return <img src={dynamicImgPhone.value ? dynamicImgPhone.value :(dynamicImgTablet.value ? dynamicImgTablet.value : dynamicImg.value)} alt={dynamiImgAlt.value} />
			
				  } else if ( "on|hover" === props.teamsorev_image__hover_enabled ) {
				
					return <img src={dynamicImgHover.value ? dynamicImgHover.value : dynamicImg.value } alt={dynamiImgAlt.value} />
				  
				  }
				  return <img src={dynamicImg.value} alt={dynamiImgAlt.value} />
			}
		}
    };

    let teamsorev_img_alignment         = props.teamsorev_img_alignment ? "teamsorev_img_alignment_" + props.teamsorev_img_alignment : "";
    let teamsorev_img_alignment_tablet  = props.teamsorev_img_alignment_tablet ? "teamsorev_img_alignment_tablet_" + props.teamsorev_img_alignment_tablet : "";
    let teamsorev_img_alignment_phone   = props.teamsorev_img_alignment_phone ? "teamsorev_img_alignment_phone_" + props.teamsorev_img_alignment_phone : "";

	const teamsorevStyle = props.teamsorev_style ? `dnxte-teamsorev-anim-` + props.teamsorev_style : "dnxte-teamsorev-anim-01";
	
    return (
      <div className="dnxte-teamsorev-team-wrapper">
        <div className={`dnxte-teamsorev-team-01 ${teamsorevStyle}`}>
            <div className={`dnxte-teamsorev-mem-img ${teamsorev_img_alignment} ${teamsorev_img_alignment_tablet} ${teamsorev_img_alignment_phone}`}>
              {DnxtTeamsorevImage.printImage()}
            </div>
            <div className="dnxte-teamsorev-mem-des">
              {this._member_description()}
              <ul className="dnxte-teamsorev-social-item">
                {socialItems}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default NextTeamSocialReveal;
