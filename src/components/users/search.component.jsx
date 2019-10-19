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
    const { text } = this.state;
    e.preventDefault();
    this.props.searchUser(text);
  };

  render() {
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
      </div>
    );
  }
}

export default Search;
