import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavigationBar.css";
import logo from "../Assets/ATD logo.png";

function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#6B3CC9" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="" className="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                SERVICE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                ABOUT US
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                CONTACT US
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                CAREERS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavigationBar;
