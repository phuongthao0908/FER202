import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Questions from "../quizApp/QuestionsData";
import { SelectedAnswerContext } from "./SelectedAnswerContext";

const QuizApp = ({ timerDuration }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const { selectedAnswer, setSelectedAnswer } = useContext(
    SelectedAnswerContext
  );

  // Thêm state để lưu đáp án của từng câu
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const question = Questions[currentQuestion];

  useEffect(() => {
    if (showResult) return;
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showResult]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    // Lưu đáp án đã chọn cho câu hiện tại
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);

    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
      setTimeLeft(timerDuration);
    } else {
      setShowResult(true);
    }
  };

  // Tính điểm
  const score = userAnswers.reduce(
    (acc, answer, idx) => (answer === Questions[idx].answer ? acc + 1 : acc),
    0
  );

  // Khi đã hoàn thành, hiển thị kết quả
  if (showResult) {
    return (
      <Container className="mt-5 text-light">
        <Card className="bg-dark text-light p-4 shadow-lg rounded">
          <h3 className="text-center text-danger mb-4">Quiz Result</h3>
          <h4 className="text-center text-success mb-4">
            Your score: {score}/{Questions.length}
          </h4>
          <div>
            {Questions.map((q, idx) => (
              <div key={q.id} className="mb-3">
                <div>
                  <b>
                    {idx + 1}. {q.question}
                  </b>
                </div>
                <div>
                  Your answer:{" "}
                  <span
                    style={{
                      color:
                        userAnswers[idx] === q.answer ? "lightgreen" : "red",
                    }}
                  >
                    {userAnswers[idx] || "No answer"}
                  </span>
                  {userAnswers[idx] !== q.answer && (
                    <span style={{ color: "yellow" }}>
                      {" "}
                      | Correct: {q.answer}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-5 text-light">
      <Card className="bg-dark text-light p-4 shadow-lg rounded">
        <h3 className="text-center text-danger mb-4">Quiz App</h3>

        <div className="mb-3 text-end">
          <strong>Time Left:</strong>{" "}
          <span className="text-danger">{timeLeft}s</span>
        </div>

        <h5 className="text-center text-warning mb-4">{question.question}</h5>

        <div className="d-grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className="text-start px-4 py-2 fw-semibold"
              variant={selectedAnswer === option ? "info" : "outline-light"}
              style={{
                backgroundColor:
                  selectedAnswer === option ? "#0dcaf0" : "#1f1f1f",
                color: selectedAnswer === option ? "#000" : "#f5f5f5",
                borderColor: "#444",
                transition: "all 0.3s ease",
              }}
            >
              {option}
            </Button>
          ))}
        </div>

        <div className="text-center mt-4">
          <Button
            variant="primary"
            className="px-4 py-2"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentQuestion === Questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default QuizApp;
