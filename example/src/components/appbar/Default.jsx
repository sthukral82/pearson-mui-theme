import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@greenville/mui-theme';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  default: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper
  },
  sephia: {
    color: '#991300',
    backgroundColor: 'rgb(251, 238, 207) !important'
  },
  night: {
    color: '#fff',
    backgroundColor: '#333',
    '& .pmuiCustomFocusVisible:after': {
      borderColor: '#fff'
    }
  },
  transparent: {
    color: '#fff',
    backgroundColor: 'transparent',
    '& .pmuiCustomFocusVisible:after': {
      borderColor: '#fff'
    }
  },
  defaultAppBar: {
    marginBottom: 32,
    marginTop: 32
  },
  dateAndTime: {
    fontSize: 12,
    color: theme.palette.text.primary,
    paddingLeft: 10,
    letterSpacing: -0.07
  }
});

/**
 * Renders/demos various styles of AppBar.
 *
 * @author Hari Gangadharan
 */
const ThemedAppBar = withStyles(styles)(({ theme, classes }) => (
  <AppBar color="inherit" position="static" className={`${classes[theme]} ${classes.defaultAppBar}`}>
    <Toolbar variant="dense" color="inherit">
      <IconButton color="inherit">
        <Icon name="Menu" color="inherit" />
      </IconButton>
      <div className={classes.grow} />
      <Typography variant="body1" color="inherit">Chapter 1: The Rise </Typography>
      <div className={classes.grow} />
      <IconButton color="inherit">
        <Icon name="Search" color="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <Icon name="BookmarkOutlined" color="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <Icon name="FontChange" color="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <Icon name="Listen" color="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <Icon name="MoreVert" color="inherit" />
      </IconButton>
    </Toolbar>
  </AppBar>
));

ThemedAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
};

/**
 * Renders/demos Cards.
 *
 * @author Hari Gangadharan
 */
const DefaultAppBar = () => (
  <div>
    <ThemedAppBar theme="default" />
    <ThemedAppBar theme="night" />
    <ThemedAppBar theme="sephia" />
    <ThemedAppBar theme="transparent" />
  </div>

);


export default DefaultAppBar;
