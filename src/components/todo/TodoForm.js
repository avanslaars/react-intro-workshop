import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
      id="todoName"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>)

  TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
