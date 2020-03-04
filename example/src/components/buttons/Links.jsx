import React from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  link: {
    margin: theme.spacing.unit
  }
});

/**
 * Renders/demos Text Link.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <div className="defaultLinks">
    <Link
      color="default"
      size="small"
      className={classes.link}
      href="http://www.google.com"
    >
      Google
    </Link>

    <Link
      variant="text"
      color="primary"
      size="medium"
      className={classes.link}
      href="http://www.github.com"
    >
      Github
    </Link>

    <Link
      variant="text"
      color="default"
      size="large"
      className={classes.link}
      href="http://www.pearson.com"
    >
      Pearson
    </Link>
  </div>
);


component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
