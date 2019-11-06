import React from 'react';
import PropTypes from 'prop-types';

import icons from '.';

/**
 * A wrapper for Pearson Icons.
 *
 * @author Hari Gangadharan
 */
const Icon = ({ name, ...rest }) => {
  const IconToRender = icons.get(name);
  return (
    <IconToRender {...rest} />
  )
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
