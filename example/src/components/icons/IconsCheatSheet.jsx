import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import {
  AddIcon,
  AddItemIcon, ArchiveIcon, ArrowBackIcon, AssignedIcon, AssignmentIcon,
  BookmarkoffIcon, BookmarkonIcon, CaretDownIcon, CaretUpIcon, ChevronBackIcon, ChevronNextIcon, ContentsIcon,
  ExpandIcon, FilterIcon, ListenIcon, MenuIcon, NoteBookIcon, RemoveIcon, ResourcesIcon,
  SearchIcon, StudyIcon
} from 'pearson-mui-theme';

const icons = new Map([
  ['AddIcon', AddIcon],
  ['AddItemIcon', AddItemIcon],
  ['ArchiveIcon', ArchiveIcon],
  ['ArrowBackIcon', ArrowBackIcon],
  ['AssignedIcon', AssignedIcon],
  ['AssignmentIcon', AssignmentIcon],
  ['BookmarkoffIcon', BookmarkoffIcon],
  ['BookmarkonIcon', BookmarkonIcon],
  ['CaretDownIcon', CaretDownIcon],
  ['CaretUpIcon', CaretUpIcon],
  ['ChevronBackIcon', ChevronBackIcon],
  ['ChevronNextIcon', ChevronNextIcon],
  ['ContentsIcon', ContentsIcon],
  ['ExpandIcon', ExpandIcon],
  ['FilterIcon', FilterIcon],
  ['ListenIcon', ListenIcon],
  ['MenuIcon', MenuIcon],
  ['NoteBookIcon', NoteBookIcon],
  ['RemoveIcon', RemoveIcon],
  ['ResourcesIcon', ResourcesIcon],
  ['SearchIcon', SearchIcon],
  ['StudyIcon', StudyIcon]
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
        <TableCell align="right">Large</TableCell>
        <TableCell align="right">Default</TableCell>
        <TableCell align="right">Small</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        Array.from(icons).map(([name, Icon], key) => (
          <TableRow key={key}>
            <TableCell component="th" scope="row">
              <icon />
              {name}
            </TableCell>
            <TableCell align="right"><Icon fontSize="large" /></TableCell>
            <TableCell align="right"><Icon /></TableCell>
            <TableCell align="right"><Icon fontSize="small" /></TableCell>
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
