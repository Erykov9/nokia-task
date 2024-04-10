import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationComponent = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home"><h2>Weather App</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/compare">Readme</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
