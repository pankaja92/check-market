import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Currency from './currency';
import CryptoList from './currency_main'

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CryptoList}/>
      <Route path="/currency" component={Currency}/>
    </Switch>
  </Router>
);

export default Main;
