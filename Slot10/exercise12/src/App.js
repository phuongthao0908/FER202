import React from 'react';
import Counter from './components/Counter';
import UserInputForm from './components/UserInputForm';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';
function App() {
  return (
    <div className="App">
       <Counter />

       <UserInputForm />
      
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}

export default App;
