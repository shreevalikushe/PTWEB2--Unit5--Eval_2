import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { v4 as uuid } from "uuid";
import styles from "./Todo.module.css";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTask = (text) => {
    const payload = {
      title: text,
      id: uuid(),
      status: false,
    };
    setTodos([...todos, payload]);
  };
  const deleteTask = (id) => {
    const updatedTask = todos.filter((item) => item.id !== id);
    setTodos(updatedTask);
  };
  const completedTask = (id) => {
    const updatedList = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedList);
  };

  return (
    <div className={styles.todo}>
      <h1>Simple Todo Application</h1>
      <div>
        <TodoInput addTask={addTask} />
        {todos
          .filter((item) => item.status === false)
          .map((todo) => (
            <TodoList
              key={todo.id}
              {...todo}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          ))}
      </div>

      <div>
        <button>Show Completed Task</button>

        {todos
          .filter((item) => item.status === true)
          .map((todo) => (
            <div className={styles.strike} key={todo.id}>
              <TodoList
                {...todo}
                deleteTask={deleteTask}
                completedTask={completedTask}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
