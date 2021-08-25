import React from "react";
import axios from "axios";
import "../styles/SignIn.css";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
      .post(`https://appfreshshop.herokuapp.com/register`, {
        data: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then((res) => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        // this.setState({ prediction: res.data.prediction });
      });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <div class="login-page">
          <div class="form">
            <form
              action="/login"
              method="POST"
              onSubmit={this.handleSubmit}
              class="login-form"
            >
              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
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
              <button>Submit</button>
              {/* <p class="message">Not registered? Create an account</p> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}
