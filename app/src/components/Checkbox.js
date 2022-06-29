import React from "react";

const Checkbox = (props) => {
     const isChecked = () => {
        props.setToggle(prev => !prev);
    }

    return (
        <input type="checkbox" 
                    name="chck"
                    onClick={isChecked}
                    className={`form-check-input me-1 ${props.toggle ? 'active' : ""}`}>
        </input>
    );
}

export default Checkbox;