import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./components/pages/about.component";

import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.components";
import Search from "./components/users/search.component";
import Alert from "./components/layout/alert.component";

import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      alert: null
    };
  }

  searchUser = async params => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${params}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () =>
    this.setState({
      users: [],
      loading: false
    });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, loading, alert } = this.state;
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
                      searchUser={this.searchUser}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 1 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </React.Fragment>
                )}
              />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
