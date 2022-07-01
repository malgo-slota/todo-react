import React from "react";

const Checkbox = ({ toggle, setToggle }) => {
     const isChecked = () => {
        setToggle(prev => !prev);
    };

    return (
        <input type="checkbox" 
                    id="chck"
                    onClick={isChecked}
                    className={`form-check-input mt-0 ${toggle ? 'active' : ""}`}>
        </input>
    );
}

export default Checkbox;