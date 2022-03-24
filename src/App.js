import React, {setState} from 'react';
import ItemForm from './components/ItemForm';
import './App.css';

function App() {
  const [todoList, setTodoList] = setState([])

  return (
    <div className="App">
      <ItemForm todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
