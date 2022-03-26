import React, {useState} from 'react';

const ItemForm = (props) => {
    const {todoList, setTodoList} = props;
    const [details, setDetails] = useState("");
    
    const addItem = (e) => {
        e.preventDefault();
        setTodoList([
            ...todoList, 
            {
                details: details, 
                is_finished: false
            }
        ]);
        setDetails("");
    };

    return (
        <div>
            <form onSubmit={addItem}>
                <input 
                    type="text" 
                    name="details" 
                    value={details} 
                    onChange={(e) => setDetails(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ItemForm;
