import React from 'react'

const TodoItem = (props) => (
  <li>
    <span className='delete-item'><a href="#">X</a></span>
    <input type="checkbox" defaultChecked={props.isCompleted}/>
    {props.name}
  </li>
)

export const TodoList = (props) => (
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
)
