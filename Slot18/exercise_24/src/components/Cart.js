import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateCart } from '../redux/actions';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, [cart]);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCart({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  const handleBackToList = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Giỏ Hàng</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          <Row className="justify-content-center">
            {cart.map((item) => (
              <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>ID: {item.id}</Card.Title>
                    <Card.Text>Tên: {item.name}</Card.Text>
                    <Card.Text>Giá: {item.price} USD</Card.Text>
                    <Card.Text>
                      Số lượng:
                      <Button
                        variant="danger"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        style={{ margin: '0 10px' }}
                      >-</Button>
                      {item.quantity}
                      <Button
                        variant="success"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ margin: '0 10px' }}
                      >+</Button>
                    </Card.Text>
                    <Card.Text>Danh mục: {item.catalogs?.join(', ')}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                      style={{ marginTop: '10px' }}
                    >
                      Xóa khỏi giỏ
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <p><strong>Tổng cộng: {total.toFixed(2)} USD</strong></p>
          <Button variant="secondary" onClick={handleBackToList}>
            Quay lại danh sách
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
