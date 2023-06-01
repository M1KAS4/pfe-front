import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import { Button } from "./Button2";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MailIcon from "@mui/icons-material/Mail";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            eCycle
            <i className="fa-solid fa-recycle"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <HomeIcon className="nav-icon" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                <InfoIcon className="nav-icon" />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <BusinessCenterIcon className="nav-icon" />
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <MailIcon className="nav-icon" />
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
