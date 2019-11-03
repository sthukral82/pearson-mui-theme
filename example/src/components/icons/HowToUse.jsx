import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { AddIcon } from 'pearson-mui-theme';


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
        <AddIcon />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <AddIcon color="primary" />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <AddIcon color="secondary" />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <AddIcon color="error" />
      </IconButton>
      <IconButton disabled className={classes.iconButton}>
        <AddIcon />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <AddIcon />
      </IconButton>
    </Paper>
    <Paper className={classes.darkBackground}>
      <div>
        <AddIcon fontSize="small" color="action" className={classes.root} />
        <AddIcon fontSize="small" color="primary" className={classes.root} />
        <AddIcon fontSize="small" color="secondary" className={classes.root} />
        <AddIcon fontSize="small" color="error" className={classes.root} />
        <AddIcon fontSize="small" color="disabled" className={classes.root} />
        <AddIcon fontSize="small" color="inherit" className={classes.root} />
      </div>
      <div>
        <AddIcon color="action" className={classes.root} />
        <AddIcon color="primary" className={classes.root} />
        <AddIcon color="secondary" className={classes.root} />
        <AddIcon color="error" className={classes.root} />
        <AddIcon color="disabled" className={classes.root} />
        <AddIcon color="inherit" className={classes.root} />
      </div>
      <div>
        <AddIcon fontSize="large" color="action" className={classes.root} />
        <AddIcon fontSize="large" color="primary" className={classes.root} />
        <AddIcon fontSize="large" color="secondary" className={classes.root} />
        <AddIcon fontSize="large" color="error" className={classes.root} />
        <AddIcon fontSize="large" color="disabled" className={classes.root} />
        <AddIcon fontSize="large" color="inherit" className={classes.root} />
      </div>
    </Paper>
  </Fragment>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
