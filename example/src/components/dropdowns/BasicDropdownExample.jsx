import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {Dropdown, ProfileDisplay, Icon } from '@greenville/mui-theme';

import {
  Button, Divider, Typography
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


/**
 * Renders/demos Profile Dropdown Component.
 *
 * @author Hari Gangadharan
 */
class BasicDropdownExample extends React.Component {
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
      <Dropdown
        id="profile-dropdown-example"
        aria-label="Hari Gangadharan"
        title="More..."
        text="HG"
        open={open}
        onChange={this.handleChange}
        icon={(
          <Icon name="MoreVert" />
        )}
      >
        <MenuContent onClose={this.handleClose} />
      </Dropdown>
    );
  }
}


export default BasicDropdownExample;
