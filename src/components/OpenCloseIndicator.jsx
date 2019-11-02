import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UpArrow from '../icons/UpArrow';
import DownArrow from '../icons/DownArrow';

const styles = theme => ({
  indicator: {
    color: theme.palette.primary.contrastText,
    paddingTop: 21,
    paddingLeft: 8,
    transform: 'matrix(1, 0, 0, -1, 0, 0)'
  }
});

const OpenCloseIndicator = ({ id, open, classes }) => (open ? (
  <UpArrow id={`${id}-open`} className={classes.indicator} />
) : (
  <DownArrow id={`${id}-close`} className={classes.indicator} />
));

OpenCloseIndicator.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(OpenCloseIndicator);
