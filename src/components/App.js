// import Footer from "./Footer";
import Shop from "./Shop";
import "../styles/Layout.css";

import Navbar from "../NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/Home" exact component={Home} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
