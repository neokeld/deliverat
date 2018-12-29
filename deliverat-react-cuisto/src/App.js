import React, { Component } from "react";
import "./assets/css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menus from "./components/Menus.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          { <Link to="/menus">Menus</Link> }
          <Route path="/menus" component={Menus} />
        </div>
      </Router>
    );
  }
}

export default App;
