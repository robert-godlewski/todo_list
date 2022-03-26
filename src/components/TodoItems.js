import React, {useState} from 'react';

const TodoItems = (props) => {
    const {todoList, setTodoList} = props;

    const removeItem = (index) => {
        setTodoList(todoList.filter((todo, i) => {
            return i !== index;
        }));
    };

    const checkedOffItem = (todo) => {
        todo.is_finished = !todo.is_finished
        setTodoList([...todoList]);
    };

    return (
        <>
            {
                todoList.map((todo, index) => (
                    <div key={index}>
                        <span style={{textDecoration: todo.is_finished && 'line-through'}}>
                            {todo.details}
                        </span>
                        <input 
                            type="checkbox" 
                            value={todo.is_finished} 
                            onChange={() => checkedOffItem(todo)}
                        />
                        <button onClick={() => removeItem(index)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default TodoItems;