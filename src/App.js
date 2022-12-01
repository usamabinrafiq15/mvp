import React from "react";
import "./App.css";
import { Navbar } from "./Components";
import { Container } from "react-bootstrap";
import Header from "./Components/header/Header";
import Process from "./Components/processAndtesting/Process";
import Cricle from "./Components/cricle/Cricle";
import Details from "./Components/details/Details";
import Work from "./Components/latestWork/Work";
import Clients from "./Components/clients/Clients";
import Footer from "./Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <>
      <div className="App">
        <div className="nav_border">
          <Container>
            <Navbar />
          </Container>
        </div>
        <div className="gradient__bg ">
          <div className="color-overlay">
            <Container>
              <Header />
            </Container>
          </div>
        </div>
        <div className="white_screen" data-aos="fade-up" data-aos-delay="200">
          <Container>
            <Process />
            {/* <Cricle /> */}
          </Container>
        </div>
        <div className="black_screen">
          <Container>
            <Details />
          </Container>
        </div>
        <div className="work_screen">
          <Container>
          <Work />
          </Container>

        </div>
        <div className="clients_screen">
          <Container>
            <Clients />
          </Container>
        </div>
        <div className="footer_screen">
          <Container>
          <Footer />
          </Container>
        
        </div>
      </div>
    </>
  );
}

export default App;
