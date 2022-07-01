import React from "react";

function Filter ({ setStatus }) {
    
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };  

    return (
        <div className="btn-group"
             onClick={statusHandler}>
            <button type="button" 
                    className="btn btn-outline-primary"
                    value="all">All</button>
            <button type="button" 
                    className="btn btn-outline-primary"
                    value="active">Active</button>
            <button type="button" 
                    className="btn btn-outline-primary"
                    value="completed">Completed</button>
        </div>
    );
}

export default Filter;