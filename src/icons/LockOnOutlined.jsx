import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Lock-on outlined icon
 *
 * @file LockOnOutlined.jsx
 * @author Sam George
 */
const LockOnOutlined = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" transform="translate(-2)" />
      <path
        fill="currentcolor"
        d="M12 0c3.866 0 7 3.134 7 7v1h1c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2H4c-1.105
        0-2-.895-2-2V10c0-1.105.895-2 2-2h1V7c0-3.866 3.134-7 7-7zm8 10H4v11h16V10zM7
        8h10V7c0-2.761-2.239-5-5-5S7 4.239 7
        7v1zm6.35 8.268c.595-.424.982-1.119.982-1.904v-.028c0-1.29-1.046-2.336-2.336-2.336-1.29
        0-2.336 1.046-2.336 2.336v.028c0 .789.391 1.486.99 1.91V18.5c0 .276.224.5.5.5h1.7c.276 0 .5-.224.5-.5v-2.232z"
        transform="translate(-2)"
      />
    </g>
  </SvgIcon>
);

export default LockOnOutlined;
