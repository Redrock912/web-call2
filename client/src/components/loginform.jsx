import React, { Component } from "react";
import Axios from "axios";

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

  onSubmitHandle = event => {
    event.preventDefault();
    this.props.onSubmitHandle(this.state);

    Axios.post("/waiting", this.state).then(function(response) {
      if (response.data.queue == undefined) {
        alert("추가되었습니다");
      } else {
        alert("현재 대기번호는 " + response.data.queue);
      }
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
        <button onClick={event => this.onSubmitHandle(event)}>대기하기</button>
      </form>
    );
  }
}

export default LoginForm;
