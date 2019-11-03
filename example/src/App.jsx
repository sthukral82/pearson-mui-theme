import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  MuiThemeProvider, createMuiTheme, jssPreset, createGenerateClassName
} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import pearsonTheme, { PearsonLogo, MenuIcon } from 'pearson-mui-theme';
import DrawerComponent from './common/DrawerComponent';
import SampleRenderer from './common/SampleRenderer';
import './App.css';

const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point'
});
const generateClassName = createGenerateClassName();
/**
 * The main App Component.
 *
 * @author Hari Gangadharan
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleMenuClick = () => {
    this.setState({ drawerOpen: true });
  };

  render() {
    return (
      <div>
        <JssProvider jss={jss} classNamePrefix="pmui" generateClassName={generateClassName}>
          <MuiThemeProvider theme={createMuiTheme(pearsonTheme)}>
            <div className="curve">
              <PearsonLogo style={{ fontSize: 49 }} color="secondary" />
              <IconButton style={{ paddingLeft: 16 }} onClick={this.handleMenuClick}>
                <MenuIcon color="secondary" />
              </IconButton>
            </div>
            <BrowserRouter>
              <div className="pearsonMuiTheme">
                <DrawerComponent onClose={this.handleDrawerClose} open={this.state.drawerOpen} />
                <Route exact path="/" render={() => (<SampleRenderer name="Home" />)} />
                <Route exact path="/buttons" render={() => (<SampleRenderer name="Buttons" />)} />
                <Route exact path="/cards" render={() => (<SampleRenderer name="Cards" />)} />
                <Route exact path="/inputs" render={() => (<SampleRenderer name="Inputs" />)} />
                <Route exact path="/selections" render={() => (<SampleRenderer name="Selections" />)} />
                <Route exact path="/avatars" render={() => (<SampleRenderer name="Avatars" />)} />
                <Route exact path="/typography" render={() => (<SampleRenderer name="Typography" />)} />
                <Route exact path="/tabs" render={() => (<SampleRenderer name="Tabs" />)} />
                <Route exact path="/sliders" render={() => (<SampleRenderer name="Sliders" />)} />
                <Route exact path="/dialogs" render={() => (<SampleRenderer name="Dialogs" />)} />
                <Route exact path="/dropdowns" render={() => (<SampleRenderer name="Dropdowns" />)} />
                <Route exact path="/icons" render={() => (<SampleRenderer name="Icons" />)} />
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        </JssProvider>
      </div>
    );
  }
}

export default App;
