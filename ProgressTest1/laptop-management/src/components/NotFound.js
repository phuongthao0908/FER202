import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/laptops');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <div className="mb-4">
            <h1 className="display-1">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead">
              The page you are looking for might have been removed, 
              had its name changed, or is temporarily unavailable.
            </p>
            <Button variant="primary" onClick={handleGoHome}>
              Go to Laptop List
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
