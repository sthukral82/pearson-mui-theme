import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CollapseIcon = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d={
        `M2.958 1.8l4.578 4.576a.833.833 0 1 1-1.179 1.179L1.78 2.978l-.006 4.02a.775.775 0 0 1-.773.773A.77.77 0 0 1 
        .23 7l.008-5.97c0-.426.346-.772.773-.773L6.98.249a.77.77 0 0 1 .77.772.775.775 0 0 1-.772.773l-4.02.005zM15.042
        16.24l-4.578-4.578a.833.833 0 1 1 1.179-1.178l4.577 4.577.006-4.02c0-.427.346-.773.773-.773a.77.77 0 0 1 
        .771.77l-.008 5.97a.775.775 0 0 1-.773.774l-5.97.008a.77.77 0 0 1-.77-.772c0-.426.346-.772.772-.773l4.02-.005z`
      }
    />
  </SvgIcon>
);

export default CollapseIcon;
