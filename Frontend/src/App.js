import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './container/Navigation/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Navigation/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
