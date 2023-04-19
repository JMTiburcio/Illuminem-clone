import { Navbar, Container, Nav } from "react-bootstrap";

import Logo from "../Logo";

export default function NextNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">One Stop</Nav.Link>
            <Nav.Link href="/">Illuminem Voices</Nav.Link>
            <Nav.Link href="/">Explore</Nav.Link>
            <Nav.Link href="/">Categories</Nav.Link>
            <Nav.Link href="/">Newsletter</Nav.Link>
            <Nav.Link href="/">More</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
