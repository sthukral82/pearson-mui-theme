import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ChevronUp = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
    />
  </SvgIcon>
);

export default ChevronUp;
