import React from 'react';

const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2);
};

const AverageAgeDisplay = () => {
  const avg = averageAge(22, 30, 18, 40, 25);

  return (
    <div>
      <h2>Average Age</h2>
      <p>The average age is: {avg}</p>
    </div>
  );
};

export default AverageAgeDisplay;
