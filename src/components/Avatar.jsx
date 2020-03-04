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
  },
  default: {
  },
  small: {
    width: 40,
    height: 40,
    fontSize: '0.875rem',
    fontWeight: 400
  },
  medium: {
  },
  large: {
    width: 56,
    height: 56,
    fontSize: '1.25rem',
    fontWeight: 600
  }
});

const AvatarCustom = withStyles(styles)(({
  classes, className, color, size, disableHover, children, ...rest
}) => (
  <Avatar
    className={`${classes[size]} ${classes[color] || ''} ${disableHover ? '' : 'avatarHover'} ${className}`}
    {...rest}
  >
    {children}
  </Avatar>
));

AvatarCustom.defaultProps = {
  className: '',
  color: 'default',
  size: 'medium',
  disableHover: false
};

AvatarCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  classes: PropTypes.object.isRequired,
  disableHover: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'default', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
};

export default withStyles(styles)(AvatarCustom);
