import React from "react";
import "./Cricle.css";
const Cricle = () => {
  return (
    <>
      <div className="rings row">
        <div className="circ col-3 c1">
          <div className="part">
            <div className="fortriangle">
              <div className="dot"></div>
              <div className="line"></div>
              <div className="semi-donut-up1"></div>
              <div className="load-up1"></div>
            </div>
          </div>
          <div className="desktop"> Step 1 </div>
          <div className="mobile"> Step 1 </div>
        </div>
        <div className="circ col-md-3 c2">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down1"></div>
                <div className="load-down1" ></div>
              </div>
            </div>
            <div className="desktop"> Step 2 </div>
            <div className="mobile"> Step 2</div>
          </div>
      </div>
     
          {/* <div className="circ c3">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up2"></div>
                <div className="load-up2" ></div>
              </div>
            </div>
            <div className="desktop"> Step 3 </div>
            <div className="mobile"> Step 3 </div>
          </div>
          <div className="circ c4">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down2" ></div>
                <div className="load-down2" ></div>
              </div>
            </div>
            <div className="desktop"> Step 4 </div>
            <div className="mobile"> Step 4 </div>
          </div>
          <div className="circ c5">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up3"></div>
                <div className="load-up3" ></div>
              </div>
            </div>
            <div className="desktop"> Step 5 </div>
            <div className="mobile"> Step 5 </div>
          </div>
          <div className="circ c6">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down3" ></div>
                <div className="load-down3" ></div>
              </div>
            </div>
            <div className="desktop"> Step 6 </div>
            <div className="mobile"> Step 6 </div>
          </div>
        </div> */}
    </>
  );
};

export default Cricle;
