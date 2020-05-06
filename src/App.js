import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    axios("https://api.randomuser.me/?nat=US&results=5").then(response =>
      this.setState({
        users: response.data.results
      })
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => (
          <div>
            <h1>{user.name.first}</h1>
            <h2>{user.cell}</h2>
            <h3>{user.email}</h3>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
