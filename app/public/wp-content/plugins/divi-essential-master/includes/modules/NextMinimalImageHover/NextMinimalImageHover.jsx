// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class NextMinimalImageHover extends Component {

  static slug = 'dnxte_minimal_image_hover';

  render() {
    const props = this.props;

    let dnxtmih_image_hover_effect = props.dnxtmih_image_hover_effect;
        // Dynamic Image
	const DnxtmihImage = () => {
		let dynamicImg 		  = props.dynamic.image;
		let dynamicImgTablet  = props.dynamic.image_tablet;
		let dynamicImgPhone   = props.dynamic.image_phone;
		let dynamicImgHover   = props.dynamic.image__hover;
		let dynamicImgAlt 	  = props.dynamic.alt;

		// Let Divi render the loading placeholder.
		if ( dynamicImg.loading ) return dynamicImg.render();
		// select image or icon
		if ( "on|tablet" === props.image_last_edited ) {

			return <figure><img className="img-fluid" src={dynamicImgTablet.value ? dynamicImgTablet.value : dynamicImg.value} alt={dynamicImgAlt.value} /></figure>

		} else if ( "on|phone" === props.image_last_edited ) {

			return <figure><img className="img-fluid" src={dynamicImgPhone.value ? dynamicImgPhone.value :(dynamicImgTablet.value ? dynamicImgTablet.value : dynamicImg.value)} alt={dynamicImgAlt.value} /></figure>

		} else if ( "on|hover" === props.image__hover_enabled ) {
	
			return <figure><img className="img-fluid" src={dynamicImgHover.value ? dynamicImgHover.value : dynamicImg.value } alt={dynamicImgAlt} /></figure>;
		
		}
		return <figure><img className="img-fluid" src={dynamicImg.value} alt={dynamicImgAlt.value} /></figure>
	};
    return (
      	<div className={`dnext-neip-mih-hover-effect dnext-neip-mih-${dnxtmih_image_hover_effect}`}>
			<DnxtmihImage/>
		</div>
    );
  }
}

export default NextMinimalImageHover;
