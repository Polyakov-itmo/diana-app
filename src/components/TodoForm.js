import React, { useState } from 'react'

export default function TodoForm(props) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title) {
      props.addTodo(title)
      setTitle('')
    } else {
      alert(`Введите название`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-form"
      style={{ flex: props.width }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
        placeholder="Название"
      />
      <button type="submit" className="todo-button">
        Добавить Todo
      </button>
    </form>
  )
}
