import React from "react";
//components
import Checkbox from "./Checkbox";
import Delete from "./Delete";

function Item ({ text, todo, todos, setTodos }) {

    return (
        <li className="list-group-item item-flex">
             <Checkbox todo={todo} 
                        todos={todos}
                        setTodos={setTodos}/>
            <label className={`form-check-label ${todo.completed ? 'complete' : ""}`}
                    htmlFor="chck">
                {text}
            </label> 
            <Delete todo={todo} 
                    todos={todos} 
                    setTodos={setTodos} />       
        </li>
    );
}

export default Item; 