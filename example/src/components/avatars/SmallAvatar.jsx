import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';

const styles = theme => ({
  primary: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  secondary: {
    backgroundColor: 'white',
    color: 'blue'
  },
  tertiary: {
    backgroundColor: 'lightblue',
    color: 'blue'
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  smallAvatar: {
    margin: theme.spacing.unit,
    width: theme.pearson.avatar.small,
    height: theme.pearson.avatar.small
  }
});

const AvatarCustom = withStyles(styles)(({
  classes, color, disabled, text, alt
}) => (
  <Avatar
    alt="John Fallon"
    className={classes[color]}
  >
    {text}
  </Avatar>
));

export class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownState: 'closed', hover: false };
  }

  handleMouseEvent = (event) => {
    console.log('Mouse Event', event);
    this.setState({ hover: !this.state.hover });
  };

  render() {
    let avatarColor;
    switch (this.state.dropdownState) {
      case 'closed':
        avatarColor = 'primary';
        break;
      case 'open':
        avatarColor = 'secondary';
        break;
    }
    avatarColor = this.state.hover ? 'tertiary' : avatarColor;
    return (
      <IconButton
        onMouseEnter={this.handleMouseEvent}
        onMouseLeave={this.handleMouseEvent}
      >
        <AvatarCustom text="HG" color={avatarColor} alt="Hari Gangadharan" />
      </IconButton>
    );
  }
}

/**
 * Renders/demos Small sized Avatar.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <div className="largeAvatar">
    <ProfileDropdown />
    <Avatar
      alt="John Fallon"
      src="/images/JohnFallon.png"
      className={classes.smallAvatar}
    />
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
