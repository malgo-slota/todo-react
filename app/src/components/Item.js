import React, {useState} from "react";

function Item ({ item }) {
    const[toggle, setToggle] = useState(item.complete);

    const isChecked = () => {
        setToggle(prev => !prev);
    }

    return (
        <li className="list-group-item">
             <input type="checkbox" 
                    name="chck"
                    onClick={isChecked}
                    className={`form-check-input me-1 ${toggle ? 'active' : ""}`}>
             </input>
            <label htmlFor="chck">
                {item.name}
            </label>           
        </li>
    );
}

export default Item; 