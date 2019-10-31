import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  small: {
    width: 18,
    height: 18,
    fill: 'transparent'
  },
  normal: {
    width: 24,
    height: 24,
    fill: 'transparent'
  }
}

const IncompleteCircleIcon = ({ classes, size = 'small', enableTabIndex = false, ...other }) => (
  <SvgIcon viewBox='0 0 18 18' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <circle cx='9' cy='9' r='4' stroke='#6A7070' strokeWidth='1.5' />
  </SvgIcon>
)

IncompleteCircleIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.bool
}

export default withStyles(styles)(IncompleteCircleIcon)
