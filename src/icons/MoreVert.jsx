import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Renders the More overflow menu (3 vertical dots)
 *
 * @file MoreVert.jsx
 * @author Hari Gangadharan
 */
const MoreVert = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M12,18 C13.1045695,18 14,18.8954305 14,20 C14,21.1045695 13.1045695,22 12,22 C10.8954305,22 10,21.1045695
      10,20 C10,18.8954305 10.8954305,18 12,18 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695
      13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,2
      C13.1045695,2 14,2.8954305 14,4 C14,5.1045695 13.1045695,6 12,6 C10.8954305,6 10,5.1045695 10,4
      C10,2.8954305 10.8954305,2 12,2 Z"
    />
  </SvgIcon>
);

export default MoreVert;
