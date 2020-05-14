import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Show-on outlined icon
 *
 * @file ShowOnOutlined.jsx
 * @author Sam George
 */
const ShowOnOutlined = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" transform="translate(0 -4)" />
      <path
        fill="currentcolor"
        fillRule="nonzero"
        d="M12 17.995c4.147 0 7.864-2.364 9.701-5.997C19.864 8.364 16.147 6 12 6s-7.864
        2.364-9.701 5.998C4.136 15.63 7.853 17.995 12 17.995zM12 4c5.361 0 9.958 3.301 11.9
        7.998-1.942 4.696-6.539 7.997-11.9 7.997-5.361 0-9.958-3.301-11.9-7.997C2.042 7.3 6.639 4 12 4z"
        transform="translate(0 -4)"
      />
      <path
        fill="currentcolor"
        fillRule="nonzero"
        d="M12 15c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.761 0-5-2.239-5-5s2.239-5
        5-5 5 2.239 5 5-2.239 5-5 5z"
        transform="translate(0 -4)"
      />
    </g>
  </SvgIcon>
);

export default ShowOnOutlined;
