import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

interface Props {
  title: string;
}

export default function SecondaryNews({ title }: Props) {
  return (
    <Container className="mt-4 border-bottom">
      <h2>{title}</h2>
      <Carousel interval={null} slide={true} indicators={false} controls={true}>
        <Carousel.Item>
          <Row>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-1.jpg" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-2.jpg" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-3.jpg" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-1.jpg" />
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-1.jpg" />
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-2.jpg" />
                <Card.Body>
                  <Card.Title>Card 5</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-3.jpg" />
                <Card.Body>
                  <Card.Title>Card 6</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src="/images/image-1.jpg" />
                <Card.Body>
                  <Card.Title>Card 7</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
