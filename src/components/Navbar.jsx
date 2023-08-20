import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} h-5`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch me-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
  <input className= "form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " for="flexSwitchCheckDefault">{props.mode === 'light' ? "Dark Mode" : "Light Mode"}</label>
</div>
        </div>

      </nav>
    </div>
  );
}

Navbar.propType = {
  title: PropTypes.string,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Abhi to hai hi no",
  aboutText: "ye props the value ko default value dega",
};

//props will always we read only
//Proptype can be used to insure that the passed props is of a fixed data type.(used htmlFor type checking of the props)
// We can give default value and use .isRequired
