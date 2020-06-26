import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Inprogress task
 *
 * @author Praveen Punniyamoorthi
 */
const CircleInprogressOutline = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle cx="11" cy="11" r="9" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 6.4" fill="none" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
      <circle cx="11" cy="11" r="9" stroke="#E9E9E9" strokeWidth="3" fill="none" />
    </mask>
    <g mask="url(#mask0)">
      <rect width="13" height="23" fill="currentcolor" />
    </g>
  </SvgIcon>
);

export default CircleInprogressOutline;
