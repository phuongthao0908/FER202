import React from 'react';

function CheckTeenager() {
  const employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <p>{isTeenager.toString()}</p>
    </div>
  );
}

export default CheckTeenager;
