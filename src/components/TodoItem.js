import React from 'react'

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, statusHandle } = props
  return (
    <div
      className={todo.completed ? 'todo-row complete' : 'todo-row'}
      style={{
        backgroundColor:
          todo.status === 'waiting'
            ? 'gray'
            : todo.status === 'progress'
            ? 'blue'
            : 'green',
      }}
    >
      <h4
        style={{
          maxWidth: '400px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {todo.title}
      </h4>
      <div className="iconsContainer">
        <button onClick={() => statusHandle(todo.id)} className="click-btn">
          {todo.status === 'waiting'
            ? 'ожидание'
            : todo.status === 'progress'
            ? 'в процессе'
            : 'выполнена'}
        </button>
        <button onClick={() => removeTodo(todo.id)} className="click-btn">
          Удалить
        </button>
        {/*<RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>*/}
      </div>
    </div>
  )
}
