// import Footer from "./Footer";
import Shop from "./Shop";
import "../styles/Layout.css";

import Navbar from "../NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Test from "./Test";

import React, { useState, useEffect } from "react";
import { getToken, removeUserSession, setUserSession } from "../Utils/Common";
import axios from "axios";
import Dashboard from "./Dashboard";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from '../Utils/PublicRoute';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:4000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Shop" exact component={Shop} />
          <Route path="/" exact component={Home} />
          <PublicRoute path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          {/* <Route path="/Test" exact component={Test} /> */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
