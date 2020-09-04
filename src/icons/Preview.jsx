import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Preview icon
 *
 * @file Preview.jsx
 * @author Sam George
 */
const Preview = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M12.5 8c3.038 0 5.5 2.462 5.5 5.5 0 1.157-.357 2.231-.968 3.117l4.696
      4.696c.39.39.39 1.024 0
      1.415-.36.36-.928.388-1.32.083l-.095-.083-4.696-4.696c-.886.61-1.96.968-3.117.968C9.462
      19 7 16.538 7 13.5S9.462 8 12.5 8zm4.086-7c.265 0 .52.105.707.293l4.414
      4.414c.188.188.293.442.293.707V19.11l-2-1.999V7h-3l-.117-.007c-.459-.053-.823-.417-.876-.876L16
      6V3H4.5l-.09.008c-.175.032-.318.155-.379.318l-.023.084L4
      3.5v17l.008.09c.032.175.155.318.318.379l.084.023.09.008h11.611l1.999
      2H4.5C3.12 23 2 21.88 2 20.5v-17C2 2.12 3.12 1 4.5 1h12.086zM12.5 10C10.567 10
      9 11.567 9 13.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z"
    />
  </SvgIcon>
);

export default Preview;
