import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import LoginForm from "./components/loginform";
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

  onSubmit = fields => {
    this.setState({ fields });
    console.log("Received components : ", fields);
  };

  render() {
    return (
      <div className="App">
        <LoginForm onSubmitHandle={fields => this.onSubmit(fields)}></LoginForm>
      </div>
    );
  }
}

export default App;
