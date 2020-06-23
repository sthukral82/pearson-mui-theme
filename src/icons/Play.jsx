import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Play icon for media player
 *
 * @author Sam George
 */
const Play = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      fillRule="evenodd"
      d="M6.19561754,2.16877423 L22.0592145,10.4487432 C22.9164049,10.8961518 23.2483935,11.9533453
      22.8007316,12.8100509 C22.6351144,13.1269983 22.3763278,13.385636 22.0591994,13.5511565
      L6.19560463,21.8309285 C5.46086625,22.2144145 4.55419036,21.930005 4.17048735,21.1956822
      C4.0584905,20.981345 4,20.7431242 4,20.5013194 L4,3.49837657 C4,2.66994944 4.67195293,1.99837657
      5.50084888,1.99837657 C5.74279543,1.99837657 5.98115573,2.05683637 6.19561754,2.16877423 Z"
    />
  </SvgIcon>
);

export default Play;
