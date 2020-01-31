# Pearson Material UI Theme

This is Material UI Theme created to match Pearson UX specs as closely as possible.

### Note
* Pearson Material UI Theme version 0.x supports Material UI v3.x / React < 16.8
* *(Still alpha)* Pearson Material UI Theme version 1.x supports Material UI v4.x / React 16.12+
 

### How to use
First, you have to include Open Sans font in your application. The best way would be add that in the head of
the application's index.html. Mostly this can be found in the public directory:
```html
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans"
  rel="stylesheet">
```

Install the package in your project. In your app root folder do:

**NPM Command**

```shell
> npm install --save @greenville/mui-theme
```

**Yarn Command**

```shell
> yarn add @greenville/mui-theme
```

Once package is installed, it can be imported and used as your theme.

***Material UI 3.x***

For Material UI 3.x use Pearson MUI Theme v0.x.
```javascript
import pearsonTheme from '@greenville/mui-theme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
```

Wrap the theme provider on the root of your app:

```html
<MuiThemeProvider theme={createMuiTheme(pearsonTheme)}>
  <YourApp />
</MuiThemeProvider>
```

***Material UI 4.x***

*Not production-ready*

For Material UI 4.x use Pearson MUI Theme v1.x
```javascript
import pearsonTheme from '@greenville/mui-theme';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
```

Wrap the theme provider on the root of your app:

```html
<ThemeProvider theme={createMuiTheme(pearsonTheme)}>
  <YourApp />
</ThemeProvider>
```
