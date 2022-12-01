import React from "react";
import "./Process.css";
import { GiStarShuriken } from "react-icons/gi";
import Cricle from "../cricle/Cricle";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


 


const Process = () => {
  AOS.init();
  return (
    <>
     <div className="white_screen" data-aos="fade-up" data-aos-delay="200">
      <Container>
      <div className=" process ">
        <div className="side_star">
          <div className="ninjastar">
            <GiStarShuriken />
          </div>
          <div className="ninjaline ms-2"> </div>
        </div>
        <div className="process_title">
          Our processes and outcomes
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
         It's simple, adaptable, and flexible which makes the developer's work easier.
        </p>
        <p> So delivery on time, everytime!</p>
      </div>
      <div className="circle_place">
        <div className="duration ">
          <div className="sub1">
            <div className="description_duration_title">
              {" "}
              REQUIREMENT & GATHERING
            </div>
            <div className="description_small">
              No one shall be arbitrary arrest, indepen
            </div>
            <div className="description_small">
              No one arbitrary arrest, indepen
            </div>
            <div className="days">
              1 - 15<span id="small">Days</span>
            </div>
          </div>
          <div className="sub2 ">
            <div className="description_duration_title"> BRAINSTORMING</div>
            <div className="description_small">
              No one shall be arbitrary arrest, indepen
            </div>
            <div className="description_small">
              No one arbitrary arrest, indepen
            </div>
            <div className="days">
              1 - 40<span id="small">Days</span>
            </div>
          </div>
          <div className="sub3">
            <div className="description_duration_title">TESTING</div>
            <div className="description_small">
              No one shall be arbitrary arrest, indepen
            </div>
            <div className="description_small">
              No one arbitrary arrest, indepen
            </div>
            <div className="days">
              1 - 100<span id="small">Days</span>
            </div>
          </div>
        </div>
        <div className="tablet_view">
          <Cricle />
        </div>

        <div className="duration_down ">
          <div className="sub6 "></div>
          <div className="sub4">
            <div className="days_down">
              1 - 40<span id="small">Days</span>
            </div>
            <div className="description_duration_title"> RESEARCHING</div>
            <div className="description_small">
              No one shall be arbitrary arrest, indepen
            </div>
            <div className="description_small">
              No one arbitrary arrest, indepen
            </div>
          </div>

          <div className="sub5 ">
            <div className="days_down">
              1 - 40<span id="small">Days</span>
            </div>
            <div className="description_duration_title">FINAL DESIGN</div>
            <div className="description_small">
              No one shall be arbitrary arrest, indepen
            </div>
            <div className="description_small">
              No one arbitrary arrest, indepen
            </div>
          </div>
          <div className="sub7 "></div>
        </div>
      </div>
      
      </Container>
      </div>
    </>
  );
};

export default Process;
