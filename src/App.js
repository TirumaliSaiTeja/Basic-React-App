import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";

//class components are called state full

class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      users: [],
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    });
    axios("https://api.randomuser.me/?nat=US&results=5").then(response =>
      this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log("more users loaded");
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        {!this.state.loading ? (
          this.state.users.map(user => (
            <div>
              <h1 style={{ color: "orange" }}>{user.name.first}</h1>
              <h2>{user.cell}</h2>
              <h3>{user.email}</h3>
              <hr />
            </div>
          ))
        ) : (
          <Loading message="Wait to load" />
        )}
      </div>
    );
  }
}

export default App;
