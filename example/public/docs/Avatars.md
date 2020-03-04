# Avatars

Visit [Avatars](https://uxframework.pearson.com/c/avatar-display) in Pearson UX specifications.


**Usage**
```html
import { Avatar } from '@greenville/mui-theme';

<Avatar
  aria-label="Hari Gangadharan's Profile"
  color={primary | secondary | default}
  size={small | medium | large}
  className={some-classname-to-add}
>HG</Avatar>
```

**Props**

**Color** prop allows you to choose the color of the Avatar.

|color|description|
|:---|:---|
| **primary** | White text, white border & transparent background |
| **secondary** | Pearson digital blue text and white background |
| **default** (default) | White text and medium gray background|


**Size** prop allows you to choose the size of the Avatar.

|size|description|
|:---|:---|
| small | 40x40 |
| medium (default) | 48x48 |
| large | 56x56 |


If **disableHover** is set to true, hover is disabled.




