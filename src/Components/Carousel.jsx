import { Carousel } from "react-bootstrap";
import React from "react";
import "./Caruosel.css";

export default function Image() {
  return (
    <div>
      <Carousel className="container-caruosel">
        <Carousel.Item interval={1000}>
          <img
            className="image1" // Adjust the width and height here
            src="https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="image1" // Adjust the width and height here
            src="https://media.licdn.com/dms/image/C5112AQEE6ZOMm9H7LQ/article-cover_image-shrink_720_1280/0/1520203300165?e=2147483647&v=beta&t=HnYIRfI7Nds8aUU84BmF3MsCY1_oFLWjcBgFQZii9YY"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="image1" // Adjust the width and height here
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230810164440/Top-10-Full-Stack-Development-Trends-.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
