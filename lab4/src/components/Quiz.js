// src/Quiz.js
import React, { useState } from 'react';

// Dữ liệu câu hỏi và đáp án
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

  const handleChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer
    });
  };

  const nextQuestion = () => {
    if (answers[currentQuestionIndex] === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true); // Hoàn thành quiz
    }
  };

  const restartQuiz = () => {
    setIsQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  return (
    <div className="quiz-container">
      {!isQuizCompleted ? (
        <div>
          <h3>{quizData[currentQuestionIndex].question}</h3>
          {quizData[currentQuestionIndex].answers.map((answer, index) => (
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
          <p>Your score: {score} / {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
