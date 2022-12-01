import React, { useState } from "react";
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

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Header />
        <Process />
        <Details />
        <Work />
        <Clients />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
