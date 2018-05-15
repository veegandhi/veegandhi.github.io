import React, { Component } from 'react';
import { SideNav, Section } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Section />
      </div>
    );
  }
}

export default App;
