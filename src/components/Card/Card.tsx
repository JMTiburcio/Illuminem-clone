import React from "react";
import { Card } from "react-bootstrap";

interface Props {
  title: string;
  imgSrc: string;
  text: string;
  color: string;
  category: [string, string];
}

export default function MainNews({
  title,
  imgSrc,
  text,
  color,
  category,
}: Props) {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.ImgOverlay>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
      </Card.ImgOverlay>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div
            className={`${color} flex-shrink-0 rounded mr-1`}
            style={{ width: 30, height: 6 }}
          ></div>
          <div className="flex-grow-1">
            <span>{category[0]}</span>
            <span>&nbsp;·&nbsp;</span>
            <span>{category[1]}</span>
          </div>
        </div>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
