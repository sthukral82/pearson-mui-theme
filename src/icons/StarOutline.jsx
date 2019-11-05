import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    fill: 'transparent'
  }
};

const StarOutlineIcon = ({ classes, ...props }) => (
  <SvgIcon
    viewBox="0 0 18 17"
    {...props}
    className={classes.root}
  >
    <path
      fillRule="nonzero"
      stroke="currentcolor"
      strokeWidth="1.5"
      d={`M6.635 5.108l-4.684.725a.5.5 0 0 0-.284.841l3.42 3.554-.764 4.75a.5.5 0 0 0 .738.516L9 13.288l3.938 
    2.206a.5.5 0 0 0 .738-.515l-.764-4.75 3.42-3.555a.5.5 
    0 0 0-.283-.84l-4.684-.726L9.454.98a.5.5 0 0 0-.908 0l-1.91 4.128z`}
    />
  </SvgIcon>
);

StarOutlineIcon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StarOutlineIcon);
