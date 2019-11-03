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
<AddIcon color="primary" />
<AddIcon color="secondary" />
<AddIcon color="action" />
<AddIcon color="error" />
<AddIcon color="disabled" />

<AddIcon color="primary" fontSize="small" />
<AddIcon color="secondary" fontSize="large" />


<IconButton className={classes.root} aria-label="NoteBook" disabled color="primary">
    <NoteBookIcon color="action" />
</IconButton>
```

