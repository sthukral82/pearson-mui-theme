import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#002e60',
    height: '100%',
    width: 60,
    minWidth: 60,
    maxWidth: 60,
    minHeight: 640
  },
  tabs: {
    border: 0
  }
});

// Customized Mui Tabs library
const CustomTabs = withStyles(() => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none'
  }
}))(Tabs);

const VerticalTabs = ({
  children,
  classes,
  ...rest
}) => (
  <div className={classes.root}>
    <CustomTabs
      aria-label="Vertical tabs"
      className={classes.tabs}
      {...rest}
    >
      {children}
    </CustomTabs>
  </div>
);

VerticalTabs.propTypes = {
  children: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VerticalTabs);
