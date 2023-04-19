import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function HomeBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      controls={false}
      interval={3000}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <div style={{ width: "100%", height: "500px", position: "relative" }}>
          <Image
            src="/images/image-1.jpg"
            alt="First slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "500px", position: "relative" }}>
          <Image
            src="/images/image-2.jpg"
            alt="Second slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "500px", position: "relative" }}>
          <Image
            src="/images/image-3.jpg"
            alt="Third slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
