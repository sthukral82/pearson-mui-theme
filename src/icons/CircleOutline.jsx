import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for selection controls - unchecked state.
 *
 * @author Hari Gangadharan
 */
const CircleOutline = props => (
  <SvgIcon viewBox="0 0 19 19" {...props}>
    <circle stroke="currentColor" strokeWidth="2" cx="9.5" cy="9.5" r="8.5" fill="none" />
  </SvgIcon>
);

export default CircleOutline;
