import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

export default function App() {
  const [tasks, setTasks] = useState([])

  function handleAdd(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  function handleToggle(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleReorder(result) {
    if (!result.destination) return
    const reordered = Array.from(tasks)
    const [moved] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, moved)
    setTasks(reordered)
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center mb-6">📝 待办清单</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} onReorder={handleReorder} />
      <TodoStats tasks={tasks} />
    </div>
  )
}
