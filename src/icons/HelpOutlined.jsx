import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const HelpOutlined = props => (
  <SvgIcon viewBox="0 0 18 18" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <path
        fillRule="nonzero"
        stroke="currentcolor"
        strokeWidth="1.5"
        d="M9 17.25A8.25 8.25 0 1 0 9 .75a8.25 8.25 0 0 0 0 16.5z"
      />
      <path
        fill="currentcolor"
        fillRule="nonzero"
        d={
          `M8.625 13h.75a.5.5 0 0 1.5.5v.75a.5.5 0 0 1-.5.5h-.75a.5.5 0 0
          1-.5-.5v-.75a.5.5 0 0 1 .5-.5zM7.25 7.003L6.5 6.997a.5.5 0 0 1-.495-.505v-.001l.002-.18a2.505
          2.505 0 0 1 2.497-2.306h1.69a2.81 2.81 0 0 1 2.81 2.81v.345a2.775 2.775 0 0 1-2.286 2.731
          1.025 1.025 0 0 0-.844 1.009v.6a.5.5 0 0 1-.5.5h-.75a.5.5 0 0 1-.5-.5v-.6c0-1.344.963-2.495
          2.286-2.731.488-.088.844-.513.844-1.009v-.345a1.06 1.06 0 0 0-1.06-1.06h-1.69c-.394
          0-.721.302-.75.633l-.001.12a.5.5 0 0 1-.504.495z`
        }
      />
    </g>
  </SvgIcon>
);

export default HelpOutlined;
