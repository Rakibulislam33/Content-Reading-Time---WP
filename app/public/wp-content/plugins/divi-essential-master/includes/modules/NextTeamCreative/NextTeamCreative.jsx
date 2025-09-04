// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';
import '../base/get_responsive_css';


class NextTeamCreative extends Component {

  static slug = 'dnxte_team_creative';

  static css(props) {
    const css = [];

    /**
     * Custom Padding Margin Output
     *
     */

    if ('' !== props.team_title_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          'team_title_margin',
          '%%order_class%% .dnxte-cratve-tm-name',
          'margin'
        )
      );
    }
    
    if ('' !== props.team_title_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          'team_title_padding',
          '%%order_class%% .dnxte-cratve-tm-name',
          'padding'
        )
      );
    }

    if ('' !== props.team_position_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          'team_position_margin',
          '%%order_class%% .dnxte-cratve-tm-pos',
          'margin'
        )
      );
    }
    
    if ('' !== props.team_position_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          'team_position_padding',
          '%%order_class%% .dnxte-cratve-tm-pos',
          'padding'
        )
      );
    }

    if ('' !== props.team_btn_margin) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          'team_btn_margin',
          '%%order_class%% .dnext-creative-btn',
          'margin'
        )
      );
    }
    
    if ('' !== props.team_btn_padding) {
      css.push(
        window.DndhCommon.get_responsive_css(
          props,
          'team_btn_padding',
          '%%order_class%% .dnxte-cratve-tm-btn .dnxte-cratve-tm-btn-txt',
          'padding'
        )
      );
    }

    // Social Icon Color
    if ("on|tablet" === props.btn_bg_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-cratve-tm-btn .dnxte-cratve-tm-btn-txt:before",
          declaration: `background-color: ${props.btn_bg_color_tablet};`,
          device: "tablet",
        },
      ]);
    } else if ("on|phone" === props.btn_bg_color_last_edited) {
      css.push([
        {
          selector: "%%order_class%% .dnxte-cratve-tm-btn .dnxte-cratve-tm-btn-txt:before",
          declaration: `background-color: ${props.btn_bg_color_phone};`,
          device: "phone",
        },
      ]);
    } else {
      css.push([
        {
          selector: "%%order_class%% .dnxte-cratve-tm-btn .dnxte-cratve-tm-btn-txt:before",
          declaration: `background-color: ${props.btn_bg_color};`,
        },
      ]);
    }

    return css;
  }

  _teamcreative_description(){
    const props 	= this.props;
  
    //Team Name
    let teamcreativeName = props.dynamic.team_creative_name;
    let teamcreativeNameComponent = teamcreativeName.render();
    if ( teamcreativeName.loading ) return teamcreativeNameComponent;
    
    //Team Position
    let  teamcreativePosition = props.dynamic.team_creative_position;
    let teamcreativePositionComponent = teamcreativePosition.render();
    if ( teamcreativePosition.loading ) return teamcreativePositionComponent;
    
    return (
    <div className="dnxte-cratve-tm-intro">
      <props.header_level className="dnxte-cratve-tm-name">{teamcreativeNameComponent}</props.header_level>
      <p className="dnxte-cratve-tm-pos">{teamcreativePositionComponent}</p>
    </div>
    )
  }

  __renderButton(){
    const props         = this.props;
    const buttonTarget  = 'on' === props.button_link_new_window ? '_blank' : '';
    const buttonLink    = props.button_link;
    const buttonText    = props.button_text;

    let btn_alignment         = props.btn_alignment ? "dnext_btn_alignment_" + props.btn_alignment : "";
    let btn_alignment_tablet  = props.btn_alignment_tablet ? "dnext_btn_alignment_tablet_" + props.btn_alignment_tablet : "";
    let btn_alignment_phone   = props.btn_alignment_phone ? "dnext_btn_alignment_phone_" + props.btn_alignment_phone : "";   
  

    return (
      <div className={`dnext-creative-btn ${btn_alignment} ${btn_alignment_tablet} ${btn_alignment_phone}`}>
        <a href={buttonLink} target={buttonTarget} className="dnxte-cratve-tm-btn"> 
          <span className="dnxte-cratve-tm-btn-txt">{buttonText}</span>
        </a>
      </div>
    );
  }

  render() {
    const props = this.props;
    const socialCreativeItem = props.content;


  // Dynamic Image
	const DnxtTeamCreativeImage = {
		printImage (){
			let dynamicImg 		    = props.dynamic.team_creative_image;
			let dynamicImgTablet 	= props.dynamic.team_creative_image_tablet;
			let dynamicImgPhone  	= props.dynamic.team_creative_image_phone;
			let dynamicImgHover  	= props.dynamic.team_creative_image__hover;
			let dynamiImgAlt      = props.dynamic.team_creative_name;
	
			// Let Divi render the loading placeholder.
			if ( dynamicImg.loading ) return dynamicImg.render();
	
			if( "" !== dynamicImg.value){
				if ( "on|tablet" === props.team_creative_image_last_edited ) {
	
					return <img src={dynamicImgTablet.value ? dynamicImgTablet.value : dynamicImg.value} alt={dynamiImgAlt.value} />
			
				} else if ( "on|phone" === props.team_creative_image_last_edited ) {
			
					return <img src={dynamicImgPhone.value ? dynamicImgPhone.value :(dynamicImgTablet.value ? dynamicImgTablet.value : dynamicImg.value)} alt={dynamiImgAlt.value} />
			
				} else if ( "on|hover" === props.team_creative_image__hover_enabled ) {
				
					return <img src={dynamicImgHover.value ? dynamicImgHover.value : dynamicImg.value } alt={dynamiImgAlt.value} />
					
				}
					return <img src={dynamicImg.value} alt={dynamiImgAlt.value} />
			}
		}
	};

    return (
      <div className="dnxte-cratve-tm dnxte-cratve-tm-social-aside">
        <div className="dnxte-cratve-tm-inner">
          <div className="dnxte-cratve-tm-img-wrap">
            <div className="dnxte-cratve-tm-sswrap">
              <div className="dnxte-cratve-tm-social">
                <ul className="dnxte-cratve-tm-soitem">
                  {socialCreativeItem}
                </ul>
              </div>
            </div>
            <div className="dnxte-cratve-tm-imge">
              <a href="/#">
                {DnxtTeamCreativeImage.printImage()}
                <div className="dnxte-cratve-tm-imframe"></div>
              </a>
            </div>
          </div>
          <div className="dnxte-cratve-tm-info">
            {this._teamcreative_description()}

            {"off" !== props.dnxt_btn_show_hide ? (
                this.__renderButton()
              ): null}

          </div>
        </div>
    </div>
    );
  }
}

export default NextTeamCreative;
