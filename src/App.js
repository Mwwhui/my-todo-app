import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [input, setInput] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, {text: input, completed: false}]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);

  };

  return (
    <div>
      <h1>To-do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task,index) => (
          <li key={index}
            style={{ textDecoration: task.completed ? "line-through":"none"}}
          >
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
