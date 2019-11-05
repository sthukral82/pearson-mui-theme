import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CalendarOutlined = props => (
  <SvgIcon viewBox="0 0 22 23" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-1 0h24v24H-1z" />
      <path
        fill="currentcolor"
        fillRule="nonzero"
        d={
          `M16 .5A2 2 0 0 1 17.937 2H19.5A2.5 2.5 0 0 1 22 4.5v16a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 0 
          20.5v-16A2.5 2.5 0 0 1 2.5 2h1.563a2 2 0 0 1 3.874 0h6.126A2 2 0 0 1 16 .5zM20 9H2v11.5a.5.5 0 0 0 
          .5.5h17a.5.5 0 0 0 .5-.5V9zm-.5-5h-17a.5.5 0 0 0-.492.41L2 4.5V7h18V4.5a.5.5 0 0 0-.5-.5z`
        }
      />
      <path
        fill="currentcolor"
        d={
          `M15.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM15.5 11h2a.5.5 0 0 1 
          .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM10.5 11h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 
          1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM10.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 
          1-.5-.5v-2a.5.5 0 0 1 .5-.5zM5.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 
          1-.5-.5v-2a.5.5 0 0 1 .5-.5z`
        }
      />
    </g>
  </SvgIcon>
);

export default CalendarOutlined;
