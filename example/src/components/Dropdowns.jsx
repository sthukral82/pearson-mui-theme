import React from 'react';
import CodeRenderer from '../common/CodeRenderer';

/**
 * Renders/demos dropdowns.
 *
 * @author Hari Gangadharan
 */
const Dropdowns = () => (
  <div>
    <CodeRenderer name="dropdowns/ProfileDropdownExample" />
    <CodeRenderer name="dropdowns/BasicDropdownExample" />
  </div>
);
Dropdowns.displayName = 'Dropdowns';

export default Dropdowns;
