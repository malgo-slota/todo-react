import React from "react";

function Item ({ item }) {
    return (
        <li className="list-group-item">
            {item.name}
        </li>
    );
}

export default Item;