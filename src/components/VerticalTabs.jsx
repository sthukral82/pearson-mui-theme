import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: '#002e60',
    height: '100%',
    width: 85,
    minWidth: 85,
    maxWidth: 85,
    minHeight: 640
  },
  tabs: {
    border: 0
  },
  indicator: {
    display: 'none'
  }
}));

/**
 * Vertical tab implementation
 *
 * @file VerticalTab.jsx
 */
const VerticalTabs = ({
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs
        aria-label="Vertical tabs"
        className={classes.tabs}
        classes={{
          indicator: classes.indicator
        }}
        orientation="vertical"
        {...rest}
      >
        {children}
      </Tabs>
    </div>
  );
};

VerticalTabs.propTypes = {
  children: PropTypes.array.isRequired
};

export default VerticalTabs;
