import React from "react";
import "./Header.css";
import { BsHexagon } from "react-icons/bs";
import { Container } from "react-bootstrap";
import twitter from "../../assets/Twitter.svg";
import lin from "../../assets/Linkedin.svg";
import insta from "../../assets/Instagram.svg";
const Header = () => {
  return (
    <>
      <div className="gradient__bg ">
        <div className="color-overlay">
          <Container>
          <div className="media_ico">
            <div>
            <img src={twitter}/>
            </div>
            <div>
            <img src={insta}/>
              </div>
              <div>
              <img src={lin}/>
              </div>
               
              
                
                </div>
            <div className="header_section">
              <div className="media_align">
                <div>
                <div className="title center ">Make your </div>
                <div className="title "> Proposal to Operational!</div>
                <div className=" description">
                  <p>
                    {" "}
                    Experience the benefits of working with our ball-of-fire{" "}
                  </p>
                  <p className="">
                    team built by go-getter for entrepreneurs which is getting
                    better everyday.
                  </p>
                </div>
                <div className="getstart_button">
                  <div className="getstart">GET STARTED</div>
                </div>
                </div>
             
              </div>
              <div className="mouse_load">
                <div className="mouse_scroll">
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>
                  <div>
                    <span className="m_scroll_arrows arr1"></span>
                    <span className="m_scroll_arrows arr2"></span>
                    <span className="m_scroll_arrows arr3"></span>
                  </div>
                </div>
              </div>

              
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
