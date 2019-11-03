import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Renders a Caret Down Icon. Usually this icon along with CaretUp is used as dropdown open/close indicator.
 *
 * @author Hari Gangadharan
 */
const CaretDown = props => (
  <SvgIcon
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M9.8979 0L2.09673 0C1.48954 0 0.997314 0.490743 0.997314 1.0961C0.997314 1.39081 1.11635 1.6731 1.32755 
        1.87929L5.22814 5.68708C5.65554 6.10431 6.33909 6.10431 6.76649 5.68708L10.6671 1.87929C11.1009 1.45576 
        11.1082 0.761786 10.6834 0.329247C10.4766 0.118674 10.1935 0 9.8979 0Z`
      }
      fill="currentColor"
    />
  </SvgIcon>
);

export default CaretDown;
