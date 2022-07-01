import React, {useState} from "react";
//components
import Checkbox from "./Checkbox";

function Item ({ text, todo, isDone, todos, setTodos }) {
    const[toggle, setToggle] = useState(isDone);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return (
        <li className="list-group-item item-flex">
             <Checkbox toggle={toggle} setToggle={setToggle}/>
            <label className="form-check-label"
                    htmlFor="chck">
                {text}
            </label> 
            <button className="btn__trash"
                    onClick={deleteHandler}>
                <span className="material-icons-outlined md-24">
                    delete
                </span>
            </button>          
        </li>
    );
}

export default Item; 