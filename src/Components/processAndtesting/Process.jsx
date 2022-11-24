import React from "react";
import "./Process.css";
import { GiStarShuriken } from "react-icons/gi";
import Cricle from "../cricle/Cricle";
import { Col, Container, Row } from "react-bootstrap";
const Process = () => {
  return (
    <>
    <Row>
      <Col>
      <div className=" process ">
        <div className="side_star">
          <div className="ninjastar">
            <GiStarShuriken />
          </div>
          <div className="ninjaline ms-2"> </div>
        </div>
        <div className="process_title">
          Product Development Process & Testing.
        </div>
        <div className="side_star">
          <div className="ninjaline"> </div>
          <div className="ninjastar ms-2">
            <GiStarShuriken />
          </div>
        </div>
      </div>
      <div className="description_process">
        <p>
          {" "}
          No one shall be subjected to arbitrary arrest, indepen impartial t
        </p>
        <p> No one shall be subjected to indepen impartial t</p>
      </div>
      <div className="duration row">
        <div className="sub1 col-sm-12 col-xl-4 col-md-4 ">
          <div className="description_duration_title"> REQUIREMENT & GATHERING</div>
          <div className="description_small">No one shall be  arbitrary arrest, indepen</div>
          <div className="description_small">No one  arbitrary arrest, indepen</div>
        </div>
        <div className="sub2 col-sm-12 col-xl-4 col-md-4">
          <div className="description_duration_title"> BRAINSTORMING</div>
          <div className="description_small">No one shall be arbitrary arrest, indepen</div>
          <div className="description_small">No one  arbitrary arrest, indepen</div>
        </div>
        <div className="sub3 col-sm-12 col-xl-4 col-md-4">
          <div className="description_duration_title">TESTING</div>
          <div className="description_small" >No one shall be  arbitrary arrest, indepen</div>
          <div className="description_small">No one  arbitrary arrest, indepen</div>
        </div>
      </div>
      {/* <Container>
      
      </Container> */}
      <Cricle />

      <div className="duration_down row">
        <div className="sub1 col-sm-12 col-xl-4 col-md-4 ">
          <div className="description_duration_title"> RESEARCHING</div>
          <div className="description_small">No one shall be  arbitrary arrest, indepen</div>
          <div className="description_small">No one  arbitrary arrest, indepen</div>
        </div>
       
        <div className="sub3 col-sm-12 col-xl-4 col-md-4">
          <div className="description_duration_title">FINAL DESIGN</div>
          <div className="description_small" >No one shall be  arbitrary arrest, indepen</div>
          <div className="description_small">No one  arbitrary arrest, indepen</div>
        </div>
      </div>
      
  <div>
    {/* <Cricle /> */}
  </div>
  </Col>
  </Row>
    </>
  );
};

export default Process;
