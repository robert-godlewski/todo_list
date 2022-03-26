import React, {useState} from 'react';
import ItemForm from './components/ItemForm';
import TodoItems from './components/TodoItems';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <ItemForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoItems todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
