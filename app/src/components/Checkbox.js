import React from "react";

const Checkbox = ({ toggle, setToggle }) => {
     const isChecked = () => {
        setToggle(prev => !prev);
    };

    return (
        <input type="checkbox" 
                    name="chck"
                    onClick={isChecked}
                    className={`form-check-input me-1 ${toggle ? 'active' : ""}`}>
        </input>
    );
}

export default Checkbox;