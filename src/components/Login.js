// import React, { useState, useEffect } from "react";
import "../styles/SignIn.css";
// // import Home from './Home';

// const SignIn = () => {
//   const [email, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (localStorage.getItem("token") !== null) {
//       // window.location.replace(< Home />);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password: password,
//     };

//     fetch("https://appfreshshop.herokuapp.com/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.token) {
//           localStorage.clear();
//           localStorage.setItem("token", data.token);
//           // window.location.replace(< Home />);
//         } else {
//           setUsername("");
//           setPassword("");
//           localStorage.clear();
//           setErrors(true);
//         }
//       });
//   };

//   return (
//     <div className="login-page">
//       {/* {loading === false && <h1>Login</h1>}
//       {errors === true && <h2>Cannot log in with provided credentials</h2>}
//       {loading === false && ( */}
//       <div className="form">
//         <form onSubmit={onSubmit} className="login-form">
//           <label htmlFor="email">
//             <input
//               type="text"
//               placeholder="email address"
//               name="email"
//               value={email}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label htmlFor="password">
//             <input
//               type="password"
//               placeholder="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button>Login</button>
//           {/* <p class="message">Not registered? Create an account</p> */}
//         </form>
//       </div>
//       {/* )} */}
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://appfreshshop.herokuapp.com/api/login', { email: email.value, password: password.value }).then(response => {
      console.log(response)
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div className="login-page">
      <div className="form">
      <h3>Login</h3><br /><br />
      <div >
        Email<br />
        <input type="text" {...email} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;




