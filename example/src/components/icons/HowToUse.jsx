import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Icon, Tooltip } from '@greenville/mui-theme';


const styles = theme => ({
  root: {
    margin: theme.spacing(1)
  },
  smallIconMargin: {
    margin: 9
  },
  largeIconMargin: {
    margin: 8
  },
  blueBackground: {
    backgroundColor: '#005d83',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1)
  },
  darkBackground: {
    backgroundColor: '#c7c7c7',
    marginBottom: theme.spacing(1),
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
    <Box>
      <Typography variant="h4">
        Small Icon Buttons - color: default
      </Typography>
      <Tooltip
        title="Add something really cool!!!"
        placement="left"
      >
        <IconButton size="small" className={classes.smallIconMargin}>
          <Icon name="Add" />
        </IconButton>
      </Tooltip>
      <IconButton size="small" className={classes.smallIconMargin}>
        <Icon name="CalendarOutlined" />
      </IconButton>
      <IconButton size="small" className={classes.smallIconMargin}>
        <Icon name="FlashcardOutlined" />
      </IconButton>
      <IconButton size="small" disabled className={classes.smallIconMargin}>
        <Icon name="Folder" />
      </IconButton>
      <Tooltip
        title="Add something really cool!!!"
        placement="bottom"
      >
        <IconButton size="small" className={classes.smallIconMargin}>
          <Icon name="Add" />
        </IconButton>
      </Tooltip>
    </Box>
    <Box className={classes.blueBackground}>
      <Typography variant="h4" color="secondary" className={classes.largeIconMargin}>
        Large Icon Buttons - color: secondary
      </Typography>
      <Tooltip
        title="Add something really cool!!!"
        placement="left"
      >
        <IconButton color="secondary" className={classes.largeIconMargin}>
          <Icon fontSize="large" name="Add" />
        </IconButton>
      </Tooltip>
      <IconButton color="secondary" className={classes.largeIconMargin}>
        <Icon fontSize="large" name="CalendarOutlined" />
      </IconButton>
      <IconButton color="secondary" className={classes.largeIconMargin}>
        <Icon fontSize="large" name="FlashcardOutlined" />
      </IconButton>
      <IconButton color="secondary" disabled className={classes.largeIconMargin}>
        <Icon fontSize="large" name="Folder" />
      </IconButton>
      <Tooltip
        title="Add something really cool!!!"
        placement="bottom"
      >
        <IconButton color="secondary" className={classes.largeIconMargin}>
          <Icon fontSize="large" name="Add" />
        </IconButton>
      </Tooltip>
    </Box>
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
