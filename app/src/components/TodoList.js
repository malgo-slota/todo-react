import React from "react";
import todo from "./mockData.json";
//components
import Item from "./Item";

function TodoList () {
    return (
        <ul className="list-group">
            {todo.Items.map(item => 
                <Item key={item.id} item={item} />
            )}
        </ul>
    );
}

export default TodoList;