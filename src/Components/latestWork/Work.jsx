import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import "./Work.css";
import ui1 from "../../assets/giveindia.png";
import ui2 from "../../assets/impactree.jpeg";
import ui3 from "../../assets/ui3.jpg";
import ui4 from "../../assets/ui4.jpg";
import ui5 from "../../assets/ui5.jpg";
import ui6 from "../../assets/ui6.jpg";
import ui7 from "../../assets/ui7.jpg";

import { Container } from "react-bootstrap";
const Work = () => {
  return (
    <>
      <div className="work_screen">
        <Container>
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
                No one shall be subjected to arbitrary arrest, indepen impartial
                t
              </p>
              <p> No one shall be subjected to indepen impartial t</p>
            </div>
          </div>
          <div>
            {/* <Container> */}
            <div className="projects row demo-preview">
              <div className="col">
                <div className=" row ">
                {/* <div classNam="demo-column text-center wow fadeInUp" style={{visibility: "visible" }}>
                        <div className="thumb-container">
                            <img src="https://html.themexriver.com/Archix/demo/assets/images/pages/hm1.png" alt=""/>
                            <div className="thumb-btn-group">
                                <div className="thumb-btns">
                                    <a href="index-1.html" target="_blank">Visit Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-title">
                            <h4><a href="index-1.html" target="_blank">Home 1</a></h4>
                        </div>
                    </div> */}
                  <div className="side1">
                    <div className="image_box   mb-5 col"  >
                      <div className="overflow-hidden position-relative  over ">
                        <img src={ui1} />
                        {/* <div class="kd-overlay builg" style={{backgroundColor:"rgba(10,10,10,0.4)"}}></div> */}

                        <div className="project_hover">
                          <div className="bold_letter">
                            {" "}
                         Donation Paltfrom
                          </div>
                          <div className="bold_letter1">NO CODE</div>
                          <a href="" className="link_btn">
                            {" "}
                            VIEW PROJECT{" "}
                          </a>
                          {/* <span className="link_btn"> VIEW PROJECT </span> */}
                        </div>
                      </div>
                    </div>

                    <div className="image_box col mb-5 ">
                      <div className="overflow-hidden position-relative over">
                        <img src={ui2} />
                        <div className="project_hover">
                          <div className="bold_letter">
                            {" "}
                           Analytics platfrom
                          </div>
                      S    <div className="bold_letter1">WEB AND MOBILE DEVLOPMENT</div>
                          <a href="#" className="link_btn">
                            {" "}
                            VIEW PROJECT{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="image_box col mb-5">
                      <div className="overflow-hidden position-relative over">
                        <img src={ui3} />
                        <div className="project_hover">
                          <div className="bold_letter">
                            {" "}
                            E-commerce . ui/ux . website
                          </div>
                          <div className="bold_letter1">UI UX</div>
                          <a href="#" className="link_btn">
                            {" "}
                            VIEW PROJECT{" "}
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" row ">
                  <div className="side2">
                  <div className="image_box mb-5 col">
                      <div className="overflow-hidden position-relative over">
                        <img src={ui4} />
                        <div className="project_hover">
                          <div className="bold_letter">
                            {" "}
                            E-commerce . ui/ux . website
                          </div>
                          <div className="bold_letter1">UI UX</div>
                          <a href="" className="link_btn">
                            {" "}
                            VIEW PROJECT{" "}
                          </a>
                          {/* <span className="link_btn"> VIEW PROJECT </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="image_box col mb-5">
                      <div className="overflow-hidden position-relative over">
                        <img src={ui5} />
                        <div className="project_hover">
                          <div className="bold_letter">
                            {" "}
                            E-commerce . ui/ux . website
                          </div>
                          <div className="bold_letter1">UI UX</div>
                          <a href="#" className="link_btn">
                            {" "}
                            VIEW PROJECT{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="image_box col mb-5">
                      <div className="overflow-hidden position-relative over">
                        <img src={ui6} />
                        <div className="project_hover">
                          <div className="bold_letter">
                            {" "}
                            E-commerce . ui/ux . website
                          </div>
                          <div className="bold_letter1">UI UX</div>
                          <a href="#" className="link_btn">
                            {" "}
                            VIEW PROJECT{" "}
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* </Container> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
