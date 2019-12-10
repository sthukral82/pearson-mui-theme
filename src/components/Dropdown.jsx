import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import IconButtonWithTooltip from './tooltip/IconButtonWithTooltip';

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
  }

  handleToggle = () => {
    if (this.props.open || !this.ignoreOpen) {
      this.handleChange(!this.props.open);
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
    }
  }

  render() {
    // Returns open state either from parent or local
    const open = this.props.open;
    const {
      classes, id, title, hide, tooltipPlacement, children, icon, color
    } = this.props;
    return hide ? null : (
      <Fragment>
        <IconButtonWithTooltip
          id={id}
          title={title}
          tooltipPlacement={tooltipPlacement}
          color={color}
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          aria-owns={open ? `${id}-profile-menu` : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {icon}
        </IconButtonWithTooltip>
        <Popper
          id={`${id}-profile-menu-pop`}
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
              id={`${id}-profile-menu`}
              style={{ transformOrigin: placement === 'bottom' ? 'top' : 'bottom' }}
            >
              <Paper className={this.props.className || classes.popup}>
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
  id: 'pmui-dropdown',
  open: false,
  hide: false,
  title: null,
  className: null,
  tooltipPlacement: 'bottom',
  color: 'default',
  onChange: null
};

Dropdown.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  open: PropTypes.bool,
  hide: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'default', 'inherit', 'action']),
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tooltipPlacement: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onChange: PropTypes.func
};

export default withStyles(styles)(Dropdown);
