import React from "react";
//components
import Item from "./Item";

function TodoList ({ todos, setTodos }) {
    return (
        <ul className="list-group">
            {todos.map(item => 
                <Item key={item.id} 
                    text={item.name} 
                    isDone={item.completed} 
                    todos={todos}
                    todo={item} 
                    setTodos={setTodos}  />
            )}
        </ul>
    );
}

export default TodoList;