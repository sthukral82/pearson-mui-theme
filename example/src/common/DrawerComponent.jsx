import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
import Pages from '@material-ui/icons/Pages';
import Tab from '@material-ui/icons/Tab';
import SwapHorizontalCircle from '@material-ui/icons/SwapHorizontalCircle';
import SelectAllRounded from '@material-ui/icons/Adjust';
import WebAsset from '@material-ui/icons/WebAsset';

const styles = {
  drawer: {
    minWidth: 260
  }
};

/**
 * Drawer component for menu.
 *
 * @author Hari Gangadharan
 */
const DrawerComponent = ({ classes, open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <div className={classes.drawer}>
      <List>
        <ListItem component={Link} to="/" onClick={onClose}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/avatars" onClick={onClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Avatars" />
        </ListItem>
        <ListItem component={Link} to="/buttons" onClick={onClose}>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Buttons" />
        </ListItem>
        <ListItem component={Link} to="/cards" onClick={onClose}>
          <ListItemIcon>
            <Pages />
          </ListItemIcon>
          <ListItemText primary="Cards" />
        </ListItem>
        <ListItem component={Link} to="/inputs" onClick={onClose}>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Inputs" />
        </ListItem>
        <ListItem component={Link} to="/selections" onClick={onClose}>
          <ListItemIcon>
            <SelectAllRounded />
          </ListItemIcon>
          <ListItemText primary="Selection Controls" />
        </ListItem>
        <ListItem component={Link} to="/tabs" onClick={onClose}>
          <ListItemIcon>
            <Tab />
          </ListItemIcon>
          <ListItemText primary="Tabs" />
        </ListItem>
        <ListItem component={Link} to="/sliders" onClick={onClose}>
          <ListItemIcon>
            <SwapHorizontalCircle />
          </ListItemIcon>
          <ListItemText primary="Sliders" />
        </ListItem>
        <ListItem component={Link} to="/dialogs" onClick={onClose}>
          <ListItemIcon>
            <WebAsset />
          </ListItemIcon>
          <ListItemText primary="Dialogs" />
        </ListItem>
        <ListItem component={Link} to="/dropdowns" onClick={onClose}>
          <ListItemIcon>
            <WebAsset />
          </ListItemIcon>
          <ListItemText primary="Dropdowns" />
        </ListItem>
        <ListItem component={Link} to="/typography" onClick={onClose}>
          <ListItemIcon>
            <ViewCarousel />
          </ListItemIcon>
          <ListItemText primary="Typography" />
        </ListItem>
        <ListItem component={Link} to="/icons" onClick={onClose}>
          <ListItemIcon>
            <ThumbUpOutlined />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItem>
      </List>
    </div>
  </Drawer>
);

DrawerComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

DrawerComponent.defaultProps = {
  onClose: () => {}
};

export default withStyles(styles)(DrawerComponent);
