import React from "react";

function Delete ({ todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return (
        <button className="btn__trash"
                    onClick={deleteHandler}>
                <span className="material-icons-outlined md-24">
                    delete
                </span>
            </button>
    );   
}

export default Delete;