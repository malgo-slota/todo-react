import React, {useState} from "react";
import Checkbox from "./Checkbox";

function Item ({ item }) {
    const[toggle, setToggle] = useState(item.complete);

    return (
        <li className="list-group-item">
             <Checkbox toggle={toggle} setToggle={setToggle}/>
            <label htmlFor="chck">
                {item.name}
            </label>           
        </li>
    );
}

export default Item; 