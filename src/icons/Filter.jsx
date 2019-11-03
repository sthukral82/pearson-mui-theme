import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const FilterIcon = props => (
  <SvgIcon viewBox="0 0 16 12" {...props}>
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 11h2M1 1h14M4 6h8"
    />
  </SvgIcon>
);

export default FilterIcon;
