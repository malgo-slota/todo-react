import React from "react";
//components
import Item from "./Item";

function TodoList ({ todos }) {
    return (
        <ul className="list-group">
            {todos.map(item => 
                <Item key={item.id} text={item.name} isDone={item.completed} />
            )}
        </ul>
    );
}

export default TodoList;