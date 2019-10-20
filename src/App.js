import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./components/pages/about.component";
import NotFound from "./components/pages/not-found.component";

import User from "./components/users/user.component";

import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.components";
import Search from "./components/users/search.component";
import Alert from "./components/layout/alert.component";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  const [alert, newAlert] = useState(null);

  const setAlert = (msg, type) => {
    newAlert({ msg, type });
    setTimeout(() => {
      newAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="main-app">
          <Navbar title="Github Finder" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <Search setAlert={setAlert} />
                    <Users />
                  </React.Fragment>
                )}
              />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
