import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import OpenCloseIndicator from './OpenCloseIndicator';
import Dropdown from './Dropdown';

const ProfileDropdown = ({
  text, open, hide, onChange, id, children, ...rest
}) => {
  const avatarColor = open ? 'secondary' : 'primary';
  return (
    <Dropdown
      id={id}
      open={open}
      hide={hide}
      color="secondary"
      onChange={onChange}
      disableHover
      icon={
        (
          <Fragment>
            <Avatar
              id={`${id}-icon-button-avatar`}
              color={avatarColor}
              disableHover={open}
              aria-label={rest['aria-label']}
            >
              {text}
            </Avatar>
            <OpenCloseIndicator
              id={`${id}-indicator`}
              open={open}
            />
          </Fragment>
        )
      }
      {...rest}
    >
      {children}
    </Dropdown>
  );
};

ProfileDropdown.defaultProps = {
  id: 'pmui-profile-dropdown',
  open: true,
  hide: false,
  onChange: () => {}
};

ProfileDropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  open: PropTypes.bool,
  hide: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default ProfileDropdown;
