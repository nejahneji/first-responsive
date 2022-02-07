import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/img1.jpg" style={{ width: "8vw", height: "4vw" }} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>
              home
            </a>
          </li>
          <li className="nav-item">
            <a href="#aboutus" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#marques" className="nav-links" onClick={closeMobileMenu}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              contact
            </a>
          </li>
          <li>
            <Link
              to="/"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            ></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
