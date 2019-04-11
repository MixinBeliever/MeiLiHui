import React, { Component } from 'react';
import './App.css';
import Headerbar from './component/Headerbar/headerbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Headerbar></Headerbar>
          { this.props.children }
      </div>
    );
  }
}

export default App;
