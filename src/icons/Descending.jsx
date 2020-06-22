import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Descending icon
 *
 * @file Descending.jsx
 * @author Sam George
 */
const Descending = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M13,16.5857864 L16.2928932,13.2928932 C16.6834175,12.9023689
      17.3165825,12.9023689 17.7071068,13.2928932 C18.0976311,13.6834175
      18.0976311,14.3165825 17.7071068,14.7071068 L12.7071068,19.7071068
      C12.3165825,20.0976311 11.6834175,20.0976311 11.2928932,19.7071068
      L6.29289322,14.7071068 C5.90236893,14.3165825 5.90236893,13.6834175
      6.29289322,13.2928932 C6.68341751,12.9023689 7.31658249,12.9023689
      7.70710678,13.2928932 L11,16.5857864 L11,5 C11,4.44771525 11.4477153,4
      12,4 C12.5522847,4 13,4.44771525 13,5 L13,16.5857864 L13,16.5857864 Z"
    />
  </SvgIcon>
);

export default Descending;
