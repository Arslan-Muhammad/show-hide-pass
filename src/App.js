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
    }
  };
  formHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
  };

  showPasswordHandler = (event) => {
    event.preventDefault();
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
        >
        </Form>
      </div>)
    }
  }
}

export default App

