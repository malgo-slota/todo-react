import React from "react";

function Filter ({ setStatus }) {
    
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };  

    return (
        <div className="btn-group status-btns"
             onClick={statusHandler}>
            <button type="button" 
                    className="btn"
                    value="all">All</button>
            <button type="button" 
                    className="btn"
                    value="active">Active</button>
            <button type="button" 
                    className="btn"
                    value="completed">Completed</button>
        </div>
    );
}

export default Filter;