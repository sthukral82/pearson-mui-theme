import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {
  VerticalTabs, Icon
} from '@greenville/mui-theme';

function TabContainer(props) {
  const {
    children, value, index, ...other
  } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      id={`vertical-TabContainer-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-TabContainer-${index}`
  };
}

const styles = theme => ({
  activeTab: theme.overrides.MuiVerticalTabs.activeTab,
  container: theme.overrides.MuiVerticalTabs.container,
  labelContainer: theme.overrides.MuiVerticalTabs.labelContainer,
  root: theme.overrides.MuiVerticalTabs.root,
  tab: theme.overrides.MuiVerticalTabs.tab,
  tabContent: theme.overrides.MuiVerticalTabs.tabContent,
  wrapper: theme.overrides.MuiVerticalTabs.wrapper
});

class SimpleVerticalTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.container}>
        <VerticalTabs
          value={value}
          onChange={this.handleChange}
        >
          <Tab
            classes={classes}
            label="Back"
            {...a11yProps(0)}
            icon={<Icon name="ArrowBack" fontSize="default" />}
            className={`${classes.tab} ${value === 0 ? classes.activeTab : ''}`}
          />
          <Tab
            classes={classes}
            label="Contents"
            {...a11yProps(1)}
            icon={<Icon name="ListBulleted" fontSize="large" />}
            className={`${classes.tab} ${value === 1 ? classes.activeTab : ''}`}
          />
          <Tab
            classes={classes}
            label="Bookmarks"
            {...a11yProps(2)}
            icon={<Icon name="BookmarkOutlined" fontSize="large" />}
            className={`${classes.tab} ${value === 2 ? classes.activeTab : ''}`}
          />
          <Tab
            classes={classes}
            label="NoteBook"
            {...a11yProps(3)}
            icon={<Icon name="Notebook" fontSize="large" />}
            className={`${classes.tab} ${value === 3 ? classes.activeTab : ''}`}
          />
          <Tab
            classes={classes}
            label="Study"
            {...a11yProps(4)}
            icon={<Icon name="FlashcardOutlined" fontSize="large" />}
            className={`${classes.tab} ${value === 4 ? classes.activeTab : ''}`}
          />
          <Tab
            classes={classes}
            label="Resources"
            {...a11yProps(5)}
            icon={<Icon name="Folder" fontSize="large" />}
            className={`${classes.tab} ${value === 5 ? classes.activeTab : ''}`}
          />
          <Tab
            classes={classes}
            label="Assignment"
            {...a11yProps(6)}
            icon={<Icon name="CalendarOutlined" fontSize="large" />}
            className={`${classes.tab} ${value === 6 ? classes.activeTab : ''}`}
          />
        </VerticalTabs>
        {value === 0
        && <TabContainer value={value} index={0} className={classes.tabContent}> Showing Back tab </TabContainer>}
        {value === 1
        && <TabContainer value={value} index={1} className={classes.tabContent}> Showing Contents tab </TabContainer>}
        {value === 2
        && <TabContainer value={value} index={2} className={classes.tabContent}> Showing Bookmarks tab </TabContainer>}
        {value === 3
        && <TabContainer value={value} index={3} className={classes.tabContent}> Showing NoteBook tab </TabContainer>}
        {value === 4
        && <TabContainer value={value} index={4} className={classes.tabContent}> Showing Study tab </TabContainer>}
        {value === 5
        && <TabContainer value={value} index={5} className={classes.tabContent}> Showing Resources tab </TabContainer>}
        {value === 6
        && <TabContainer value={value} index={6} className={classes.tabContent}> Showing Assignment tab </TabContainer>}
      </div>
    );
  }
}

SimpleVerticalTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleVerticalTabs);
