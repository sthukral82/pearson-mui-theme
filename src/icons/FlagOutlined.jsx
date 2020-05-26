import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FlagOutlined = props => (
  <SvgIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d={
        `M3.75 1.5h12.743a.75.75 0 0 1 .614 1.181L14.25 6.75l2.857 4.069A.75.75 
        0 0 1 16.493 12H3.75v4.5a.75.75 0 1 1-1.5 0v-15a.75.75 
        0 0 1 1.5 0zm0 1.5v7.5h11.3l-2.633-3.75L15.05 3H3.75z`
      }
    />
  </SvgIcon>
);

export default FlagOutlined;
