import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

interface CardProps {
  title: string;
  imgSrc: string;
  text: string;
  color: string;
  type: string;
  category: string[];
}

interface Props {
  cardProps: CardProps | null;
  showModal: boolean;
  handleClose: () => void;
}

const NewsModal = ({ cardProps, showModal, handleClose }: Props) => {
  return (
    <>
      {cardProps && (
        <Modal centered show={showModal} onHide={handleClose}>
          <Modal.Header
            className="bg-image align-items-start"
            style={{
              backgroundImage: `url(.${cardProps.imgSrc})`,
              backgroundSize: "cover",
            }}
          >
            <div className="h-100 d-flex align-items-end pl-2">
              <Button variant="primary">Read {cardProps.type}</Button>
            </div>
            <div className="df-flex align-items-start bg-dark p-1 rounded-circle">
              <CloseButton
                className="rounded-circle m-0"
                variant="white"
                onClick={handleClose}
              />
            </div>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Row>
                <Col md={8}>
                  <h3>{cardProps.title}</h3>
                  <p>{cardProps.text}</p>
                </Col>
                <Col md={4}>
                  <span>
                    category: {cardProps.category[0]} {cardProps.category[1]}
                  </span>
                  <span>type: {cardProps.type}</span>
                </Col>
              </Row>
              <Row>
                <Col></Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default NewsModal;
