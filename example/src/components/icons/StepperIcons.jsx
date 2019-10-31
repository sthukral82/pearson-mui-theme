import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { IncompleteCircleIcon } from 'pearson-mui-theme';
import { InprogressCircleIcon } from 'pearson-mui-theme';
import { CompleteCircleIcon} from 'pearson-mui-theme';
import { IncompleteStarIcon } from 'pearson-mui-theme';
import { InprogressStarIcon } from 'pearson-mui-theme';
import { CompleteStarIcon } from 'pearson-mui-theme';
import { LockedIcon } from 'pearson-mui-theme';

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
    <IconButton className={classes.root} aria-label="IncompleteCircle"  color="primary">
        <IncompleteCircleIcon  />
    </IconButton>
    
    <IconButton className={classes.root} aria-label="InprogressCircle"  color="primary">
        <InprogressCircleIcon  />
    </IconButton> 
    <IconButton className={classes.root} aria-label="CompleteCircle" color="primary">
        <CompleteCircleIcon />
    </IconButton>
    <IconButton className={classes.root} aria-label="IncompleteCircle"  color="primary">
        <IncompleteStarIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="InprogressStar"  color="primary">
        <InprogressStarIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="CompleteStar"  color="primary">
        <CompleteStarIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="Locked"  color="primary">
        <LockedIcon  />
    </IconButton>
 
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
