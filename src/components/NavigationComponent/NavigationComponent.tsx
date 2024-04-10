import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavigationComponent = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home"><h2>Weather App</h2></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
