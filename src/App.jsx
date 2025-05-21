import { useState, useEffect } from 'react'
import TodoList from './TodoList.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const addTask = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setTasks([
      ...tasks,
      { id: Math.random().toString('36'), text: text.trim(), completed: false },
    ])
    setText('')
  }

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={addTask} className="form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      {loading ? (
        <div className="spinner" aria-label="loading" />
      ) : (
        <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
    </div>
  )
}

export default App
