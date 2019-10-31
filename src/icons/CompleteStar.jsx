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

const CompleteStarIcon = ({ classes, size = 'small', enableTabIndex = false, ...other }) => (
  <SvgIcon viewBox='0 0 18 18' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path fill='currentcolor' fillRule='nonzero' stroke='#003558' strokeWidth='1.5' d='M6.635 5.108l-4.684.725a.5.5 0 0 0-.284.841l3.42 3.554-.764 4.75a.5.5 0 0 0 .738.516L9 13.288l3.938 2.206a.5.5 0 0 0 .738-.515l-.764-4.75 3.42-3.555a.5.5 0 0 0-.283-.84l-4.684-.726L9.454.98a.5.5 0 0 0-.908 0l-1.91 4.128z' />
  </SvgIcon>
)

CompleteStarIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.bool
}

export default withStyles(styles)(CompleteStarIcon)
