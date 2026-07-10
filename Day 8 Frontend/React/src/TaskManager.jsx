import React, { useEffect, useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];

    case "TOGGLE":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE":
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const value = inputRef.current.value;
    if (!value) return;

    dispatch({ type: "ADD", payload: value });
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <input ref={inputRef} />
      <button onClick={addTask}>Add</button>

      <h3>Total: {tasks.length}</h3>
      <h3>Completed: {tasks.filter(t => t.completed).length}</h3>

      {tasks.map(task => (
        <div key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.text}
          </span>

          <button onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}>
            Toggle
          </button>

          <button onClick={() => dispatch({ type: "DELETE", payload: task.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}