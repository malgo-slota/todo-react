import React from "react";

function Header (props) {
    return (
        <nav>
            <div className="title">
                <h1>TO DO LIST</h1>
                <p>{props.text}</p>
            </div>
        </nav>
    );
}

export default Header;