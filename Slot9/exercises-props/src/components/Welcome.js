function Welcome({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}
export default Welcome;

// Cách khác

// const Welcome = ({ name }) => {
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//     </div>
//   );
// };
// export default Welcome;

// const Welcome = ({ name }) => {
//   return <h1>Hello, {name}</h1>;
// };
// export default Welcome;
