import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Renders a Caret Down Icon. Usually this icon along with CaretUp is used as dropdown open/close indicator.
 *
 * @author Hari Gangadharan
 */
const CaretUp = props => (
  <SvgIcon
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M2.09673 6H9.8979C10.5051 6 10.9973 5.50926 10.9973 4.9039C10.9973 4.60919 10.8783 4.3269 10.6671 
        4.12071L6.76649 0.312922C6.33909 -0.104308 5.65554 -0.104308 5.22814 0.312922L1.32756 4.12071C0.89371 
        4.54424 0.886379 5.23821 1.31118 5.67075C1.51799 5.88133 1.80113 6 2.09673 6Z`
      }
      fill="currentColor"
    />
  </SvgIcon>
);

export default CaretUp;
