import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Search path="/"></Search>
      </Router>
    );
  }
}

export default App;
