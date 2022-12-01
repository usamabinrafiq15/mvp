import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <>
  
        <div className="footer">
          <div className="company_logo">MVP</div>
          <div className="footer_side">
            <div className="footer_things">
              <div className="footer_title">COMPANY</div>
              <div className="sub_heading">ACCOUNT</div>
              <div className="sub_heading">TREMS OF SERVICE</div>
              <div className="sub_heading">PRIVACY POLICY</div>
            </div>
            <div className="footer_things">
              <div className="footer_title">FAQ</div>
              <div className="sub_heading">HELP</div>
              <div className="sub_heading">CONTACT US</div>
            </div>
            <div className="footer_things">
              <div className="footer_title">ABOUT</div>
            </div>
            <div className="footer_things">
              <div className="footer_title">CONTACT US</div>
            </div>
          </div>
        </div>
        <div className="copy_rights">
             <span>Coducer &#169; 2022</span>
             <span className="border_left">All Rights Reserved</span>
        </div>

    </>
  );
};

export default Footer;
