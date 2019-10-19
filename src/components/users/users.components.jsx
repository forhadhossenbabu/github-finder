import React from "react";
import UserItem from "./user-item.component";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: "id",
          login: "mojombo",
          avater_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo"
        },
        {
          id: "id",
          login: "mojombo",
          avater_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo"
        },
        {
          id: "id",
          login: "mojombo",
          avater_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo"
        }
      ]
    };
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user, idx) => (
          <UserItem {...user} key={idx} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
