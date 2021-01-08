import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logoutUser }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark p-2 justify-content-between"
      style={{ backgroundColor: "#198754" }}
    >
      <div className="navbar-brand">AuthApp</div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {!user.username ? (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Registration
                </Link>
              </li>
            </React.Fragment>
          ) : null}
        </ul>
      </div>
      {user.username &&
        <p style={{ color: "white", textAlign: "center" }}>
          {user.username}
          <button className="btn btn-danger" onClick={logoutUser}>Log Out</button>
        </p>
      }
    </nav>
  );
};

export default Navbar;
