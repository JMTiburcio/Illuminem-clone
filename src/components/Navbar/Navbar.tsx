import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsList } from "react-icons/bs";

import Logo from "../Logo";

export default function NextNavbar() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="mr-3" href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle>
          <BsList fill="#545454" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="mr-3" href="/">
              One Stop
            </Nav.Link>

            <NavDropdown
              menuVariant="dark"
              title="Illuminem Voices"
              id="collasible-nav-dropdown"
              className="mr-3"
            >
              <NavDropdown.Item href="#action/3.1">
                Thought Leaders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Future Thought Leaders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Our Authors
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="mr-3" href="/">
              Explore
            </Nav.Link>

            <NavDropdown
              menuVariant="dark"
              title="Categories"
              id="collasible-nav-dropdown"
              className="mr-3"
            >
              <NavDropdown.Item href="#action/3.1">Illuminem</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Environmental Sustainability
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Energy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mining & Metals
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Social Responsability
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="mr-3" href="/">
              Newsletter
            </Nav.Link>

            <NavDropdown
              menuVariant="dark"
              title="More"
              className="mr-3"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                ESG Alliance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Energy Converter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Glossary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Top 10</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="mr-3" href="/">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
