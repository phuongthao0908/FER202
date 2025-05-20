function FirstTeenager() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 15, occupation: "Student" },
    { name: "Charlie", age: 28, occupation: "Teacher" },
  ];

  const teen = people.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>First Teenager</h2>
      {teen ? (
        <p>{teen.name} - {teen.age} years old</p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
