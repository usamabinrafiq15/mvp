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
import Mouse from "../mouse/Mouse";
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

  const Twitter = () => {
    return (
      <>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="41"
            viewBox="0 0 48 41"
            className="icohover"
          >
            <g id="Twitter" transform="translate(-1746 -325)">
              <g
                id="Polygon_1"
                data-name="Polygon 1"
                transform="translate(1746 325)"
                // fill="none"
                className="bg_ico"
              >
                <path
                  d="M30.266,0A10,10,0,0,1,38.9,4.948l6.146,10.5a10,10,0,0,1,0,10.1L38.9,36.052A10,10,0,0,1,30.266,41H17.734A10,10,0,0,1,9.1,36.052l-6.146-10.5a10,10,0,0,1,0-10.1L9.1,4.948A10,10,0,0,1,17.734,0Z"
                  stroke="none"
                />
                <path
                  d="M 17.73362922668457 1 C 14.5506591796875 1 11.57447052001953 2.706439971923828 9.966499328613281 5.453388214111328 L 3.820148468017578 15.95339012145996 C 2.178531646728516 18.75783920288086 2.178531646728516 22.24216079711914 3.820148468017578 25.04660987854004 L 9.96649169921875 35.54660797119141 C 11.57447052001953 38.29356002807617 14.5506591796875 40 17.73362922668457 40 L 30.26635932922363 40 C 33.4493408203125 40 36.42552947998047 38.29356002807617 38.03350067138672 35.54660797119141 L 44.17984008789062 25.04660987854004 C 45.82146835327148 22.24214935302734 45.82146835327148 18.75783920288086 44.17984008789062 15.95339012145996 L 38.03348922729492 5.453388214111328 C 36.42552947998047 2.706439971923828 33.4493408203125 1 30.26637077331543 1 L 17.73362922668457 1 M 17.73362922668457 0 L 30.26637077331543 0 C 33.81763076782227 0 37.10248947143555 1.883411407470703 38.89651107788086 4.948211669921875 L 45.04285049438477 15.44820976257324 C 46.86933135986328 18.56842994689941 46.86933135986328 22.43156051635742 45.04285049438477 25.55179023742676 L 38.89651107788086 36.05178833007812 C 37.10248947143555 39.11658096313477 33.81763076782227 41 30.26635932922363 41 L 17.73362922668457 41 C 14.18236923217773 41 10.89751052856445 39.11658096313477 9.103481292724609 36.05178833007812 L 2.957141876220703 25.55179023742676 C 1.130668640136719 22.43156051635742 1.130668640136719 18.56842994689941 2.957141876220703 15.44820976257324 L 9.103488922119141 4.948211669921875 C 10.89751052856445 1.883411407470703 14.18236923217773 0 17.73362922668457 0 Z"
                  stroke="none"
                  // fill="#fff"
                  className="hex_ico"
                />
              </g>
              <g
                id="Group_14"
                data-name="Group 14"
                transform="translate(-7537 -125)"
              >
                <rect
                  id="Rectangle_158"
                  data-name="Rectangle 158"
                  width="28"
                  height="28"
                  transform="translate(9293 457)"
                  // fill="none"
                  className="bg_ico"
                />
                <path
                  id="twitter_1_"
                  data-name="twitter (1)"
                  d="M7.05,18.744a12.843,12.843,0,0,1-6.332-1.8.428.428,0,0,1,.26-.8,7.56,7.56,0,0,0,4.52-.93,4.675,4.675,0,0,1-3.246-2.654.428.428,0,0,1,.516-.586,3.167,3.167,0,0,0,.552.118A4.431,4.431,0,0,1,1.036,8.291a.428.428,0,0,1,.7-.333,2.254,2.254,0,0,0,.435.278,4.594,4.594,0,0,1-.745-1.557A4.153,4.153,0,0,1,1.9,3.461a.429.429,0,0,1,.7-.049A10.143,10.143,0,0,0,9.712,7.239,4.251,4.251,0,0,1,11.562,3.31a4.312,4.312,0,0,1,5.4.417,9.013,9.013,0,0,0,2.061-.806.428.428,0,0,1,.66.461,3.852,3.852,0,0,1-.651,1.254,3.723,3.723,0,0,0,.547-.2.428.428,0,0,1,.559.609,8.009,8.009,0,0,1-1.863,1.942,11.454,11.454,0,0,1-5.217,9.919,10.887,10.887,0,0,1-6.01,1.836Zm-4.28-1.75a10.172,10.172,0,0,0,9.816-.8c3.218-2.137,5.2-5.987,4.815-9.364a.427.427,0,0,1,.19-.406,6.931,6.931,0,0,0,.937-.775,4.9,4.9,0,0,1-.933.127.428.428,0,0,1-.159-.826,2.508,2.508,0,0,0,.853-.747,7.13,7.13,0,0,1-1.395.41A.426.426,0,0,1,16.54,4.5,3.466,3.466,0,0,0,10.623,7.6a.428.428,0,0,1-.44.53A10.993,10.993,0,0,1,2.368,4.456a3.263,3.263,0,0,0-.113,2.008,3.42,3.42,0,0,0,1.367,2,.428.428,0,0,1-.131.79,2.661,2.661,0,0,1-1.5-.159,3.965,3.965,0,0,0,2.827,2.686.429.429,0,0,1,.23.753,2.246,2.246,0,0,1-1.566.437A3.931,3.931,0,0,0,6.634,14.5a.428.428,0,0,1,.277.747,7.614,7.614,0,0,1-4.14,1.746Z"
                  transform="translate(9296.647 460.35)"
                  // fill="#fff"
                  className="hex_ico"
                />
              </g>
            </g>
          </svg>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="gradient__bg ">
        <div className="color-overlay">
          <Container fluid >
            <div className="header_padding_for_icons">
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
                    // onMouseOver={() => setOver(true)}
                    // onMouseOut={() => setOver(false)}
                    // className="icon_hover"
                  />
                </div>
                {/* <div>
                  <Twitter  />
                </div> */}
                <div>
                  <img src={insta} />
                </div>
                <div>
                  <img src={lin} />
                </div>
              </span>
              <Mouse className="scroller" />
            </div>
            </div>
           
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
