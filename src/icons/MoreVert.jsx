import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Renders the More overflow menu (3 vertical dots)
 *
 * @author Hari Gangadharan
 */
const MoreVert = props => (
  <SvgIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 
        9.82843 8.17157 10.5 9 10.5Z`
      }
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M9 5C9.82843 5 10.5 4.32843 10.5 3.5C10.5 2.67157 9.82843 2 9 2C8.17157 2 7.5 2.67157 7.5 3.5C7.5 4.32843 
        8.17157 5 9 5Z`
      }
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M9 16C9.82843 16 10.5 15.3284 10.5 14.5C10.5 13.6716 9.82843 13 9 13C8.17157 13 7.5 13.6716 7.5 14.5C7.5 
        15.3284 8.17157 16 9 16Z`
      }
      fill="currentcolor"
    />
  </SvgIcon>

);

export default MoreVert;
