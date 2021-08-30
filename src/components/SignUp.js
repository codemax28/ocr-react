// import React from "react";
// import axios from "axios";
// import "../styles/SignIn.css";

// export default class SignUp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     axios
//       .post(`https://appfreshshop.herokuapp.com/register`, {
//         data: {
//           name: this.state.name,
//           email: this.state.email,
//           password: this.state.password,
//         },
//       })
//       .then((res) => {
//         console.log(this.state.name);
//         console.log(this.state.email);
//         console.log(this.state.password);
//         // this.setState({ prediction: res.data.prediction });
//       });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <>
//         <div className="login-page">
//           <div className="form">
//             <form
//               action="/login"
//               method="POST"
//               onSubmit={this.handleSubmit}
//               className="login-form"
//             >
//               <label htmlFor="name">
//                 <input
//                   type="text"
//                   placeholder="name"
//                   name="name"
//                   value={name}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <label htmlFor="email">
//                 <input
//                   type="text"
//                   placeholder="email address"
//                   name="email"
//                   value={email}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <label htmlFor="password">
//                 <input
//                   type="password"
//                   placeholder="password"
//                   name="password"
//                   value={password}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <button>Submit</button>
//               {/* <p class="message">Not registered? Create an account</p> */}
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

////////

import React, { useState, useEffect } from 'react';
import Login from './Login';
// import Shop from "./Shop";

// import Dashboard from '../../Dashboard';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      // window.location.replace(<Shop />);
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    fetch('https://appfreshshop.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"

      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.token) {
          localStorage.clear();
          localStorage.setItem('token', data.token);
          // window.location.replace(< Shop />);
        } else {
          setName('');
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  const handleSubmit = () => {
    return(
      <div>
      <p>You have successfully signed up, now you can Login</p>
      <Login />
      </div>
    )
  }

  return (
    <div>
      {loading === false && <h1>Signup</h1>}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <form onSubmit={onSubmit}>
      <label htmlFor='name'>Username:</label> <br />
        <input
          name='name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='email'>Email address:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password'>Password:</label> <br />
        <input
          name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />{' '}
        
        <button type='submit' onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

export default SignUp;