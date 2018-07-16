import React, { Component } from "react";
import "../index.css";

export default class Create extends Component {
  render() {
    return (
      <div className="sections">
        <h3>Add New User to Mailing List</h3>
        <form>
          <div className="form-group">
            <label>Add User Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Email: </label>
            <input type="text" className="form-control" />
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
