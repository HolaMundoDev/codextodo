import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { text: text.trim(), completed: false }]);
    setText('');
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Todo List</h1>
      <form onSubmit={addTask} style={{ marginBottom: '1rem' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
