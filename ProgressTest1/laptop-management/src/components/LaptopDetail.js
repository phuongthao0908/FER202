import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { laptopService } from '../services/api';
import NotFound from './NotFound';

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Đảm bảo hàm fetchLaptopDetail ổn định và không thay đổi
  const fetchLaptopDetail = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await laptopService.getLaptopById(id);
      setLaptop(data);
    } catch (error) {
      console.error('Error fetching laptop detail:', error);
      setError('Laptop not found');
    } finally {
      setLoading(false);
    }
  }, [id]);  // Thêm id vào dependency array nếu id thay đổi thì fetch lại

  useEffect(() => {
    fetchLaptopDetail();
  }, [id, fetchLaptopDetail]);  // Đảm bảo fetchLaptopDetail là một phụ thuộc

  const handleBackToList = () => {
    navigate('/laptops');
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  if (error || !laptop) {
    return <NotFound />;
  }

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col>
          <Button variant="secondary" onClick={handleBackToList}>
            ← Back to Laptop List
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card.Img
            variant="top"
            src={laptop.image}
            alt={`${laptop.brand} ${laptop.model}`}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
            }}
          />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">
                {laptop.brand} {laptop.model}
              </Card.Title>
              <Card.Text>
                <strong>Brand:</strong> {laptop.brand}<br />
                <strong>Model:</strong> {laptop.model}<br />
                <strong>Year:</strong> {laptop.year}<br />
                <strong>Price:</strong> {laptop.price}<br />
                <strong>Description:</strong> This is a high-quality laptop from {laptop.brand},
                featuring the latest technology and excellent performance.
                The {laptop.model} is perfect for both work and entertainment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LaptopDetail;
