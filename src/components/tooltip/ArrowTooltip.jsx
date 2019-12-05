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
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ArrowTooltipStyles from './ArrowTooltipStyles';

class ArrowTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowRef: null
    };
  }

  handleArrowRef = (node) => {
    this.setState({
      arrowRef: node
    });
  };

  render() {
    const { classes, title, toolTipsProps } = this.props;

    return (
      <Tooltip
        title={(
          <Fragment>
            <Typography color="secondary" variant="body2">
              {title}
            </Typography>
            <span className={classes.arrow} ref={this.handleArrowRef} />
          </Fragment>
            )}
        {...toolTipsProps}
        classes={{
          tooltip: classes.bootstrapTooltip,
          popper: classes.bootstrapPopper,
          tooltipPlacementLeft: classes.bootstrapPlacementLeft,
          tooltipPlacementRight: classes.bootstrapPlacementRight,
          tooltipPlacementTop: classes.bootstrapPlacementTop,
          tooltipPlacementBottom: classes.bootstrapPlacementBottom
        }}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef
              }
            }
          }
        }}
      >
        {this.props.children}
      </Tooltip>
    );
  }
}

ArrowTooltip.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  classes: PropTypes.object.isRequired,
  toolTipsProps: PropTypes.object
};

ArrowTooltip.defaultProps = {
  toolTipsProps: {}
};

export default withStyles(ArrowTooltipStyles)(ArrowTooltip);
