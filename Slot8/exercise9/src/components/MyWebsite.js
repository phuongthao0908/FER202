import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import logo from '../assets/image/logo.png';

function MyWebsite() {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#f7941d', padding: '20px 0', textAlign: 'center' }}>
        <img src={logo} alt="FPT Logo" style={{ maxWidth: '250px' }} />
        <Nav className="justify-content-center mt-2">
          <Nav.Item>
            <Nav.Link href="#" className="text-dark">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-dark">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-dark">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Content */}
      <Container className="my-4 text-center">
        <h5><strong>About</strong></h5>
        <p>This is the about section of the website.</p>

        <h5><strong>Contact</strong></h5>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: '#fbd79e', padding: '10px', textAlign: 'center' }}>
        <small>© 2023 Website. All rights reserved.</small>
      </div>
    </div>
  );
}

export default MyWebsite;
