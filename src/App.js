import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true))
          break
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break
        default:
          setFilteredTodos(todos)
          break
      }
    }
    filterHandler()
  }, [todos, status])
  //save to local storage
  
  return (
    <div className='App'>
      <header>My Todo list</header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}

export default App
