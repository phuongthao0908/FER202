import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function SimpleCard({ item }) {
  return (
    <Card className="p-3 shadow" style={{ maxWidth: '700px', margin: '20px auto' }}>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <Image src={item.imageUrl} alt="FPT Logo" fluid />
        </Col>
        <Col xs={12} md={6} className="text-md-end text-center">
          <h5 className="fw-bold">{item.title}</h5>
          <p className="mb-0">Mobile: {item.description}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;
