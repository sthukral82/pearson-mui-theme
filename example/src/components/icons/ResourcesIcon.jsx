import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ResourcesIcon } from 'pearson-mui-theme';


const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  }
});

/**
 * Renders/demos Call To Action Button.
 *
 * @author Mithun Adavelly
 */
const component = ({ classes }) => (
  <div>
    <ResourcesIcon color="action" className={classes.root} />
    <ResourcesIcon color="primary" className={classes.root} />
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
