import React, { Component } from "react";
import "./assets/css/App.css";
import { BrowserRouter as Router, Route , Link } from "react-router-dom";

import Menus from "./components/Menus.js";
import Checkout from "./components/Checkout.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          { <Link to="/menus">Menus</Link> }
          <Route path="/menus" component={Menus} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
