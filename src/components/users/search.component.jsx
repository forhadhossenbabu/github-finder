import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text === "") {
      alert("Enter user name");
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search User"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear ? (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
