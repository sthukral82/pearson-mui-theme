import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Single page icon
 *
 * @file SinglePage.jsx
 * @author Sam George
 */
const SinglePage = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M14.172 3c.217 0 .426.086.579.24l3.612 3.611c.153.154.24.362.24.579v11.525c0
      1.13-.917 2.045-2.046 2.045H8.045C6.915 21 6 20.084 6 18.955V5.045C6 3.915
      6.916 3 8.045 3h6.127zm-.479 1.636H8.045c-.2 0-.367.145-.402.336l-.007.073v13.91c0
      .2.145.367.336.402l.073.007h8.512c.2 0 .368-.145.402-.336l.007-.073V7.909H14.51c-.42
      0-.765-.316-.812-.723l-.006-.095V4.636z"
    />
  </SvgIcon>
);

export default SinglePage;
