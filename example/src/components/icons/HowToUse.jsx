import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Icon } from 'pearson-mui-theme';


const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  iconButton: {
    margin: 9
  },
  darkBackground: {
    backgroundColor: '#c7c7c7',
    color: 'purple' /* just to show how inherit works */
  }
});

/**
 * Renders/demos usage of icons.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <Fragment>
    <Paper className={classes.darkBackground}>
      <IconButton className={classes.iconButton}>
        <Icon name="Add" />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <Icon name="Add" color="primary" />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <Icon name="Add" color="secondary" />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <Icon name="Add" color="error" />
      </IconButton>
      <IconButton disabled className={classes.iconButton}>
        <Icon name="Add" />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <Icon name="Add" />
      </IconButton>
    </Paper>
    <Paper className={classes.darkBackground}>
      <div>
        <Icon name="Add" fontSize="small" color="action" className={classes.root} />
        <Icon name="Add" fontSize="small" color="primary" className={classes.root} />
        <Icon name="Add" fontSize="small" color="secondary" className={classes.root} />
        <Icon name="Add" fontSize="small" color="error" className={classes.root} />
        <Icon name="Add" fontSize="small" color="disabled" className={classes.root} />
        <Icon name="Add" fontSize="small" color="inherit" className={classes.root} />
      </div>
      <div>
        <Icon name="Add" color="action" className={classes.root} />
        <Icon name="Add" color="primary" className={classes.root} />
        <Icon name="Add" color="secondary" className={classes.root} />
        <Icon name="Add" color="error" className={classes.root} />
        <Icon name="Add" color="disabled" className={classes.root} />
        <Icon name="Add" color="inherit" className={classes.root} />
      </div>
      <div>
        <Icon name="Add" fontSize="large" color="action" className={classes.root} />
        <Icon name="Add" fontSize="large" color="primary" className={classes.root} />
        <Icon name="Add" fontSize="large" color="secondary" className={classes.root} />
        <Icon name="Add" fontSize="large" color="error" className={classes.root} />
        <Icon name="Add" fontSize="large" color="disabled" className={classes.root} />
        <Icon name="Add" fontSize="large" color="inherit" className={classes.root} />
      </div>
    </Paper>
  </Fragment>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
