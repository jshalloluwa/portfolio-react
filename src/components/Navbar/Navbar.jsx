import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">jh</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1PeBJOb0QKB_M0o4pr9s4rVZDE-jpdHpf/view?usp=sharing"
            className="btn"
            rel="noreferrer"
            target="_blank">View My Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
