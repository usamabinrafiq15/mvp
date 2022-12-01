import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import "./Work.css";
import ui1 from "../../assets/ui1.jpg";
import ui2 from "../../assets/ui2.jpg";
import ui3 from "../../assets/ui3.jpg";
import ui4 from "../../assets/ui4.jpg";
import ui5 from "../../assets/ui5.jpg";
import ui6 from "../../assets/ui6.jpg";
import ui7 from "../../assets/ui7.jpg";

import { Container } from "react-bootstrap";
const Work = () => {
  return (
    <>
      <div>
        <div className=" process_work ">
          <div className="side_star">
            <div className="ninjastar_work">
              <GiStarShuriken />
            </div>
            <div className="ninjaline_work ms-2"> </div>
          </div>
          <div className="process_title_work">Our Latest Works</div>
          <div className="side_star">
            <div className="ninjaline_work"> </div>
            <div className="ninjastar_work ms-2">
              <GiStarShuriken />
            </div>
          </div>
        </div>
        <div className="description_process_work">
          <p>
            {" "}
            No one shall be subjected to arbitrary arrest, indepen impartial t
          </p>
          <p> No one shall be subjected to indepen impartial t</p>
        </div>
      </div>
      <div>
        {/* <Container> */}
          <div className="projects ">
            <div className="side1 row ">
              <div className="image_box col-lg-6">
                <img src={ui1} />
              </div>
              {/* <div className="box_empty"></div> */}
              <div className="image_box col-lg-6 little_down">
                <img src={ui2} />
              </div>
              <div className="image_box col-lg-6">
                <img src={ui3} />
              </div>
              {/* </div>
            <div className="side2 "> */}
              <div className="image_box col-lg-6 little_down">
                <img src={ui4} />
              </div>
              <div className="image_box col-lg-6">
                <img src={ui5} />
              </div>
              <div className="image_box col-lg-6 little_down">
                <img src={ui6} />
              </div>
            </div>
          </div>
        {/* </Container> */}
      </div>
    </>
  );
};

export default Work;
