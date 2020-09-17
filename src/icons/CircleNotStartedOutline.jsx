import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Not started task
 *
 * @author Praveen Punniyamoorthi
 */
const CircleNotStartedOutline = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 18 18" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944
      0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM9 14.4C11.9823
      14.4 14.4 11.9823 14.4 9C14.4 6.01766 11.9823
      3.6 9 3.6C6.01766 3.6 3.6 6.01766 3.6 9C3.6 11.9823
      6.01766 14.4 9 14.4Z"
      fill="currentcolor"
    />
  </SvgIcon>
);

export default CircleNotStartedOutline;
