function SortedPeople() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Engineer" },
    { name: "Marry", age: 22, occupation: "Designer" },
  ];

  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation !== b.occupation) {
      return a.occupation.localeCompare(b.occupation);
    }
    return a.age - b.age;
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sorted People</h2>
      <ul>
        {sortedPeople.map((p, index) => (
          <li key={index}>
            {p.name} - {p.age} - {p.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;
