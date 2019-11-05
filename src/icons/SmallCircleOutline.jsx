import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
  root: {
    fill: 'transparent'
  }
};


const SmallCircleOutlineIcon = ({ classes, ...props }) => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
    className={classes.root}
  >
    <circle cx="9" cy="9" r="4" stroke="currentcolor" strokeWidth="1.5" />
  </SvgIcon>
);

SmallCircleOutlineIcon.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SmallCircleOutlineIcon);
