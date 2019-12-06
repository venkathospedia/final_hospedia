import React, { Component } from 'react';

import './App.css';
import MenuAppBar from './MenuAppBar';
import BookApp from './BookApp';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <BookApp />
      </React.Fragment>
    );
  }
}

export default App;
