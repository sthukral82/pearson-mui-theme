import colors from './colors';

const pseudoOutline = (padding, borderRadius, focusColor) => ({
  content: '""',
  boxSizing: 'content-box',
  position: 'absolute',
  top: -(padding * 3),
  left: -(padding * 3),
  borderRadius,
  width: `calc(100% + ${padding * 4}px)`,
  height: `calc(100% + ${padding * 4}px)`,
  border: `2px solid ${focusColor}`
});


const cardActionAreaPseudoOutline = (padding, borderRadius, focusColor) => ({
  content: '""',
  boxSizing: 'content-box',
  position: 'absolute',
  top: -(padding * 2),
  left: -(padding * 2),
  borderRadius,
  width: `calc(100% + ${padding * 8}px)`,
  height: `calc(100% + ${padding * 8}px)`,
  border: `2px solid ${focusColor}`
});


const menuPseudoOutline = (focusColor) => ({
  content: '""',
  boxSizing: 'content-box',
  position: 'absolute',
  top: 1,
  left: 1,
  borderRadius: 8,
  width: 'calc(100% - 6px)',
  height: 'calc(100% - 6px)',
  border: `2px solid ${focusColor}`
});

const tabPseudoOutline = (borderRadius, focusColor) => ({
  content: '""',
  boxSizing: 'content-box',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius,
  width: 'calc(100% - 4px)',
  height: 'calc(100% - 4px)',
  border: `2px solid ${focusColor}`
});

// pearson {} should be used for internal reference only
const pearson = {
  font: {
    family: [
      'Open Sans',
      'Calibri',
      'Tahoma',
      'sans-serif'
    ],
    size: {
      small: 12,
      normal: 14,
      large: 16
    }
  },
  borderRadius: {
    normal: 22,
    large: 32
  },
  lineHeight: {
    xxl: 1.58,
    xl: 1.5,
    l: 1.38,
    m: 1.33,
    s: 1.29,
    xs: 1.25,
    xxs: 1
  },
  colors,
  iconSize: {
    normal: 19
  },
  padding: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16
  },
  avatar: {
    small: 60,
    large: 120
  }
};

const pearsonMuiTheme = {
  spacing: 16,
  props: {
    // Name of the component️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application
      focusVisibleClassName: 'pmuiCustomFocusVisible'
    },
    MuiAppBar: {
      elevation: 0,
      color: 'inherit'
    },
    MuiMenuItem: {
      focusVisibleClassName: 'pmuiCustomFocusVisible'
    },
    MuiSlider: {
      trackSize: 8
    }
  },
  palette: {
    primary: {
      light: colors.seaBlue,
      main: colors.digitalBlue,
      dark: colors.inkBlue,
      contrastText: colors.white
    },
    secondary: {
      main: colors.white,
      dark: colors.white,
      contrastText: colors.seaBlue
    },
    text: {
      primary: colors.charcoal,
      secondary: colors.mediumGray,
      disabled: colors.concrete,
      hint: colors.charcoal
    },
    error: {
      main: colors.strawberryRed,
      contrastText: colors.whiteGray
    },
    action: {
      disabled: colors.mediumGray,
      disabledBackground: colors.moonlight
    }
  },
  typography: {
    useNextVariants: true,
    color: colors.charcoal,
    fontFamily: pearson.font.family,
    fontSize: pearson.font.size.normal
  },
  mixins: {
  },
  overrides: {
    MuiPaper: {
      root: {
        boxSizing: 'border-box',
        padding: 0,
        marginLeft: 0,
        boxShadow: '0 5px 22px 4px rgba(0, 0, 0, 0.03), 0 7px 8px -4px rgba(0, 0, 0, 0.05)',
        backgroundColor: colors.white
      },
      elevation1: {
        minHeight: 100
      },
      rounded: {
        borderRadius: 8
      }
    },
    MuiAppBar: {
      root: {
        maxWidth: 4000
      },
      colorPrimary: {
        backgroundColor: colors.white,
        color: colors.charcoal,
        border: '0 none'
      },
      colorSecondary: {
        backgroundColor: colors.transparent,
        color: colors.white,
        border: '0 none'
      },
      // eslint-disable-next-line no-dupe-keys
      colorDefault: {
        backgroundColor: colors.white,
        color: colors.charcoal,
        border: '0 none'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        marginRight: 10,
        marginLeft: 10,
        '@media (min-width: 960px)': {
          minWidth: 'inherit'
        },
        '&$selected': {
          fontWeight: 600
        }
      },
      textColorInherit: {
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseudoOutline(6, colors.summerSky)
        }
      },
      textColorPrimary: {
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseudoOutline(6, colors.focusBlue)
        }
      },
      textColorSecondary: {
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: 1.29,
        textTransform: 'uppercase',
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseudoOutline(6, colors.summerSky)
        }
      },
      labelContainer: {
        paddingTop: '12px',
        paddingBottom: '10px',
        paddingLeft: 0,
        paddingRight: 0,
        '@media (min-width: 960px)': {
          padding: 'inherit'
        }
      },
      wrapper: {
        paddingLeft: 4,
        paddingRight: 4
      }
    },
    MuiToolbar: {
      root: {
        '& button:not(:first-child)': {
          marginLeft: 18
        }
      },
      dense: {
        height: 50,
        borderBottom: `1px solid ${colors.alto}`
      }
    },
    MuiCustomTabs: {
      DarkMode: {
        root: {
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          padding: '10px',
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontStretch: 'normal',
          letterSpacing: 'normal'
        },
        tabs: {
          backgroundColor: '#002e60',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '1.29',
          color: '#ffffff'
        },
        indicator: {
          height: 3,
          borderRadius: 2,
          backgroundColor: '#ffffff'
        },
        CustomTab: {
          border: 0,
          fontSize: '14px',
          lineHeight: '1.29'
        }
      }
    },
    MuiPrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: colors.white,
        height: 3,
        marginBottom: 8
      }
    },
    MuiVerticalTabs: {
      container: {
        flexGrow: 1,
        display: 'flex',
        minHeight: 224,
        height: '100%',
        padding: '20px',
        backgroundColor: '#f5f5f5'
      },
      root: {
        minWidth: 85
      },
      activeTab: {
        width: 58,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid #33557b',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
      },
      tab: {
        color: '#ffffff',
        textAlign: 'center',
        margin: 0,
        height: 80,
        fontSize: 10,
        fontWeight: 600,
        minHeight: 60,
        opacity: 1,
        padding: 0,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid #33557b',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8
        },
        '&:active': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid #33557b',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8
        },
        '&:visited': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid #33557b',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8
        }
      },
      tabContent: {
        width: '100%',
        paddingLeft: '10px'
      },
      wrapper: {
        padding: 0
      },
      labelContainer: {
        paddingTop: 9
      }
    },
    MuiTypography: {
      root: {
        lineHeight: pearson.lineHeight.l,
        color: colors.charcoal,
        fontSize: 16
      },
      h1: {
        fontSize: '2.3125em',
        fontWeight: 300,
        lineHeight: pearson.lineHeight.m
      },
      h2: {
        fontSize: '1.5em',
        fontWeight: 300,
        lineHeight: pearson.lineHeight.xs
      },
      h3: {
        fontSize: '1.25em',
        fontWeight: 600,
        fontStyle: 'normal',
        lineHeight: pearson.lineHeight.m
      },
      h4: {
        fontSize: '1.125em',
        fontWeight: 400,
        letterSpacing: 'normal',
        lineHeight: pearson.lineHeight.m
      },
      h5: {
        fontSize: '1em',
        fontWeight: 600,
        lineHeight: pearson.lineHeight.xs,
        color: colors.charcoal
      },
      h6: {
        fontSize: '0.875em',
        fontWeight: 600,
        lineHeight: pearson.lineHeight.xxl
      },
      subtitle1: {
        fontSize: '.75em',
        letterSpacing: 0.15,
        color: colors.mediumGray,
        lineHeight: pearson.lineHeight.xl
      },
      subtitle2: {
        fontSize: '.875em',
        fontWeight: 'normal',
        color: colors.mediumGray,
        letterSpacing: -0.3,
        lineHeight: pearson.lineHeight.m
      },
      body1: {
        fontSize: 16,
        lineHeight: pearson.lineHeight.xs
      },
      body2: {
        fontSize: 14
      }
    },
    MuiAvatar: {
      root: {
        height: 48,
        width: 48,
        fontSize: '1rem',
        fontWeight: 'bold',
        boxSizing: 'border-box'
      },
      colorDefault: {
        backgroundColor: colors.mediumGray,
        color: colors.white,
        border: `0px solid ${colors.mediumGray}`
      }
    },
    MuiButtonBase: {
      root: {
        border: `2px solid ${colors.transparent}`,
        '&$focusVisible': {
          '&:after': pseudoOutline(2, 36, colors.focusBlue)
        }
      }
    },
    MuiButton: {
      root: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.25,
        textTransform: 'none'
      },
      label: {
        minWidth: 104
      },
      text: {
        padding: 0,
        textAlign: 'inherit',
        border: '0px',
        '&:hover': {
          backgroundColor: 'inherit'
        },
        '&$focusVisible': {
          '&:after': pseudoOutline(2, 1, colors.focusBlue)
        }
      },
      outlined: {
        padding: '7px 17px',
        boxShadow: 'none',
        borderColor: colors.mediumGray,
        color: colors.mediumGray,
        backgroundColor: 'transparent',
        borderRadius: pearson.borderRadius.normal,
        '&:hover': {
          color: colors.charcoal,
          backgroundColor: 'transparent',
          borderColor: colors.charcoal
        },
        '&$disabled': {
          border: '1px solid',
          backgroundColor: colors.moonlight,
          borderColor: colors.moonlight
        }
      },
      textPrimary: {
        color: colors.whiteGray,
        backgroundColor: colors.strawberryRed,
        '&:hover': {
          color: colors.white,
          backgroundColor: colors.strawberryRed
        }
      },
      outlinedPrimary: {
        color: colors.white,
        backgroundColor: colors.digitalBlue,
        borderColor: colors.digitalBlue,
        '&:hover': {
          color: colors.white,
          borderColor: colors.inkBlue,
          backgroundColor: colors.inkBlue
        },
        '&$disabled': {
          opacity: 0.5,
          backgroundColor: colors.digitalBlue,
          border: 'solid 1px rgba(151, 151, 151, 0.07)',
          color: colors.white
        }
      },
      outlinedSecondary: {
        color: colors.seaBlue,
        borderColor: colors.white,
        backgroundColor: colors.white,
        '&$focusVisible': {
          '&:after': pseudoOutline(2, 36, colors.summerSky)
        },
        '&:hover': {
          backgroundColor: colors.white,
          boxShadow: '0 6px 10px 0 rgba(37, 37, 37, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.5)',
          color: colors.inkBlue
        },
        '&:active': {
          backgroundColor: colors.whiteGray,
          boxShadow: 'none'
        }
      },
      contained: {
        padding: '7px 20px',
        fontSize: 14,
        lineHeight: '18px',
        fontWeight: 600,
        borderRadius: pearson.borderRadius.normal,
        color: colors.charcoal,
        backgroundColor: colors.sunshineYellow,
        boxShadow: '0 5px 22px 4px rgba(0, 0, 0, 0.03), 0 7px 8px -4px rgba(0, 0, 0, 0.05)',
        '&:hover': {
          backgroundColor: colors.sunflowerYellow,
          color: colors.charcoal
        },
        '&:active': {
          boxShadow: 'none'
        }
      },
      containedPrimary: {
        color: colors.whiteGray,
        backgroundColor: colors.strawberryRed,
        '&:hover': {
          backgroundColor: colors.strawberryRed,
          color: colors.white
        }
      },
      sizeSmall: {
        padding: '5px 24px',
        fontSize: '0.875rem',
        lineHeight: '20px',
        '& span': {
          minWidth: 80
        }
      },
      sizeLarge: {
        padding: '9px 24px',
        fontSize: '16px',
        lineHeight: '20px',
        borderRadius: pearson.borderRadius.large
      }
    },
    MuiCard: {
      root: {
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 5%), 0px 4px 22px 0px rgba(0, 0, 0, 3%)'
      }
    },
    MuiCardActionArea: {
      root: {
        fontFamily: pearson.font.family,
        fontSize: pearson.font.size.large,
        boxSizing: 'border-box',
        '&$focusVisible': {
          '&:after': cardActionAreaPseudoOutline(-1, 5, colors.focusBlue),
          backgroundColor: 'inherit'
        },
        '&:hover': {
          background: 'inherit'
        }
      }
    },
    MuiCardActions: {
      root: {
        '@media (min-width:600px)': {
          paddingLeft: pearson.padding.xs,
          paddingRight: pearson.padding.m,
          paddingTop: pearson.padding.xs,
          paddingBottom: pearson.padding.s
        }
      }
    },
    MuiCardContent: {
      root: {
        paddingTop: pearson.padding.l,
        paddingBottom: pearson.padding.xs,
        paddingLeft: pearson.padding.l,
        paddingRight: pearson.padding.l,
        '@media (min-width:600px)': {
          paddingTop: pearson.padding.l,
          paddingBottom: pearson.padding.xs,
          paddingLeft: pearson.padding.l,
          paddingRight: pearson.padding.l
        }
      }
    },
    MuiCardHeader: {
      root: {
        paddingBottom: 0,
        alignItems: 'flex-start'
      },
      content: {
        overflow: 'hidden'
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: colors.alto,
        marginTop: pearson.padding.l,
        marginBottom: pearson.padding.l
      }
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'inherit',
          '& .applyHover': {
            color: pearson.colors.seaBlue
          }
        }
      }
    },
    MuiMenuItem: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)'
        },
        '&.pmuiCustomFocusVisible': {
          '&:after': menuPseudoOutline(colors.focusBlue)
        }
      }
    },
    MuiPopover: {
      root: {
        borderRadius: '4px',
        padding: '24px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
        marginTop: '10px'
      }
    },
    MuiSlider: {
      track: {
        backgroundColor: colors.seaBlue,
        height: 8,
        borderRadius: 16,
        '$vertical &': {
          width: 8
        }
      },
      thumb: {
        backgroundColor: colors.white,
        border: `solid 1px ${colors.alto}`,
        boxShadow: '0 5px 22px 4px rgba(0, 0, 0, 0.03), 0 7px 8px -4px rgba(0, 0, 0, 0.05)',
        width: 20,
        height: 20
      },
      rail: {
        backgroundColor: colors.concrete,
        height: 8,
        '$vertical &': {
          width: 8
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: 18
      },
      colorPrimary: {
        fill: colors.whiteGray
      },
      colorAction: {
        color: colors.charcoal
      },
      fontSizeSmall: {
        fontSize: 16
      },
      fontSizeLarge: {
        fontSize: 24
      }
    },
    MuiDialogActions: {
      root: {
        margin: 24
      }
    },
    MuiIconButton: {
      root: {
        padding: 6,
        color: colors.mediumGray,
        '&$disabled': {
          opacity: 0.5
        },
        '&.disableHover': {
          '&:hover': {
            backgroundColor: 'inherit'
          },
          '&:active': {
            backgroundColor: 'inherit'
          }
        },
        '&:hover': {
          backgroundColor: `${colors.alto}A6`,
          '& .avatarHover': {
            backgroundColor: `${colors.white}33`,
            color: colors.white
          }
        },
        '&.pmuiCustomFocusVisible': {
          backgroundColor: `${colors.alto}A6`
        }
      },
      sizeSmall: {
        padding: 4
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: `${colors.black}CC`
        },
        '&:active': {
          backgroundColor: `${colors.black}4D`
        },
        '&$disabled': {
          opacity: 0.5,
          color: colors.white
        },
        '&.pmuiCustomFocusVisible': {
          '&.disableHover': {
            backgroundColor: 'inherit'
          },
          backgroundColor: `${colors.black}CC`,
          '&:after': pseudoOutline(2, 36, colors.summerSky)
        }
      }
    },
    MuiRadio: {
      root: {
        paddingTop: 2,
        '&$checked': {
          '& + span': {
            fontWeight: 700,
            color: colors.digitalBlue
          }
        }
      }
    },
    MuiFormControl: {
    },
    MuiUnderline: {
      root: {
        '&:after': {
          borderBottomWidth: 4
        }
      }
    },
    MuiFormLabel: {
      root: {
        lineHeight: 1.38,
        '&$focused': {
          color: colors.charcoal
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        alignItems: 'flex-start',
        paddingTop: 30
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        marginBottom: 17,
      },
      iconButton: {
        padding: '7px'
      },
      dayLabel: {
        color: colors.mediumGray,
        width: 8,
        height: 16,
        margin: '12px 16px'
      }
    },
    MuiPickersDay: {
      day: {
        width: 32,
        height: 32,
        margin: 4
      },
      daySelected: {
        backgroundColor: colors.mediumGray,
        '&:hover': {
          backgroundColor: colors.mediumGray
        }
      },
      dayDisabled: {
        cursor: 'auto',
        color: colors.concrete
      },
      current: {
        backgroundColor: colors.moonlight,
        color: colors.charcoal
      }
    },
    MuiPickersCalendar: {
      transitionContainer: {
        minHeight: 236
      }
    }
  }
};

export default pearsonMuiTheme;
export { default as icons } from './icons';
export { default as Icon } from './icons/Icon';
export { default as CardList } from './components/CardList';
export { default as VerticalTabs } from './components/VerticalTabs';
export { default as MediaCard } from './components/MediaCard';
export { default as Avatar } from './components/Avatar';
export { default as ProfileDisplay } from './components/ProfileDisplay';
export { default as ProfileDropdown } from './components/ProfileDropdown';
export { default as Dropdown } from './components/Dropdown';
export { default as Tooltip } from './components/tooltip/ArrowTooltip';
export { default as IconButtonWithTooltip } from './components/tooltip/IconButtonWithTooltip';
export { default as PearsonLogo } from './icons/PearsonLogo';
