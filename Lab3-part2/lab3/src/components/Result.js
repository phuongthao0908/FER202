import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}

export default Result;
