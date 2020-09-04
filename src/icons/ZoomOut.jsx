import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Zoom out icon
 *
 * @file ZoomOut.jsx
 * @author Sam George
 */
const ZoomOut = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M11,1.5 C16.2467051,1.5 20.5,5.75329488 20.5,11 C20.5,13.2450781 19.7212194,15.3082623
      18.4190676,16.9341433 L22.7424621,21.2575379 C23.1525126,21.6675884 23.1525126,22.3324116
      22.7424621,22.7424621 C22.3324116,23.1525126 21.6675884,23.1525126 21.2575379,22.7424621
      L16.9341433,18.4190676 C15.3082623,19.7212194 13.2450781,20.5 11,20.5 C5.75329488,20.5
      1.5,16.2467051 1.5,11 C1.5,5.75329488 5.75329488,1.5 11,1.5 Z M11,3.6 C6.91309285,3.6
      3.6,6.91309285 3.6,11 C3.6,15.0869071 6.91309285,18.4 11,18.4 C15.0869071,18.4
      18.4,15.0869071 18.4,11 C18.4,6.91309285 15.0869071,3.6 11,3.6 Z M15,10
      C15.5522847,10 16,10.4477153 16,11 C16,11.5522847 15.5522847,12 15,12 L7,12
      C6.44771525,12 6,11.5522847 6,11 C6,10.4477153 6.44771525,10 7,10 L15,10 Z"
    />
  </SvgIcon>
);

export default ZoomOut;
