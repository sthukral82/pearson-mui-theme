import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Not started task
 *
 * @author Praveen Punniyamoorthi
 */
const CircleNotStartedOutline = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle
      cx="10"
      cy="10"
      r="9"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 6.4"
      fill="none"
    />
  </SvgIcon>
);

export default CircleNotStartedOutline;
