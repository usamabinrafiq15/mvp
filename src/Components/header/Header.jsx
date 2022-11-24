import React from "react";
import "./Header.css";
import { BsHexagon } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header_section">
        <div>
          <div className="title "> We build digital experiences.</div>
          <div className=" description">
            <p> A tiny VS Code extension made up fewthat generate an </p>
            <p className="">commands that generate and insert ins lorem</p>
          </div>
          <div className="getstart_button">
            <div className="getstart">GET STARTED</div>
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

          {/* <div>
            <BsHexagon color="#fff" fontSize={70} className="shapes" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
