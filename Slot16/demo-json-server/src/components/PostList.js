import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';  // Import PropTypes

const PostList = ({ data: propData, loading: propLoading }) => {
  const [data, setData] = useState(propData || null);
  const [loading, setLoading] = useState(propLoading || true);

  useEffect(() => {
    if (!propData) {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/posts");
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu:", error);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [propData]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Không có bài viết nào!</div>;
  }

  return (
    <Container>
      <h1 className="my-3">Danh sách bài viết</h1>
      <Link to="/create">
        <Button variant="primary" className="mb-3">Tạo bài viết mới</Button>
      </Link>
      <Row>
        {data.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Link to={`/edit/${post.id}`}>
                  <Button variant="warning">Chỉnh sửa</Button>
                </Link>
                <Link to={`/delete/${post.id}`}>
                  <Button variant="danger" className="ml-2">Xóa</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Định nghĩa kiểu dữ liệu cho các props
PostList.propTypes = {
  data: PropTypes.array,       // data phải là một mảng
  loading: PropTypes.bool      // loading phải là một boolean
};

export default PostList;
