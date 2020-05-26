import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Download icon
 *
 * @file Download.jsx
 * @author Sam George
 */
const Download = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentcolor"
        d="M22,15 C22.5522847,15 23,15.4477153 23,16 L23,20 C23,21.6568542 21.6568542,23 20,23 L4,23
        C2.34314575,23 1,21.6568542 1,20 L1,16 C1,15.4477153 1.44771525,15 2,15 C2.55228475,15
        3,15.4477153 3,16 L3,20 C3,20.5522847 3.44771525,21 4,21 L20,21 C20.5522847,21 21,20.5522847
        21,20 L21,16 C21,15.4477153 21.4477153,15 22,15 Z M12,0 C12.5522847,0 13,0.44771525 13,1
        L13,12.5857864 L16.2928932,9.29289322 C16.6834175,8.90236893 17.3165825,8.90236893
        17.7071068,9.29289322 C18.0976311,9.68341751 18.0976311,10.3165825 17.7071068,10.7071068
        L12.7071068,15.7071068 C12.5118446,15.9023689 12.2559223,16 12,16 C11.7440777,16 11.4881554,15.9023689
        11.2928932,15.7071068 L6.29289322,10.7071068 C5.90236893,10.3165825 5.90236893,9.68341751
        6.29289322,9.29289322 C6.68341751,8.90236893 7.31658249,8.90236893 7.70710678,9.29289322
        L11,12.5857864 L11,1 C11,0.44771525 11.4477153,0 12,0 Z"
      />
    </g>
  </SvgIcon>
);

export default Download;
