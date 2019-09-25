import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    numbers: "",
    password: ""
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("LoginForm - On");

    return (
      <form>
        <input
          type="number"
          name="numbers"
          placeholder="핸드폰번호 뒷자리 4개를 입력해주세요"
          value={this.state.numbers}
          onChange={event => this.change(event)}
        />
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          value={this.state.password}
          onChange={event => this.change(event)}
        />
        <br></br>
        <button onClick={event => this.onSubmit(event)}>대기하기</button>
      </form>
    );
  }
}
