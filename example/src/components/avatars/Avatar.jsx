import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Avatar } from 'pearson-mui-theme';
import { IconButton } from '@material-ui/core';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: theme.spacing.unit
  },
  darkBackground: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    padding: 16,
    marginBottom: 24
  },
  lightBackground: {
    display: 'flex',
    padding: 16
  }
});

/**
 * Renders/demos Small sized Avatar.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <div>
    <Paper className={classes.darkBackground}>
      <Avatar color="primary" className={classes.avatar} aria-label="Hari Gangadharan">HG</Avatar>
      <Avatar color="secondary" className={classes.avatar} aria-label="Hari Gangadharan">HG</Avatar>
    </Paper>
    <Paper className={classes.darkBackground}>
      <IconButton onClick={() => { /* Some Action */ }}>
        <Avatar color="primary" className={classes.avatar} aria-label="Hari Gangadharan">HG</Avatar>
      </IconButton>
      <IconButton onClick={() => { /* Some Action */ }}>
        <Avatar color="primary" disableHover className={classes.avatar} aria-label="Hari Gangadharan">HG</Avatar>
      </IconButton>
    </Paper>
    <Paper className={classes.lightBackground}>
      <Avatar className={`${classes.avatar} avatarHover`}>HG</Avatar>
    </Paper>
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
