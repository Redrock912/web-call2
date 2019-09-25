import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = { users: [] };

  // componentDidMount() {
  //   axios
  //     .post("/waiting", {
  //       number: "1234",
  //       password: "qwer"
  //     })
  //     .then(res => console.log(res.data.length));
  // }

  onSubmit() {}

  render() {
    return (
      <div className="App">
        <form></form>
      </div>
    );
  }
}

export default App;
