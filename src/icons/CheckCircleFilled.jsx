import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for selection controls - checked state.
 *
 * @author Hari Gangadharan
 */
const CheckCircleFilled = props => (
  <SvgIcon viewBox="0 0 19 19" {...props}>
    <path
      fill="currentcolor"
      d={`
        M 0, 9.5 a 9.5,9.5 0 1,0 19,0 a 9.5,9.5 0 1,0 -19,0
        M8.823 13.7a.877.877 0 0 1-1.278.043l-2.281-2.239a.874.874 0 0 1-.011-1.237.877.877 0 0 1 1.24-.01l1.629
        1.598 5.348-5.998a.877.877 0 0 1 1.238-.072.874.874 0 0 1 .072 1.236L8.823 13.7z`
      }
    />
  </SvgIcon>
);


export default CheckCircleFilled;
