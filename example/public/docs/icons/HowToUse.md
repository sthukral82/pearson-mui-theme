### How To Use Icons

**Usage of fontSize prop**

Use fontSize and color to customize the button.

|fontSize|Description|
|:---|:---|
|__inherit__ | Inherits the font size from parent. __Use this option with caution.__ |
|__small__  | 16px icons. |
|__default__  | 18px icons. This is the default option |
|__large__  | 24px icons. |

**Usage of color prop**

Use the color in color prop of IconButton if the icon is wrapped in an IconButton.

The following colors can be used in the IconButton:

|color|Description|
|:---|:---|
|__inherit__ | This is the default option. Inherits the font size from parent. __Use this option with caution.__ |
|__default__  | Usual icon buttons, color: medium gray. |
|__primary__  | Pearson digital blue |
|__secondary__  | White icons |

Above those colors, following colors can be used in the icon component:

|color|Description|
|:---|:---|
|__error__  | Red icons |
|__disabled__  | Medium gray icons |

**Usage**

```html
import { Icon } from '@greenville/mui-theme';

<Icon name="Add" color="primary" />
<Icon name="Add" color="secondary" />
<Icon name="Add" color="action" />
<Icon name="Add" color="error" />
<Icon name="Add" color="disabled" />

<Icon name="Add" color="primary" fontSize="small" />
<Icon name="Add" color="secondary" fontSize="large" />


<IconButton color="default" className={classes.root} aria-label="NoteBook" disabled color="primary">
    <Icon name="NoteBook" />
</IconButton>
```

