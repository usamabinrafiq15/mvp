import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Container } from "react-bootstrap";
import company_logo from "../../assets/logo_yellow.svg";

const Menu = () => {
  return (
    <>
      <ul>
        <li> Services</li>
        <li> Projects</li>
        <li> About</li>
        <li ><span className="contact_btn"> Contact Us</span></li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "nav_border nav_color" : "nav_border"}>
        <Container>
          <div className="navbar">
            <div className="navbar__links">
              <div className="navbar__logo"> 
              <img src={company_logo} />
              </div>
              <div className="navbar__right">
                <div className="navbar__pages">
                  <Menu />
                </div>
                <div className="navbar__mobile_menu">
                  {toggleMenu ? (
                    <RiCloseLine
                      color="#fff"
                      onClick={() => setToggleMenu(false)}
                    />
                  ) : (
                    <RiMenu3Line
                      color="#fff"
                      onClick={() => setToggleMenu(true)}
                    />
                  )}
                  {toggleMenu && (
                    <div className="navbar__mobile_menu_links motion">
                      <div className="navbar__mobile_menu_links_drop">
                        <Menu />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
