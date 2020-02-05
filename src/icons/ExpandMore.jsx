import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ExpandMore = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
    />
  </SvgIcon>
);

export default ExpandMore;
