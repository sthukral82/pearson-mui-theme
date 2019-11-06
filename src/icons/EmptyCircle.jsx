import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EmptyCircleIcon = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <circle
      cx="8"
      cy="8"
      r="8"
      fill="currentcolor"
      fillRule="evenodd"
      stroke="#252525"
      strokeWidth="2"
      transform="translate(1 1)"
    />
  </SvgIcon>
);

export default EmptyCircleIcon;
