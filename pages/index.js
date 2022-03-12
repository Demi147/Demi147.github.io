import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import FirstGame from "./games/firstGame/firstThreeGame";
class App extends Component {
  render() {
    return (
      <div>
        Hello world
        <div>
          <FirstGame></FirstGame>
        </div>
      </div>
    );
  }
}

export default App;
