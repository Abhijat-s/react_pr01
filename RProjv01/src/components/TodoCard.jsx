import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;

  return (
    <div>
      <li className="todoItem">
        <div className="actionContainer">
          {children}
          <button
            onClick={() => {
              handleEditTodo(index);
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(index);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
