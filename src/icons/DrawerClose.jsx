import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * DrawerClose icon
 *
 * @file DrawerClose.jsx
 * @author Sam George
 */
const DrawerClose = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M1.165 9.56l5.01-5.04c.39-.394 1.025-.394 1.416 0 .391.393.391
      1.03 0 1.424l-3.299 3.32h13.61c.553 0 1.001.451 1.001 1.008 0 .557-.448
      1.008-1 1.008H4.29L7.59 14.6c.391.393.391 1.03 0 1.424-.391.394-1.026.394-1.416
      0l-5.01-5.04c-.39-.393-.39-1.03 0-1.424h.001z"
    />
    <path
      fill="currentcolor"
      d="M22.08 0C23.14 0 24 .86 24 1.92V19.2c0 1.06-.86 1.92-1.921.92h-9.6c-1.06
      0-1.92-.86-1.92-1.92v-5.76h1.92v5.76h9.6V1.92h-9.6v5.76h-1.92V1.92c0-1.06.86-1.92
      1.92-1.92h9.6z" />
  </SvgIcon>
);

export default DrawerClose;
