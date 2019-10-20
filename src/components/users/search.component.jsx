import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = ({ clearUsers, showClear, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search User"
          onChange={handleChange}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear ? (
        <button className="btn btn-primary btn-block" onClick={clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Search;
