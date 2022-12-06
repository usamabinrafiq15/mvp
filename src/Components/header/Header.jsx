import React from "react";
import "./Header.css";
import { BsHexagon } from "react-icons/bs";
import { Container } from "react-bootstrap";
import twitter from "../../assets/Twitter.svg";
import lin from "../../assets/Linkedin.svg";
import insta from "../../assets/Instagram.svg";
import twitter_tab from "../../assets/Twitter_tab.svg";
import lin_tab from "../../assets/Linkedin_tab.svg";
import insta_tab from "../../assets/Instagram_tab.svg";
import twitter_mobile from "../../assets/Twitter_mobile.svg";
import lin_mobile from "../../assets/Linkedin_mobile.svg";
import insta_mobile from "../../assets/Instagram_mobile.svg";
const Header = () => {
  let [over, setOver] = React.useState(false);

  let iconstyle = {
    backgroundColor: "",
  };

  if (over) {
    iconstyle.backgroundColor = "#f4dd4b";
  } else {
    iconstyle.backgroundColor = "";
  }

  // <div className="App">
  //   <button
  //     style={iconstyle}
  //     onMouseOver={() => setOver(true)}
  //     onMouseOut={() => setOver(false)}
  //   >
  //     Hover over me!
  //   </button>
  // </div>;

  return (
    <>
      <div className="gradient__bg ">
        <div className="color-overlay">
          <Container>
            <div className="header_section">
              <div className="media_align ">
                <div className=" middle_items ">
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

              <span className="media_ico_mobile ">
                <span>
                  <img src={twitter_mobile} className="img_hover_mobile" />
                </span>
                <span>
                  <img src={insta_mobile} className="img_hover_mobile" />
                </span>
                <span>
                  <img src={lin_mobile} className="img_hover_mobile" />
                </span>
              </span>
              <span className="media_ico_tab ">
                <span>
                  <img src={twitter_tab} className="img_hover" />
                </span>
                <span>
                  <img src={insta_tab} className="img_hover" />
                </span>
                <span>
                  <img src={lin_tab} className="img_hover" />
                </span>
              </span>
              <span className="media_ico ">
                <div>
                  <img
                    src={twitter}
                    style={iconstyle}
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}
                    className="icon_hover"
                  />
                </div>
                <div>
                  <img src={insta} />
                </div>
                <div>
                  <img src={lin} />
                </div>
              </span>
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
