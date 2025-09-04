// External Dependencies
import React, { Component } from 'react';
import { getAlignment, renderStars } from '../base/common';
// Internal Dependencies
import './style.css';



class NextRating extends Component {

  static slug = 'dnxte_rating';

  static css(props) {
    const css = [];

    if ( '' !== props.star_size ) {
			css.push([
				{
					selector: '%%order_class%% .dnext-star-rating .et-pb-icon',
					declaration: `font-size: ${props.star_size} !important;`,
				},
			]);
		}
		if ( 'on|tablet' === props.star_size_last_edited ) {
			css.push([
				{
					selector: '%%order_class%% .dnext-star-rating .et-pb-icon',
					declaration: `font-size: ${props.star_size_tablet} !important;`,
					device: 'tablet',
				},
			]);
		}
		if ( 'on|phone' === props.star_size_last_edited ) {
			css.push([
				{
					selector: '%%order_class%% .dnext-star-rating .et-pb-icon',
					declaration: `font-size: ${props.star_size_phone} !important;`,
					device: 'phone',
				},
			]);
    }
    if ( '' !== props.rating_color ) {
      css.push([
        {
          selector: '%%order_class%% .dnext-star-rating i.divinext-star-full::before, %%order_class%% .dnext-star-rating i.divinext-star-1:before, %%order_class%% .dnext-star-rating i.divinext-star-2:before, %%order_class%% .dnext-star-rating i.divinext-star-3:before, %%order_class%% .dnext-star-rating i.divinext-star-4:before, %%order_class%% .dnext-star-rating i.divinext-star-5:before, %%order_class%% .dnext-star-rating i.divinext-star-6:before, %%order_class%% .dnext-star-rating i.divinext-star-7:before, %%order_class%% .dnext-star-rating i.divinext-star-8:before, %%order_class%% .dnext-star-rating i.divinext-star-9:before, %%order_class%% .dnext-star-rating i.divinext-star-10:before',
          declaration: `color: ${props.rating_color};`,
        },
      ]);
    }
    if ( 'on|tablet' === props.rating_color_last_edited ) {
			css.push([
				{
          selector: '%%order_class%% .dnext-star-rating i.divinext-star-full::before, %%order_class%% .dnext-star-rating i.divinext-star-1:before, %%order_class%% .dnext-star-rating i.divinext-star-2:before, %%order_class%% .dnext-star-rating i.divinext-star-3:before, %%order_class%% .dnext-star-rating i.divinext-star-4:before, %%order_class%% .dnext-star-rating i.divinext-star-5:before, %%order_class%% .dnext-star-rating i.divinext-star-6:before, %%order_class%% .dnext-star-rating i.divinext-star-7:before, %%order_class%% .dnext-star-rating i.divinext-star-8:before, %%order_class%% .dnext-star-rating i.divinext-star-9:before, %%order_class%% .dnext-star-rating i.divinext-star-10:before',
          declaration: `color: ${props.rating_color_tablet};`,
					device: 'tablet',
				},
			]);
    }
    if ( 'on|phone' === props.rating_color_last_edited ) {
			css.push([
				{
          selector: '%%order_class%% .dnext-star-rating i.divinext-star-full::before, %%order_class%% .dnext-star-rating i.divinext-star-1:before, %%order_class%% .dnext-star-rating i.divinext-star-2:before, %%order_class%% .dnext-star-rating i.divinext-star-3:before, %%order_class%% .dnext-star-rating i.divinext-star-4:before, %%order_class%% .dnext-star-rating i.divinext-star-5:before, %%order_class%% .dnext-star-rating i.divinext-star-6:before, %%order_class%% .dnext-star-rating i.divinext-star-7:before, %%order_class%% .dnext-star-rating i.divinext-star-8:before, %%order_class%% .dnext-star-rating i.divinext-star-9:before, %%order_class%% .dnext-star-rating i.divinext-star-10:before',
          declaration: `color: ${props.rating_color_phone};`,
					device: 'phone',
				},
			]);
    }

    return css;
  }
  render() {
    const { props }   = this;
    const star_rating_alignment_classes = getAlignment("star_rating_alignment", props, "dnext");
    
    return (
      <div className={`dnxte-star-wrapper ${star_rating_alignment_classes}`}>
        <div className="dnxte-review-social dnext-star-rating" dangerouslySetInnerHTML={renderStars(props.star_rating, props.star_scale||5)}/>
      </div>
    );
  }
}

export default NextRating;
