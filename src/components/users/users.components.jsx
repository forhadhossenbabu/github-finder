import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

import Spinner from "../layout/spinner.component";
import UserItem from "./user-item.component";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user, idx) => (
          <UserItem {...user} key={idx} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
