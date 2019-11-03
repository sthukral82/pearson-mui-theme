import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowBackIcon = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentcolor"
      d={
        `M3.416 8H17a1 1 0 0 1 0 2H3.416l6.29 6.291a1.001 1.001 0 1 1-1.415 1.416L.293 9.709a1.001 1.001 0 0 1 
        0-1.418L8.291.293A1.001 1.001 0 1 1 9.707 1.71L3.416 8z`
      }
    />
  </SvgIcon>
);

export default ArrowBackIcon;
