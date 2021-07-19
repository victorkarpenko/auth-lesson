import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from 'react-redux';
import Logout from '../Logout/Logout';

const Header = () => {
  const isAuthorized = useSelector((state) => !!state.token)
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
