import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const About = () => {
  return (
    <Container className="bg-dark text-light py-5" fluid>
      <Row className="mb-4">
        <Col>
          <h2 className="text-danger">About Us</h2>
          <p>Hello Welcome, xin chào các bạn.</p>
          <p>Have Good Day EveryOne. Nice To Meet You</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card bg="secondary" text="light">
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <ListGroup variant="flush">
                <ListGroupItem className="bg-secondary text-light">
                  <strong>Phương Thảo</strong> - Founder & CEO
                </ListGroupItem>
                <ListGroupItem className="bg-secondary text-light">
                  <strong>Phương Thảo</strong> - Developper
                </ListGroupItem>
                <ListGroupItem className="bg-secondary text-light">
                  <strong>Phương Thảo</strong> - Lead Engineer
                </ListGroupItem>
                <ListGroupItem className="bg-secondary text-light">
                  <strong>Phương Thảo</strong> - Designer
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card bg="secondary" text="light">
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                liên hệ với tôi nếu bạn có bất kỳ câu hỏi hay phản hồi nào,vui
                lòng liên hệ với{" "}
                <a href="mailto:nhatthach2703@gmail.com" className="text-info">
                  nguyenphuongthao090
                </a>
                .
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
