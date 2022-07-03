import React from "react";

const Checkbox = ({ todo, todos, setTodos }) => {
     
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return (
        <button id="chck"
                onClick={completeHandler}
                className={`complete-btn ${todo.completed ? 'complete-btn--checked' : ''}`}>
            <span className="material-icons-outlined material-icons-outlined--light">
                done
            </span>
        </button>
    );
}

export default Checkbox;