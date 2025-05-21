import React from 'react';

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ marginBottom: '0.5rem' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
          />
          <span
            style={{
              marginLeft: '0.5rem',
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onDelete(index)} style={{ marginLeft: '0.5rem' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
