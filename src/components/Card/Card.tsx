import React from "react";
import { Card } from "react-bootstrap";

import useNewsModal from "@/hooks/useNewsModal";
import NewsModal from "../NewsModal/NewsModal";

interface ICard {
  title: string;
  imgSrc: string;
  text: string;
  color: string;
  type: string;
  category: string[];
}

export default function MainNews(props: ICard) {
  const { showModal, handleClose, handleShow, cardProps } = useNewsModal();

  return (
    <>
      <Card onClick={() => handleShow(props)} role="button">
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.ImgOverlay>
          <Card.Header></Card.Header>
        </Card.ImgOverlay>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div
              className={`${props.color} flex-shrink-0 rounded mr-1`}
              style={{ width: 30, height: 6 }}
            ></div>
            <div className="flex-grow-1">
              <span>{props.category[0]}</span>
              <span>&nbsp;·&nbsp;</span>
              <span>{props.category[1]}</span>
            </div>
          </div>
          <Card.Text>{props.title}</Card.Text>
        </Card.Body>
      </Card>
      <NewsModal
        cardProps={cardProps}
        showModal={showModal}
        handleClose={handleClose}
      />
    </>
  );
}
