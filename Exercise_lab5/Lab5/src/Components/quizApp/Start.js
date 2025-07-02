import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Start = ({ onStart }) => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartClick = () => {
    setQuizStarted(true);
    onStart();
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title as="h2">
          Chào mừng đến với gói quiz thông minh của duck
        </Card.Title>
        <Card.Text>Hãy nhấn vào nút ớ bên dưới để bắt đầu làm</Card.Text>
        <Button
          variant="primary"
          onClick={handleStartClick}
          disabled={quizStarted}
        >
          Start
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Start;
