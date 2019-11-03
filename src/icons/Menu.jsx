import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const MenuIcon = props => (
  <SvgIcon viewBox="0 0 20 18" {...props}>
    <path
      fill="currentcolor"
      d={
        `M1 0h18a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zM1 8h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zM1 16h18a1 1 0 0 1 0 
        2H1a1 1 0 0 1 0-2z`
      }
    />
  </SvgIcon>
);

export default MenuIcon;
