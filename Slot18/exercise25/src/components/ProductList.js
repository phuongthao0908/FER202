//components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { Button, Card, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Sản phẩm</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="border-2 shadow-sm p-3 mb-4 rounded">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Giá: {product.price} USD</Card.Text>
                <Card.Text>Danh mục: {product.catalogs.join(', ')}</Card.Text>
                <Button onClick={() => handleAdd(product)} className="w-100">Thêm vào giỏ</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
