import React from "react";
// import "./Todo.css";

export default function Todo(props) {
    return (
        <div
            className={`item${props.item.completed ? " completed" : ""}`}
            onClick={() => props.toggleItem(props.item.id)}>

            <p className="FillerInfo"> {props.item.task} </p>
        </div>
    );
}