import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="border-top mt-5 py-4">
      <Container>
        <Logo />
        <Row>
          <Col md={9}>
            <div className="d-flex mt-4">
              <h6>About us</h6>
              <h6 className="pl-4">Terms & Conditions</h6>
              <h6 className="pl-4">Privacy</h6>
              <h6 className="pl-4">Cookies</h6>
              <h6 className="pl-4">Contact Us</h6>
            </div>
            <p className="text-muted small">
              © 2023 illuminem. All rights reserved. Various trademarks held by
              their owners.
            </p>
          </Col>
          <Col md={3}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/energen-info/"
              aria-label="LinkedIn"
            >
              <svg
                height="28"
                className="svg-inline--fa fa-linkedin fa-w-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/illuminemNews"
              aria-label="Twitter Link"
            >
              <svg
                height="28"
                width="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
                  fill="#F6F6F6"
                ></path>
                <path
                  d="M11.36 20.963c6.39 0 9.883-5.359 9.883-10.004 0-.153 0-.306-.008-.452a7.164 7.164 0 0 0 1.736-1.823c-.619.277-1.289.467-1.995.554a3.507 3.507 0 0 0 1.527-1.946 6.982 6.982 0 0 1-2.204.853 3.437 3.437 0 0 0-2.535-1.109c-1.917 0-3.473 1.575-3.473 3.515 0 .277.03.547.094.802-2.889-.146-5.446-1.546-7.16-3.675a3.56 3.56 0 0 0-.468 1.765c0 1.217.612 2.296 1.548 2.924a3.38 3.38 0 0 1-1.57-.438v.044a3.51 3.51 0 0 0 2.788 3.449 3.424 3.424 0 0 1-1.57.058 3.474 3.474 0 0 0 3.241 2.443 6.928 6.928 0 0 1-5.143 1.45 9.594 9.594 0 0 0 5.309 1.59z"
                  fill="#191919"
                ></path>
              </svg>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
