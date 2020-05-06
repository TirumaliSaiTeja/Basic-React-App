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
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    axios("https://api.randomuser.me/?nat=US&results=5").then(response =>
      this.setState({
        users: response.data.results,
        loading: false
      })
    );
  }

  render() {
    return (
      <div className="App">
        {!this.state.loading ? (
          this.state.users.map(user => (
            <div>
              <h1>{user.name.first}</h1>
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
