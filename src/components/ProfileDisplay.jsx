import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';

const styles = () => ({
  root: {
    display: 'flex'
  },
  nameCard: {
    paddingLeft: 8
  }
});

const ProfileDisplay = ({
  classes, idPrefix, name, avatarText, email
}) => (
  <div id={idPrefix} className={classes.root}>
    <Avatar id={`${idPrefix}-avatar`}>{avatarText}</Avatar>
    <div className={classes.nameCard}>
      <Typography id={`${idPrefix}-name`} variant="h4">{name}</Typography>
      <Typography id={`${idPrefix}-email`} variant="subtitle2">{email}</Typography>
    </div>
  </div>
);

ProfileDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  idPrefix: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatarText: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

ProfileDisplay.defaultProps = {
  idPrefix: 'pmui-profile-display'
};

export default withStyles(styles)(ProfileDisplay);
