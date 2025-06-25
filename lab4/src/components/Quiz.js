import React, { useState } from 'react';

// Dữ liệu câu hỏi và đáp án mặc định
export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
    correctAnswer: 'A syntax extension for JavaScript'
  },
  {
    question: 'What is the virtual DOM?',
    answers: ['A representation of the real DOM in memory', 'A new version of HTML', 'A type of JavaScript function'],
    correctAnswer: 'A representation of the real DOM in memory'
  }
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(quizData);  // Lưu trữ câu hỏi và đáp án trong state

  // Thêm câu hỏi mới
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  const handleChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer
    });
  };

  // Hàm để thay đổi câu hỏi
  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  // Hàm để thay đổi đáp án
  const handleAnswerChange = (index, answerIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[index].answers[answerIndex] = value;
    setQuestions(newQuestions);
  };

  // Chuyển sang câu hỏi tiếp theo
  const nextQuestion = () => {
    if (answers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true); // Hoàn thành quiz
    }
  };

  // Khởi động lại quiz
  const restartQuiz = () => {
    setIsQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  // Hàm để thêm câu hỏi mới
  const addNewQuestion = () => {
    const newQuestionData = {
      question: newQuestion,
      answers: newAnswers,
      correctAnswer: newCorrectAnswer
    };

    setQuestions([...questions, newQuestionData]);
    setNewQuestion('');
    setNewAnswers(['', '', '']);
    setNewCorrectAnswer('');
  };

  return (
    <div className="quiz-container">
      {/* Form nhập câu hỏi mới (đặt lên trên cùng) */}
      <h2>Enter a New Question</h2>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}  // Cập nhật câu hỏi mới
        />
      </div>

      <div>
        <h3>Answers:</h3>
        {newAnswers.map((answer, index) => (
          <div key={index}>
            <label>Answer {index + 1}:</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                const updatedAnswers = [...newAnswers];
                updatedAnswers[index] = e.target.value;
                setNewAnswers(updatedAnswers);  // Cập nhật các đáp án mới
              }}
            />
          </div>
        ))}
      </div>

      <div>
        <label>Correct Answer:</label>
        <input
          type="text"
          value={newCorrectAnswer}
          onChange={(e) => setNewCorrectAnswer(e.target.value)}  // Cập nhật đáp án đúng
        />
      </div>

      <button onClick={addNewQuestion}>Add Question</button>

      {/* Hiển thị câu hỏi và đáp án */}
      {!isQuizCompleted ? (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <div key={index}>
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={answer}
                onChange={() => handleChange(currentQuestionIndex, answer)}
                checked={answers[currentQuestionIndex] === answer}
              />
              {answer}
            </div>
          ))}
          <button onClick={nextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2 style={{ color: 'red' }}>Quiz Completed!</h2>
          <p>Your score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
