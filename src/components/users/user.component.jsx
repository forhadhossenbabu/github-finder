import React from "react";

class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const { loading, user } = this.props;
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = user;

    console.log(this.props);
    return <div>{name}</div>;
  }
}
export default User;
