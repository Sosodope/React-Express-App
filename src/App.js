import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Edit from "./components/Edit";
import Create from "./components/Create";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Express Tutorial</h2>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
            <li>
              <Link to={"/list"}>List</Link>
            </li>
            <li>
              <Link to={"/edit/:id"}>Edit</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/list" component={List} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
