import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Home
 *
 * @author Praveen Punniyamoorthi
 */
const Home = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 23 23" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7178 0.260181L22.0619 9.42766V20.7409C22.0619 21.8485
      21.164 22.7464 20.0565 22.7464H13.7581C13.2043 22.7464 12.7554
      22.2974 12.7554 21.7436V16.542C12.7554 15.5902 11.9838 14.8186
      11.0319 14.8186C10.0801 14.8186 9.30849 15.5902 9.30849
      16.542V21.7436C9.30849 22.2974 8.85956 22.7464 8.30577
      22.7464H2.0074C0.899824 22.7464 0.00195313 21.8485 0.00195312
      20.7409V9.42766L10.3461 0.260181C10.7375 -0.0867269 11.3263 -0.0867269
      11.7178 0.260181ZM11.0317 2.87598L2.41455 10.5115V20.3323H6.89548V16.5421C6.89548
      14.3393 8.61742 12.5387 10.7887 12.4129L11.0317 12.4059C13.2345 12.4059 15.0351
      14.1278 15.1609 16.2991L15.168 16.5421V20.3323H19.6489V10.5129L11.0317 2.87598Z"
      fill="currentcolor"
    />
  </SvgIcon>
);

export default Home;
