import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import FirstGame from "./games/firstGame/firstThreeGame";
import Intro from "./main/intro";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Intro></Intro>
        <FirstGame></FirstGame>
      </div>
    );
  }
}

export default App;
