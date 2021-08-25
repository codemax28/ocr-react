import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../NavBar/NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/" activeStyle>
            Shop
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
