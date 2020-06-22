import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Folder(resource) icon
 *
 * @file Folder.jsx
 * @author Sam George
 */
const Folder = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      fill-rule="nonzero"
      d="M21 19H3V7h18v12zm-.2-13.75H12L9.8 3H3.2C1.979 3 1 4.001 1 5.25v13.5C1 19.993 1.985
      21 3.2 21h17.6c1.215 0 2.2-1.007 2.2-2.25V7.5c0-1.249-.99-2.25-2.2-2.25z"
    />
  </SvgIcon>
);

export default Folder;
