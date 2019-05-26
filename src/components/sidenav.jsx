import React from "react";
import "../styles/resume.css";
import { getData } from "../utils";

const { sideNav } = getData();

const SideNav = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">{sideNav.name}</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="img/profile.png"
          alt=""
        />
      </span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {sideNav.links.map(link => (
          <li className="nav-item" key={link.desc}>
            <a
              className="nav-link js-scroll-trigger"
              href={`#${link.desc.toLowerCase()}`}
            >
              {link.desc}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default SideNav;
