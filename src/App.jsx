import React, { Component } from "react";
import { SideNav } from "./components";
import { Intro, Experience } from "./views";
import './scss/resume.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <div className="container-fluid p-0">
          <Intro />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
