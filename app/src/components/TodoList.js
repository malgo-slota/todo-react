import React from "react";
//components
import Item from "./Item";

function TodoList ({ todos, setTodos, filtered }) {
    return (
        <ul className="list-group">
            {filtered.map(item => 
                <Item key={item.id} 
                    text={item.name} 
                    todos={todos}
                    todo={item} 
                    setTodos={setTodos}  />
            )}
        </ul>
    );
}

export default TodoList;