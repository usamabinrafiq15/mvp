import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Cricle.css";
const Cricle = () => {
  const [animation, setAnimation] = useState(false);
  const startAnimaton = () => {
    if (window.scrollY >= 120) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };

  window.addEventListener("scroll", startAnimaton);

  return (
    <>
      <div className="side_place">
        <div className="rings ">
          <div className="circ  c1">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up">
                  <div className={animation ? "semi_cricle curve1" : ""}></div>
                </div>
                <div className={animation ? "load-up up_triangle1" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 1 </div>
            <div className="tab"> Step 1 </div>
            <div className="mobile"> 1 - 15 Days </div>
          </div>
          <div className="circ  c2">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down">
                  <div className= {animation ? "semi_cricle_reverse curve2" : ""} ></div>
                </div>
                <div className= {animation ? "load-down down_triangle1" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 2 </div>
            <div className="tab"> Step 2 </div>
            <div className="mobile"> 1 - 40 Days </div>
          </div>

          <div className="circ  c3">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up">
                  <div className= {animation ? "semi_cricle curve3" : ""}></div>
                </div>
                <div className=  {animation ? "load-up up_triangle2" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 3 </div>
            <div className="tab"> Step 3 </div>
            <div className="mobile"> 1 - 100 Days </div>
          </div>
          <div className="circ   c4">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down">
                  <div className=  {animation ? "semi_cricle_reverse curve4" : ""}></div>
                </div>
                <div className= {animation ? "load-down down_triangle2" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 4 </div>
            <div className="tab"> Step 4 </div>
            <div className="mobile"> 1 -25 Days </div>
          </div>
          <div className="circ  c5">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up">
                  <div className=  {animation ? "semi_cricle curve5" : ""}></div>
                </div>
                <div className=  {animation ? "load-up up_triangle3" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 5 </div>
            <div className="tab"> Step 5 </div>
            <div className="mobile"> 1 -75 Days </div>
          </div>
          {/* <div className="circ  c6">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down3"></div>
                <div className="load-down3"></div>
              </div>
            </div>
            <div className="desktop"> Step 6 </div>
            <div className="mobile"> Step 6 </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Cricle;
