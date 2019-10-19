import React from "react";
import axios from "axios";

import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.components";
import Search from "./components/users/search.component";

import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    };
  }

  searchUser = async params => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${params}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="main-app">
        <Navbar title="Github Finder" />
        <div className="container">
          <Search searchUser={this.searchUser} />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
