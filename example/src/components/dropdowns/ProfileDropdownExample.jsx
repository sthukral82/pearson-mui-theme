import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ProfileDropdown, ProfileDisplay, Icon } from '@greenville/mui-theme';

import {
  Button, Divider, Paper, Typography
} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const menuStyles = () => ({
  header: {
    paddingBottom: 24
  },
  divider: {
    margin: '0px 24px'
  },
  menuItem: {
    padding: '14px 22px',
    justifyContent: 'space-between'
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 20
  }
});

const MenuContent = withStyles(menuStyles)(withRouter(({ classes, history, onClose }) => (
  <List>
    <ListItem className={classes.header}>
      <ProfileDisplay avatarText="HG" name="Hari Gangadharan" email="hari.gangadharan@pearson.com" />
    </ListItem>
    <Divider className={classes.divider} />
    <ListItem
      button
      className={classes.menuItem}
      onClick={
        () => { /* Do something with click */ history.push('/icons'); onClose(); }
      }
    >
      <div>
        <Typography variant="body1" className="applyHover">
          Account Settings
        </Typography>
        <Typography variant="subtitle1">
          Manage your account information
        </Typography>
      </div>
      <Icon name="ChevronRight" className="applyHover" />
    </ListItem>
    <Divider className={classes.divider} />
    <ListItem className={classes.action}>
      <Button
        variant="outlined"
        color="primary"
      >
        Sign Out
      </Button>
    </ListItem>
  </List>
)));


const styles = theme => ({
  darkBackground: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.dark,
    padding: 16
  }
});
/**
 * Renders/demos Profile Dropdown Component.
 *
 * @author Hari Gangadharan
 */
class ProfileDropdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleChange = (open) => {
    this.setState({ open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Paper className={this.props.classes.darkBackground}>
        <ProfileDropdown
          id="profile-dropdown-example"
          aria-label="Hari Gangadharan"
          text="HG"
          color="secondary"
          open={open}
          onChange={this.handleChange}
        >
          <MenuContent onClose={this.handleClose} />
        </ProfileDropdown>
      </Paper>
    );
  }
}

ProfileDropdownExample.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileDropdownExample);
