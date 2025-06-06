import React from 'react';
import { Card } from 'react-bootstrap';

function MyInfo() {
  return (
    <Card className="text-center mt-4 mx-auto" style={{ width: '22rem' }}>
      <Card.Body>
        <Card.Title>Nguyễn Văn A</Card.Title>
        <Card.Text>
          Tôi là sinh viên CNTT, yêu thích lập trình frontend và khám phá công nghệ mới.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyInfo;
