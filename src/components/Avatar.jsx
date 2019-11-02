import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  primary: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white'
  },
  secondary: {
    backgroundColor: 'white',
    border: '2px solid white',
    color: theme.palette.primary.dark
  }
});

const AvatarCustom = withStyles(styles)(({
  classes, className, color, children, ...rest
}) => (
  <Avatar
    className={`avatarHover ${classes[color] || ''} ${className}`}
    {...rest}
  >
    {children}
  </Avatar>
));

AvatarCustom.defaultProps = {
  className: '',
  color: null
};

AvatarCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node.isRequired),
    PropTypes.string.isRequired,
    PropTypes.node.isRequired
  ]).isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string
};

export default withStyles(styles)(AvatarCustom);
