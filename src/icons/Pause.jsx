import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Pause icon for media player
 *
 * @author Sam George
 */
const Pause = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d="M15.5,3 L19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,19.5 C21,20.3284271 20.3284271,21
      19.5,21 L15.5,21 C14.6715729,21 14,20.3284271 14,19.5 L14,4.5 C14,3.67157288 14.6715729,3 15.5,3 Z"
    />
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d="M4.5,3 L8.5,3 C9.32842712,3 10,3.67157288 10,4.5 L10,19.5 C10,20.3284271 9.32842712,21 8.5,21
      L4.5,21 C3.67157288,21 3,20.3284271 3,19.5 L3,4.5 C3,3.67157288 3.67157288,3 4.5,3 Z"
    />
  </SvgIcon>
);

export default Pause;
