import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  popup: {
    width: 360
  },
  popper: {
    zIndex: 100
  }
});


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.ignoreOpen = false;
    this.state = { open: false };
  }

  handleToggle = () => {
    if (this.state.open || !this.ignoreOpen) {
      this.handleChange(!this.state.open);
    }
  };

  handleClose = () => {
    this.ignoreOpen = true;
    setTimeout(
      () => {
        this.ignoreOpen = false;
      }, 5
    );
    this.handleChange(false);
  };

  handleChange(newOpen) {
    if (this.props.onChange) {
      this.props.onChange(newOpen);
    } else {
      this.setState({ open: newOpen });
    }
  }

  isOpen() {
    if (this.props.onChange) {
      // state managed by parent
      return this.props.open;
    }
    return this.state.open;
  }

  render() {
    // Returns open state either from parent or local
    const open = this.isOpen();
    const {
      classes, idPrefix, children, renderIcon
    } = this.props;
    return (
      <Fragment>
        <IconButton
          id={`${idPrefix}-icon-button`}
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'profile-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {renderIcon(open)}
        </IconButton>
        <Popper
          id={idPrefix}
          open={open}
          className={classes.popper}
          anchorEl={this.anchorEl}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Collapse
              {...TransitionProps}
              id="profile-menu"
              style={{ transformOrigin: placement === 'bottom' ? 'top' : 'bottom' }}
            >
              <Paper className={classes.popup} onClick={this.handleClose}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  {children}
                </ClickAwayListener>
              </Paper>
            </Collapse>
          )}
        </Popper>
      </Fragment>
    );
  }
}

Dropdown.defaultProps = {
  idPrefix: 'pmui-profile-dropdown',
  open: false,
  onChange: null
};

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node.isRequired), PropTypes.node.isRequired]).isRequired,
  renderIcon: PropTypes.func.isRequired,
  open: PropTypes.bool,
  idPrefix: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(styles)(Dropdown);
