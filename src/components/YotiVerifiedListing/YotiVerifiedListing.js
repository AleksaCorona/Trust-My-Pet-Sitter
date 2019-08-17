import React, { Component } from 'react';
import yoti from '../../components/SectionFeatured/images/yoti.png';
import css from './YotiVerifiedListing.css';
import ReactTooltip from 'react-tooltip';

class YotiVerifiedListing extends Component {
  render() {
    return (
      <span className={css.yotiVerified}>
      <span className={css.separatorVerified}>•</span>
        <img data-tip src={yoti} />
        <ReactTooltip className={css.customTip} effect='solid'>
        <span className={css.tipColor}>  
        Yoti ID Verification
        </span>
      </ReactTooltip>
        <span className={css.verified}>Verified</span>
      </span>
    );
  }
}

export default YotiVerifiedListing;
