import React from "react";

export default function Navbar({ links }) {
  // console.log("navbar_props",props);
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {links.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href="name">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
