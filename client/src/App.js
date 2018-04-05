import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/main';

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
