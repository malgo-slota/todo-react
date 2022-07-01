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
        <input type="checkbox" 
                    id="chck"
                    onClick={completeHandler}
                    className="form-check-input mt-0">
        </input>
    );
}

export default Checkbox;