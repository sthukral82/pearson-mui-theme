import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
  root: {
    fill: 'transparent'
  }
};

const SmallCircleHalfFilledIcon = ({ classes, ...props }) => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
    className={classes.root}
  >
    <path fill="currentcolor" d="M9 13V5a4 4 0 1 0 0 8z" />
    <circle cx="9" cy="9" r="4" stroke="currentcolor" strokeWidth="1.5" />
  </SvgIcon>
);

SmallCircleHalfFilledIcon.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SmallCircleHalfFilledIcon);
