import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ClockOutlined = props => (
  <SvgIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d={
        `M9 16.714c-4.254 0-7.714-3.46-7.714-7.714 0-4.254 3.46-7.714 7.714-7.714 4.254 0 7.714 3.46 7.714 7.714
        0 4.254-3.46 7.714-7.714 7.714M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9m2.603
        12.632a.785.785 0 0 1-1.085 0L8.505 10.62a.77.77 0 0 1-.276-.591V4.886a.772.772 0 0 1 1.542 0v4.829l1.832
        1.832c.3.3.3.787 0 1.085`
      }
    />
  </SvgIcon>
);

export default ClockOutlined;
