/**
 PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA

 *  Copyright © 2019 Pearson Education, Inc.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
* */

/**
 * Arrow Tooltip Component
 *
 * @author Karthick Paramasivam
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

const ArrowTooltip = ({ title, children, ...rest }) => {
  const classes = useStylesBootstrap();
  return (
    <Tooltip
      arrow
      title={(
        <Fragment>
          <Typography color="secondary" variant="body2">
            {title}
          </Typography>
        </Fragment>
      )}
      classes={classes}
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

ArrowTooltip.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};


export default ArrowTooltip;
