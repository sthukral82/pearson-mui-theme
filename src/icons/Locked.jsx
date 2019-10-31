import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  small: {
    width: 18,
    height: 18
  },
  normal: {
    width: 24,
    height: 24
  }
}

const LockedIcon = ({ classes, size = 'small', enableTabIndex = false, ...other }) => (
  <SvgIcon viewBox='0 0 16 18' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path fill='currentcolor' d='M2.598 6.26v-.782a5.478 5.478 0 1 1 10.956 0v.783h.783c.864 0 1.565.7 1.565 1.565v8.609c0 .864-.7 1.565-1.565 1.565H1.815C.951 18 .25 17.3.25 16.435V7.826c0-.864.7-1.565 1.565-1.565h.783zm1.565 0h7.826v-.782a3.913 3.913 0 1 0-7.826 0v.783zm4.97 6.471c.465-.331.768-.875.768-1.49v-.021a1.828 1.828 0 0 0-3.656 0v.021c0 .618.306 1.164.775 1.495v1.742c0 .216.175.392.39.392h1.331a.391.391 0 0 0 .392-.392v-1.747z' />
  </SvgIcon>
)

LockedIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.bool
}

export default withStyles(styles)(LockedIcon)
