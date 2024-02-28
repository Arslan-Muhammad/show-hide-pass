import React, { Component } from 'react'
import Form from "./Components/Form.js";
import Greet from "./Components/Greet.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      showPass: false,
    }
  };
  formHandler = (event) => {
    console.log(event.target);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
  };

  showPasswordHandler = (event) => {
    this.setState({ showPass: !this.state.showPass });
  };

  render() {
    if (this.state.isRegistered) {
      return (
        <div>
          <Greet name={this.state.name} email={this.state.email}> </Greet>
        </div>
      )
    }
    else {
      return (<div>
        <Form submit={this.formHandler}
        showPassToggle={this.showPasswordHandler}
        showPass={this.state.showPass}
        >
        </Form>
      </div>)
    }
  }
}

export default App

