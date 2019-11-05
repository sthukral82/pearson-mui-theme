import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const StarHalfFilledIcon = props => (
  <SvgIcon
    viewBox="0 0 18 17"
    {...props}
  >
    <path
      fillRule="evenodd"
      stroke="currentcolor"
      fill="currentcolor"
      strokeWidth="1.5"
      d={
        `M6.635 5.108l-4.684.725a.5.5 0 0 0-.284.841l3.42 3.554-.764 4.75a.5.5 0 0 0 .738.516L9 13.288V2.27a.5.5 
        0 0 0-.954-.21l-1.41 3.048z M6.635 5.108l-4.684.725a.5.5 0 0 0-.284.841l3.42 3.554-.764 4.75a.5.5 0 0 0 
        .738.516L9 13.288l3.938 2.206a.5.5 0 0 0 .738-.515l-.764-4.75 3.42-3.555a.5.5 0 0 
        0-.283-.84l-4.684-.726L9.454.98a.5.5 0 0 0-.908 0l-1.91 4.128z`
      }
      transform="scale(-1,1) translate(-18,0)"
    />
  </SvgIcon>
);

export default StarHalfFilledIcon;
