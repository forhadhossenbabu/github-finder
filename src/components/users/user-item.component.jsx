import React from "react";

const UserItem = ({ avatar_url, html_url, login }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="github" style={{ width: "60px" }} />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
