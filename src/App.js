import React, { Component } from "react";
import "./App.scss";
import Toggle from "./components/Common/Toggle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-container">
          <header className="App-header">
            <h1 className="App-title">SW species and people!</h1>
            <h2 className="App-subtitle">SWAPi practice assignment</h2>
          </header>
        </div>
        <body>
          <br />
          <Toggle />
        </body>
        <div className="footer-content">
          Star Wars
          {/* By EdwardBro */}
        </div>
      </div>
    );
  }
}

export default App;
