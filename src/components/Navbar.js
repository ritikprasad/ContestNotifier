import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <div className="container">
            <NavLink className="navbar-brand" title="Open Website" to="#">
              Contests
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" title="See Contests" to="/">
                    <HomeIcon />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    title="Subscribe/Unsubscribe"
                    to="/Subs"
                  >
                    <SettingsIcon />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
