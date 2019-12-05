/**
 * PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 * Copyright © 2019 Pearson Education, Inc.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or
 * distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
 * */

/**
 * Arrow Tooltip Component Styles
 *
 * @author Karthick Paramasivam
 */

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      marginTop: '0.8em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`
      }
    },
    position: 'absolute',
    top: 0,
    left: 0
  };
}

const ArrowTooltipStyles = theme => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  },
  bootstrapPopper: arrowGenerator(theme.palette.common.black),
  bootstrapTooltip: {
    backgroundColor: theme.palette.common.black
  },
  bootstrapPlacementLeft: {
    margin: '0 8px'
  },
  bootstrapPlacementRight: {
    margin: '0 8px'
  },
  bootstrapPlacementTop: {
    margin: '8px 0'
  },
  bootstrapPlacementBottom: {
    margin: '8px 0'
  }
});

export default ArrowTooltipStyles;
