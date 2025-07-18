import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Form, InputGroup, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { laptopService } from '../services/api';

const LaptopList = ({ user }) => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // Thêm state cho từ khóa tìm kiếm
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();  // Lấy danh sách laptop khi trang tải
  }, []);

  const fetchLaptops = async () => {
    try {
      setLoading(true);
      const data = await laptopService.getAllLaptops();  // Gọi API để lấy tất cả laptop
      setLaptops(data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/laptops/${id}`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await laptopService.searchLaptops(searchTerm);  // Tìm kiếm laptop theo từ khóa
      setLaptops(data);
    } catch (error) {
      console.error('Error searching laptops:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      {/* Navbar Section */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/laptops">Laptop Store</Navbar.Brand> {/* Chỉnh sửa liên kết ở đây */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/laptops">Home</Nav.Link> {/* Khi nhấn vào Home, sẽ về trang Laptop List */}
          </Nav>
          <Nav>
            <Nav.Link>Welcome, {user?.username}!</Nav.Link>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Search Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Form onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search by brand or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}  // Cập nhật từ khóa tìm kiếm
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col md={6}>
          <Button variant="secondary" onClick={fetchLaptops}>
            Show All
          </Button>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row>
        <Col>
          <Carousel>
            {laptops.length > 0 ? (
              laptops.slice(0, 5).map((laptop) => (
                <Carousel.Item key={laptop.id}>
                  <img
                    className="d-block w-100"
                    src={laptop.image}
                    alt={`${laptop.brand} ${laptop.model}`}
                    style={{ objectFit: 'cover', height: '400px' }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                  <Carousel.Caption>
                    <h3>{laptop.brand} {laptop.model}</h3>
                    <p>{laptop.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <div className="text-center">No laptops available for the carousel.</div>
              </Carousel.Item>
            )}
          </Carousel>
        </Col>
      </Row>

      {/* Laptop List */}
      <Row>
        {laptops.length === 0 ? (
          <Col>
            <div className="text-center">No laptops found.</div>
          </Col>
        ) : (
          laptops.map((laptop) => (
            <Col key={laptop.id} md={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={laptop.image}
                  alt={`${laptop.brand} ${laptop.model}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <Card.Body>
                  <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                  <Card.Text>
                    <strong>Year:</strong> {laptop.year}<br />
                    <strong>Price:</strong> {laptop.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleViewDetails(laptop.id)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default LaptopList;
