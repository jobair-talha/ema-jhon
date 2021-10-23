import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <Container>
          <NavLink to="/shop" activeClassName="selected" className="nav__item">
            Shop
          </NavLink>
          <NavLink
            to="/manage"
            activeClassName="selected"
            className="nav__item"
          >
            Order Review
          </NavLink>
          <NavLink
            to="/review"
            activeClassName="selected"
            className="nav__item"
          >
            Manage Inventory here
          </NavLink>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
