import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
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
        <MenuItem button component={Link} to="/" onClick={onClose}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>
        <MenuItem button component={Link} to="/avatars" onClick={onClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Avatars" />
        </MenuItem>
        <MenuItem button component={Link} to="/appbar" onClick={onClose}>
          <ListItemIcon>
            <ViewQuilt />
          </ListItemIcon>
          <ListItemText primary="AppBar" />
        </MenuItem>
        <MenuItem button component={Link} to="/buttons" onClick={onClose}>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Buttons & Links" />
        </MenuItem>
        <MenuItem button component={Link} to="/cards" onClick={onClose}>
          <ListItemIcon>
            <Pages />
          </ListItemIcon>
          <ListItemText primary="Cards" />
        </MenuItem>
        <MenuItem button component={Link} to="/inputs" onClick={onClose}>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Inputs" />
        </MenuItem>
        <MenuItem button component={Link} to="/selections" onClick={onClose}>
          <ListItemIcon>
            <SelectAllRounded />
          </ListItemIcon>
          <ListItemText primary="Selection Controls" />
        </MenuItem>
        <MenuItem button component={Link} to="/tabs" onClick={onClose}>
          <ListItemIcon>
            <Tab />
          </ListItemIcon>
          <ListItemText primary="Tabs" />
        </MenuItem>
        <MenuItem button component={Link} to="/sliders" onClick={onClose}>
          <ListItemIcon>
            <SwapHorizontalCircle />
          </ListItemIcon>
          <ListItemText primary="Sliders" />
        </MenuItem>
        <MenuItem button component={Link} to="/dialogs" onClick={onClose}>
          <ListItemIcon>
            <WebAsset />
          </ListItemIcon>
          <ListItemText primary="Dialogs" />
        </MenuItem>
        <MenuItem button component={Link} to="/dropdowns" onClick={onClose}>
          <ListItemIcon>
            <WebAsset />
          </ListItemIcon>
          <ListItemText primary="Menu & Dropdowns" />
        </MenuItem>
        <MenuItem button component={Link} to="/typography" onClick={onClose}>
          <ListItemIcon>
            <ViewCarousel />
          </ListItemIcon>
          <ListItemText primary="Typography" />
        </MenuItem>
        <MenuItem button component={Link} to="/icons" onClick={onClose}>
          <ListItemIcon>
            <ThumbUpOutlined />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </MenuItem>
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
