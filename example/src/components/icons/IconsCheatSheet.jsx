import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import {
  AddCircleOutlinedIcon, AddIcon,
  ArchiveIcon, ArrowBackIcon,
  BookmarkOutlinedIcon, BookmarkFilledIcon, CalendarOutlined, CaretDownIcon, CaretUpIcon, CircleOutlineIcon,
  CheckCircleFilledIcon, ChevronLeftIcon, ChevronRightIcon, DotFilledIcon,
  ExpandIcon, FilterIcon, FlashcardOutlinedIcon, FolderIcon, ListBulletedIcon, ListenIcon, LockIcon, MenuIcon, NotebookIcon, PearsonLogo, RemoveIcon,
  SearchIcon, SmallCircleFilledIcon, SmallCircleHalfFilledIcon, SmallCircleOutlineIcon,
  StarFilledIcon, StarHalfFilledIcon, StarOutlineIcon
} from 'pearson-mui-theme';

const icons = new Map([
  ['AddIcon', AddIcon],
  ['AddCircleOutlinedIcon', AddCircleOutlinedIcon],
  ['ArchiveIcon', ArchiveIcon],
  ['ArrowBackIcon', ArrowBackIcon],
  ['BookmarkOutlinedIcon', BookmarkOutlinedIcon],
  ['BookmarkFilledIcon', BookmarkFilledIcon],
  ['CalendarOutlined', CalendarOutlined],
  ['CaretDownIcon', CaretDownIcon],
  ['CaretUpIcon', CaretUpIcon],
  ['CheckCircleFilledIcon', CheckCircleFilledIcon],
  ['ChevronLeftIcon', ChevronLeftIcon],
  ['ChevronRightIcon', ChevronRightIcon],
  ['CircleOutlineIcon', CircleOutlineIcon],
  ['DotFilledIcon', DotFilledIcon],
  ['ExpandIcon', ExpandIcon],
  ['FilterIcon', FilterIcon],
  ['FlashcardOutlinedIcon', FlashcardOutlinedIcon],
  ['FolderIcon', FolderIcon],
  ['ListBulletedIcon', ListBulletedIcon],
  ['ListenIcon', ListenIcon],
  ['LockIcon', LockIcon],
  ['MenuIcon', MenuIcon],
  ['NotebookIcon', NotebookIcon],
  ['PearsonLogo', PearsonLogo],
  ['RemoveIcon', RemoveIcon],
  ['SearchIcon', SearchIcon],
  ['SmallCircleFilledIcon', SmallCircleFilledIcon],
  ['SmallCircleHalfFilledIcon', SmallCircleHalfFilledIcon],
  ['SmallCircleOutlineIcon', SmallCircleOutlineIcon],
  ['StarFilledIcon', StarFilledIcon],
  ['StarHalfilledIcon', StarHalfFilledIcon],
  ['StarOutlineIcon', StarOutlineIcon]
]);

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  iconButton: {
    margin: 9
  }
});

/**
 * Renders a cheat list of Icons.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        <TableCell>Icon Name</TableCell>
        <TableCell align="center">Large</TableCell>
        <TableCell align="center">Default</TableCell>
        <TableCell align="center">Small</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        Array.from(icons).map(([name, Icon], key) => (
          <TableRow key={key}>
            <TableCell component="th" scope="row" style={{ backgroundColor: '#c7c7c7' }}>
              <icon />
              {name}
            </TableCell>
            <TableCell align="center">
              <Icon fontSize="large" />
            </TableCell>
            <TableCell align="center"><Icon color="primary" /></TableCell>
            <TableCell align="center" style={{ backgroundColor: '#c7c7c7' }}>
              <Icon fontSize="small" color="secondary" />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
);

component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(component);
