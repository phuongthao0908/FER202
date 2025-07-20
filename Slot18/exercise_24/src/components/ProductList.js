import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/actions';

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const laptops = [
    {
      id: '123456',
      name: 'Dell XPS 13',
      image: '/images/dell-xps13.jpg',
      description: 'Laptop Dell XPS 13, mạnh mẽ và di động.',
      price: 1299.99,
      catalogs: ['laptop', 'premium'],
    },
    {
      id: '123457',
      name: 'HP Spectre x360',
      image: '/images/hp-spectre.jpg',
      description: 'HP Spectre x360, 2-in-1 với thiết kế sang trọng.',
      price: 1499.99,
      catalogs: ['laptop', 'ultrabook'],
    },
    {
      id: '123458',
      name: 'Lenovo ThinkPad',
      image: '/images/lenovo-thinkpad.jpg',
      description: 'Lenovo ThinkPad, laptop doanh nhân, hiệu suất cao.',
      price: 1099.99,
      catalogs: ['laptop', 'business'],
    },
    {
      id: '123459',
      name: 'MacBook Pro',
      image: '/images/macbook-pro.jpg',
      description: 'MacBook Pro, hiệu năng mạnh mẽ cho công việc.',
      price: 1799.99,
      catalogs: ['laptop', 'apple'],
    },
  ];

  const handleAddToCart = (laptop) => {
    const existingProduct = cart.find(item => item.id === laptop.id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.id === laptop.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...laptop, quantity: 1 }];
    }
    setCart(updatedCart);
    dispatch(addToCart(laptop));
    alert(`${laptop.name} đã được thêm vào giỏ hàng!`);
    navigate('/cart');
  };

  const handleUpdateCart = (laptop) => {
    dispatch(updateCart({ id: laptop.id, quantity: 5 }));
    alert(`Cập nhật số lượng của ${laptop.name} lên 5`);
  };

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
    alert(`Đã xóa sản phẩm khỏi giỏ hàng`);
  };

  return (
    <div>
      <h1>Cửa Hàng Laptop</h1>
      <Row>
        {laptops.map((laptop) => (
          <Col key={laptop.id} sm={12} md={6} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={laptop.image}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                }}
              />
              <Card.Body>
                <Card.Title>ID: {laptop.id}</Card.Title>
                <Card.Text>{laptop.name}</Card.Text>
                <Card.Text>{laptop.description}</Card.Text>
                <Card.Text><strong>{laptop.price} USD</strong></Card.Text>
                <Card.Text>Danh mục: {laptop.catalogs.join(', ')}</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(laptop)}
                  className="w-100 mb-2"
                >
                  Thêm vào giỏ
                </Button>

                <div className="d-flex justify-content-between">
                  <Button
                    variant="warning"
                    onClick={() => handleUpdateCart(laptop)}
                    className="w-50 me-1"
                  >
                    Cập nhật giỏ (5)
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteFromCart(laptop.id)}
                    className="w-50 ms-1"
                  >
                    Xóa khỏi giỏ
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
