import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

const MenuContent = ({ anchorEl, onClose }) => (
  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={onClose}
  >
    <MenuItem onClick={onClose}>Profile</MenuItem>
    <MenuItem onClick={onClose}>My account</MenuItem>
    <MenuItem onClick={onClose}>Logout</MenuItem>
  </Menu>
);

MenuContent.defaultProps = {
  anchorEl: null
};

MenuContent.propTypes = {
  anchorEl: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

/**
 * Renders/demos Profile Dropdown Component.
 *
 * @author Hari Gangadharan
 */
class BasicDropdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <MenuContent anchorEl={anchorEl} onClose={this.handleClose} />
      </div>
    );
  }
}


export default BasicDropdownExample;
