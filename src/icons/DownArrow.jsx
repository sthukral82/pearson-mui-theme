import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  large: {
    width: 18,
    height: 10
  },
  normal: {
    width: 24,
    height: 24
  }
};

const DropdownCloseIcon = ({
  classes, size, enableTabIndex = false, ...other
}) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        `M2.09673 6H9.8979C10.5051 6 10.9973 5.50926 10.9973 4.9039C10.9973 4.60919 10.8783 4.3269 10.6671 
        4.12071L6.76649 0.312922C6.33909 -0.104308 5.65554 -0.104308 5.22814 0.312922L1.32756 4.12071C0.89371 
        4.54424 0.886379 5.23821 1.31118 5.67075C1.51799 5.88133 1.80113 6 2.09673 6Z`
      }
      fill="currentColor"
    />
  </SvgIcon>
);

DropdownCloseIcon.defaultProps = {
  size: 'normal',
  enableTabIndex: false
};

DropdownCloseIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['large', 'normal']),
  enableTabIndex: PropTypes.bool
};

export default withStyles(styles)(DropdownCloseIcon);
