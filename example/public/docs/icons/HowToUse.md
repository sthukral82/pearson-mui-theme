### How To Use Icons

**Usage of fontSize prop**
Use fontSize and color to customize the button.

|fontSize|Description|
|:---|:---|
|~~inherit~~ | Inherits the font size from parent. __Never use this.__ |
|__default__  | 24px icons. This is the default option |
|__small__  | 18x icons. |
|__large__  | 30px icons. __Not used in our designs / for future use__ |

**Usage of color prop**

|color|Description|
|:---|:---|
|~~inherit~~ | This is the default option. Inherits the font size from parent. __Never use this.__ |
|__action__  | Usual icon buttons, color: charcoal. |
|__primary__  | Pearson digital blue |
|__secondary__  | White icons |
|__error__  | Red icons |
|__disabled__  | Medium gray icons |

**Usage**
```html
```html
import { Icon } from 'pearson-mui-theme';

<Icon name="Add" color="primary" />
<Icon name="Add" color="secondary" />
<Icon name="Add" color="action" />
<Icon name="Add" color="error" />
<Icon name="Add" color="disabled" />

<Icon name="Add" color="primary" fontSize="small" />
<Icon name="Add" color="secondary" fontSize="large" />


<IconButton className={classes.root} aria-label="NoteBook" disabled color="primary">
    <Icon name="NoteBook" color="action" />
</IconButton>
```

