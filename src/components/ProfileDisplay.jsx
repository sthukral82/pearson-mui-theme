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
    paddingLeft: 8,
    wordBreak: 'break-word'
  }
});

const ProfileDisplay = ({
  classes, id, name, avatarText, email
}) => (
  <div id={id} className={classes.root}>
    <Avatar id={`${id}-avatar`}>{avatarText}</Avatar>
    <div className={classes.nameCard}>
      <Typography id={`${id}-name`} variant="h4" component="div">{name}</Typography>
      <Typography id={`${id}-email`} variant="subtitle2" component="div">{email}</Typography>
    </div>
  </div>
);

ProfileDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatarText: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

ProfileDisplay.defaultProps = {
  id: 'pmui-profile-display'
};

export default withStyles(styles)(ProfileDisplay);
