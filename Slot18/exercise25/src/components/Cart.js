//components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Giỏ hàng</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {cartItems.map((item, index) => (
          <Col key={index}>
            <Card className="border-2 shadow-sm p-3 mb-4 rounded">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Giá: {item.price} USD</Card.Text>
                <Card.Text>Danh mục: {item.catalogs.join(', ')}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cart;
