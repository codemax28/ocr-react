import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../NavBar/NavbarElements";
// import { getUser} from '../Utils/Common';

const Navbar = () => {
  // const user = getUser();
  // {user.name}
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Shop" activeStyle>
            Shop
          </NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard </NavLink>
            {/* <NavLink activeClassName="active" to="/Test">TEST</NavLink> */}
            <NavLink activeClassName="active" to="/sign-up">Sign Up</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to="/login">Sign In</NavBtnLink>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
