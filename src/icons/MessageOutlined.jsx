import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const MessageOutlined = props => (
  <SvgIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d={
        `M13.114 17.714c.504 0 .798-.354.798-.918v-2.17h.463c2.333 0 3.625-1.304 3.625-3.6V4.6C18 
        2.304 16.708 1 14.375 1H3.625C1.292 1 0 2.315 0 4.6v6.426c0 2.285 1.292 3.6 3.625 3.6h5.58l2.869 
        2.514c.43.386.683.574 1.04.574zM12.82 16.4l-2.67-2.577c-.294-.292-.504-.355-.924-.355h-5.59c-1.64 
        0-2.47-.866-2.47-2.452V4.61c0-1.586.83-2.452 2.47-2.452h10.728c1.65 0 2.47.866 2.47 2.452v6.406c0 
        1.586-.82 2.452-2.47 2.452h-.998c-.4 0-.546.156-.546.542v2.39z`
      }
    />
  </SvgIcon>
);

export default MessageOutlined;
