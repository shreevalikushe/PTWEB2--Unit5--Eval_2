import React, { useState } from "react";

export const TodoInput = ({ addTask }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (text) {
      addTask(text);
      setText("");
    }
  };
  return (
    <div>
      <input
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};
