import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const [sortedText, seSortedText] = useState('')

  const [widths, setWidths] = useState([0.5, 0.5])

  useEffect(() => {},)


  
  const addTodo = (title) => {
    let id = 1
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, title: title, status: 'waiting' }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const updateStatus = (todo) => {
    switch (todo.status) {
      case 'waiting':
        return { ...todo, status: 'progress' }
      case 'progress':
        return { ...todo, status: 'complete' }
      case 'complete':
        return { ...todo, status: 'waiting' }
    }
  }

  const changeWidth = (e) => {
    const left = document.querySelector('.todo-items')
    const leftWidth = getComputedStyle(left).width
    const right = document.querySelector('.todo-form')
    const rightWidth = getComputedStyle(right).width
    console.log(leftWidth)
    console.log(rightWidth)
    setWidths([0.4, 0.6])
  }

  const statusHandle = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo = updateStatus(todo)
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const sortedTodos = useMemo(() => {
    const newTodos = todos.filter(
      (item) =>
        item.title.toLowerCase().indexOf(sortedText.toLowerCase()) !== -1,
    )
    return newTodos
  }, [todos, sortedText])

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-container">
        <div
          className="todo-items"
          style={{ flex: widths[0], paddingLeft: 30, paddingRight: 30 }}
        >
          <input
            value={sortedText}
            onChange={(e) => seSortedText(e.target.value)}
            className="todo-input"
            placeholder="Поиск..."
          />
          {sortedTodos.map((todo) => {
            return (
              <TodoItem
                removeTodo={removeTodo}
                statusHandle={statusHandle}
                todo={todo}
                key={todo.id}
              />
            )
          })}
        </div>
        <div className="todo-border" onClick={changeWidth}></div>
        <TodoForm addTodo={addTodo} width={widths[1]} />
      </div>
    </div>
  )
}

export default App
