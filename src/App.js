import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./components/pages/about.component";
import User from "./components/users/user.component";

import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.components";
import Search from "./components/users/search.component";
import Alert from "./components/layout/alert.component";

import "./app.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, newAlert] = useState(null);

  const searchUser = async params => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${params}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlert = (msg, type) => {
    newAlert({ msg, type });
    setTimeout(() => {
      newAlert(null);
    }, 3000);
  };

  const getUser = async userName => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async userName => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  return (
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
                  <Search
                    searchUser={searchUser}
                    clearUsers={clearUsers}
                    showClear={users.length > 1 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users users={users} loading={loading} />
                </React.Fragment>
              )}
            />
            <Route exact path="/about" component={AboutPage} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
