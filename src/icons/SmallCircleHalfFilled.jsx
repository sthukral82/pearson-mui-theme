import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const SmallCircleHalfFilledIcon = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="currentcolor"
      fill="currentcolor"
      fillRule="evenodd"
      d="M9 13V5a4 4 0 1 0 0 8z M 5, 9 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
      transform="scale(-1,1) translate(-18,0)"
    />
  </SvgIcon>
);

export default SmallCircleHalfFilledIcon;
