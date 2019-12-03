import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Icon for Font/Preferences.
 *
 * @author Hari Gangadharan
 */
const FontChange = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0-1h24v24H0z" />
      <path
        fill="currentcolor"
        fillRule="nonzero"
        d={
          `M13.31 17H3.69l-1.603 4.502a.748.748 0 0 1-.705.498H.5a.5.5 0 0 1-.47-.669L7.326.831a1.246
           1.246 0 0 1 2.348 0l5.878 16.513 2.461-6.895a1.1 1.1 0 0 1 2.072 0l3.886 10.883A.5.5 0 0 1 23.5 
           22h-.62a.75.75 0 0 1-.707-.498L21.637 20h-5.14l.474 1.331a.5.5 0 0 1-.47.669h-.883a.748.748 0 0 
           1-.705-.498L13.311 17zm-.711-2l-4.1-11.517L4.402 15h8.198zm4.487 3.25h3.926l-1.963-5.498-1.963 5.498z`
        }
      />
    </g>
  </SvgIcon>
);

export default FontChange;
