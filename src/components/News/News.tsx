import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import Card from "@/components/Card/Card";

interface Data {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  type: string;
  category: string[];
}

interface Props {
  title: string;
  data: Data[];
  main: boolean;
}

export default function News({ data, title, main }: Props) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsPerCarouselItem = main
    ? windowWidth >= 768
      ? 3
      : 1
    : windowWidth >= 768
    ? 4
    : 1;

  const numCarouselItems = Math.ceil(data.length / itemsPerCarouselItem);
  const carouselItems = [];

  // Loop to create Carousel.Items
  for (let i = 0; i < numCarouselItems; i++) {
    const cards = [];

    // Loop to create Cols e Cards inside of Carousel.Item
    for (let j = 0; j < itemsPerCarouselItem; j++) {
      const index = i * itemsPerCarouselItem + j;

      if (index >= data.length) {
        break;
      }

      const item = data[index];
      const card = (
        <Card
          key={item.id}
          title={item.title}
          imgSrc={item.image}
          text={item.description}
          color={item.color}
          type={item.type}
          category={item.category}
        />
      );

      cards.push(
        <Col key={item.id} md={main ? 4 : 3}>
          {card}
        </Col>
      );
    }

    // Create the Carousel.Item with the Cols e Cards
    const carouselItem = (
      <Carousel.Item key={i}>
        <Row>{cards}</Row>
      </Carousel.Item>
    );

    // Add the Carousel.Item to the array Carousel.Items
    carouselItems.push(carouselItem);
  }

  return (
    <Container className="mt-4 border-bottom">
      <h2>{title}</h2>
      <Carousel interval={null} slide={true} indicators={false} controls={true}>
        {carouselItems}
      </Carousel>
    </Container>
  );
}
