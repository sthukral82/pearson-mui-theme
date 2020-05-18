import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Icon for Book Open Icon.
 *
 * @author Hari Gangadharan
 */
const BookOutlined = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M13.25 22.3777C13.25 22.3777 13 23 12.5 23H11.5C11 23 10.75 22.3777 10.75 22.3777C9.111 21.4806 7.2606 21 
        5.36364 21H2C1.44772 21 1 20.5523 1 20L1 3C1 2.44772 1.44772 2 2 2L5.36364 2C7.76104 2 10.0841 2.76764 
        12 4.1735C14.826 2.7245 17.0381 2 18.6364 2L22 2C22.5523 2 23 2.44772 23 3V20C23 20.5523 22.5523 21 22 
        21H18.6364C16.7394 21 14.889 21.4806 13.25 22.3777ZM11 5.92393C9.3917 4.68108 7.41067 4 5.36364 
        4H3V19H5.36364C7.32884 19 9.25163 19.4378 11 20.2619V5.92393ZM13 5.92393V20.2619C14.7484 19.4378 16.6712 19 
        18.6364 19H21V4H18.6364C16.5893 4 14.6083 4.68108 13 5.92393Z`
      }
    />
  </SvgIcon>
);

export default BookOutlined;
