import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/spinner.component";

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
      hireable,
      company
    } = user;
    if (loading) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable :{" "}
        {hireable ? (
          <label style={{ color: "green" }}>&#10003;</label>
        ) : (
          <label style={{ color: "red" }}>&#10005;</label>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt={name}
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location : {location}</p>
          </div>
          <div>
            {bio && (
              <React.Fragment>
                <h3>Profile Bio</h3>
                <p>{bio}</p>
              </React.Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <React.Fragment>
                    <strong>Username: </strong> {login}
                  </React.Fragment>
                )}
              </li>
              <li>
                {company && (
                  <React.Fragment>
                    <strong>Companey: </strong> {company}
                  </React.Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <React.Fragment>
                    <strong>Website: </strong> <a href={blog}>{blog}</a>
                  </React.Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers : {followers}</div>
          <div className="badge badge-success">Following : {following}</div>
          <div className="badge badge-light">Public Repos : {public_repos}</div>
          <div className="badge badge-success">
            Public Gists : {public_gists}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default User;
