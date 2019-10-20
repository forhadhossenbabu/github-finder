import React, { useState } from "react";

const Search = ({ clearUsers, showClear, setAlert, searchUser }) => {
  const [text, setText] = useState("");

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUser(text);
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
