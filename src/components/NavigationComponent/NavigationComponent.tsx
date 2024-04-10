import React from "react";
import { Navbar } from "react-bootstrap";

const NavigationComponent = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home"><h2>Weather App</h2></Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
