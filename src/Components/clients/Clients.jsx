import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import "./Clients.css";
import cl1 from "../../assets/givelogo.png";
import cl2 from "../../assets/trew.png";
import cl3 from "../../assets/impactree.png";
import cl4 from "../../assets/cl4.png";
import cl5 from "../../assets/cl5.png";
import cl6 from "../../assets/cl6.png";
import { Container } from "react-bootstrap";
const Clients = () => {
  return (
    <>
      <div className="clients_screen">
        <Container>
          <div>
            <div className=" process_clients ">
              <div className="side_star">
                <div className="ninjastar_clients">
                  <GiStarShuriken />
                </div>
                <div className="ninjaline_clients ms-2"> </div>
              </div>
              <div className="process_title_clients">We Worked With</div>
              <div className="side_star">
                <div className="ninjaline_clients"> </div>
                <div className="ninjastar_clients ms-2">
                  <GiStarShuriken />
                </div>
              </div>
            </div>
            <div className="description_process_clients">
              <p>
                {" "}
                No one shall be subjected to arbitrary arrest, indepen impartial
                t
              </p>
              <p> No one shall be subjected to indepen impartial t</p>
            </div>
          </div>

          {/* <div className="clients_logo">
          <div className="logos">
            <img src={cl1} width={120} height={120} />
          </div>
          <div className="logos">
            <img src={cl2} width={120} height={120} />
          </div>
          <div className="logos">
            <img src={cl3} />
          </div>
          <div className="logos">
            <img src={cl4} width={120} height={120} />
          </div>
          <div className="logos">
            <img src={cl5} width={120} height={120} />
          </div>
          <div className="logos">
            <img src={cl6} width={120} height={120} />
          </div>
        </div> */}
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img
                  src={cl1}
                  height="50"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                    src={cl2}
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src={cl1}
                  height="50"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                    src={cl2}
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src={cl1}
                  height="50"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                    src={cl2}
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src={cl1}
                  height="50"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                    src={cl2}
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src={cl1}
                  height="50"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                    src={cl2}
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              {/* <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Clients;
