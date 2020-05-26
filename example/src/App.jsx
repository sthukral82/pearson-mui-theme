import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { JssProvider, SheetsRegistry } from 'react-jss';
import pearsonTheme, { Icon } from '@greenville/mui-theme';
import DrawerComponent from './common/DrawerComponent';
import SampleRenderer from './common/SampleRenderer';
import './App.css';

const sheets = new SheetsRegistry();

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
        <ThemeProvider theme={createMuiTheme(pearsonTheme)}>
          <JssProvider registry={sheets} classNamePrefix="pmui">
            <BrowserRouter>
              <div>
                <div className="curve">
                  <Icon name="PearsonLogo" style={{ fontSize: 49 }} color="secondary" />
                  <IconButton style={{ marginLeft: 16 }} color="secondary" onClick={this.handleMenuClick}>
                    <Icon name="Menu" color="secondary" />
                  </IconButton>
                </div>
                <div className="pearsonMuiTheme">
                  <DrawerComponent onClose={this.handleDrawerClose} open={this.state.drawerOpen} />
                  <Route exact path="/" render={() => (<SampleRenderer name="Home" />)} />
                  <Route exact path="/appbar" render={() => (<SampleRenderer name="AppBar" />)} />
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
              </div>
            </BrowserRouter>
          </JssProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
