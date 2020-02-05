import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  darkBackground: {
    backgroundColor: theme.palette.primary.main
  }
});

/**
 * Renders/demos Call To Action Button.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <Paper className={classes.darkBackground}>

    <Button
      variant="outlined"
      color="secondary"
      size="small"
      className={classes.button}
    >
      Small Button
    </Button>

    <Button
      variant="outlined"
      color="secondary"
      size="medium"
      className={classes.button}
    >
      Medium Button
    </Button>

    <Button
      variant="outlined"
      color="secondary"
      size="large"
      className={classes.button}
    >
      Large Button
    </Button>
  </Paper>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
