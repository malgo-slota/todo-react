import React, {useState} from "react";
//components
import Checkbox from "./Checkbox";
import Delete from "./Delete";

function Item ({ text, todo, isDone, todos, setTodos }) {
    const[toggle, setToggle] = useState(isDone);

    return (
        <li className="list-group-item item-flex">
             <Checkbox toggle={toggle} setToggle={setToggle}/>
            <label className="form-check-label"
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