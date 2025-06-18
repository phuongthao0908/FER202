import Counter from './components/Counter';
import UserInputForm from './components/UserInputForm';
import ProductList from './components/ProductList';
import RadioButtonList from './components/RadioButtonList';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <h1>Example 1: Counter</h1>
      <Counter />
      <h1>Example 2: Textbox</h1>
      <UserInputForm/>
      <h1>Example 3: Checkbox Product</h1>
      <ProductList />
      <h1>Example 4: Radio button</h1>
      <RadioButtonList />
    </div>
  );
}

export default App;
