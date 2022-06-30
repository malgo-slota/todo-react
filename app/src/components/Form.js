import React from "react";

function Form () {
    return (
        <form className="input-group mb-3">
            <input className="form-control"
                    type="text" 
                    placeholder="Add new todo"/>
            <button className="btn btn-outline-secondary"
                    type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;