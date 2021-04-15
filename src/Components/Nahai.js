import React from "react";
import { NavLink } from "react-router-dom";

const Nahai = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">CRUD</NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/about">About <span class="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/contact">Contact <span class="sr-only">(current)</span></NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-outline-primary" to="/pages/add">Add User</NavLink>
      </nav>
    </div>
  );
};

export default Nahai;
