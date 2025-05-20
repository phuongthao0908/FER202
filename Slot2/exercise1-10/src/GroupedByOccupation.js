function GroupedByOccupation() {
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
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occupation, people]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {people.map((p, idx) => (
              <li key={idx}>{p.name} - {p.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedByOccupation;
