import React from "react";
import RepoItem from "./repos-item.component";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
