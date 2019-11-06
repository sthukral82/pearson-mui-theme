import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FolderIcon = props => (
  <SvgIcon
    viewBox="0 0 22 18"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d={
        `M20 16H2V4h18v12zm-.2-13.75H11L8.8 0H2.2C.979 0 0 1.001 0 2.25v13.5C0 16.993.985 18 2.2 18h17.6c1.215 0 
        2.2-1.007 2.2-2.25V4.5c0-1.249-.99-2.25-2.2-2.25z`
      }
    />
  </SvgIcon>
);

export default FolderIcon;
