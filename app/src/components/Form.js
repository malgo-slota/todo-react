import React from "react";

function Form ({ inputTxt, setInputTxt, todos, setTodos }) {
    const inputTxtHandler = (e) => {
        setInputTxt(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {id: Date.now(), name: inputTxt , completed: false}
        ]); 
         setInputTxt("");
    };

    return (
        <form className="input-group mb-3">
            <input className="form-control"
                    type="text" 
                    placeholder="Add new todo"
                    value={inputTxt}
                    onChange={inputTxtHandler}/>
            <button className="btn btn-outline-secondary"
                    type="submit"
                    onClick={submitHandler}>
                Add
            </button>
        </form>
    );
}

export default Form;