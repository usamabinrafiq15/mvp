import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCircleFill, BsHexagon } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import { TbFileSpreadsheet } from "react-icons/tb";
import "./Details.css";
import hex from "../../assets/hex.svg";
const Details = () => {
  return (
    <>
        <div className="black_screen">
          <Container>
        <div className=" process_details ">
          <div className="side_star">
            <div className="ninjastar_details">
              <GiStarShuriken />
            </div>
            <div className="ninjaline_details ms-2"> </div>
          </div>
          <div className="process_title_details">Why Choose Us.</div>
          <div className="side_star">
            <div className="ninjaline_details"> </div>
            <div className="ninjastar_details ms-2">
              <GiStarShuriken />
            </div>
          </div>
        </div>
        <div className="description_process_details">
          <p>
            {" "}
            No one shall be subjected to arbitrary arrest, indepen impartial t
          </p>
          <p> No one shall be subjected to indepen impartial t</p>
        </div>
        <div className="row_down">
          <div className="details_box">
            <div className="box_logo">
              {/* <BsCircleFill />
              <div className="box_hex">
                <div className="box_hex_inside">
                  <BsHexagon />
                  <div className="inside_file">
                    <TbFileSpreadsheet />
                  </div>
                </div>
              </div> */}
                <img  src={hex}/>
            </div>
            <div className="details_branding_box">
              <div className="details_box_title">Branding Identity</div>
              <div className="details_box_description">
                <p>No one shall be subjected</p>
                <p>No one shall be subjected shall</p>
              </div>
            </div>
          </div>

          <div className="details_box">
            <div className="box_logo">
              {/* <BsCircleFill />
              <div className="box_hex">
                <div className="box_hex_inside">
                  <BsHexagon />
                  <div className="inside_file">
                    <TbFileSpreadsheet />
                  </div>
                </div>
              </div> */}
              <img  src={hex}/>
            </div>
            <div className="details_branding_box">
              <div className="details_box_title">Branding Identity</div>
              <div className="details_box_description">
                <p>No one shall be subjected</p>
                <p>No one shall be subjected shall</p>
              </div>
            </div>
          </div>

          <div className="details_box">
            <div className="box_logo">
              {/* <BsCircleFill />
              <div className="box_hex">
                <div className="box_hex_inside">
                  <BsHexagon />
                  <div className="inside_file">
                    <TbFileSpreadsheet />
                  </div>
                </div>
              </div> */}
                <img  src={hex}/>
            </div>
            <div className="details_branding_box">
              <div className="details_box_title">Branding Identity</div>
              <div className="details_box_description">
                <p>No one shall be subjected</p>
                <p>No one shall be subjected shall</p>
              </div>
            </div>
          </div>

          <div className="details_box">
            <div className="box_logo">
              {/* <BsCircleFill />
              <div className="box_hex">
                <div className="box_hex_inside">
                  <BsHexagon />
                  <div className="inside_file">
                    <TbFileSpreadsheet />
                  </div>
                </div>
              </div> */}
                <img  src={hex}/>
            </div>
            <div className="details_branding_box">
              <div className="details_box_title">Branding Identity</div>
              <div className="details_box_description">
                <p>No one shall be subjected</p>
                <p>No one shall be subjected shall</p>
              </div>
            </div>
          </div>

          <div className="details_box">
            <div className="box_logo">
              {/* <BsCircleFill />
              <div className="box_hex">
                <div className="box_hex_inside">
                  <BsHexagon />
                  <div className="inside_file">
                    <TbFileSpreadsheet />
                  </div>
                </div>
              </div> */}
                <img  src={hex}/>
            </div>
            <div className="details_branding_box">
              <div className="details_box_title">Branding Identity</div>
              <div className="details_box_description">
                <p>No one shall be subjected</p>
                <p>No one shall be subjected shall</p>
              </div>
            </div>
          </div>

          <div className="details_box">
            <div className="box_logo">
              {/* <BsCircleFill />
              <div className="box_hex">
                <div className="box_hex_inside">
                  <BsHexagon />
                  <div className="inside_file">
                    <TbFileSpreadsheet />
                  </div>
                </div>
              </div> */}
                <img  src={hex}/>
            </div>
            <div className="details_branding_box">
              <div className="details_box_title">Branding Identity</div>
              <div className="details_box_description">
                <p>No one shall be subjected</p>
                <p>No one shall be subjected shall</p>
              </div>
            </div>
          </div>
        </div>
    </Container>
      </div>
    </>
  );
};

export default Details;
