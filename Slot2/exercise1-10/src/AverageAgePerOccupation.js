function AverageAgePerOccupation() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Engineer" },
    { name: "Marry", age: 22, occupation: "Designer" },
  ];

  const grouped = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person.age);
    return acc;
  }, {});

  return (
    <div style={{ textAlign: "center" }}>
        
      <h2>Average Age per Occupation</h2>
      <ul style={{ listStyleType: "none" }}>
        {Object.entries(grouped).map(([occupation, ages], index) => {
          const avg = (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(2);
          return <li key={index}>{occupation}: {avg} years</li>;
        })}
      </ul>
    </div>
  );
}

export default AverageAgePerOccupation;