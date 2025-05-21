import React from 'react'

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks yet</p>
  }

  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <li key={index} className="item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
          />
          <span
            className={task.completed ? 'completed' : undefined}
          >
            {task.text}
          </span>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
