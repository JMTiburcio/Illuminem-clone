import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="border-top mt-5 py-4">
      <Container>
        <Logo />
        <Row className="footer-row">
          <Col md={9}>
            <div className="d-flex mt-4 footer-links">
              <h6>About us</h6>
              <h6>Terms & Conditions</h6>
              <h6>Privacy</h6>
              <h6>Cookies</h6>
              <h6>Contact Us</h6>
            </div>
            <p className="text-muted small">
              © 2023 illuminem. All rights reserved. Various trademarks held by
              their owners.
            </p>
          </Col>
          <Col md={3}>
            <div className="footer-social-icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/energen-info/"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/illuminemNews"
                aria-label="Twitter Link"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
