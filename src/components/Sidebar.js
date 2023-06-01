import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../assets/css/sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="display">
          <div className="nav-cont">
            <Link to="/" className="nav-logo">
              eCycle
              <i className="fa-solid fa-recycle"></i>
            </Link>
          </div>
          <nav className="sidebar">
            <ul className="nav-menu-items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
