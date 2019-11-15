import * as React from "react";

const navigation = () => {
  return (
    <React.Fragment>
      <a id="menu-toggle" href="#" className="btn btn-lg toggle">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <a
            id="menu-close"
            href="#"
            className="btn btn-light btn-lg pull-right toggle"
          >
            <i className="fa fa-times"></i>
          </a>
          <li className="sidebar-brand">
            <a href="#top">amactive</a>
          </li>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default navigation;
