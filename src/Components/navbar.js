import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          {/* Brand */}
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Home */}
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              {/* General */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  General
                </Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  News Types
                </span>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/business" style={{ color: "purple" }}>Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment" style={{ color: "blue" }}>Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/about" style={{ color: "green" }}>General</Link></li>
                  <li><Link className="dropdown-item" to="/health" style={{ color: "orange" }}>Health</Link></li>
                  <li><Link className="dropdown-item" to="/sports" style={{ color: "gray" }}>Sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology" style={{ color: "cyan" }}>Technology</Link></li>
                </ul>
              </li>

              {/* Disabled */}
              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>
            </ul>

            {/* Search UI */}
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
    );
  }
}
