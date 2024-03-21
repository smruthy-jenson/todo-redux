import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const [text,setText] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state=>state.todos)

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false,
      }));
      setText('')
    }
  }

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id))
  }

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  }

  if (!todos) {
    return <div>Loading...</div>; // Handle case where todos is undefined
  }

  return (
    <>
      <div>
      <h1>Todo List App</h1>
      <input 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos. map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleToggleTodo(todo.id)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
