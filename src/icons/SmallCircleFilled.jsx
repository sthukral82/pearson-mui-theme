import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';


const SmallCircleFilledIcon = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <circle cx="9" cy="9" r="4" fill="currentcolor" stroke="currentcolor" strokeWidth="1.5" />
  </SvgIcon>
);

export default SmallCircleFilledIcon;
