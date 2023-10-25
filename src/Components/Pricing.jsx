import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Pricing.css";

export default function Pricing() {
  return (
    <Row className="pricingrow">
      <Col md={4} sm={12}>
        <Card className="pricing">
          <Card.Body>
            <Card.Title>Frontend Course</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              HTML + CSS + ReactJS
            </Card.Subtitle>
            <Card.Text>
              <strong>Plan Includes:</strong>
              <ul>
                <li>Free templates for references</li>
                <li>Free Mock tests</li>
                <li>Video Tutorials</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <strong>Total Price:</strong> 39$/M
            </Card.Text>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={12}>
        <Card className="pricing">
          <Card.Body>
            <Card.Title>Backend Course</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              NodeJS + PHP + MySQL
            </Card.Subtitle>
            <Card.Text>
              <strong>Plan Includes:</strong>
              <ul>
                <li>Free templates for references</li>
                <li>Free Mock tests</li>
                <li>Video Tutorials</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <strong>Total Price:</strong> 59$/M
            </Card.Text>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={12}>
        <Card className="pricing">
          <Card.Body>
            <Card.Title>FullStack Course</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Frontend + Backend
            </Card.Subtitle>
            <Card.Text>
              <strong>Plan Includes:</strong>
              <ul>
                <li>Free templates for references</li>
                <li>Free Mock tests</li>
                <li>Video Tutorials</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <strong>Total Price:</strong> 89$/M
            </Card.Text>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
