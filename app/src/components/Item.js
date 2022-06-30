import React, {useState} from "react";
//components
import Checkbox from "./Checkbox";

function Item ({ text, isDone }) {
    const[toggle, setToggle] = useState(isDone);

    return (
        <li className="list-group-item">
             <Checkbox toggle={toggle} setToggle={setToggle}/>
            <label htmlFor="chck">
                {text}
            </label>           
        </li>
    );
}

export default Item; 