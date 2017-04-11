import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem} from './TodoItem'
import {filterTodos} from '../../lib/todoHelpers'

export const TodoList = (props) => {
  const displayTodos = filterTodos(props.filter, props.todos)
  return (
    <div className="Todo-List">
      <ul>
        {displayTodos.map(todo => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove} />)}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
