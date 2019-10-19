import React from "react";

import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.components";

import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="main-app">
        <Navbar title="Github Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
