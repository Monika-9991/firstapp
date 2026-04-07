import React, { useState } from "react";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue])
      setInputValue("")
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <h1>To Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
