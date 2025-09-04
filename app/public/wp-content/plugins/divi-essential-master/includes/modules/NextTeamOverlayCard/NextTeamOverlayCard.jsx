// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';
import '../base/get_responsive_css';


class NextTeamOverlayCard extends Component {

  static slug = 'dnxte_team_overlay_card';

  static css(props) {
	
    const css = [];


  /**
	 * Custom Padding Margin Output
	 *
	 */

  if ('' !== props.teamovl_card_img_margin) {
    css.push(
      window.DndhCommon.get_responsive_css(
        props,
        'teamovl_card_img_margin',
        '%%order_class%% .dnxte-ovlycard-wrap',
        'margin'
      )
    );
  }
  
  if ('' !== props.teamovl_card_img_padding) {
    css.push(
      window.DndhCommon.get_responsive_css(
        props,
        'teamovl_card_img_padding',
        '%%order_class%% .dnxte-ovlycard-wrap',
        'padding'
      )
    );
  }
  if ('' !== props.teamovl_card_desc_margin) {
    css.push(
      window.DndhCommon.get_responsive_css(
        props,
        'teamovl_card_desc_margin',
        '%%order_class%% .dnxte-ovlycard-title',
        'margin'
      )
    );
  }
  
  if ('' !== props.teamovl_card_desc_padding) {
    css.push(
      window.DndhCommon.get_responsive_css(
        props,
        'teamovl_card_desc_padding',
        '%%order_class%% .dnxte-ovlycard-title',
        'padding'
      )
    );
  }

  if ('' !== props.teamovl_card_title_margin) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_card_title_margin',
				'%%order_class%% .dnxte-ovlyintro-name',
				'margin'
			)
		);
	}

	if ('' !== props.teamovl_card_title_padding) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_card_title_padding',
				'%%order_class%% .dnxte-ovlyintro-name',
				'padding'
			)
		);
  }

  if ('' !== props.teamovl_card_position_margin) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_card_position_margin',
				'%%order_class%% .dnxte-ovlyintro-pos',
				'margin'
			)
		);
	}

	if ('' !== props.teamovl_card_position_padding) {
		css.push(
			window.DndhCommon.get_responsive_css(
				props,
				'teamovl_card_position_padding',
				'%%order_class%% .dnxte-ovlyintro-pos',
				'padding'
			)
		);
  }
    
    if ( 'on|tablet' === props.teamovlcard_hover_overlay_last_edited ) {
      css.push([
        {
          selector: '%%order_class%% .dnxte-ovlycard-info',
          declaration: `background: ${props.teamovlcard_hover_overlay_tablet};`,
          device: 'tablet',
        },
      ]);
    } else if ( 'on|phone' === props.teamovlcard_hover_overlay_last_edited ) {
      css.push([
        {
          selector: '%%order_class%% .dnxte-ovlycard-info',
          declaration: `background: ${props.teamovlcard_hover_overlay_phone};`,
          device: 'phone',
        },
      ]);
    } else {
      css.push([
        {
          selector: '%%order_class%% .dnxte-ovlycard-info',
          declaration: `background: ${props.teamovlcard_hover_overlay};`,
        },
      ]);
    }

    return css;
  }
    _teamoverlay_card_memeber(){
      const props 	= this.props;
    
      //Team Name
      let teamoverlayCardName = props.dynamic.teamoverlay_card_name;
      let teamoverlayCardNameComponent = teamoverlayCardName.render();
      if ( teamoverlayCardName.loading ) return teamoverlayCardNameComponent;
      
      //Team Position
      let  teamoverlayCardPosition = props.dynamic.teamoverlay_card_position;
      let teamoverlayCardPositionComponent = teamoverlayCardPosition.render();
      if ( teamoverlayCardPosition.loading ) return teamoverlayCardPositionComponent;
      
      return (
        <div className="dnxte-ovlyintro">
          <props.header_level className="dnxte-ovlyintro-name">{teamoverlayCardNameComponent}</props.header_level>
          <p className="dnxte-ovlyintro-pos">{teamoverlayCardPositionComponent}</p>
        </div>
      )
    }

    _teamoverlay_card_description(){
      const props 	= this.props;

      // Description Dynamic Content
      const teamoverlayCardContent = props.dynamic.teamovelay_card_content;
      let teamoverlayCardContentComponent = teamoverlayCardContent.render();
      if ( teamoverlayCardContent.loading ) return teamoverlayCardContentComponent;
      
      return(
        <div className="dnxte-ovlycard-title">
          {teamoverlayCardContentComponent}
        </div>
      )
    }

  render() {
             const props = this.props;
             const socialCardItemContent = props.content;

             // Dynamic Image
             const DnxtTeamoverlayCardImage = {
               printImage() {
                 let dynamicImg = props.dynamic.teamoverlay_card_image;
                 let dynamicImgTablet =
                   props.dynamic.teamoverlay_card_image_tablet;
                 let dynamicImgPhone =
                   props.dynamic.teamoverlay_card_image_phone;
                 let dynamicImgHover =
                   props.dynamic.teamoverlay_card_image__hover;
                 let dynamiImgAlt = props.dynamic.teamoverlay_card_name;

                 // Let Divi render the loading placeholder.
                 if (dynamicImg.loading) return dynamicImg.render();

                 if ("" !== dynamicImg.value) {
                   if (
                     "on|tablet" === props.teamoverlay_card_image_last_edited
                   ) {
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
                     "on|phone" === props.teamoverlay_card_image_last_edited
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
                     "on|hover" === props.teamoverlay_card_image__hover_enabled
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
             let social_item_alignment = props.teamovlcard_alignment
               ? "dnext_teamovl_card_social_alignment_" +
                 props.teamovlcard_alignment
               : "";
             let social_item_alignment_tablet = props.teamovlcard_alignment_tablet
               ? "dnext_teamovl_card_social_alignment_tablet_" +
                 props.teamovlcard_alignment_tablet
               : "";
             let social_item_alignment_phone = props.teamovlcard_alignment_phone
               ? "dnext_teamovl_card_social_alignment_phone_" +
                 props.teamovlcard_alignment_phone
               : "";

             return (
               <div className="dnxte-ovlycard-wrapper">
                 <div className="dnxte-ovlycard-wrap">
                   <div className="dnxte-ovlycard-img">
                     {DnxtTeamoverlayCardImage.printImage()}
                   </div>
                   <div className="dnxte-ovlycard-info">
                     <div className="dnxte-ovlycard-info-inner">
                       {this._teamoverlay_card_description()}
                       <div className="dnxte-ovlycard-social">
                         <ul
                           className={`dnxte-ovlycard-so-item ${social_item_alignment} ${social_item_alignment_tablet} ${social_item_alignment_phone}`}
                         >
                           {socialCardItemContent}
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
                 {this._teamoverlay_card_memeber()}
               </div>
             );
           }
}

export default NextTeamOverlayCard;
