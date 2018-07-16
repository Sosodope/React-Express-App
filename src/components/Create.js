import React, { Component } from "react";
import "../index.css";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: ""
    };
  }
  onChangeUserName = e => {
    this.setState({
      username: e.target.value
    });
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(
      "username " + this.state.username + " email " + this.state.email
    );
    this.setState({
      username: "",
      email: ""
    });
  };
  render() {
    return (
      <div className="sections">
        <h3>Add New User to Mailing List</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add User Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label>Add Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add New User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
