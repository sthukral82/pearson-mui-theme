import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BlankCalendarOutlined = props => (
  <SvgIcon viewBox="0 0 18 18" fill="none" {...props}>
    <defs>
      <path id="abcal" d="M0 0h17.5v17.5H0z" />
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
    >
      <mask id="b">
        <use xlinkHref="#abcal" />
      </mask>
      <path
        fill="currentcolor"
        d={
        `M16.088 5.645a.282.282 0 0 1-.282.282H1.694a.283.283 0 0 1-.283-.282l.01-2.514a.713.713
        0 0 1 .695-.59h13.267c.39 0 .706.316.706.705v2.399zm0 9.738a.706.706 0 0 1-.705.706H2.117a.708.708
        0 0 1-.706-.706V7.621c0-.156.127-.282.282-.282h14.114c.154 0 .281.126.281.282v7.762zm-.705-14.254h-.52A.28.28
        0 0 1 14.6.941a1.414 1.414 0 0 0-2.663 0 .282.282 0 0 1-.267.188H5.831a.28.28 0 0 1-.265-.188A1.417 1.417
        0 0 0 4.234 0c-.596 0-1.131.378-1.332.941a.281.281 0 0 1-.264.188h-.522A2.12 2.12
        0 0 0 0 3.246v12.137C0 16.551.95 17.5 2.117 17.5h13.266a2.118 2.118 0 0 0 2.117-2.117V3.246a2.119 2.119
        0 0 0-2.117-2.117z`
      }
      />
    </g>
  </SvgIcon>
);

export default BlankCalendarOutlined;
