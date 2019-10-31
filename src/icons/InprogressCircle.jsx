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

const InprogressCircleIcon = ({ classes, size = 'small', enableTabIndex = false, ...other }) => (
  <SvgIcon viewBox='0 0 18 18' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path fill='currentcolor' d='M9 13V5a4 4 0 1 0 0 8z' />
    <circle cx='9' cy='9' r='4' stroke='#003558' strokeWidth='1.5' />
  </SvgIcon>
)

InprogressCircleIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.bool
}

export default withStyles(styles)(InprogressCircleIcon)
