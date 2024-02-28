import React, { Component } from 'react'
import Form from "./Components/Form.js";
import Greet from "./Components/Greet.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRegistered: false,
      name: "",
      email: "",
      password: "",
      showPass: false,
    }
  };

  nameHandler = (e) => {
    const name = e.target.name;
    console.log(name, "name");
    this.setState({ name: name });
  };
  emailHandler = (e) => {
    const email = e.target.value;
    this.setState({ email: email });
  };
  passwordHandler = (e) => {
    const password = e.target.value;
    this.setState({ password: password });
  }
  formHandler = () => {
    this.setState({ isRegistered: true });
  };

  showPasswordHandler = () => {
    this.setState({ showPass: !this.state.showPass });
  };

  render() {
    if (this.state.isRegistered) {
      return (
        <Greet name={this.state.name} email={this.state.email}> </Greet>
      )
    }
    else {
      return (
        <Form
          submit={this.formHandler}
          name={this.nameHandler}
          email={this.emailHandler}
          password={this.passwordHandler}
          showPassToggle={this.showPasswordHandler}
          nameValue={this.state.name}
          emailValue={this.state.email}
          passwordValue={this.state.password}
          showPass={this.state.showPass}
        >
        </Form>
      )
    }
  }
}

export default App

