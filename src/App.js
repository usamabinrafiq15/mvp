import React from "react";
import "./App.css";
import { Navbar } from "./Components";
import { Container } from "react-bootstrap";
import Header from "./Components/header/Header";
import Process from "./Components/processAndtesting/Process";
import Cricle from "./Components/cricle/Cricle";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg ">
          <div className="color-overlay">
            <div className="nav_border">
              <Container>
                <Navbar />
              </Container>
            </div>
            <Container>
              <Header />
            </Container>
          </div>
        </div>
        <div className="white_screen">
          <Container>
            <Process />
            {/* <Cricle /> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
