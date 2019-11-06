import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { icons, Icon } from 'pearson-mui-theme';


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
        Array.from(icons.keys()).map((name, key) => (
          <TableRow key={key}>
            <TableCell component="th" scope="row" style={{ backgroundColor: '#c7c7c7' }}>
              {name}
            </TableCell>
            <TableCell align="center">
              <Icon name={name} fontSize="large" />
            </TableCell>
            <TableCell align="center"><Icon name={name} color="primary" /></TableCell>
            <TableCell align="center" style={{ backgroundColor: '#c7c7c7' }}>
              <Icon name={name} fontSize="small" color="secondary" />
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
