import React from "react";
import "../styles/SignIn.css";
import axios from "axios";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    axios
      .post(`https://appfreshshop.herokuapp.com/login`, {
        data: {
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then((res) => {
        console.log(this.state.email);
        console.log(this.state.password);
        // this.setState({ prediction: res.data.prediction });
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div class="login-page">
          <div class="form">
            <form onSubmit={this.handleSubmit} class="login-form">
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="email address"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
              <button>Login</button>
              {/* <p class="message">Not registered? Create an account</p> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}
