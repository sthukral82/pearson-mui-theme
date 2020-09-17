import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Inprogress task
 *
 * @author Praveen Punniyamoorthi
 */
const CircleInprogressOutline = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 18 18" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706
        4.02944 18 9 18ZM9 14.4C11.9823 14.4 14.4 11.9823 14.4 9C14.4 6.01766 11.9823 3.6 9 3.6C6.01766
        3.6 3.6 6.01766 3.6 9C3.6 11.9823 6.01766 14.4 9 14.4Z"
      fill="#A9A9A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V3.59961C11.9822 3.59982 14.3996
          6.0174 14.3996 8.99961C14.3996 11.9818 11.9822 14.3994 9 14.3996V18C11.3869
          18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305
          17.0518 4.32387 15.364 2.63604Z"
      fill="currentcolor"
    />
  </SvgIcon>
);

export default CircleInprogressOutline;
