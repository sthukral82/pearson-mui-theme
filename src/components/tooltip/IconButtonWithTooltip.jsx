import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowTooltip from './ArrowTooltip';

/**
 * A component that extends IconButton to add tooltip functionality.
 */
const IconButtonWithTooltip = ({
  title, tooltipPlacement, children, ...other
}) => (title ? (
  <ArrowTooltip
    title={title}
    placement={tooltipPlacement}
  >
    <IconButton {...other}>
      {children}
    </IconButton>
  </ArrowTooltip>
) : (
  <IconButton {...other}>
    {children}
  </IconButton>
));

IconButtonWithTooltip.defaultProps = {
  title: null,
  tooltipPlacement: 'bottom'
};

IconButtonWithTooltip.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tooltipPlacement: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default IconButtonWithTooltip;
