function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 16 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 17 },
  ];

  const allTeenagers = people.every(p => p.age >= 13 && p.age <= 19);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>All Teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;
