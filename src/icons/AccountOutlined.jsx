import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Account outlined icon
 *
 * @file AccountOutlined.jsx
 * @author Sam George
 */
const AccountOutlined = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" transform="translate(-1 -1)" />
      <path
        stroke="currentcolor"
        strokeWidth="1.75"
        d="M12 1.875c-1.386 0-2.543.448-3.353 1.233-.822.797-1.272 1.93-1.272 3.225 0 2.331.69 4.295 2.092
        5.88.263.298.408.68.408 1.077v1.017c0 .39-.121.761-.334 1.068-.213.307-.517.55-.883.688l-5.01
        1.878c-.533.2-.976.555-1.286 1.003-.31.447-.487.986-.487 1.556L2 22.125 22.125
        22v-1.5c0-.57-.177-1.11-.487-1.556-.31-.448-.753-.803-1.286-1.003l-5.01-1.878c-.366-.138-.67-.381-.883-.688-.213-.307-.334-.677-.334-1.068V13.29c0-.307.023-.63.603-1.305
        1.272-1.544 1.897-3.431 1.897-5.652 0-1.295-.45-2.428-1.272-3.225-.81-.785-1.967-1.233-3.353-1.233z"
        transform="translate(-1 -1)"
      />
    </g>
  </SvgIcon>
);

export default AccountOutlined;
