import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';  // Đảm bảo rằng bạn đang import authService đúng

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const user = await authService.login(username, password);
      
      if (user) {
        setLoggedInUser(user);
        setShowModal(true);
        setShowAlert(false);
        
        // Gửi user lên App.js và chuyển hướng ngay lập tức
        setUser(user);
        navigate('/laptops'); // Chuyển hướng ngay sau khi login thành công
      } else {
        setAlertMessage('Invalid username or password!');
        setShowAlert(true);
        setShowModal(false);
      }
    } catch (error) {
      setAlertMessage('Login failed. Please try again.');
      setShowAlert(true);
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUser(loggedInUser);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="border p-4 rounded">
            <h2 className="text-center mb-4">Login</h2>
            
            {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter username"
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter password"
                />
              </Form.Group>
              
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome, {loggedInUser?.username} login Successful!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;
