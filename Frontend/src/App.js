import React, { Component } from 'react';
import ErrorPage from './_error';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navigation from './container/Navigation/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={Navigation} />
              <Route component={ErrorPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
