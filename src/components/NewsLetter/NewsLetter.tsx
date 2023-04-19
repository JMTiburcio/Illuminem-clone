import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Newsletter() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={5}>
          <h3>You cannot miss it!</h3>
          <p>Weekly. Free. Your Top 10 Sustainability & Energy Posts.</p>
        </Col>
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="email@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCompany">
              <Form.Control type="text" placeholder="Your company" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPosition">
              <Form.Control type="text" placeholder="Your position" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Subscribe
            </Button>
            <Form.Text className="text-muted d-block">
              You can unsubscribe at any time (read our privacy policy).
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
