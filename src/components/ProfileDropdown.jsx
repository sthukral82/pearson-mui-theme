import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import OpenCloseIndicator from './OpenCloseIndicator';
import Dropdown from './Dropdown';

const ProfileDropdown = ({
  text, idPrefix, children, ...rest
}) => (
  <Dropdown
    idPrefix={idPrefix}
    renderIcon={
      (open) => {
        const avatarColor = open ? 'secondary' : 'primary';
        return (
          <Fragment>
            <Avatar
              id={`${idPrefix}-icon-button-avatar`}
              color={avatarColor}
              aria-label={rest['aria-label']}
            >
              {text}
            </Avatar>
            <OpenCloseIndicator
              id={`${idPrefix}-indicator`}
              open={open}
            />
          </Fragment>
        );
      }
    }
    {...rest}
  >
    {children}
  </Dropdown>
);

ProfileDropdown.defaultProps = {
  idPrefix: 'pmui-profile-dropdown',
  open: false,
  onChange: null
};

ProfileDropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node.isRequired), PropTypes.node.isRequired]).isRequired,
  open: PropTypes.bool,
  idPrefix: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default ProfileDropdown;
