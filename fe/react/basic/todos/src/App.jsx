import {
  useState
} from 'react';
import TodoInput from "./component/Todoinput";
import TodoList from "./component/TodoList";
import TodoStats from "./component/TodoStats";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '吃饭',
      completed: false
    },
    {
      id: 2,
      text: '睡觉',
      completed: false
    },
    {
      id: 3,
      text: '打豆豆',
      completed: true
    }
  ])

  // 添加todo的方法 父组件管理 
  const addTodo = (text) => {
    if (text.trim() === '') return
    // 全新的状态
    setTodos([
      { id: + Date.now(), text, completed: false },
      ...todos
    ])
  }

  const toggleTodo = (id) => {
    // 全新的状态
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  const clearCompleted = () => {
    setTodos(
      todos.filter(todo => !todo.completed)
    )
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  return (
    <div>
      <h1>My Todo List</h1>
      {/* 自定义事件 */}
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <TodoStats
        total={todos.length}
        active={activeCount}
        completed={completedCount}
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App