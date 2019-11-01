import React from 'react';
import TextField from '@material-ui/core/TextField';

/**
 * Renders/demos Default Button.
 *
 * @author Hari Gangadharan
 */
const component = () => (
  <div className="defaultInput">
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
      margin="normal"
    />
    <TextField
      id="standard-search"
      label="Search field"
      fullWidth
      placeholder="Example: Elephants in Africa"
      type="text"
      margin="normal"
    />
  </div>
);

export default component;
