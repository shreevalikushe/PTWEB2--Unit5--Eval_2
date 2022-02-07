import React from "react";
import styles from "./Todo.module.css";
export const TodoList = ({ id, title, deleteTask, completedTask }) => {
  const handleDelete = (id) => {
    deleteTask(id);
  };
  const itemComplete = (id) => {
    completedTask(id);
  };
  return (
    <div className={styles.todoList} key={id}>
      <span onClick={() => itemComplete(id)}>{title}</span>
      <button onClick={() => handleDelete(id)} className={styles.btn}>
        {" "}
        ✖
      </button>
    </div>
  );
};
