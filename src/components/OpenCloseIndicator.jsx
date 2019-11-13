import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CaretUp from '../icons/CaretUp';
import CaretDown from '../icons/CaretDown';

const styles = () => ({
  indicator: {
    marginTop: 21,
    marginLeft: 8
  }
});

const OpenCloseIndicator = ({ id, open, classes }) => (open ? (
  <CaretUp id={`${id}-open`} color="secondary" className={classes.indicator} />
) : (
  <CaretDown id={`${id}-close`} color="secondary" className={classes.indicator} />
));

OpenCloseIndicator.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(OpenCloseIndicator);
