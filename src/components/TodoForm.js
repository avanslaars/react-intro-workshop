import React from 'react'

export const TodoForm = (props) => (
  <form onSubmit={props.submitHandler}>
    <input type="text" id="todoName"
      value={props.inputValue}
      onChange={props.changeHandler}/>
  </form>
)
